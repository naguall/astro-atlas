#!/usr/bin/env python3
"""
excel-to-messages.py
Lee el Excel moon-sync-2026-mensajes.xlsx y genera custom-messages.js
automaticamente con todos los mensajes que hayas escrito.

USO:
    python3 excel-to-messages.py

Eso es todo. El script busca el Excel en la misma carpeta,
lee las columnas de mensajes, y sobreescribe custom-messages.js.
"""
import os
import sys

try:
    import openpyxl
except ImportError:
    print("Instalando openpyxl...")
    os.system(sys.executable + " -m pip install openpyxl -q")
    import openpyxl

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
EXCEL_FILE = os.path.join(SCRIPT_DIR, "moon-sync-2026-mensajes.xlsx")
OUTPUT_FILE = os.path.join(SCRIPT_DIR, "custom-messages.js")

def main():
    if not os.path.exists(EXCEL_FILE):
        print(f"No se encontro: {EXCEL_FILE}")
        sys.exit(1)

    wb = openpyxl.load_workbook(EXCEL_FILE, data_only=True)
    ws = wb["Moon Sync 2026"]

    messages = {}
    total = 0

    for row in ws.iter_rows(min_row=2):
        # Column B (index 1) = fecha, columns L-T (index 11-19) = mensajes
        date_cell = row[1]  # Column B = fecha
        if not date_cell.value:
            continue

        date_val = str(date_cell.value).strip()
        # Handle both date objects and strings
        if hasattr(date_cell.value, 'strftime'):
            date_val = date_cell.value.strftime('%Y-%m-%d')
        elif len(date_val) == 10 and date_val[4] == '-':
            pass  # Already YYYY-MM-DD
        else:
            continue

        day_msgs = []

        # 3 message slots: (L,M,N), (O,P,Q), (R,S,T) = indices 11-19
        for slot in range(3):
            base = 11 + slot * 3
            msg_text = row[base].value if base < len(row) else None
            msg_time = row[base + 1].value if base + 1 < len(row) else None
            msg_title = row[base + 2].value if base + 2 < len(row) else None

            if msg_text and str(msg_text).strip():
                entry = {'message': str(msg_text).strip()}
                if msg_time and str(msg_time).strip():
                    time_str = str(msg_time).strip()
                    # Handle time objects
                    if hasattr(msg_time, 'strftime'):
                        time_str = msg_time.strftime('%H:%M')
                    entry['time'] = time_str
                if msg_title and str(msg_title).strip():
                    entry['title'] = str(msg_title).strip()
                day_msgs.append(entry)

        if day_msgs:
            if len(day_msgs) == 1:
                messages[date_val] = day_msgs[0]
            else:
                messages[date_val] = day_msgs
            total += len(day_msgs)

    # Generate custom-messages.js
    lines = []
    lines.append("// =============================================================")
    lines.append("// custom-messages.js — Generado automaticamente desde Excel")
    lines.append(f"// Ultima actualizacion: {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M')}")
    lines.append(f"// Total mensajes: {total}")
    lines.append("// =============================================================")
    lines.append("")
    lines.append("window.CUSTOM_MESSAGES = {")

    sorted_dates = sorted(messages.keys())
    current_month = ""

    for i, date_key in enumerate(sorted_dates):
        month = date_key[:7]  # YYYY-MM
        if month != current_month:
            current_month = month
            month_names = {
                '01': 'ENERO', '02': 'FEBRERO', '03': 'MARZO',
                '04': 'ABRIL', '05': 'MAYO', '06': 'JUNIO',
                '07': 'JULIO', '08': 'AGOSTO', '09': 'SEPTIEMBRE',
                '10': 'OCTUBRE', '11': 'NOVIEMBRE', '12': 'DICIEMBRE'
            }
            m_name = month_names.get(month[5:], month)
            lines.append(f"    // === {m_name} ===")

        entry = messages[date_key]
        comma = "," if i < len(sorted_dates) - 1 else ""

        if isinstance(entry, list):
            lines.append(f"    '{date_key}': [")
            for j, m in enumerate(entry):
                parts = []
                parts.append(f"message: '{_escape(m['message'])}'")
                if 'title' in m:
                    parts.append(f"title: '{_escape(m['title'])}'")
                if 'time' in m:
                    parts.append(f"time: '{m['time']}'")
                inner_comma = "," if j < len(entry) - 1 else ""
                lines.append(f"        {{ {', '.join(parts)} }}{inner_comma}")
            lines.append(f"    ]{comma}")
        else:
            parts = []
            parts.append(f"message: '{_escape(entry['message'])}'")
            if 'title' in entry:
                parts.append(f"title: '{_escape(entry['title'])}'")
            if 'time' in entry:
                parts.append(f"time: '{entry['time']}'")
            lines.append(f"    '{date_key}': {{ {', '.join(parts)} }}{comma}")

    lines.append("};")
    lines.append("")
    lines.append("console.log('custom-messages.js cargado —', Object.keys(window.CUSTOM_MESSAGES).length, 'mensajes programados');")

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines) + '\n')

    print(f"Listo! {total} mensaje(s) en {len(messages)} dia(s) exportados a custom-messages.js")

def _escape(text):
    return text.replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ")

if __name__ == '__main__':
    main()
