// Knowledge Graph Part 3: Modules M13-M18
(function() {
  if (!window.ASTRO_KNOWLEDGE_GRAPH) { console.error('Load knowledge-graph.js first'); return; }
  const G = window.ASTRO_KNOWLEDGE_GRAPH;

  Object.assign(G.nodes, {
    // MODULE 13: Astrología Médica
    M13_correspondencias: {
      id: 'M13_correspondencias',
      moduleId: 'M13',
      title: 'Correspondencias Zodiacales-Cuerpo',
      titleEn: 'Zodiacal-Body Correspondences',
      level: 'intermedio',
      prerequisites: ['M2_signos_fuego_tierra', 'M2_signos_aire_agua'],
      content: {
        summary: 'Cada signo zodiacal gobierna partes específicas del cuerpo humano y sistemas corporales. Estas correspondencias permiten identificar vulnerabilidades físicas y áreas de salud potencial en la carta natal.',
        keyPoints: [
          'Aries: cabeza, órganos sensoriales, procesos mentales',
          'Tauro: garganta, cuello, voz, sistema endocrino',
          'Géminis: brazos, pulmones, sistema nervioso superior',
          'Cáncer: estómago, pechos, órganos digestivos',
          'Leo: corazón, espina dorsal, circulación',
          'Virgo: intestinos delgados, sistema nervioso, hígado',
          'Libra: riñones, glándulas suprarrenales, equilibrio',
          'Escorpio: órganos reproductivos, genitales, metabolismo',
          'Sagitario: caderas, muslos, hígado, arterias',
          'Capricornio: huesos, dientes, esqueleto, rodillas',
          'Acuario: tobillos, circulación sanguínea, sistema nervioso',
          'Piscis: pies, linfa, sistema inmunológico, sueño'
        ]
      },
      questions: [
        {
          q: '¿Qué sistemas corporales corresponden a Virgo?',
          options: ['Corazón y circulación', 'Intestinos delgados y sistema nervioso', 'Estómago y digestión', 'Riñones y glándulas'],
          correct: 1,
          explanation: 'Virgo, signo de tierra práctico y meticuloso, corresponde a los intestinos delgados (asimilación), el sistema nervioso (control) y el hígado (procesamiento).'
        },
        {
          q: '¿Cuál es la correspondencia corporal de Cáncer?',
          options: ['Garganta y voz', 'Estómago y pechos', 'Pulmones y respiración', 'Huesos y dientes'],
          correct: 1,
          explanation: 'Cáncer, signo cardinal de agua, rige el estómago (nutrición emocional), los pechos (maternidad) y el aparato digestivo (asimilación de experiencias).'
        },
        {
          q: '¿Qué signo gobierna los órganos reproductivos?',
          options: ['Libra', 'Escorpio', 'Sagitario', 'Capricornio'],
          correct: 1,
          explanation: 'Escorpio, signo de agua profundo e intenso, rige los órganos reproductivos, la transformación sexual y el metabolismo intenso.'
        },
        {
          q: '¿A qué sistemas corresponde Acuario?',
          options: ['Caderas y muslos', 'Tobillos y circulación', 'Pies y linfa', 'Corazón y arterias'],
          correct: 1,
          explanation: 'Acuario, signo de aire revolucionario, corresponde a los tobillos (libertad de movimiento) y la circulación sanguínea (distribución de energía).'
        },
        {
          q: '¿Cuál es la correspondencia principal de Tauro?',
          options: ['Brazos y pulmones', 'Garganta y cuello', 'Estómago y hígado', 'Riñones y equilibrio'],
          correct: 1,
          explanation: 'Tauro, signo de tierra sensorial, corresponde a la garganta y cuello (expresión) y al sistema endocrino (estabilidad hormonal).'
        },
        {
          q: '¿Qué signo gobierna el sistema esquelético?',
          options: ['Sagitario', 'Capricornio', 'Acuario', 'Piscis'],
          correct: 1,
          explanation: 'Capricornio, signo de tierra estructural, rige los huesos, dientes, esqueleto y estructura corporal (soporte y longevidad).'
        },
        {
          q: '¿A qué corresponde Leo en la carta astrológica?',
          options: ['Nervios y respiración', 'Corazón y circulación', 'Intestinos y metabolismo', 'Órganos reproductivos'],
          correct: 1,
          explanation: 'Leo, signo de fuego vital, corresponde al corazón (centro de energía), la espina dorsal (eje central) y la circulación (vitalidad).'
        },
        {
          q: '¿Cuál es la correspondencia de Piscis?',
          options: ['Tobillos solamente', 'Pies, linfa e inmunidad', 'Glándulas y hormonas', 'Órganos sensoriales'],
          correct: 1,
          explanation: 'Piscis, signo de agua última, corresponde a los pies (caminar en dos mundos), la linfa (conexión celular) e inmunidad (permeabilidad energética).'
        }
      ]
    },

    M13_indicadores: {
      id: 'M13_indicadores',
      moduleId: 'M13',
      title: 'Indicadores de Salud en la Carta',
      titleEn: 'Health Indicators in the Chart',
      level: 'avanzado',
      prerequisites: ['M13_correspondencias', 'M4_casas_7_12'],
      content: {
        summary: 'La Casa 6 indica salud cotidiana y enfermedad aguda; la Casa 12 representa enfermedades crónicas; la Casa 8 señala crisis y cirugía. El Sol muestra vitalidad general, la Luna emocionalidad corporal, y Saturno vulnerabilidades crónicas.',
        keyPoints: [
          'Casa 6: salud cotidiana, hábitos, enfermedad aguda, servicio al cuerpo',
          'Casa 8: crisis de salud, cirugía, transformación corporal, muerte',
          'Casa 12: enfermedad crónica, debilitamiento, internamiento, karmas corporales',
          'Sol: vitalidad general, energía vital, sistema cardiovascular, autoridad corporal',
          'Luna: cuerpo emocional, nutrición, estómago, ciclos corporales, inmunidad',
          'Saturno: debilidades crónicas, desgaste, fragilidad estructural, envejecimiento',
          'Marte: inflamación, accidentes, fiebre, sangrado, infecciones, energía bruta',
          'Aspectos Saturno-Marte: vulnerabilidad a accidentes y enfermedades crónicas',
          'Nodos lunares en Casa 6/12: lecciones de salud kármica'
        ]
      },
      questions: [
        {
          q: '¿Qué representa la Casa 6 en medicina astrológica?',
          options: ['Enfermedades crónicas', 'Salud cotidiana y enfermedad aguda', 'Crisis quirúrgica', 'Debilidad emocional'],
          correct: 1,
          explanation: 'La Casa 6 rige la salud diaria, hábitos corporales, enfermedad aguda (que se cura) y el servicio al propio cuerpo (higiene, ejercicio).'
        },
        {
          q: '¿Cuál es la función del Sol en salud?',
          options: ['Emociones y nutrición', 'Vitalidad general y energía', 'Debilidades crónicas', 'Accidentes y inflamación'],
          correct: 1,
          explanation: 'El Sol representa la vitalidad general, la energía vital disponible, el corazón y la circulación, y la salud como expresión de poder personal.'
        },
        {
          q: '¿Qué indica la Casa 12 astrológicamente?',
          options: ['Salud aguda', 'Enfermedades crónicas y debilitamiento', 'Accidentes', 'Nutrición física'],
          correct: 1,
          explanation: 'La Casa 12 indica enfermedad crónica, debilitamiento gradual, internamiento hospitalario y cargas kármicas corporales.'
        },
        {
          q: '¿Cuál es el rol de Marte en salud?',
          options: ['Debilidad ósea', 'Vitalidad general', 'Inflamación, fiebre y accidentes', 'Enfermedad crónica'],
          correct: 2,
          explanation: 'Marte rige la inflamación, la fiebre, los accidentes, el sangrado, las infecciones y la energía bruta del cuerpo.'
        },
        {
          q: '¿Qué representa Saturno en la salud corporal?',
          options: ['Energía vital', 'Inflamaciones agudas', 'Debilidades crónicas y desgaste', 'Emociones'],
          correct: 2,
          explanation: 'Saturno representa debilidades crónicas heredadas, desgaste estructural, fragilidad ósea, dientes débiles y envejecimiento prematuro.'
        },
        {
          q: '¿Cuál es la correspondencia de la Luna en medicina astrológica?',
          options: ['Sistema cardiovascular', 'Cuerpo emocional y estómago', 'Huesos y estructura', 'Sistema circulatorio arterial'],
          correct: 1,
          explanation: 'La Luna rige el cuerpo emocional, la nutrición y el estómago, los ciclos corporales (menstruales), la inmunidad y la retención de fluidos.'
        },
        {
          q: '¿Qué combina Saturno con Marte astrológicamente?',
          options: ['Buena salud', 'Vulnerabilidad a accidentes crónicos', 'Energía abundante', 'Salud emocional'],
          correct: 1,
          explanation: 'Saturno-Marte indica vulnerabilidad tanto a accidentes agudos (Marte) como a enfermedades crónicas (Saturno), con pocas defensas.'
        },
        {
          q: '¿Qué significan los Nodos lunares en Casa 6/12?',
          options: ['Buena salud asegurada', 'Lecciones de salud y enfermedad kármica', 'Sin conexión a salud', 'Accidentes inevitables'],
          correct: 1,
          explanation: 'Los Nodos en Casa 6/12 indican que la salud (o la enfermedad) es una lección kármica importante en esta vida.'
        }
      ]
    },

    M13_planetas_salud: {
      id: 'M13_planetas_salud',
      moduleId: 'M13',
      title: 'Planetas y Funciones Corporales',
      titleEn: 'Planets and Bodily Functions',
      level: 'avanzado',
      prerequisites: ['M13_correspondencias', 'M3_transpersonales'],
      content: {
        summary: 'Cada planeta rige funciones corporales específicas. El Sol controla vitalidad y corazón; la Luna, nutrición y ciclos; Mercurio, nervios y respiración; Venus, riñones y piel; Marte, músculos y sangre; Júpiter, hígado y crecimiento; Saturno, huesos y dientes.',
        keyPoints: [
          'Sol: corazón, circulación, espina dorsal, autoridad vital',
          'Luna: estómago, digestión, senos, fluidos corporales, inmunidad',
          'Mercurio: sistema nervioso, respiración, brazos, coordinación',
          'Venus: riñones, glándulas suprarrenales, piel, equilibrio de fluidos',
          'Marte: músculos, sangre, energía, inflamación, sistema génito-urinario',
          'Júpiter: hígado, páncreas, crecimiento, regeneración, exceso',
          'Saturno: huesos, dientes, piel, estructura, envejecimiento',
          'Urano: sistema nervioso central, cambios bruscos, shock',
          'Neptuno: sistema linfonático, glándulas, confusión, infección crónica',
          'Plutón: transformación profunda, regeneración, metabolismo intenso, detoxificación'
        ]
      },
      questions: [
        {
          q: '¿Qué funciones corporales rige el Sol?',
          options: ['Estómago y nutrición', 'Corazón y circulación', 'Nervios y respiración', 'Riñones y piel'],
          correct: 1,
          explanation: 'El Sol rige el corazón (bomba vital), la circulación sanguínea, la espina dorsal (eje central) y la autoridad del sistema corporal.'
        },
        {
          q: '¿A qué funciones corresponde la Luna?',
          options: ['Músculos y sangre', 'Estómago, digestión y fluidos', 'Hígado y páncreas', 'Huesos y dientes'],
          correct: 1,
          explanation: 'La Luna rige el estómago y la digestión, los senos, los fluidos corporales (retención y eliminación) y la inmunidad.'
        },
        {
          q: '¿Cuál es la función de Mercurio en el cuerpo?',
          options: ['Circulación sanguínea', 'Sistema nervioso y respiración', 'Hígado y páncreas', 'Riñones y equilibrio'],
          correct: 1,
          explanation: 'Mercurio rige el sistema nervioso (pensamiento corporal), la respiración (intercambio), los brazos (comunicación manual) y la coordinación neuromuscular.'
        },
        {
          q: '¿Qué funciones rige Venus?',
          options: ['Músculos y sangre', 'Riñones y piel', 'Huesos y dientes', 'Corazón y circulación'],
          correct: 1,
          explanation: 'Venus rige los riñones (filtración emocional), las glándulas suprarrenales (respuesta al estrés), la piel (límite) y el equilibrio de fluidos corporales.'
        },
        {
          q: '¿Cuáles son las funciones de Marte?',
          options: ['Nutrición y digestión', 'Músculos, sangre e inflamación', 'Hígado y regeneración', 'Sistema linfático'],
          correct: 1,
          explanation: 'Marte rige los músculos (contracción), la sangre (energía roja), la inflamación (respuesta agresiva), y el sistema génito-urinario (sexualidad y eliminación).'
        },
        {
          q: '¿Qué funciones corporales corresponden a Júpiter?',
          options: ['Nervios y coordinación', 'Hígado, páncreas y crecimiento', 'Riñones y equilibrio', 'Huesos y estructura'],
          correct: 1,
          explanation: 'Júpiter rige el hígado (desintoxicación), el páncreas (regulación de azúcar), el crecimiento (expansión) y la regeneración (optimismo curativo).'
        },
        {
          q: '¿Cuáles son las funciones de Saturno?',
          options: ['Nutrición y estómago', 'Huesos, dientes y estructura', 'Músculos y sangre', 'Corazón y circulación'],
          correct: 1,
          explanation: 'Saturno rige los huesos (solidez), los dientes (erosión), la piel (líneas), la estructura esquelética y el envejecimiento del sistema.'
        },
        {
          q: '¿Qué función tiene Plutón en salud?',
          options: ['Crecimiento simple', 'Transformación profunda y regeneración', 'Estabilidad ósea', 'Nutrición básica'],
          correct: 1,
          explanation: 'Plutón rige la transformación profunda celular, la regeneración a nivel molecular, el metabolismo intenso y la detoxificación del sistema.'
        }
      ]
    },

    M13_diagnostico: {
      id: 'M13_diagnostico',
      moduleId: 'M13',
      title: 'Diagnóstico Astrológico Complementario',
      titleEn: 'Complementary Astrological Diagnosis',
      level: 'profesional',
      prerequisites: ['M13_indicadores', 'M8_transitos_lentos'],
      content: {
        summary: 'El diagnóstico astrológico utiliza puntos medios, análisis de decanatos, tránsitos lentos y progresiones para entender timing de salud. Nunca reemplaza diagnóstico médico sino complementa comprensión holística.',
        keyPoints: [
          'Puntos medios: Sol/Saturno = vulnerabilidad crónica; Marte/Saturno = accidentes-enfermedad',
          'Decanatos: subdividen signos en 3 partes, dando énfasis corporal específico',
          'Tránsitos lentos: Saturno, Urano, Neptuno, Plutón como timing de episodios de salud',
          'Progresiones: progresión lunar como ciclos emocionales que afectan inmunidad',
          'Arco solar: año-por-año timing de cambios fisiológicos',
          'Casa 6 progresada: cambios en salud cotidiana y hábitos',
          'Retorno lunar: cada 27.3 días, ciclo de salud emocional',
          'Revoluciones solares: predicción anual de vitalidad y riesgos'
        ]
      },
      questions: [
        {
          q: '¿Qué indica el punto medio Sol/Saturno?',
          options: ['Buena salud', 'Vulnerabilidad crónica', 'Energía abundante', 'Salud mental fuerte'],
          correct: 1,
          explanation: 'Sol/Saturno indica vulnerabilidad a enfermedades crónicas, debilitamiento gradual y baja vitalidad sostenida.'
        },
        {
          q: '¿Qué señala Marte/Saturno astrológicamente?',
          options: ['Buena musculatura', 'Accidentes y enfermedad crónica', 'Salud robusta', 'Energía sin límites'],
          correct: 1,
          explanation: 'Marte/Saturno es la combinación más peligrosa: Marte (violencia, accidentes) + Saturno (debilidad) = vulnerabilidad a lesiones graves y enfermedades.',
        },
        {
          q: '¿Cómo funcionan los decanatos en diagnóstico?',
          options: ['No tienen función', 'Subdividen signos para énfasis corporal específico', 'Solo afectan personalidad', 'Determinan enfermedad inevitable'],
          correct: 1,
          explanation: 'Los decanatos (3 subdivisiones de 10 grados cada una) refinan el análisis, mostrando énfasis corporal más específico dentro de cada signo.'
        },
        {
          q: '¿Qué papel juegan los tránsitos lentos?',
          options: ['Sin importancia en salud', 'Timing de episodios de salud', 'Solo afectan emociones', 'Predicen suerte financiera'],
          correct: 1,
          explanation: 'Los tránsitos de Saturno, Urano, Neptuno y Plutón marcan timing de cambios de salud significativos en la vida.'
        },
        {
          q: '¿Qué muestra el arco solar?',
          options: ['Salud del año pasado', 'Timing año-por-año de cambios fisiológicos', 'Emociones diarias', 'Amigos nuevos'],
          correct: 1,
          explanation: 'El arco solar (progresión de 1 día = 1 año) muestra el timing fino de cambios corporales y de salud año por año.'
        },
        {
          q: '¿Cuál es la función de la progresión lunar?',
          options: ['Cambios de trabajo', 'Ciclos emocionales que afectan inmunidad', 'Viajes futuros', 'Relaciones solamente'],
          correct: 1,
          explanation: 'La progresión lunar (1 mes = 1 año) muestra ciclos emocionales que impactan directamente la inmunidad y la salud corporales.'
        },
        {
          q: '¿Qué período cubre el retorno lunar?',
          options: ['365 días', 'Cada 27.3 días, ciclo de salud emocional', 'Cada 12 años', 'Cada 84 años'],
          correct: 1,
          explanation: 'El retorno lunar ocurre cada 27.3 días cuando la Luna regresa a su posición natal, marcando ciclos mensuales de salud emocional.'
        },
        {
          q: '¿Cuál es la base ética del diagnóstico astrológico?',
          options: ['Reemplazar medicina', 'Ser el diagnóstico principal', 'Complementar, nunca reemplazar diagnóstico médico', 'Predecir enfermedad'],
          correct: 2,
          explanation: 'El diagnóstico astrológico complementa la medicina profesional, ofreciendo perspectiva holística pero nunca reemplazando diagnóstico médico certificado.'
        }
      ]
    },

    M13_etica_medica: {
      id: 'M13_etica_medica',
      moduleId: 'M13',
      title: 'Ética en Astrología Médica',
      titleEn: 'Ethics in Medical Astrology',
      level: 'profesional',
      prerequisites: ['M13_diagnostico'],
      content: {
        summary: 'La astrología médica tiene rol complementario solamente, nunca diagnóstico. El astrólogo no puede diagnosticar enfermedades, prescribir medicamentos o reemplazar atención médica profesional. Debe referir al cliente a profesionales de salud certificados.',
        keyPoints: [
          'Astrología NO diagnóstica: complementa pero no reemplaza medicina',
          'No prescribir: jamás indicar medicamentos o tratamientos específicos',
          'Referencia médica: siempre recomendar evaluación profesional',
          'Consentimiento informado: explicar limitaciones astrológicas claramente',
          'Confidencialidad: mantener privacidad de información de salud',
          'No crear miedo: evitar predicciones determinísticas de enfermedad',
          'Empoderamiento: ayudar cliente a tomar responsabilidad de su salud',
          'Formación continua: astrólogo debe conocer límites de su competencia'
        ]
      },
      questions: [
        {
          q: '¿Puede un astrólogo diagnosticar enfermedades?',
          options: ['Sí, es su especialidad', 'No, nunca puede diagnosticar', 'Solo si es médico también', 'En casos de emergencia'],
          correct: 1,
          explanation: 'El astrólogo NUNCA puede diagnosticar enfermedades. Esto requiere licencia médica y entrenamiento clínico certificado.'
        },
        {
          q: '¿Puede un astrólogo prescribir medicamentos?',
          options: ['Sí, basado en planetas', 'No, nunca puede prescribir', 'Solo remedios naturales', 'En consulta con médico'],
          correct: 1,
          explanation: 'El astrólogo no puede prescribir medicamentos de ningún tipo. Prescribir requiere licencia médica y responsabilidad legal.'
        },
        {
          q: '¿Cuál es el rol del astrólogo con información de salud?',
          options: ['Ignorarla', 'Diagnosticar la enfermedad', 'Complementar visión médica y referir a profesionales', 'Predecir el futuro médico'],
          correct: 2,
          explanation: 'El astrólogo complementa la comprensión del cliente sobre su salud desde perspectiva holística y siempre lo refiere a profesionales certificados.'
        },
        {
          q: '¿Qué debe hacer el astrólogo ante síntomas graves?',
          options: ['Ignorarlos', 'Analizar la carta', 'Referir inmediatamente a médico profesional', 'Asumir responsabilidad médica'],
          correct: 2,
          explanation: 'Ante síntomas graves o emergencia, el astrólogo debe referir inmediatamente al cliente a atención médica de emergencia profesional.'
        },
        {
          q: '¿Cuál es la importancia del consentimiento informado?',
          options: ['No es importante', 'Explicar claramente limitaciones astrológicas', 'Solo si el cliente pregunta', 'Innecesario si el astrólogo es experto'],
          correct: 1,
          explanation: 'El consentimiento informado requiere explicar claramente que la astrología es complementaria, no diagnóstica, y tiene limitaciones intrínsecas.'
        },
        {
          q: '¿Puede un astrólogo crear predicciones determinísticas de enfermedad?',
          options: ['Sí, para advertir al cliente', 'No, esto crea miedo injustificado', 'Solo en casos graves', 'Siempre, para prevención'],
          correct: 1,
          explanation: 'Predicciones determinísticas de enfermedad son éticamente prohibidas porque crean miedo, pueden autocompl cumplirse y violan libre albedrío.'
        },
        {
          q: '¿Qué debe mantener confidencial el astrólogo?',
          options: ['Solo información financiera', 'Información de salud y personal', 'Nada es confidencial', 'Solo si el cliente paga más'],
          correct: 1,
          explanation: 'La confidencialidad de información de salud es deber ético fundamental. El astrólogo debe mantener privacidad absoluta.'
        },
        {
          q: '¿Cuál es responsabilidad del astrólogo en su formación?',
          options: ['Ninguna', 'Conocer sus límites de competencia', 'Actuar como médico si tiene astrología avanzada', 'Ignorar el cambio de conocimiento'],
          correct: 1,
          explanation: 'El astrólogo tiene responsabilidad ética de conocer sus límites, formarse continuamente y no pretender competencia que no posee.'
        }
      ]
    },

    // MODULE 14: Astrología Kármica y Evolutiva
    M14_eje_nodal: {
      id: 'M14_eje_nodal',
      moduleId: 'M14',
      title: 'El Eje Nodal como Camino del Alma',
      titleEn: 'The Nodal Axis as the Soul\'s Path',
      level: 'intermedio',
      prerequisites: ['M3_nodos'],
      content: {
        summary: 'El Nodo Sur representa talentos, patrones y habilidades del pasado (vidas anteriores o primera mitad de vida). El Nodo Norte indica dirección de crecimiento y desarrollo evolutivo que el alma busca en esta encarnación.',
        keyPoints: [
          'Nodo Sur: dones naturales heredados, patrones cómodos, zona de seguridad espiritual',
          'Nodo Norte: crecimiento necesario, desafío evolutivo, nueva dirección',
          'Eje nodal como compass: mostrando el camino propósito de vida',
          'Nodo Sur NO debe ser abandonado: integrarlo con nuevo crecimiento',
          'Tránsitos del eje nodal cada 18.6 años: mayor claridad del propósito',
          'Casa nodal: contexto de vida donde se desarrolla el propósito',
          'Signo nodal: cualidad energética del crecimiento requerido',
          'Retrogrado nodal: introspección y refinamiento del camino interior'
        ]
      },
      questions: [
        {
          q: '¿Qué representa el Nodo Sur?',
          options: ['Futuro desconocido', 'Talentos heredados y patrones cómodos', 'Muerte inevitable', 'Sufrimiento presente'],
          correct: 1,
          explanation: 'El Nodo Sur representa dones naturales, habilidades heredadas (de vidas anteriores o primera mitad de vida) y patrones que son zona de confort espiritual.'
        },
        {
          q: '¿Qué indica el Nodo Norte?',
          options: ['Pasado distante', 'Dirección de crecimiento evolutivo', 'Pérdida inevitable', 'Carencia total'],
          correct: 1,
          explanation: 'El Nodo Norte señala la dirección de crecimiento que el alma busca desarrollar en esta encarnación, el nuevo territorio evolutivo.'
        },
        {
          q: '¿Cómo se relacionan los dos nodos?',
          options: ['Son independientes', 'Forman un eje que muestra el camino del propósito', 'Son opuestos sin conexión', 'Solo importa el Nodo Norte'],
          correct: 1,
          explanation: 'Los dos nodos forman un eje (180°) que juntos crean una brújula integral del propósito y dirección evolutiva del alma.'
        },
        {
          q: '¿Debe el alma abandonar el Nodo Sur?',
          options: ['Sí, completamente', 'No, debe integrarse con nuevo crecimiento', 'No es importante', 'Solo en emergencias'],
          correct: 1,
          explanation: 'El Nodo Sur no debe ser rechazado sino integrado: sus talentos apoyan el crecimiento del Nodo Norte.'
        },
        {
          q: '¿Cuál es el ciclo del eje nodal?',
          options: ['Anual', 'Cada 7 años', 'Cada 18.6 años de mayor claridad', 'Nunca cambia'],
          correct: 2,
          explanation: 'El eje nodal regresa a su posición natal cada 18.6 años (ciclo Saros), momento en el cual hay mayor claridad del propósito de vida.'
        },
        {
          q: '¿Qué es la "casa nodal"?',
          options: ['Edificio del nodo', 'Contexto de vida donde se desarrolla propósito', 'Casa donde nació', 'Casa 9 solamente'],
          correct: 1,
          explanation: 'La casa nodal es el contexto de vida (relaciones, carrera, espiritualidad, etc.) donde el alma desarrolla su propósito evolutivo.'
        },
        {
          q: '¿Qué añade el signo nodal?',
          options: ['Nada importante', 'La cualidad energética del crecimiento requerido', 'Solo la fecha de nacimiento', 'Determinismo inevitable'],
          correct: 1,
          explanation: 'El signo del Nodo Norte añade la cualidad energética específica que el alma necesita desarrollar (fogo, tierra, aire, agua).'
        },
        {
          q: '¿Qué significa retrogradación nodal?',
          options: ['Maleficio astrológico', 'Introspección y refinamiento del camino interior', 'Imposibilidad de crecimiento', 'Cambio de propósito'],
          correct: 1,
          explanation: 'Cuando el eje nodal está retrógrado, el crecimiento es más interno y profundo, requiriendo auto-observación refinada.'
        }
      ]
    },

    M14_regentes_nodos: {
      id: 'M14_regentes_nodos',
      moduleId: 'M14',
      title: 'Regentes de los Nodos',
      titleEn: 'Rulers of the Nodes',
      level: 'avanzado',
      prerequisites: ['M14_eje_nodal', 'M6_regencias'],
      content: {
        summary: 'El planeta regente del signo donde cae el Nodo Sur muestra cómo fue desarrollada la habilidad antigua. El regente del Nodo Norte muestra cómo se activará el crecimiento nuevo. Sus casas y aspectos refinan el análisis kármico.',
        keyPoints: [
          'Regente Nodo Sur: cómo se desarrolló el talento ancestral',
          'Regente Nodo Norte: cómo se activará el nuevo crecimiento',
          'Casa del regente NS: área de vida donde se expresa el don',
          'Casa del regente NN: área de vida donde crece el alma',
          'Aspectos del regente NN: facilitadores u obstáculos al crecimiento',
          'Dignidades de regentes: fuerte/débil en su manifestación',
          'Retrogradación del regente: introspección requerida en ese área',
          'Contactos con otros planetas: sinergias en la evolución'
        ]
      },
      questions: [
        {
          q: '¿Qué muestra el regente del Nodo Sur?',
          options: ['Cómo será el futuro', 'Cómo fue desarrollada la habilidad ancestral', 'Muerte inminente', 'Dinero futuro'],
          correct: 1,
          explanation: 'El regente del Nodo Sur indica cómo el talento ancestral fue desarrollado y cómo se sigue expresando naturalmente.'
        },
        {
          q: '¿Cuál es la función del regente del Nodo Norte?',
          options: ['Impedir el crecimiento', 'Activar y mostrar cómo se desarrollará el nuevo crecimiento', 'No tiene función', 'Solo asuntos pasados'],
          correct: 1,
          explanation: 'El regente del Nodo Norte es el activador: muestra específicamente cómo el alma iniciará y desarrollará el crecimiento nuevo.'
        },
        {
          q: '¿Qué significado tiene la casa del regente NN?',
          options: ['Donde no importa', 'Área de vida donde crece el alma evolutivamente', 'Casa donde muere', 'Casa vacía'],
          correct: 1,
          explanation: 'La casa del regente NN indica el área de vida (relaciones, carrera, espiritualidad, etc.) donde el crecimiento evolutivo es más urgente.'
        },
        {
          q: '¿Cómo afectan los aspectos del regente NN?',
          options: ['No afectan', 'Facilitan u obstaculizan el crecimiento', 'Solo traen dinero', 'Predicen muerte'],
          correct: 1,
          explanation: 'Los aspectos armónicos facilitan el crecimiento, mientras que los desafiantes requieren trabajo y consciencia para avanzar.'
        },
        {
          q: '¿Qué indica una regente NN retrógrada?',
          options: ['Imposibilidad total', 'Introspección y trabajo interno profundo requerido', 'Buena fortuna', 'Sin importancia'],
          correct: 1,
          explanation: 'Un regente NN retrógrado indica que el crecimiento requiere más introspección y trabajo psicológico profundo que acción externa.'
        },
        {
          q: '¿Cómo se usan las dignidades del regente?',
          options: ['No se usan', 'Fuerte/débil en su manifestación del crecimiento', 'Solo para dinero', 'Predeterminan todo'],
          correct: 1,
          explanation: 'Las dignidades (esencial y accidental) del regente NN muestran cuán fácilmente o difficultosamente se expresará el crecimiento kármico.'
        },
        {
          q: '¿Qué muestra la casa del regente NS?',
          options: ['Donde muere', 'Área de vida donde el don ancestral se expresa', 'Futuro lejano', 'Solo para ricos'],
          correct: 1,
          explanation: 'La casa del regente NS indica dónde el talento heredado aparece naturalmente en la vida (relaciones, carrera, creatividad, etc.).'
        },
        {
          q: '¿Qué son los contactos de regentes con otros planetas?',
          options: ['Irrelevantes', 'Sinergias que refinan la evolución nodal', 'Solo predicen accidentes', 'Mágica solamente'],
          correct: 1,
          explanation: 'Los contactos del regente NN con otros planetas muestran sinergias: qué energías cósmicas apoyan el crecimiento evolutivo.'
        }
      ]
    },

    M14_retrogrados_natal: {
      id: 'M14_retrogrados_natal',
      moduleId: 'M14',
      title: 'Planetas Retrógrados Natales',
      titleEn: 'Natal Retrograde Planets',
      level: 'intermedio',
      prerequisites: ['M3_personales', 'M1_astronomia'],
      content: {
        summary: 'Los planetas retrógrados natales funcionan con energía introspectiva, no expresada directamente. Mercurio retrógrado indica pensamiento revisado; Venus retrógrada, valores internalizados; Marte retrógrado, acción intrapsíquica. El potencial es igual pero el camino es interior.',
        keyPoints: [
          'Retrogrado = energía vuelta hacia adentro, no automatizada',
          'Mercurio Rx: revisión mental, aprendizaje profundo, comunicación intrapsíquica',
          'Venus Rx: valores internalizados, relaciones pasadas importantes, revaluación de amor',
          'Marte Rx: acción intrapsíquica, pasión contenida, tardanza en iniciativa externa',
          'Júpiter Rx: expansión interna, búsqueda espiritual, menos suerte externa',
          'Saturno Rx: karmas internalizados, trabajo espiritual profundo, madurez tardía',
          'Urano Rx: excentricidad interna, no encaja socialmente aunque no lo muestra',
          'Neptuno Rx: fantasía rica, creatividad introspectiva, desconexión de ilusiones'
        ]
      },
      questions: [
        {
          q: '¿Qué significa retrogradación en la carta natal?',
          options: ['Planeta débil', 'Energía vuelta hacia adentro, no expresada directamente', 'Mala suerte', 'Planeta destruido'],
          correct: 1,
          explanation: 'Un planeta retrógrado funciona con energía introspectiva, dirigida internamente, no automatizada o expresada externamente fácilmente.'
        },
        {
          q: '¿Cuál es la característica de Mercurio retrógrado?',
          options: ['Mudo', 'Pensamiento revisado y aprendizaje profundo', 'Buen comunicador', 'Sin inteligencia'],
          correct: 1,
          explanation: 'Mercurio Rx indica mente que revisa constantemente, aprende profundamente, pero puede tener dificultad en comunicación espontánea.'
        },
        {
          q: '¿Qué significa Venus retrógrada?',
          options: ['No puede amar', 'Valores internalizados, relaciones pasadas importantes', 'Hermosura perfecta', 'Dinero garantizado'],
          correct: 1,
          explanation: 'Venus Rx indica valores de amor y dinero internalizados, conexión emocional importante con relaciones pasadas, revaluación de qué ama.'
        },
        {
          q: '¿Cuál es la característica de Marte retrógrado?',
          options: ['Sin violencia', 'Acción intrapsíquica, pasión contenida, dificultad iniciando', 'Guerrero perfecto', 'Sin energía corporal'],
          correct: 1,
          explanation: 'Marte Rx funciona interiormente, la pasión y acción son intrapsíquicas, hay dificultad iniciando proyectos externos.'
        },
        {
          q: '¿Qué caracteriza a Júpiter retrógrado?',
          options: ['Suerte abundante', 'Expansión interna, búsqueda espiritual, menos suerte externa', 'Riqueza garantizada', 'Optimismo extremo'],
          correct: 1,
          explanation: 'Júpiter Rx indica expansión interna y espiritual profunda, pero menos beneficio externo automático; la suerte requiere esfuerzo interno.'
        },
        {
          q: '¿Cuál es el significado de Saturno retrógrado?',
          options: ['Sin limitaciones', 'Karmas internalizados, trabajo espiritual profundo', 'Éxito fácil', 'Inmadurez permanente'],
          correct: 1,
          explanation: 'Saturno Rx indica karmas internalizados que requieren trabajo profundo, madurez espiritual tardía, pero gran sabiduría interior eventual.'
        },
        {
          q: '¿Qué caracteriza a Urano retrógrado?',
          options: ['Conformista total', 'Excentricidad interna, no encaja socialmente aunque no lo muestra', 'Revolucionario obvio', 'Sin originalidad'],
          correct: 1,
          explanation: 'Urano Rx tiene excentricidad y originalidad interior profunda, pero no la expresa obviamente; puede sentirse alienado sin mostrarlo.'
        },
        {
          q: '¿Cuál es la característica de Neptuno retrógrado?',
          options: ['Sin imaginación', 'Fantasía rica, creatividad introspectiva, claridad interna', 'Engañador obvio', 'Realista extremo'],
          correct: 1,
          explanation: 'Neptuno Rx tiene mundo imaginativo muy rico, creatividad profunda, y puede ver con claridad interna las ilusiones que otros mantienen.'
        }
      ]
    },

    M14_casa12_karmica: {
      id: 'M14_casa12_karmica',
      moduleId: 'M14',
      title: 'La Casa 12 como Repositorio Kármico',
      titleEn: 'House 12 as Karmic Repository',
      level: 'avanzado',
      prerequisites: ['M4_casas_7_12', 'M14_eje_nodal'],
      content: {
        summary: 'La Casa 12 almacena memorias de almas, energías latentes, vidas pasadas. Planetas en H12 son poderes ocultos que el alma trae. Sol en H12 es héroe escondido; Saturno en H12, deuda kármica; Plutón en H12, poder transformador del alma.',
        keyPoints: [
          'Casa 12: almacén de memoria de almas, inconsciente colectivo',
          'Planetas en H12: poderes latentes, habilidades del alma no vistas',
          'Sol en H12: héroe escondido, autoridad espiritual no expresada',
          'Luna en H12: madre kármica, emociones colectivas canalizadas',
          'Mercurio en H12: sabiduría antigua, conocimiento tácito',
          'Venus en H12: amor kármico, soulmate escondido',
          'Marte en H12: guerrero espiritual, acción del alma en planos sutiles',
          'Saturno en H12: deuda kármica mayor, lección de renuncia',
          'Plutón en H12: transformación total del alma, regeneración psíquica'
        ]
      },
      questions: [
        {
          q: '¿Qué representa la Casa 12 en astrología?',
          options: ['Dinero futuro', 'Almacén de memoria de almas y energías latentes', 'Solo enemigos', 'Muerte segura'],
          correct: 1,
          explanation: 'La Casa 12 es el repositorio de memorias de almas, energías latentes, vidas pasadas, y conexión con inconsciente colectivo.'
        },
        {
          q: '¿Qué significan planetas en Casa 12?',
          options: ['Debilidad total', 'Poderes latentes del alma, habilidades no vistas externamente', 'Mala suerte', 'Sin importancia'],
          correct: 1,
          explanation: 'Los planetas en H12 representan poderes y habilidades que el alma trae, pero que no se expresan obviamente en el mundo externo.'
        },
        {
          q: '¿Qué indica Sol en Casa 12?',
          options: ['Personalidad débil', 'Héroe escondido, autoridad espiritual no expresada', 'Sin vitalidad', 'Muerte de la identidad'],
          correct: 1,
          explanation: 'Sol en H12 es el héroe que permanece escondido, con autoridad y poder espiritual que no se muestra públicamente.'
        },
        {
          q: '¿Cuál es la característica de Luna en Casa 12?',
          options: ['Sin emociones', 'Madre kármica, emociones colectivas canalizadas', 'Frío emocional', 'Solo alegría'],
          correct: 1,
          explanation: 'Luna en H12 indica conexión kármica con madre, capacidad de canalizar emociones colectivas y sensibilidad psíquica.'
        },
        {
          q: '¿Qué significa Saturno en Casa 12?',
          options: ['Buena suerte', 'Deuda kármica importante, lección de renuncia', 'Riqueza escondida', 'Facilidad total'],
          correct: 1,
          explanation: 'Saturno en H12 indica una deuda kármica importante, aislamiento, restricción espiritual, y necesidad de renuncia.'
        },
        {
          q: '¿Cuál es la función de Venus en Casa 12?',
          options: ['Sin amor', 'Amor kármico, soulmate escondido, amor sacrificial', 'Dinero fácil', 'Belleza exterior'],
          correct: 1,
          explanation: 'Venus en H12 indica amor kármico con una soulmate del pasado, amor secreto, o necesidad de amar sin condiciones.'
        },
        {
          q: '¿Qué caracteriza a Plutón en Casa 12?',
          options: ['Sin poder', 'Transformación total del alma, poder de regeneración psíquica', 'Poder físico', 'Dinero oculto'],
          correct: 1,
          explanation: 'Plutón en H12 es poder transformador del alma en planos sutiles, capacidad de regeneración psíquica y muerte-renacimiento del yo.'
        },
        {
          q: '¿Qué significa Mercurio en Casa 12?',
          options: ['Mudo', 'Sabiduría antigua, conocimiento tácito de vidas pasadas', 'Sin inteligencia', 'Tonto'],
          correct: 1,
          explanation: 'Mercurio en H12 canaliza sabiduría antigua, tiene acceso a conocimiento tácito de vidas pasadas, comunica con el inconsciente.'
        }
      ]
    },

    M14_evolutiva_green: {
      id: 'M14_evolutiva_green',
      moduleId: 'M14',
      title: 'Astrología Evolutiva (Jeff Green)',
      titleEn: 'Evolutionary Astrology (Jeff Green)',
      level: 'avanzado',
      prerequisites: ['M3_transpersonales', 'M14_eje_nodal'],
      content: {
        summary: 'La astrología evolutiva de Jeff Green propone que Plutón es el indicador del alma. Existen 4 estados evolutivos: consenso (masa), individuado (conciencia personal), espiritual (transpersonal), y dimetrico (total integración). El objetivo es la evolución del alma.',
        keyPoints: [
          'Plutón como símbolo del alma, no solo poder destructivo',
          'Estado consensual: alma en masa, limitación, conformidad',
          'Estado individuado: diferenciación personal, consciencia propia',
          'Estado espiritual: transascendencia, conexión transpersonal',
          'Estado dimétrico: integración total, maestría espiritual',
          'Ciclos de Plutón (248 años): propósito mayor de la humanidad',
          'Retorno de Plutón (edad 84): transformación de identidad total',
          'Progresión evolutiva a través de encarnaciones'
        ]
      },
      questions: [
        {
          q: '¿Cuál es el símbolo del alma en astrología evolutiva?',
          options: ['Luna', 'Sol', 'Plutón como indicador del alma', 'Saturno'],
          correct: 2,
          explanation: 'Plutón es el indicador principal del alma en astrología evolutiva, no solo poder destructivo sino propósito evolutivo.'
        },
        {
          q: '¿Qué es el estado consensual?',
          options: ['Individualidad máxima', 'Alma en masa, limitación, conformidad', 'Espiritualidad total', 'Poder político'],
          correct: 1,
          explanation: 'El estado consensual es donde el alma vive en la masa, sin diferenciación, conforma limitaciones y sigue patrones colectivos.'
        },
        {
          q: '¿Cuál es la característica del estado individuado?',
          options: ['Sin consciencia', 'Diferenciación personal, consciencia propia, poder individual', 'Pérdida de identidad', 'Masa colectiva'],
          correct: 1,
          explanation: 'El estado individuado es donde el alma toma consciencia de su poder personal, se diferencia y actúa desde su propia voluntad.'
        },
        {
          q: '¿Qué caracteriza al estado espiritual?',
          options: ['Irreligiosidad', 'Transcendencia, conexión transpersonal, sacrificio del ego', 'Poder material', 'Ignorancia espiritual'],
          correct: 1,
          explanation: 'El estado espiritual es la transcendencia de ego personal hacia conexión transpersonal, sacrificio voluntario del pequeño yo.'
        },
        {
          q: '¿Cuál es el estado dimétrico?',
          options: ['División total', 'Integración total, maestría espiritual, ego y alma fusionados', 'Conflicto permanente', 'Aislamiento extremo'],
          correct: 1,
          explanation: 'El estado dimétrico es la integración final: ego y alma en armonía total, maestría espiritual en todos los planos.'
        },
        {
          q: '¿Cuál es el ciclo mayor de Plutón?',
          options: ['12 años', '29.5 años', '248 años, propósito mayor de la humanidad', '84 años'],
          correct: 2,
          explanation: 'El ciclo de Plutón es 248 años, reflejando los propósitos mayores y transformaciones profundas de la humanidad entera.'
        },
        {
          q: '¿Qué edad ocurre el Retorno de Plutón?',
          options: ['29 años', '42 años', '84 años, transformación de identidad total', '60 años'],
          correct: 2,
          explanation: 'El Retorno de Plutón ocurre alrededor de los 84 años, marcando una transformación total de la identidad en la vejez.'
        },
        {
          q: '¿Cuál es el objetivo final en astrología evolutiva?',
          options: ['Dinero y poder', 'Evolución del alma a través de consciencia expandida', 'Evitar sufrimiento', 'Dominación social'],
          correct: 1,
          explanation: 'El objetivo es la evolución continua del alma hacia estados de consciencia más elevados, progresando a través de encarnaciones.'
        }
      ]
    },

    M14_integracion_karmica: {
      id: 'M14_integracion_karmica',
      moduleId: 'M14',
      title: 'Integración Kármica Completa',
      titleEn: 'Complete Karmic Integration',
      level: 'profesional',
      prerequisites: ['M14_regentes_nodos', 'M14_casa12_karmica', 'M14_evolutiva_green'],
      content: {
        summary: 'La integración kármica completa sintetiza el eje nodal, planetas retrógrados, Casa 12, Plutón y los 4 estados evolutivos para una lectura del alma completa. Es la perspectiva más profunda de la carta como expediente del alma.',
        keyPoints: [
          'Síntesis de Nodos + Retrogrados + H12 + Plutón = carta del alma',
          'Eje nodal como brújula evolutiva del alma',
          'Retrogrados como introspección kármica requerida',
          'Casa 12 como memoria y latencias del alma',
          'Plutón como propósito transformador del alma',
          'Estados evolutivos: dónde está el alma actualmente',
          'Progresión a nuevos estados como objetivo de vida',
          'Karmas pasados siendo resueltos en esta vida'
        ]
      },
      questions: [
        {
          q: '¿Qué síntesis representa la integración kármica completa?',
          options: ['Solo Nodos', 'Nodos + Retrogrados + H12 + Plutón = carta del alma', 'Solo Plutón', 'Ninguno importante'],
          correct: 1,
          explanation: 'La integración kármica es la síntesis de todos los elementos: Nodos (propósito), Retrogrados (introspección), H12 (memoria), Plutón (transformación).'
        },
        {
          q: '¿Cuál es la función del eje nodal en la síntesis?',
          options: ['Irrelevante', 'Brújula evolutiva del alma, dirección de crecimiento', 'Solo pasado', 'Solo dinero'],
          correct: 1,
          explanation: 'El eje nodal actúa como brújula, mostrando la dirección fundamental del crecimiento evolutivo en esta encarnación.'
        },
        {
          q: '¿Qué aportan los planetas retrógrados?',
          options: ['Debilidad total', 'Introspección kármica requerida, trabajo psicológico profundo', 'Poder exterior', 'Sin importancia'],
          correct: 1,
          explanation: 'Los retrogrados muestran dónde se requiere introspección profunda y trabajo psicológico para resolver karmas interiores.'
        },
        {
          q: '¿Cuál es la función de la Casa 12 en integración?',
          options: ['Ninguna', 'Memoria del alma y latencias, poderes ocultos', 'Solo enemigos', 'Dinero escondido'],
          correct: 1,
          explanation: 'La Casa 12 revela la memoria y latencias del alma: poderes ocultos traídos del pasado kármico.'
        },
        {
          q: '¿Qué representa Plutón en la síntesis?',
          options: ['Solo destrucción', 'Propósito transformador del alma, evolución fundamental', 'Poder militar', 'Sin valor'],
          correct: 1,
          explanation: 'Plutón es el propósito transformador del alma: muestra hacia dónde se necesita regenerarse y evolucionar profundamente.'
        },
        {
          q: '¿Qué información dan los estados evolutivos?',
          options: ['Dinero futuro', 'Dónde está el alma actualmente en su evolución', 'Matrimonio perfecto', 'Caos total'],
          correct: 1,
          explanation: 'Los 4 estados evolutivos diagnostican el nivel actual del alma (consensual, individuado, espiritual, dimétrico) y muestran la progresión necesaria.'
        },
        {
          q: '¿Cuál es el objetivo de la lectura kármica completa?',
          options: ['Predecir dinero', 'Entender el alma completa y su propósito evolutivo', 'Saber el futuro', 'Evitar sufrimiento'],
          correct: 1,
          explanation: 'El objetivo es entender la carta como el expediente completo del alma: su pasado kármico, presente y dirección evolutiva futura.'
        },
        {
          q: '¿Qué karmas se pueden resolver en esta vida?',
          options: ['Ninguno', 'Los karmas pasados indicados por Nodos y H12', 'Todos inmediatamente', 'Solo el dinero'],
          correct: 1,
          explanation: 'Los karmas indicados por el eje nodal, retrogrados y Casa 12 son exactamente los que el alma vino a resolver en esta encarnación.'
        }
      ]
    },

    // MODULE 15: Técnicas Avanzadas
    M15_puntos_medios: {
      id: 'M15_puntos_medios',
      moduleId: 'M15',
      title: 'Puntos Medios (Midpoints)',
      titleEn: 'Midpoints',
      level: 'avanzado',
      prerequisites: ['M7_jerarquia'],
      content: {
        summary: 'Los puntos medios (midpoints) son grados centrales entre dos planetas. La Escuela de Hamburgo (Alfred Witte) desarrolló esta técnica. El punto medio Sol/Luna integra ser y sentir. Los árboles de midpoints revelan sinergia planetaria profunda.',
        keyPoints: [
          'Midpoint = grado central entre dos planetas (suma ÷ 2)',
          'Escuela de Hamburgo (Alfred Witte): sistema de midpoints',
          'Midpoint Sol/Luna: integración de ser y sentir, autoridad emocional',
          'Midpoints personales: dinámicas interiores de la psique',
          'Midpoints planetarios: sinergia entre funciones cósmicas',
          'Aspectos a midpoints: terceros planetas activando la sinergia',
          'Tránsitos sobre midpoints: timing de cambios sincretizados',
          'Árboles de midpoints: mapas complejos de relación interna'
        ]
      },
      questions: [
        {
          q: '¿Qué es un punto medio astrológico?',
          options: ['Un signo zodiacal', 'Grado central entre dos planetas', 'Una casa astrológica', 'Un planeta ficticio'],
          correct: 1,
          explanation: 'Un punto medio es el grado exactamente al medio entre dos planetas (suma ÷ 2), revelando su sinergia integrada.'
        },
        {
          q: '¿Quién desarrolló la técnica de midpoints?',
          options: ['Carl Jung', 'Alfred Witte (Escuela de Hamburgo)', 'Johannes Kepler', 'Nicolás Copérnico'],
          correct: 1,
          explanation: 'Alfred Witte y la Escuela de Hamburgo desarrollaron sistemáticamente la técnica de puntos medios en astrología.'
        },
        {
          q: '¿Qué significa el midpoint Sol/Luna?',
          options: ['Enemigos internos', 'Integración de ser y sentir, autoridad emocional', 'Dinero futuro', 'Sin importancia'],
          correct: 1,
          explanation: 'Sol/Luna midpoint es la integración de la identidad (Sol) y la emocionalidad (Luna), creando autoridad emocional del ser.'
        },
        {
          q: '¿Cuál es la función de los midpoints personales?',
          options: ['Dinero', 'Revelar dinámicas interiores de la psique', 'Predecir muerte', 'Sin valor'],
          correct: 1,
          explanation: 'Los midpoints personales revelan las dinámicas interiores de cómo los 3 planetas personales interactúan psicológicamente.'
        },
        {
          q: '¿Qué indican los aspectos a midpoints?',
          options: ['Nada importante', 'Terceros planetas activando la sinergia del midpoint', 'Solo dinero', 'Accidentes'],
          correct: 1,
          explanation: 'Cuando un tercer planeta aspecta un midpoint, activa y modifica la sinergia entre los dos planetas del midpoint.'
        },
        {
          q: '¿Cómo se usan los tránsitos en midpoints?',
          options: ['No se usan', 'Timing de cambios sincretizados, tránsitos activando sinergia', 'Solo para dinero', 'Predicen muerte'],
          correct: 1,
          explanation: 'Los tránsitos sobre midpoints marcan momentos cuando la sinergia de esos dos planetas se activa de forma sincretizada.'
        },
        {
          q: '¿Qué es un "árbol de midpoints"?',
          options: ['Un árbol real', 'Mapa complejo de relaciones internas entre múltiples puntos medios', 'Un símbolo', 'Sin importancia'],
          correct: 1,
          explanation: 'Un árbol de midpoints es un diagrama que muestra cómo múltiples midpoints interactúan, revelando sinergia planetaria profunda.'
        },
        {
          q: '¿Qué aporta la técnica de midpoints?',
          options: ['Complejidad innecesaria', 'Profundidad psicológica refinada y timing específico', 'Dinero garantizado', 'Predicción exacta'],
          correct: 1,
          explanation: 'Los midpoints aportan profundidad psicológica refinada y timing más específico que aspectos tradicionales.'
        }
      ]
    },

    M15_armonicos: {
      id: 'M15_armonicos',
      moduleId: 'M15',
      title: 'Armónicos',
      titleEn: 'Harmonic Charts',
      level: 'avanzado',
      prerequisites: ['M15_puntos_medios'],
      content: {
        summary: 'Los armónicos multiplican las posiciones planetarias por N (armónico quinto: x5; séptimo: x7; noveno/Navamsa: x9). Cada armónico revela dimensión diferente de la psique. El 5to muestra creatividad; el 7mo, inspiración; el 9no, alma y matrimonio.',
        keyPoints: [
          '5to Armónico (x5): creatividad, autoexpresión, talento artístico',
          '7mo Armónico (x7): inspiración, conexión espiritual, relaciones profundas',
          '9no Armónico / Navamsa (x9): alma, matrimonio, propósito espiritual',
          '12mo Armónico (x12): teselas cósmicas, karma y destino',
          'Divisional charts: subdivisiones del zodíaco revelando capas de realidad',
          'Interpretación multiarmónica: sincretización de múltiples dimensiones',
          'Armónicos personales (1-10) vs transpersonales (11-30)',
          'Activación armónica: tránsitos en charts armónicos'
        ]
      },
      questions: [
        {
          q: '¿Qué significa multiplicar por 5 en armónicos?',
          options: ['Debilidad', '5to Armónico: creatividad y autoexpresión', 'Dinero', 'Sin importancia'],
          correct: 1,
          explanation: 'El 5to Armónico (multiplicar cada posición x5) revela la creatividad, talento artístico y capacidad de autoexpresión personal.'
        },
        {
          q: '¿Cuál es el significado del 7mo Armónico?',
          options: ['Conflicto', 'Inspiración, conexión espiritual, relaciones profundas', 'Dinero fácil', 'Debilidad total'],
          correct: 1,
          explanation: 'El 7mo Armónico revela inspiración cósmica, conexión espiritual profunda y capacidad para relaciones transformadoras.'
        },
        {
          q: '¿Qué es el 9no Armónico o Navamsa?',
          options: ['Carta falsa', 'Alma, matrimonio y propósito espiritual', 'Dinero futuro', 'Sin validez'],
          correct: 1,
          explanation: 'El Navamsa (9no Armónico) es la carta más importante después de la natal: revela el alma, capacidad matrimonial y propósito espiritual.'
        },
        {
          q: '¿Qué son los "divisional charts"?',
          options: ['Cartas falsas', 'Subdivisiones del zodíaco revelando capas de realidad', 'Solo entretenimiento', 'Sin valor'],
          correct: 1,
          explanation: 'Los divisional charts (o armónicos) son subdivisiones matemáticas del zodíaco que revelan capas más profundas de realidad.'
        },
        {
          q: '¿Qué significa sincretización multiarmónica?',
          options: ['Confusión', 'Integración de múltiples dimensiones armónicas en lectura completa', 'Error astrológico', 'Sin importancia'],
          correct: 1,
          explanation: 'La sincretización multiarmónica integra información de múltiples cartas armónicas para una comprensión más completa y profunda.'
        },
        {
          q: '¿Qué indican tránsitos en charts armónicos?',
          options: ['Nada', 'Activación de creatividad o inspiración en esos niveles', 'Predicción exacta', 'Sin importancia'],
          correct: 1,
          explanation: 'Los tránsitos en charts armónicos activan creatividad (5to), inspiración (7mo) o transformación espiritual (9no).'
        },
        {
          q: '¿Cuál es la diferencia entre armónicos personales y transpersonales?',
          options: ['No hay diferencia', 'Personales (1-10): psique, Transpersonales (11-30): colectivo-espiritual', 'Solo nombres', 'Sin significado'],
          correct: 1,
          explanation: 'Armónicos personales (1-10) revelan dimensiones de la psique individual; transpersonales (11-30), fuerzas colectivas y espirituales.'
        },
        {
          q: '¿Qué revela el 12mo Armónico?',
          options: ['Dinero', 'Teselas cósmicas, karma y destino', 'Amor perfecto', 'Nada importante'],
          correct: 1,
          explanation: 'El 12mo Armónico revela el karma complejo, las teselas cósmicas del destino y las lecciones de vida más profundas.'
        }
      ]
    },

    M15_astrocartografia: {
      id: 'M15_astrocartografia',
      moduleId: 'M15',
      title: 'Astrocartografía',
      titleEn: 'Astrocartography',
      level: 'avanzado',
      prerequisites: ['M4_angulos', 'M8_transitos_lentos'],
      content: {
        summary: 'La astrocartografía proyecta los ángulos planetarios sobre el mapa mundial, creando líneas de poder. Cada planeta tiene línea AC (ascendente), DC (descendente), MC (medio cielo) e IC (fondo cielo). Las líneas muestran dónde la influencia planetaria es más fuerte para vivir, trabajar o amar.',
        keyPoints: [
          'Línea AC (ascendente): planeta en ángulo ascendente, identidad y comienzo',
          'Línea DC (descendente): planeta en descendente, relaciones y asociaciones',
          'Línea MC (medio cielo): planeta en medio cielo, carrera y autoridad pública',
          'Línea IC (fondo cielo): planeta en IC, hogar, familia, raíces',
          'Paran crosses: intersecciones de líneas múltiples (power points geográficos)',
          'Interpretación planetaria en geografía: Marte=energía, Venus=armonía, Saturno=disciplina',
          'Viajes y relocación: eleción de mejores lugares para vida y propósitos',
          'Retorno de Saturno en geografía: cambio de línea para nueva fase'
        ]
      },
      questions: [
        {
          q: '¿Qué muestra la astrocartografía?',
          options: ['Dinero futuro', 'Líneas planetarias en mapa mundial mostrando influencia geográfica', 'Astrología falsa', 'Sin valor'],
          correct: 1,
          explanation: 'La astrocartografía proyecta los ángulos planetarios sobre el mapa mundial, creando líneas donde cada planeta ejerce mayor influencia.'
        },
        {
          q: '¿Qué indica la línea AC (ascendente)?',
          options: ['Dinero', 'Identidad y comienzo planetario, lugar para empezar', 'Relaciones', 'Carrera'],
          correct: 1,
          explanation: 'La línea AC muestra dónde el planeta está en ángulo ascendente, fortaleciendo identidad y energía personal para empezar.'
        },
        {
          q: '¿A qué corresponde la línea DC?',
          options: ['Carrera', 'Relaciones y asociaciones, donde encontrarse con socios', 'Dinero', 'Hogar'],
          correct: 1,
          explanation: 'La línea DC (descendente) es donde el planeta favorece relaciones, asociaciones y encuentros significativos con otros.'
        },
        {
          q: '¿Qué muestra la línea MC?',
          options: ['Hogar', 'Carrera y autoridad pública, visibilidad profesional', 'Relaciones amorosas', 'Creatividad'],
          correct: 1,
          explanation: 'La línea MC (medio cielo) muestra dónde la carrera, autoridad pública y reconocimiento profesional florecen.'
        },
        {
          q: '¿Cuál es la función de la línea IC?',
          options: ['Carrera pública', 'Hogar, familia y raíces, radicarse y sanar', 'Relaciones', 'Dinero'],
          correct: 1,
          explanation: 'La línea IC (fondo cielo) es donde el hogar, la familia y raíces florecen; lugar para sanar y radicar.'
        },
        {
          q: '¿Qué son los "paran crosses"?',
          options: ['Conflictos', 'Intersecciones de líneas múltiples, power points geográficos', 'Dinero', 'Sin importancia'],
          correct: 1,
          explanation: 'Los paran crosses son intersecciones de líneas de múltiples planetas, creando "power points" de máxima influencia astrológica.'
        },
        {
          q: '¿Cómo se usa astrocartografía en viajes?',
          options: ['No se usa', 'Elegir mejores lugares para vida, trabajo, amor según propósitos', 'Solo entretenimiento', 'Predecir dinero'],
          correct: 1,
          explanation: 'La astrocartografía guía elección de mejores lugares para vivir, trabajar, amar o desarrollar propósitos específicos.'
        },
        {
          q: '¿Qué significa cambiar línea en Retorno de Saturno?',
          options: ['Imposible', 'Nueva fase de vida mediante cambio de localización geográfica', 'Sin importancia', 'Mala idea'],
          correct: 1,
          explanation: 'En el Retorno de Saturno, cambiar a una nueva línea astrográfica puede facilitar la nueva fase de vida y aprendizaje.'
        }
      ]
    },

    M15_rectificacion: {
      id: 'M15_rectificacion',
      moduleId: 'M15',
      title: 'Rectificación de Hora de Nacimiento',
      titleEn: 'Birth Time Rectification',
      level: 'profesional',
      prerequisites: ['M8_progresiones', 'M8_arco_solar'],
      content: {
        summary: 'La rectificación determina la hora exacta de nacimiento cuando es desconocida o imprecisa. Se usan eventos de vida importantes (transitos, progresiones, arco solar) para retroactivamente calcular el Ascendente correcto. Requiere paciencia y múltiples eventos verificables.',
        keyPoints: [
          'Eventos de vida como marcadores: bodas, nacimientos, cambios, crisis',
          'Tránsitos al Ascendente: cambios de vida importantes',
          'Progresiones lunares: cambios emocionales y de etapa',
          'Arco solar: cambios año-por-año en ángulos y cúspides',
          'Método de marcha atrás: conocer evento, usar trigonometría astrológica',
          'Casas Placidus vs Koch: diferentes sistemas requieren diferentes cálculos',
          'Múltiples eventos para verificación cruzada: mayor precisión',
          'Margen de error: ±15 minutos considerado excelente'
        ]
      },
      questions: [
        {
          q: '¿Cuál es el propósito de la rectificación?',
          options: ['Adivinar el futuro', 'Determinar hora exacta de nacimiento mediante eventos de vida', 'Cambiar la hora', 'Sin importancia'],
          correct: 1,
          explanation: 'La rectificación usa eventos de vida importantes para retroactivamente determinar la hora exacta de nacimiento desconocida.'
        },
        {
          q: '¿Qué eventos se usan como marcadores?',
          options: ['Dinero', 'Bodas, nacimientos, cambios, crisis verificables', 'Solo predeterminado', 'Nada importante'],
          correct: 1,
          explanation: 'Se usan eventos importantes de vida (bodas, hijos, mudanzas, muertes, cambios de carrera) como marcadores para calcular.'
        },
        {
          q: '¿Cómo ayudan los tránsitos en rectificación?',
          options: ['No ayudan', 'Tránsitos al Ascendente marcan cambios de vida verificables', 'Predicen dinero', 'Innecesarios'],
          correct: 1,
          explanation: 'Los tránsitos (especialmente lentos) al Ascendente coinciden con cambios significativos de vida, confirmando la hora.'
        },
        {
          q: '¿Qué función tienen las progresiones?',
          options: ['Ninguna', 'Progresiones lunares marcan etapas emocionales, cambios de vida', 'Solo entretenimiento', 'Falso'],
          correct: 1,
          explanation: 'Las progresiones lunares marcan transiciones emocionales y de etapa de vida, ayudando a verificar la hora exacta.'
        },
        {
          q: '¿Cómo funciona el arco solar en rectificación?',
          options: ['No funciona', 'Arco solar año-por-año confirma cambios de cúspides y ángulos', 'Falso método', 'Innecesario'],
          correct: 1,
          explanation: 'El arco solar avanza 1 año por cada 1 día: permite ver cambios de casas y ángulos sincronizados con eventos.'
        },
        {
          q: '¿Qué es el "método de marcha atrás"?',
          options: ['Imposible', 'Conocer evento, usar trigonometría para calcular hora retroactivamente', 'Sin sentido', 'Falso'],
          correct: 1,
          explanation: 'Conociendo la fecha exacta del evento y su significado astrológico, se calcula matemáticamente la hora de nacimiento.'
        },
        {
          q: '¿Por qué importan los sistemas de casas?',
          options: ['No importan', 'Placidus vs Koch dan resultados diferentes que requieren cálculos diferentes', 'Son iguales', 'Irrelevante'],
          correct: 1,
          explanation: 'Diferentes sistemas de casas (Placidus, Koch, Regiomontanus) dan posiciones diferentes, requiriendo cálculos específicos.'
        },
        {
          q: '¿Cuál es el margen aceptable de error?',
          options: ['±1 hora', '±15 minutos es excelente', '±1 minuto necesario', 'Sin importancia'],
          correct: 1,
          explanation: 'Un margen de error de ±15 minutos se considera excelente en rectificación; la precisión total es rara.'
        }
      ]
    },

    M15_draconica: {
      id: 'M15_draconica',
      moduleId: 'M15',
      title: 'Astrología Dracónica',
      titleEn: 'Draconic Astrology',
      level: 'profesional',
      prerequisites: ['M14_eje_nodal', 'M15_armonicos'],
      content: {
        summary: 'La astrología dracónica recalcula la carta natal colocando el Nodo Norte a 0° Aries. Es la "carta del alma": muestra el yo verdadero, la identidad del alma sin influencias kármicas. La comparación dracónica-natal revela integración necesaria.',
        keyPoints: [
          'Reposicionamiento: Nodo Norte a 0° Aries como referencia',
          'Carta dracónica como carta del alma: yo verdadero, esencia',
          'Comparación Draconics vs Natal: mostrar integración necesaria',
          'Aspectos dracónicos: dinámicas interiores del alma',
          'Casas dracónicas: contextos del alma, no contextos sociales',
          'Tránsitos a carta dracónica: evolución del yo esencial',
          'Progresiones dracónicas: crecimiento del alma',
          'Síntesis dragónica-natal: destino vs alma, camino de integración'
        ]
      },
      questions: [
        {
          q: '¿Qué es la astrología dracónica?',
          options: ['Astrología falsa', 'Carta del alma: Nodo Norte a 0° Aries', 'Magia negra', 'Sin validez'],
          correct: 1,
          explanation: 'La astrología dracónica recalcula la carta con Nodo Norte a 0° Aries, revelando la carta del alma verdadera.'
        },
        {
          q: '¿Cuál es la función de la carta dracónica?',
          options: ['Predecir dinero', 'Mostrar yo verdadero, identidad del alma sin influencias kármicas', 'Falsa', 'Sin propósito'],
          correct: 1,
          explanation: 'La carta dracónica revela el yo verdadero del alma, su esencia sin las influencias y karmas de la vida actual.'
        },
        {
          q: '¿Cómo se usa la comparación dracónica-natal?',
          options: ['No se usa', 'Mostrar integración necesaria entre alma y destino', 'Reemplazar natal', 'Ignorar natal'],
          correct: 1,
          explanation: 'La comparación revela cómo el alma (dracónica) puede integrarse con el destino (natal) en esta vida.'
        },
        {
          q: '¿Qué muestran los aspectos dracónicos?',
          options: ['Dinero', 'Dinámicas interiores del alma, conflictos esenciales', 'Suerte', 'Nada'],
          correct: 1,
          explanation: 'Los aspectos en la carta dracónica revelan dinámicas interiores del alma: tensiones y armonías esenciales.'
        },
        {
          q: '¿Cómo difieren las casas dracónicas?',
          options: ['Son iguales', 'Contextos del alma, no contextos sociales o familiares', 'Más importantes', 'Menos importantes'],
          correct: 1,
          explanation: 'Las casas dracónicas representan contextos del alma (propósito, crecimiento), no contextos sociales (carrera, familia).'
        },
        {
          q: '¿Qué indican los tránsitos a carta dracónica?',
          options: ['Dinero', 'Evolución del yo esencial, transformación espiritual', 'Predicción exacta', 'Sin importancia'],
          correct: 1,
          explanation: 'Los tránsitos a la carta dracónica marcan evolución del alma, activando crecimiento y transformación espiritual.'
        },
        {
          q: '¿Cuál es la función de las progresiones dracónicas?',
          options: ['Dinero futuro', 'Crecimiento del alma a lo largo del tiempo', 'Sin sentido', 'Falso'],
          correct: 1,
          explanation: 'Las progresiones dracónicas muestran cómo el alma evoluciona y crece a través de los años de vida.'
        },
        {
          q: '¿Qué busca la síntesis dragónica-natal?',
          options: ['Reemplazar uno', 'Integrar destino y alma: camino de crecimiento completo', 'Ignorar dragónica', 'Confundir'],
          correct: 1,
          explanation: 'La síntesis busca mostrar cómo alma (dracónica) e destino (natal) pueden integrarse en camino de crecimiento completo.'
        }
      ]
    },

    M15_estrellas_fijas: {
      id: 'M15_estrellas_fijas',
      moduleId: 'M15',
      title: 'Estrellas Fijas',
      titleEn: 'Fixed Stars',
      level: 'avanzado',
      prerequisites: ['M1_astronomia', 'M5_conjuncion'],
      content: {
        summary: 'Las estrellas fijas ejercen influencia astrológica mediante conjunciones. Las 15 "Reales de Hermes" son las más poderosas: Algol (violencia/obsesión), Regulus (autoridad/honor), Spica (creatividad), Antares (coraje/transformación), Fomalhaut (realización). Cada estrella tiene naturaleza planetaria.',
        keyPoints: [
          'Estrellas fijas vs planetas: permanencia, influencia profunda',
          'Reales de Hermes: 15 estrellas más poderosas del zodiaco',
          'Algol (26°11 Tauro): violencia, obsesión, decapitación',
          'Regulus (29°50 Leo): autoridad, honor, caída de poder',
          'Spica (23°50 Libra): creatividad, éxito, bendición',
          'Antares (9°46 Sagitario): coraje, transformación, crisis',
          'Fomalhaut (3°52 Piscis): realización, éxito completo',
          'Naturaleza planetaria de estrellas: Sirio=Jupiter, Vega=Mercurio, Bellatrix=Marte'
        ]
      },
      questions: [
        {
          q: '¿Cómo funcionan las estrellas fijas en astrología?',
          options: ['No funcionan', 'Ejercen influencia mediante conjunciones, permanencia profunda', 'Solo decoración', 'Sin importancia'],
          correct: 1,
          explanation: 'Las estrellas fijas ejercen influencia astrológica principalmente mediante conjunciones con planetas, creando efectos permanentes.'
        },
        {
          q: '¿Cuál es la importancia de las "15 Reales de Hermes"?',
          options: ['Nombres falsos', 'Las 15 estrellas más poderosas del zodíaco', 'Sin importancia', 'Invención moderna'],
          correct: 1,
          explanation: 'Las 15 "Reales de Hermes" son las estrellas fijas más poderosas e influyentes en astrología tradicional.'
        },
        {
          q: '¿Qué significa Algol en la carta?',
          options: ['Buena suerte', 'Violencia, obsesión, decapitación simbólica', 'Dinero', 'Amor perfecto'],
          correct: 1,
          explanation: 'Algol (26°11 Tauro) es la estrella más peligrosa: violencia, obsesión, comportamiento destructivo.'
        },
        {
          q: '¿Qué indica Regulus?',
          options: ['Debilidad', 'Autoridad, honor, pero caída de poder eventual', 'Pobreza', 'Enfermedad'],
          correct: 1,
          explanation: 'Regulus (29°50 Leo) da autoridad y honor, pero con advertencia de caída eventual de poder (por exceso de orgullo).'
        },
        {
          q: '¿Cuál es la influencia de Spica?',
          options: ['Fracaso', 'Creatividad, éxito, bendición divina', 'Pobreza', 'Conflicto'],
          correct: 1,
          explanation: 'Spica (23°50 Libra) es la estrella beneficiosa: aporta creatividad, éxito, belleza y bendición divina.'
        },
        {
          q: '¿Qué significa Antares?',
          options: ['Paz', 'Coraje, transformación, crisis y conflicto', 'Debilidad', 'Sin importancia'],
          correct: 1,
          explanation: 'Antares (9°46 Sagitario) aporta coraje para transformación, pero requiere pasar por crisis y conflicto.'
        },
        {
          q: '¿Cuál es la influencia de Fomalhaut?',
          options: ['Fracaso', 'Realización completa, éxito total', 'Pérdida', 'Aislamiento'],
          correct: 1,
          explanation: 'Fomalhaut (3°52 Piscis) promete realización completa y éxito total, aunque a veces a través de soledad.'
        },
        {
          q: '¿Qué significa naturaleza planetaria de una estrella?',
          options: ['Dinero', 'Cómo la estrella actúa similarmente a un planeta', 'Sin importancia', 'Falso concepto'],
          correct: 1,
          explanation: 'La naturaleza planetaria (Sirio=Júpiter, Vega=Mercurio) indica cómo cada estrella actúa similarmente a cierto planeta.'
        }
      ]
    },

    M15_fuera_limites: {
      id: 'M15_fuera_limites',
      moduleId: 'M15',
      title: 'Planetas Fuera de Límites',
      titleEn: 'Out of Bounds Planets',
      level: 'avanzado',
      prerequisites: ['M1_astronomia', 'M3_personales'],
      content: {
        summary: 'Los planetas fuera de límites (declinación > 23°27\') cruzan la eclíptica limitante. Expresan energía extrema, desbalanceada, no moderada por la eclíptica. Genio o locura. Talentos excepcionales o conducta excéntrica. Requieren integración consciente.',
        keyPoints: [
          'Límite eclíptico: ±23°27\' (oblicuidad terrestre)',
          'Fuera de límites: declinación más extrema que ±23°27\'',
          'Expresión extrema: talento excepcional o conducta excéntrica',
          'No moderado por eclíptica: energía sin freno',
          'Genio o locura: potencial alto, riesgo de desequilibrio',
          'Integración consciente requerida: canalizar talento extremo',
          'Luna fuera de límites: emociones descontroladas o intuición psíquica',
          'Mercurio fuera de límites: genio mental o pensamiento obsesivo'
        ]
      },
      questions: [
        {
          q: '¿Qué significa "fuera de límites"?',
          options: ['Mala suerte', 'Declinación > 23°27\', expresión extrema de energía', 'Falso concepto', 'Sin importancia'],
          correct: 1,
          explanation: 'Un planeta fuera de límites tiene declinación más extrema que ±23°27\', expresando energía no moderada.'
        },
        {
          q: '¿Cuál es la limitante eclíptica?',
          options: ['Imaginaria', '±23°27\' (oblicuidad de la Tierra)', 'Valor arbitrario', 'Sin significado'],
          correct: 1,
          explanation: 'La oblicuidad de la Tierra (±23°27\') crea el límite eclíptico que modera la expresión planetaria normal.'
        },
        {
          q: '¿Qué caracteriza a los planetas fuera de límites?',
          options: ['Debilidad', 'Expresión extrema: talento excepcional o conducta excéntrica', 'Normalidad', 'Sin efecto'],
          correct: 1,
          explanation: 'Los planetas fuera de límites expresan energía extrema: potencial para genio o desbalance sin moderación.'
        },
        {
          q: '¿Por qué no están moderados?',
          options: ['Error astrológico', 'Cruzan eclíptica limitante, sin freno moderador', 'Arbitrario', 'Confusión'],
          correct: 1,
          explanation: 'Estar fuera de límites significa no estar moderado por la eclíptica: expresión sin freno natural.'
        },
        {
          q: '¿Qué alternativa presenta un planeta fuera de límites?',
          options: ['Solo debilidad', 'Genio o locura: potencial alto o desbalance', 'Sin opciones', 'Fatalismo'],
          correct: 1,
          explanation: 'Los planetas fuera de límites pueden manifestarse como genio excepcional o como conducta desequilibrada: requieren integración.'
        },
        {
          q: '¿Qué requiere un planeta fuera de límites?',
          options: ['Ignorarlo', 'Integración consciente para canalizar talento extremo', 'Eliminarlo', 'Nada importante'],
          correct: 1,
          explanation: 'La integración consciente es necesaria para canalizar el talento extremo del planeta hacia expresión constructiva.'
        },
        {
          q: '¿Qué significa Luna fuera de límites?',
          options: ['Buena suerte', 'Emociones descontroladas o intuición psíquica excepcional', 'Dinero', 'Sin efecto'],
          correct: 1,
          explanation: 'Luna fuera de límites crea emocionalidad intensa o intuición psíquica extraordinaria, requiriendo integración emocional.'
        },
        {
          q: '¿Qué caracteriza a Mercurio fuera de límites?',
          options: ['Tonto', 'Genio mental o pensamiento obsesivo extremo', 'Loco', 'Sin inteligencia'],
          correct: 1,
          explanation: 'Mercurio fuera de límites es genio mental potencial o pensamiento obsesivo extremo sin capacidad de "apagar".'
        }
      ]
    },

    M15_antiscios: {
      id: 'M15_antiscios',
      moduleId: 'M15',
      title: 'Antiscios y Contrantiscios',
      titleEn: 'Antiscia and Contra-Antiscia',
      level: 'profesional',
      prerequisites: ['M15_puntos_medios'],
      content: {
        summary: 'Los antiscios son grados espejo a través del eje Cancer 0° / Capricornio 0° (solsticios). Son conexiones ocultas entre planetas. Contrantiscios espejan en eje Aries 0° / Libra 0° (equinoccios). Revelan dinámicas escondidas y sincronización cósmica profunda.',
        keyPoints: [
          'Eje solsticial: Cancer 0° / Capricornio 0° como espejo',
          'Antiscios: grados imagen especular a través solsticios',
          'Ejemplo: Sun 10° Aries = antiscia 20° Virgo',
          'Contrantiscios: espejos a través equinoccios (Aries/Libra 0°)',
          'Conexiones ocultas: planetas sincronizados sin aspecto tradicional',
          'Dinámicas escondidas: reveladas por antiscios',
          'Tránsitos en antiscios: timing profundo de cambios',
          'Combinación antiscios + contrantiscios: compleja sincronización cósmica'
        ]
      },
      questions: [
        {
          q: '¿Qué son los antiscios?',
          options: ['Planetas falsos', 'Grados espejo a través eje solsticial (Cancer/Capricornio)', 'Falso concepto', 'Sin validez'],
          correct: 1,
          explanation: 'Los antiscios son grados imagen especular a través del eje solsticial Cancer 0° / Capricornio 0°, creando conexiones ocultas.'
        },
        {
          q: '¿Cuál es el eje de los antiscios?',
          options: ['Aries/Libra', 'Cancer/Capricornio (eje solsticial)', 'Géminis/Sagitario', 'Tauro/Escorpio'],
          correct: 1,
          explanation: 'El eje solsticial Cancer 0° / Capricornio 0° es el eje espejo para antiscios, creando simetría.'
        },
        {
          q: '¿Cómo se calcula un antiscia?',
          options: ['Arbitrariamente', 'Espejo a través eje solsticial: Sun 10°Aries = 20° Virgo', 'Sin método', 'Imposible'],
          correct: 1,
          explanation: 'Se calcula la distancia del planeta desde el eje solsticial más cercano, luego se espeja: Sun 10°Aries está 80° de Cancer, luego 20° Virgo.'
        },
        {
          q: '¿Qué son los contrantiscios?',
          options: ['Lo mismo que antiscios', 'Espejos a través eje equinoccial (Aries/Libra)', 'Falso concepto', 'Sin importancia'],
          correct: 1,
          explanation: 'Los contrantiscios espejan a través del eje equinoccial Aries 0° / Libra 0°, complementando los antiscios.'
        },
        {
          q: '¿Cuál es la función de los antiscios?',
          options: ['Decoración', 'Revelar conexiones ocultas, dinámicas escondidas entre planetas', 'Sin valor', 'Falso'],
          correct: 1,
          explanation: 'Los antiscios revelan conexiones ocultas y dinámicas escondidas entre planetas no visibles en aspectos tradicionales.'
        },
        {
          q: '¿Qué indica sincronización a través antiscios?',
          options: ['Nada', 'Planetas conectados profundamente sin aspecto tradicional visible', 'Falso', 'Error'],
          correct: 1,
          explanation: 'La sincronización a través antiscios muestra planetas profundamente conectados de forma oculta, sin aspecto directo.'
        },
        {
          q: '¿Cómo funcionan los tránsitos en antiscios?',
          options: ['No funcionan', 'Marcan timing profundo de cambios sincretizados', 'Sin importancia', 'Falso'],
          correct: 1,
          explanation: 'Los tránsitos a antiscios marcan timing fino de cambios, mostrando sincronización cósmica más profunda.'
        },
        {
          q: '¿Qué revela la combinación antiscios + contrantiscios?',
          options: ['Confusión', 'Sincronización cósmica compleja en múltiples niveles', 'Error', 'Innecesario'],
          correct: 1,
          explanation: 'La combinación revela sincronización cósmica en múltiples niveles: solsticial y equinoccial simultáneamente.'
        }
      ]
    },

    // MODULE 16: Ética y Práctica Profesional
    M16_codigo_etico: {
      id: 'M16_codigo_etico',
      moduleId: 'M16',
      title: 'Código Ético del Astrólogo',
      titleEn: 'Astrologer\'s Code of Ethics',
      level: 'intermedio',
      prerequisites: ['M7_jerarquia'],
      content: {
        summary: 'El código ético establece confidencialidad absoluta, no-determinismo en predicciones, respeto al libre albedrío y evitar crear miedo o dependencia. El astrólogo es consejero, no autoridad final. Honestidad en limitaciones. Protección de cliente primero.',
        keyPoints: [
          'Confidencialidad absoluta: privacidad de información de cliente',
          'No determinismo: astrología muestra tendencias, no fatalismo',
          'Respeto al libre albedrío: cliente es responsable de decisiones',
          'Evitar miedo y dependencia: no crear pánico o adicción a consultas',
          'Consejero, no autoridad: guiar, no dominar',
          'Honestidad en limitaciones: reconocer qué no se puede hacer',
          'Protección de cliente: su bienestar primero siempre',
          'Actualización continua: educación ética y técnica permanente'
        ]
      },
      questions: [
        {
          q: '¿Cuál es el principio fundamental del código ético?',
          options: ['Dinero máximo', 'Confidencialidad absoluta y protección del cliente', 'Poder sobre cliente', 'Predicción exacta'],
          correct: 1,
          explanation: 'La confidencialidad absoluta y protección del bienestar del cliente son el fundamento ético del trabajo astrológico.'
        },
        {
          q: '¿Qué significa "no determinismo"?',
          options: ['Predecir exacto', 'Astrología muestra tendencias, no destino fijo', 'Rechazar astrología', 'Arbitrariedad total'],
          correct: 1,
          explanation: 'No determinismo significa mostrar tendencias y posibilidades, respetando que el cliente tiene libre albedrío y opciones.'
        },
        {
          q: '¿Cuál es la responsabilidad del cliente?',
          options: ['Obediencia total', 'Responsabilidad de sus decisiones, cliente elige', 'Dependencia de astrólogo', 'Sin responsabilidad'],
          correct: 1,
          explanation: 'El cliente es responsable de sus decisiones: el astrólogo guía pero no decide por él.'
        },
        {
          q: '¿Qué debe evitar el astrólogo?',
          options: ['Hablar de dinero', 'Crear miedo, pánico o dependencia en cliente', 'Ser honesto', 'Límites claros'],
          correct: 1,
          explanation: 'El astrólogo debe evitar activamente crear miedo injustificado, pánico o dependencia emocional del cliente.'
        },
        {
          q: '¿Cuál es el rol del astrólogo?',
          options: ['Autoridad suprema', 'Consejero que guía, no domina', 'Predictor exacto', 'Controlador de destino'],
          correct: 1,
          explanation: 'El astrólogo es consejero y guía que ofrece perspectiva, no autoridad final ni controlador del destino del cliente.'
        },
        {
          q: '¿Qué debe reconocer el astrólogo honestamente?',
          options: ['Nada', 'Sus limitaciones: qué no puede hacer', 'Todo es posible', 'Sin límites'],
          correct: 1,
          explanation: 'La honestidad ética requiere que el astrólogo reconozca claramente qué no puede hacer y sus limitaciones profesionales.'
        },
        {
          q: '¿Cuál es la prioridad principal?',
          options: ['Ganancia máxima', 'Bienestar del cliente siempre primero', 'Fama personal', 'Poder sobre otros'],
          correct: 1,
          explanation: 'La prioridad ética fundamental es siempre el bienestar del cliente por encima de cualquier otra consideración.'
        },
        {
          q: '¿Qué requiere la responsabilidad profesional?',
          options: ['Aprender una sola vez', 'Educación ética y técnica actualizada continuamente', 'Experiencia sin estudio', 'Intuición solamente'],
          correct: 1,
          explanation: 'La responsabilidad profesional requiere educación continua en ética y técnica astrológica a lo largo de la carrera.'
        }
      ]
    },

    M16_consulta: {
      id: 'M16_consulta',
      moduleId: 'M16',
      title: 'La Consulta Astrológica',
      titleEn: 'The Astrological Consultation',
      level: 'avanzado',
      prerequisites: ['M16_codigo_etico'],
      content: {
        summary: 'La consulta tiene estructura: preparación (leer carta), apertura (conexión humana), desarrollo (lectura profunda), cierre (síntesis y empoderamiento). Requiere comunicación empática, manejo de temas difíciles (muerte, separación) y crear espacio seguro para vulnerabilidad.',
        keyPoints: [
          'Preparación: leer carta en detalle antes, no improvisar',
          'Apertura: conexión humana, establecer confianza y seguridad',
          'Desarrollo: lectura profunda, pausas para reflexión del cliente',
          'Cierre: síntesis clara, empoderamiento del cliente',
          'Empatía: escuchar más que hablar, validar experiencia',
          'Temas difíciles: muerte, separación, enfermedad manejados con sensibilidad',
          'Espacio seguro: confidencialidad y libertad de expresar miedo',
          'Notas: documentar consulta respetando privacidad'
        ]
      },
      questions: [
        {
          q: '¿Cuál es la estructura básica de una consulta?',
          options: ['Sin estructura', 'Preparación, apertura, desarrollo, cierre', 'Improvisación total', 'Sin importancia'],
          correct: 1,
          explanation: 'La estructura profesional incluye preparación (leer carta), apertura (conexión), desarrollo (lectura) y cierre (síntesis).'
        },
        {
          q: '¿Qué incluye la fase de preparación?',
          options: ['Nada previo', 'Leer carta en detalle antes de la consulta', 'Improvisar', 'Confiar en intuición solo'],
          correct: 1,
          explanation: 'La preparación requiere leer la carta cuidadosamente antes, considerando toda información relevante, sin improvisar.'
        },
        {
          q: '¿Cuál es el propósito de la apertura?',
          options: ['Comenzar rápido', 'Establecer conexión humana y crear seguridad', 'Enseñanza', 'Mostrar poder'],
          correct: 1,
          explanation: 'La apertura establece conexión humana, confianza y espacio seguro donde el cliente puede ser vulnerable.'
        },
        {
          q: '¿Qué caracteriza la fase de desarrollo?',
          options: ['Hablar sin parar', 'Lectura profunda con pausas para reflexión del cliente', 'Superficialidad', 'Predicción sin contexto'],
          correct: 1,
          explanation: 'El desarrollo es lectura profunda con pausas que permitan al cliente reflexionar, preguntar y integrar lo escuchado.'
        },
        {
          q: '¿Qué debe lograr el cierre?',
          options: ['Terminar rápido', 'Síntesis clara y empoderamiento del cliente', 'Crear dependencia', 'Dejar preguntas'],
          correct: 1,
          explanation: 'El cierre sintetiza los puntos principales y empodera al cliente para tomar decisiones propias.'
        },
        {
          q: '¿Cómo manejar temas difíciles?',
          options: ['Evitarlos', 'Con sensibilidad, validación y espacio para emoción', 'Bruscamente', 'No abordarlos'],
          correct: 1,
          explanation: 'Los temas difíciles (muerte, separación, enfermedad) requieren sensibilidad, validación emocional y apoyo.'
        },
        {
          q: '¿Qué significa "espacio seguro"?',
          options: ['Ignorancia', 'Confidencialidad y libertad para expresar miedo sin juzgar', 'Crítica', 'Control'],
          correct: 1,
          explanation: 'El espacio seguro permite confidencialidad total y libertad para expresar miedos y vulnerabilidades sin ser juzgado.'
        },
        {
          q: '¿Por qué tomar notas después?',
          options: ['Innecesario', 'Documentar consulta respetando privacidad para seguimiento', 'Dinero', 'Ley'],
          correct: 1,
          explanation: 'Las notas ayudan a recordar puntos clave para futuras consultas, respetando confidencialidad absoluta del cliente.'
        }
      ]
    },

    M16_herramientas: {
      id: 'M16_herramientas',
      moduleId: 'M16',
      title: 'Herramientas Profesionales',
      titleEn: 'Professional Tools',
      level: 'intermedio',
      prerequisites: ['M1_software'],
      content: {
        summary: 'El astrólogo profesional necesita software astrológico completo (Solar Fire, Astro, Sirius), efemérides precisas, tablas de casas, atlas geográfico y bases de datos de cartas famosas. Estas herramientas aseguran precisión y eficiencia.',
        keyPoints: [
          'Software astrológico: Solar Fire, Astro, Sirius (gráficos, cálculos, tránsitos)',
          'Efemérides: tablas de posiciones planetarias precisas',
          'Tablas de casas: cálculos de sistemas (Placidus, Koch, Regiomontanus)',
          'Atlas geográfico: latitudes y longitudes exactas',
          'Bases de datos: cartas de personas famosas, eventos, referencias',
          'Almanaques: información astronómica de precisión',
          'Biblioteca técnica: libros de referencia estándar',
          'Actualización: software y datos actualizados continuamente'
        ]
      },
      questions: [
        {
          q: '¿Qué software es estándar para astrólogos profesionales?',
          options: ['Cualquiera', 'Solar Fire, Astro, Sirius (cálculos completos y gráficos)', 'Sin importancia', 'Solo calculadora'],
          correct: 1,
          explanation: 'El software profesional (Solar Fire, Astro, Sirius) proporciona cálculos precisos, gráficos múltiples y análisis avanzados.'
        },
        {
          q: '¿Cuál es la función de las efemérides?',
          options: ['Decoración', 'Tablas precisas de posiciones planetarias para cada día', 'Entretenimiento', 'Sin importancia'],
          correct: 1,
          explanation: 'Las efemérides son tablas astronómicas precisas de posiciones planetarias necesarias para cálculos exactos.'
        },
        {
          q: '¿Qué proporcionan las tablas de casas?',
          options: ['Nada', 'Cálculos de sistemas de casas (Placidus, Koch, etc.)', 'Dinero', 'Entretenimiento'],
          correct: 1,
          explanation: 'Las tablas de casas permiten calcular cúspides de casas en diferentes sistemas, esencial para lectura completa.'
        },
        {
          q: '¿Por qué es necesario un atlas geográfico?',
          options: ['Viajes', 'Latitudes y longitudes exactas para ubicar nacimiento', 'Entretenimiento', 'Sin importancia'],
          correct: 1,
          explanation: 'El atlas proporciona coordenadas geográficas exactas necesarias para calcular carta con máxima precisión.'
        },
        {
          q: '¿Cuál es el valor de bases de datos de cartas?',
          options: ['Entretenimiento', 'Referencia de cartas de personas famosas y eventos históricos', 'Dinero', 'Innecesario'],
          correct: 1,
          explanation: 'Las bases de datos de cartas famosas ofrecen referencia comparativa y verificación de técnicas astrológicas.'
        },
        {
          q: '¿Qué es un almanaque astrológico?',
          options: ['Calendario', 'Información astronómica de precisión para referencia diaria', 'Falso', 'Sin valor'],
          correct: 1,
          explanation: 'El almanaque proporciona información astronómica precisa, lunaciones, aspectos mayores y otros datos de referencia.'
        },
        {
          q: '¿Qué debe incluir la biblioteca técnica?',
          options: ['Novelas', 'Libros de referencia estándar de astrología profesional', 'Comic', 'Sin importancia'],
          correct: 1,
          explanation: 'La biblioteca técnica incluye obras de referencia estándar, clásicos de astrología y publicaciones contemporáneas.'
        },
        {
          q: '¿Por qué actualizar software y datos?',
          options: ['Innecesario', 'Astrología requiere datos precisos, cambios continuos', 'Sin importancia', 'Gasto innecesario'],
          correct: 1,
          explanation: 'La actualización continua asegura que cálculos sean precisos, correcciones aplicadas y nuevas funciones disponibles.'
        }
      ]
    },

    M16_negocio: {
      id: 'M16_negocio',
      moduleId: 'M16',
      title: 'Desarrollo del Negocio',
      titleEn: 'Business Development',
      level: 'profesional',
      prerequisites: ['M16_consulta'],
      content: {
        summary: 'Servicios: lectura natal, progresiones, transitos, sinastría, eventos. Precios: variar según experiencia y mercado. Marketing: web, redes, referencias. Educación continua: talleres, certificación, asociaciones profesionales. Construir marca de confianza.',
        keyPoints: [
          'Tipos de servicio: lectura natal, progresiones, tránsitos, sinastría, eventos, tarot',
          'Precios: basados en experiencia, ubicación, tiempo, demanda',
          'Presencia digital: sitio web profesional, SEO, redes sociales',
          'Marketing: referencias de clientes, contenido educativo, testimonios',
          'Redes de contacto: asociaciones astrológicas, conferencias',
          'Marca personal: reputación, especialización, enfoque único',
          'Horarios flexibles: en línea y presencial según demanda',
          'Evaluación: revisar precios y servicios anualmente'
        ]
      },
      questions: [
        {
          q: '¿Cuáles son los principales servicios astrológicos?',
          options: ['Solo una lectura', 'Natal, progresiones, tránsitos, sinastría, eventos, tarot', 'Sin opciones', 'Nada importante'],
          correct: 1,
          explanation: 'Los servicios profesionales incluyen lectura natal, análisis de progresiones, tránsitos, sinastría y astrología de eventos.'
        },
        {
          q: '¿Cómo establecer precios?',
          options: ['Arbitrariamente bajo', 'Basados en experiencia, ubicación, tiempo y demanda', 'Muy alto', 'Sin lógica'],
          correct: 1,
          explanation: 'Los precios deben reflejar experiencia, mercado local, tiempo de consulta y demanda de servicios.'
        },
        {
          q: '¿Qué incluye presencia digital?',
          options: ['Innecesaria', 'Sitio web profesional, SEO, redes sociales, email', 'Solo en persona', 'Sin importancia'],
          correct: 1,
          explanation: 'La presencia digital moderna incluye sitio profesional, optimización SEO, redes sociales y comunicación por email.'
        },
        {
          q: '¿Cuál es la mejor estrategia de marketing?',
          options: ['Publicidad costosa', 'Referencias de clientes, contenido educativo, testimonios', 'Nada', 'Engaño'],
          correct: 1,
          explanation: 'El marketing efectivo se basa en referencias de clientes satisfechos, contenido educativo de valor y testimonios reales.'
        },
        {
          q: '¿Por qué las asociaciones profesionales?',
          options: ['Sin importancia', 'Red de contactos, educación continua, credibilidad', 'Gasto innecesario', 'Sin valor'],
          correct: 1,
          explanation: 'Las asociaciones (ISAR, NCGR) proporcionan red profesional, educación continua, certificación y credibilidad.'
        },
        {
          q: '¿Qué construye marca personal sólida?',
          options: ['Dinero fácil', 'Reputación, especialización y enfoque único', 'Suerte', 'Manipulación'],
          correct: 1,
          explanation: 'La marca se construye con reputación sólida, especialización clara y enfoque único que diferencia tu trabajo.'
        },
        {
          q: '¿Cuál es ventaja de servicios en línea?',
          options: ['Ninguna', 'Horarios flexibles, acceso global, bajo costo operativo', 'Problemas solo', 'Sin sentido'],
          correct: 1,
          explanation: 'Los servicios en línea ofrecen horarios flexibles, acceso global a clientes y bajo costo operativo.'
        },
        {
          q: '¿Con qué frecuencia revisar modelo de negocio?',
          options: ['Nunca', 'Anualmente para precios, servicios, calidad', 'Mensualmente', 'Sin necesidad'],
          correct: 1,
          explanation: 'La revisión anual de precios, servicios y calidad asegura que el negocio sea sostenible y competitivo.'
        }
      ]
    },

    M16_formacion: {
      id: 'M16_formacion',
      moduleId: 'M16',
      title: 'Formación Continua',
      titleEn: 'Continuing Education',
      level: 'profesional',
      prerequisites: ['M16_negocio'],
      content: {
        summary: 'Asociaciones profesionales: ISAR, NCGR, OPA, AFA ofrecen certificación, comunidad y estándares éticos. Conferencias anuales para mantenerse actualizado. Talleres especializados. Lectura de clásicos y contemporáneos. El aprendizaje es vitalicio en astrología.',
        keyPoints: [
          'ISAR (International Society for Astrological Research): estándares internacionales',
          'NCGR (National Council for Geocosmic Research): certificación USA',
          'OPA (Organización Profesional Astrológica): Latinoamérica',
          'AFA (Astrologers\' Forum Argentina): comunidad hispanohablante',
          'Conferencias anuales: contacto con maestros y tendencias',
          'Talleres especializados: técnicas avanzadas, enfoque único',
          'Lectura: clásicos (Ptolemeo, Lilly) y contemporáneos (Rudhyar, Green)',
          'Supervición: trabajar con mentor experimentado'
        ]
      },
      questions: [
        {
          q: '¿Qué es ISAR?',
          options: ['Falsa asociación', 'International Society for Astrological Research: estándares internacionales', 'Negocio', 'Sin importancia'],
          correct: 1,
          explanation: 'ISAR establece estándares de investigación astrológica internacionales y ofrece certificación profesional.'
        },
        {
          q: '¿Cuál es la función de NCGR?',
          options: ['Diversión', 'Certificación profesional y estándares éticos en USA', 'Entretenimiento', 'Sin valor'],
          correct: 1,
          explanation: 'NCGR (National Council for Geocosmic Research) proporciona certificación profesional rigurosa y estándares éticos.'
        },
        {
          q: '¿Qué son OPA y AFA?',
          options: ['Falsos', 'Asociaciones para Latinoamérica e hispanohablantes', 'Sin importancia', 'Invenciones'],
          correct: 1,
          explanation: 'OPA (Organización Profesional Astrológica) y AFA (Astrologers\' Forum Argentina) crean comunidad hispanohablante certificada.'
        },
        {
          q: '¿Por qué asistir a conferencias anuales?',
          options: ['Innecesario', 'Contacto con maestros, tendencias nuevas, red profesional', 'Gasto', 'Sin valor'],
          correct: 1,
          explanation: 'Las conferencias permiten aprender de maestros reconocidos, conocer tendencias nuevas y construir red profesional.'
        },
        {
          q: '¿Qué valor tienen los talleres especializados?',
          options: ['Ninguno', 'Profundizar técnicas avanzadas y desarrollar enfoque único', 'Entretenimiento', 'Dinero desperdiciado'],
          correct: 1,
          explanation: 'Los talleres especializados desarrollan competencia en técnicas avanzadas y diferencian tu práctica.'
        },
        {
          q: '¿Qué incluye lectura profesional esencial?',
          options: ['Novelas', 'Clásicos (Ptolemeo, Lilly) y contemporáneos (Rudhyar, Green)', 'Sin importancia', 'Solo moderno'],
          correct: 1,
          explanation: 'La lectura esencial incluye clásicos (fundación) y contemporáneos (perspectiva moderna) para comprensión completa.'
        },
        {
          q: '¿Cuál es característica del aprendizaje astrológico?',
          options: ['Termina rápido', 'Vitalicio: siempre hay profundidad nueva a explorar', 'Perfección posible', 'Aprendizaje único'],
          correct: 1,
          explanation: 'El aprendizaje astrológico es vitalicio: siempre hay capas más profundas, nuevas perspectivas y técnicas.'
        },
        {
          q: '¿Qué es supervición con mentor?',
          options: ['Innecesaria', 'Trabajar bajo guía de astrólogo experimentado para refinamiento', 'Denigración', 'Sin valor'],
          correct: 1,
          explanation: 'La supervición con mentor experimentado refina tu práctica, asegura ética y acelera desarrollo profesional.'
        }
      ]
    },

    // MODULE 17: Astrología y Psicología
    M17_jung: {
      id: 'M17_jung',
      moduleId: 'M17',
      title: 'Astrología y Psicología Junguiana',
      titleEn: 'Astrology and Jungian Psychology',
      level: 'avanzado',
      prerequisites: ['M7_personalidad', 'M3_transpersonales'],
      content: {
        summary: 'Los arquetipos planetarios corresponden a arquetipos jungianos: Sol=Self, Luna=Anima/Animus, Saturno=Sombra, Plutón=Autorrealización. La carta como mandala de integración psicológica. Sincronicidad como marco teórico para explicar astrología.',
        keyPoints: [
          'Arquetipos planetarios = arquetipos jungianos universales',
          'Sol como Self: centro integrador de la psique',
          'Luna como Anima: mente emocional inconsciente',
          'Saturno como Sombra: lo rechazado, limitaciones, maduración',
          'Plutón como poder transformador: regeneración psíquica',
          'Individuación: proceso de integración de arquetipos',
          'Sincronicidad (Jung): coincidencia significativa sin causa física',
          'Carta natal como mandala: representación del ser total'
        ]
      },
      questions: [
        {
          q: '¿Cómo se relacionan arquetipos planetarios y jungianos?',
          options: ['Sin conexión', 'Corresponden directamente: Sun=Self, Moon=Anima', 'Falsa relación', 'Invención moderna'],
          correct: 1,
          explanation: 'Los arquetipos planetarios corresponden directamente a arquetipos jungianos universales de la psique humana.'
        },
        {
          q: '¿Qué representa el Sol en psicología junguiana?',
          options: ['Debilidad', 'Self: centro integrador de la psique', 'Solo éxito', 'Identidad superficial'],
          correct: 1,
          explanation: 'El Sol representa el Self junguiano: el centro integrador de toda la psique, la meta de la individuación.'
        },
        {
          q: '¿Cuál es la función de la Luna?',
          options: ['Superficie', 'Anima: mente emocional inconsciente, receptividad', 'Solo emociones', 'Sin función'],
          correct: 1,
          explanation: 'La Luna representa la Anima junguiana: el mundo emocional inconsciente, la receptividad y capacidad de sentir.'
        },
        {
          q: '¿Qué función tiene Saturno?',
          options: ['Solo limitación', 'Sombra: lo rechazado, limitaciones productivas, maduración', 'Debilidad total', 'Sin valor'],
          correct: 1,
          explanation: 'Saturno representa la Sombra junguiana: lo rechazado pero necesario para crecimiento y maduración.'
        },
        {
          q: '¿Qué significa la Sombra en psicología?',
          options: ['Malicia pura', 'Lo rechazado pero necesario para integración psicológica', 'Maldad inherente', 'Falta de luz'],
          correct: 1,
          explanation: 'La Sombra contiene lo rechazado pero necesario: integrarla es requisito para madurez psicológica.'
        },
        {
          q: '¿Cuál es el proceso de individuación?',
          options: ['Aislamiento', 'Integración de arquetipos hacia Self completo', 'Pérdida de identidad', 'Conformidad'],
          correct: 1,
          explanation: 'La individuación es el proceso de integrar todos los arquetipos (incluida la Sombra) hacia el Self completo.'
        },
        {
          q: '¿Qué es sincronicidad junguiana?',
          options: ['Coincidencia casual', 'Coincidencia significativa sin causa física, conexión astrológica', 'Superstición', 'Error'],
          correct: 1,
          explanation: 'La sincronicidad es la coincidencia significativa sin causa física aparente: Jung lo usó para explicar astrología.'
        },
        {
          q: '¿Cómo se entiende la carta como mandala?',
          options: ['Diseño decorativo', 'Representación del ser total: integración de todos los arquetipos', 'Símbolo falso', 'Sin sentido'],
          correct: 1,
          explanation: 'La carta natal es un mandala psicológico: representación simbólica de la totalidad del ser individual.'
        }
      ]
    },

    M17_humanistica: {
      id: 'M17_humanistica',
      moduleId: 'M17',
      title: 'Astrología Humanística (Dane Rudhyar)',
      titleEn: 'Humanistic Astrology (Dane Rudhyar)',
      level: 'avanzado',
      prerequisites: ['M17_jung'],
      content: {
        summary: 'Dane Rudhyar enseña que la carta es mandala de totalidad. El crecimiento es transformación de potencial a actualidad. No es determinismo sino potencialidad. Los ciclos son espirales de crecimiento. El alma busca autointegración y autoexpresión en libertad.',
        keyPoints: [
          'Carta como mandala de wholeness: totalidad integrada',
          'Potencial vs actualidad: desarrollo de capacidades',
          'Ciclos como espirales: no repetición sino crecimiento',
          'Transformación: cambio continuo hacia mayor conciencia',
          'Libertad como valor central: elección y responsabilidad',
          'Autointegración: meta de la vida, no determinismo',
          'Progresiones como evolución natural: crecimiento esperado',
          'Astrología humanística vs fatálica: conciencia cambia todo'
        ]
      },
      questions: [
        {
          q: '¿Cuál es la visión central de Rudhyar?',
          options: ['Determinismo total', 'Carta como mandala de totalidad e integración', 'Falsa enseñanza', 'Sin valor'],
          correct: 1,
          explanation: 'Rudhyar enseña que la carta es mandala de la totalidad del ser, no instrumento de predicción fatalista.'
        },
        {
          q: '¿Cómo entiende Rudhyar el potencial?',
          options: ['Fijo', 'Potencial que se actualiza gradualmente a través vida', 'Sin opción', 'Determinado completamente'],
          correct: 1,
          explanation: 'El potencial no es determinista sino capacidad que se desarrolla gradualmente mediante elecciones conscientes.'
        },
        {
          q: '¿Qué significa "ciclos como espirales"?',
          options: ['Círculos cerrados', 'Ciclos que avanzan hacia mayor conciencia, no repetición', 'Confusión', 'Sin sentido'],
          correct: 1,
          explanation: 'Los ciclos no repiten sino avanzan como espirales: cada repetición es a nivel más alto de conciencia.'
        },
        {
          q: '¿Cuál es la meta del crecimiento?',
          options: ['Dinero', 'Autointegración del ser total', 'Poder externo', 'Dominio'],
          correct: 1,
          explanation: 'La meta es la autointegración: el ser todo que puede ser, no poder externo o material.'
        },
        {
          q: '¿Cuál es rol de la libertad?',
          options: ['Ilusión', 'Valor central: capacidad de elegir y responsabilidad de elección', 'Inexistente', 'Debilidad'],
          correct: 1,
          explanation: 'La libertad es valor central en astrología humanística: somos responsables de nuestras elecciones.'
        },
        {
          q: '¿Cómo se entienden las progresiones?',
          options: ['Predicción exacta', 'Evolución natural, crecimiento esperado del ser', 'Falsa técnica', 'Determinismo'],
          correct: 1,
          explanation: 'Las progresiones muestran evolución natural esperada: crecimiento gradual hacia mayor madurez.'
        },
        {
          q: '¿Cuál es diferencia fundamental con astrología fatálica?',
          options: ['Ninguna', 'Humanística: conciencia cambia todo, libre albedrío central', 'Son iguales', 'Confusión'],
          correct: 1,
          explanation: 'La astrología humanística afirma que conciencia y libertad son centrales: el futuro no es fijo sino moldeable.'
        },
        {
          q: '¿Qué significa autoexpresión en libertad?',
          options: ['Capricho', 'Expresar potencial único del ser respetando leyes cósmicas', 'Sin límites', 'Egoísmo'],
          correct: 1,
          explanation: 'La autoexpresión es desarrollar potencial único del ser dentro de leyes cósmicas: balance entre libertad y responsabilidad.'
        }
      ]
    },

    M17_transpersonal: {
      id: 'M17_transpersonal',
      moduleId: 'M17',
      title: 'Astrología Transpersonal',
      titleEn: 'Transpersonal Astrology',
      level: 'profesional',
      prerequisites: ['M17_humanistica'],
      content: {
        summary: 'Los planetas externos (Urano, Neptuno, Plutón) son portales de transformación colectiva y espiritual. Los tránsitos de Neptuno crean crisis espirituales y disoluciónde ego. Plutón significa muerte-renacimiento. Urano es despertar revolucionario. Son iniciaciones de la conciencia.',
        keyPoints: [
          'Planetas externos como iniciadores transpersonales',
          'Urano: despertamiento revolucionario, liberación, shock cósmico',
          'Neptuno: disolución, fusión espiritual, trascendencia, crisis',
          'Plutón: muerte y renacimiento del ego, transformación fundamental',
          'Crisis espiritual: necesaria para evolución transpersonal',
          'Kundalini y Urano: activación de energía espiritual',
          'Ego death y Plutón: rendición completa del yo falso',
          'Sincronización cósmica: la humanidad evolucionando colectivamente'
        ]
      },
      questions: [
        {
          q: '¿Cuál es el rol de los planetas externos?',
          options: ['Sinhuportancia', 'Portales de transformación colectiva y espiritual', 'Solo personales', 'Falso'],
          correct: 1,
          explanation: 'Los planetas externos son iniciadores de transformación transpersonal colectiva y espiritual individual.'
        },
        {
          q: '¿Qué significa Urano astrológicamente?',
          options: ['Estabilidad', 'Despertar revolucionario, liberación, shock cósmico', 'Conservación', 'Sin cambio'],
          correct: 1,
          explanation: 'Urano es el planeta de la revolución y despertar: trae cambios repentinos, liberación y nuevas consciencia.'
        },
        {
          q: '¿Cuál es la función de Neptuno?',
          options: ['Realidad pura', 'Disolución, fusión espiritual, crisis que purifica', 'Claridad', 'Orden'],
          correct: 1,
          explanation: 'Neptuno disuelve límites del ego, crea fusión espiritual pero también crisis que requieren entrega del yo.'
        },
        {
          q: '¿Qué significa Plutón en transformación?',
          options: ['Sin cambio', 'Muerte del ego y renacimiento: transformación fundamental', 'Destrucción total', 'Pérdida'],
          correct: 1,
          explanation: 'Plutón significa muerte simbólica del yo y renacimiento transformado: no destrucción sino regeneración.'
        },
        {
          q: '¿Cómo se entiende la "crisis espiritual"?',
          options: ['Malo puro', 'Necesaria para evolución transpersonal, oportunidad de crecimiento', 'Enfermedad', 'Error'],
          correct: 1,
          explanation: 'Las crisis espirituales son iniciaciones necesarias para evolución: oportunidades de despertar a realidades mayores.'
        },
        {
          q: '¿Qué es Kundalini en relación a Urano?',
          options: ['Falso concepto', 'Activación de energía espiritual dormida por tránsito Urano', 'Solo yoga', 'Sin astrología'],
          correct: 1,
          explanation: 'Urano activa el despertar de Kundalini: energía espiritual dormida que despierta a conciencia mayor.'
        },
        {
          q: '¿Qué significa "ego death"?',
          options: ['Muerte literal', 'Rendición completa del yo falso para renacimiento espiritual', 'Falta de identidad', 'Depresión'],
          correct: 1,
          explanation: 'El ego death es la rendición del yo falso, una "muerte" psicológica que permite renacimiento auténtico.'
        },
        {
          q: '¿Qué es sincronización cósmica?',
          options: ['Coincidencia', 'Humanidad evolucionando colectivamente a través ciclos de planetas externos', 'Caos', 'Sin orden'],
          correct: 1,
          explanation: 'La sincronización cósmica muestra cómo la humanidad evoluciona colectivamente en los ciclos de los planetas externos.'
        }
      ]
    },

    M17_sombra: {
      id: 'M17_sombra',
      moduleId: 'M17',
      title: 'Sombra Psicológica en la Carta',
      titleEn: 'Psychological Shadow in the Chart',
      level: 'avanzado',
      prerequisites: ['M17_jung', 'M3_lilith'],
      content: {
        summary: 'La Sombra es lo rechazado por la consciencia: Plutón, Casa 12, Lilith y Nodo Sur son indicadores. Se manifiesta como proyección (ver en otros lo propio rechazado). La integración de la Sombra es más importante que rechazarla. Los planetas retrógrados muestran sombra intrapsíquica.',
        keyPoints: [
          'Sombra como lo rechazado pero necesario',
          'Plutón en casa/signo: poder oscuro a integrar',
          'Casa 12: memorias reprimidas y poder latente',
          'Lilith: sexualidad reprimida, poder femenino oscuro',
          'Nodo Sur: patrones kármicos a trascender pero no rechazar',
          'Proyección: ver en otros lo propio rechazado',
          'Integración: acoger la sombra como parte del todo',
          'Retrogrados: introspección necesaria para integrar sombra'
        ]
      },
      questions: [
        {
          q: '¿Qué es la Sombra psicológica?',
          options: ['Maldad inherente', 'Lo rechazado por consciencia pero necesario para totalidad', 'Debilidad', 'Error mental'],
          correct: 1,
          explanation: 'La Sombra es lo que rechazamos en nosotros mismos pero que es necesario integrar para ser completos.'
        },
        {
          q: '¿Qué indica Plutón en la carta?',
          options: ['Dinero', 'Poder oscuro a integrar, regeneración profunda', 'Debilidad', 'Sin importancia'],
          correct: 1,
          explanation: 'Plutón muestra dónde el poder oscuro debe ser integrado, no rechazado: transformación profunda posible.'
        },
        {
          q: '¿Cuál es la función de Casa 12?',
          options: ['Felicidad', 'Memorias reprimidas y poder latente de la sombra', 'Sin importancia', 'Dinero'],
          correct: 1,
          explanation: 'La Casa 12 contiene memorias reprimidas y poder latente que la consciencia rechaza pero que busca ser reconocido.'
        },
        {
          q: '¿Qué representa Lilith?',
          options: ['Pureza', 'Sexualidad reprimida, poder femenino oscuro no aceptado', 'Inocencia', 'Sin valor'],
          correct: 1,
          explanation: 'Lilith representa la sexualidad y poder femenino reprimido, rechazado por sociedad patriarcal y consciencia.'
        },
        {
          q: '¿Qué es la proyección en psicología?',
          options: ['Película', 'Ver en otros lo propio rechazado, no integrado', 'Realidad exacta', 'Verdad'],
          correct: 1,
          explanation: 'La proyección es mecanismo donde vemos en otros lo que rechazamos en nosotros: "odio en otros lo que niego de mí".'
        },
        {
          q: '¿Cuál es la meta con la Sombra?',
          options: ['Eliminarla', 'Integrarla como parte necesaria del todo', 'Negarla', 'Proyectarla siempre'],
          correct: 1,
          explanation: 'La meta no es eliminar sino integrar: aceptar la sombra como parte necesaria del ser completo.'
        },
        {
          q: '¿Cómo contribuyen retrogrados a integración?',
          options: ['No ayudan', 'Introspección necesaria para reconocer y integrar sombra interna', 'Crean problemas', 'Innecesarios'],
          correct: 1,
          explanation: 'Los retrogrados fuerzan introspección que es esencial para reconocer y gradualmente integrar la sombra.'
        },
        {
          q: '¿Qué es integración de sombra exitosa?',
          options: ['Negación', 'Reconocimiento, aceptación y transformación de poder rechazado', 'Represión mayor', 'Supresión'],
          correct: 1,
          explanation: 'La integración exitosa es reconocer, aceptar y transformar el poder rechazado en fuerza constructiva.'
        }
      ]
    },

    // MODULE 18: Especialidades y Ramas
    M18_financiera: {
      id: 'M18_financiera',
      moduleId: 'M18',
      title: 'Astrología Financiera',
      titleEn: 'Financial Astrology',
      level: 'profesional',
      prerequisites: ['M12_ciclos_mayores', 'M8_transitos_lentos'],
      content: {
        summary: 'Los ciclos de Júpiter y Saturno reflejan expansión y contracción de mercados. Tránsitos lentos predicen ciclos económicos. Se usa en análisis de bolsa, commodities y criptomonedas. Carta de apertura del mercado (Wall Street) muestra ciclos anuales y trimestrales.',
        keyPoints: [
          'Ciclo Júpiter-Saturno (20 años): ciclo económico fundamental',
          'Júpiter: expansión, crecimiento, boom de mercados',
          'Saturno: contracción, bear markets, restricción de crédito',
          'Tránsitos a elementos: cíclico en commodities (fuego=energía, agua=alimentos)',
          'Carta Wall Street: nacimiento de bolsa, tránsitos predicen ciclos',
          'Lunaciones en signos: ciclos de 2 semanas en bolsa',
          'Nodos lunares y mercados: ciclos de 18.6 años',
          'Astrología de criptomonedas: análisis de Bitcoin et al ciclos'
        ]
      },
      questions: [
        {
          q: '¿Cuál es el ciclo económico fundamental?',
          options: ['Anual', 'Júpiter-Saturno (20 años): expansión-contracción', '10 años', 'Sin ciclo'],
          correct: 1,
          explanation: 'El ciclo Júpiter-Saturno de 20 años refleja ciclos económicos de expansion (Júpiter) y contracción (Saturno).'
        },
        {
          q: '¿Qué indica Júpiter en mercados?',
          options: ['Pérdida', 'Expansión, crecimiento, bull markets', 'Contracción', 'Sin efecto'],
          correct: 1,
          explanation: 'Júpiter indica expansión de mercados, bull markets, optimismo y crecimiento económico sostenido.'
        },
        {
          q: '¿Cuál es el rol de Saturno?',
          options: ['Crecimiento', 'Contracción, bear markets, restricción crediticia', 'Expansión', 'Sin importancia'],
          correct: 1,
          explanation: 'Saturno indica contracción, bear markets, restricción crediticia y ciclos de pérdida en mercados.'
        },
        {
          q: '¿Cómo se usan los elementos?',
          options: ['No se usan', 'Tránsitos a elementos predicen commodities: fuego=energía, agua=alimentos', 'Sin valor', 'Falso'],
          correct: 1,
          explanation: 'Los tránsitos a signos (elementos) predicen ciclos en commodities: fuego=petróleo, agua=alimentos, tierra=oro.'
        },
        {
          q: '¿Por qué se analiza carta de Wall Street?',
          options: ['Sin importancia', 'Nacimiento de bolsa: tránsitos predicen ciclos anuales y trimestrales', 'Falso', 'Error'],
          correct: 1,
          explanation: 'La carta de apertura de Wall Street muestra ciclos fundamentales: tránsitos predicen movimientos mayores.'
        },
        {
          q: '¿Qué período cubren lunaciones?',
          options: ['Año completo', 'Dos semanas: ciclo de lunación predice volatilidad semanal', 'Minuto', 'Sin ciclo'],
          correct: 1,
          explanation: 'Las lunaciones (ciclos de 2 semanas) crean ciclos de volatilidad semanal en mercados de bolsa.'
        },
        {
          q: '¿Qué ciclo tienen los Nodos?',
          options: ['12 años', '18.6 años: ciclo nodal con importancia en mercados', '7 años', 'Sin ciclo'],
          correct: 1,
          explanation: 'El ciclo nodal de 18.6 años crea ciclos mayores de mercados: tendencias de tendencias en economía.'
        },
        {
          q: '¿Se usa astrología en criptomonedas?',
          options: ['No', 'Sí: análisis de ciclos de Bitcoin y altcoins', 'Falso', 'Imposible'],
          correct: 1,
          explanation: 'La astrología financiera analiza ciclos de criptomonedas: Bitcoin tiene ciclos identificables astrológicamente.'
        }
      ]
    },

    M18_meteorologica: {
      id: 'M18_meteorologica',
      moduleId: 'M18',
      title: 'Astrología Meteorológica',
      titleEn: 'Meteorological Astrology',
      level: 'profesional',
      prerequisites: ['M12_fundamentos'],
      content: {
        summary: 'Los ingresos solares (cambios de estación) y lunaciones predicen clima. Los planetas influyen en presión atmosférica. Mars/Júpiter=tormentas, Saturno/Neptuno=frío/humedad. Astrología astronómica antigua estudiada por civilizaciones para predicción agrícola.',
        keyPoints: [
          'Ingresos solares (equinocios/solsticios): predicción de estación',
          'Lunaciones: ciclos de lluvia y eventos climáticos',
          'Marte: energía violenta, tormentas, sequía',
          'Júpiter: lluvia abundante, inundaciones potenciales',
          'Saturno: frío, hielo, sistemas de alta presión',
          'Neptuno: humedad, bruma, confusión climática',
          'Ciclos solares: manchas solares y clima terrestre',
          'Astrología antigua: Babilonia predicaba clima con astrología'
        ]
      },
      questions: [
        {
          q: '¿Cómo predicen ingresos solares el clima?',
          options: ['No predicen', 'Equinocios/solsticios marcan cambios de estación y clima', 'Falso', 'Sin relación'],
          correct: 1,
          explanation: 'Los ingresos solares (cambios estacionales) marcan transiciones climáticas predecibles en ciclos.'
        },
        {
          q: '¿Qué indican las lunaciones?',
          options: ['Nada', 'Ciclos de lluvia y eventos climáticos cada 29.5 días', 'Falso', 'Sin conexión'],
          correct: 1,
          explanation: 'Las lunaciones crean ciclos climáticos: ciclos de lluvia y eventos meteorológicos cada 29.5 días.'
        },
        {
          q: '¿Cuál es el rol de Marte?',
          options: ['Frío', 'Energía violenta: tormentas, sequía, vientos fuertes', 'Lluvia', 'Sin efecto'],
          correct: 1,
          explanation: 'Marte aporta energía violenta: tormentas, sequía, vientos destructivos y calor extremo.'
        },
        {
          q: '¿Qué indica Júpiter?',
          options: ['Sequía', 'Lluvia abundante, potencial de inundaciones, humedad', 'Calor', 'Sin efecto'],
          correct: 1,
          explanation: 'Júpiter indica lluvia abundante, expansión de sistemas nublados, potencial de inundaciones.'
        },
        {
          q: '¿Cuál es el efecto de Saturno?',
          options: ['Lluvia', 'Frío, hielo, sistemas de alta presión, sequía', 'Calor', 'Sin efecto'],
          correct: 1,
          explanation: 'Saturno enfría: indica frío, hielo, sistemas de alta presión anticiclónica y sequía potencial.'
        },
        {
          q: '¿Qué aporta Neptuno?',
          options: ['Calor', 'Humedad, bruma, confusión climática, lluvia débil', 'Sequía', 'Nada'],
          correct: 1,
          explanation: 'Neptuno aporta humedad, bruma, niebla, confusión en patrones climáticos y lluvia débil.'
        },
        {
          q: '¿Existe relación entre ciclos solares y clima?',
          options: ['No', 'Sí: manchas solares afectan radiación y clima terrestre', 'Falso', 'Sin conexión'],
          correct: 1,
          explanation: 'Los ciclos solares (manchas solares) afectan radiación solar que influye en clima terrestre.'
        },
        {
          q: '¿Se usaba en la antigüedad?',
          options: ['No', 'Sí: Babilonia predicaba clima con astrología para agricultura', 'Falso', 'Invención moderna'],
          correct: 1,
          explanation: 'La astrología meteorológica es antigua: Babilonia usaba astrología para predicción agrícola climática.'
        }
      ]
    },

    M18_eventos: {
      id: 'M18_eventos',
      moduleId: 'M18',
      title: 'Astrología de Eventos',
      titleEn: 'Event Astrology',
      level: 'avanzado',
      prerequisites: ['M8_transitos_lentos', 'M11_principios'],
      content: {
        summary: 'Se analiza la carta de eventos históricos importantes: inauguraciones, fundaciones, accidentes, momentos históricos. La hora exacta determina el significado. Tránsitos al momento del evento revelan su propósito. Revoluciones anuales de eventos importantes.',
        keyPoints: [
          'Carta de inauguración: poder del presidente reflejado',
          'Carta de fundación empresa: destino de compañía',
          'Carta de accidente: transitos revelan causa cósmica',
          'Momentos históricos: guerras, revoluciones, cambios',
          'Hora exacta: crítica para leer evento correctamente',
          'Tránsitos al momento: qué fuerzas cósmicas actuaban',
          'Revolución anual del evento: aniversarios tienen ciclos',
          'Eventos de sincronización: múltiples cartas de evento conectan'
        ]
      },
      questions: [
        {
          q: '¿Qué es una carta de inauguración?',
          options: ['Invención', 'Momento de toma de poder: refleja destino del presidente', 'Falso', 'Sin importancia'],
          correct: 1,
          explanation: 'La carta de inauguración (momento de toma de poder) refleja el destino, retos y potencial del presidente.'
        },
        {
          q: '¿Por qué analizar carta de fundación?',
          options: ['Entretenimiento', 'Destino de la compañía: ciclos de éxito, crisis, expansión', 'Falso', 'Sin valor'],
          correct: 1,
          explanation: 'La carta de fundación (momento de registro oficial) refleja el destino y ciclos de la empresa.'
        },
        {
          q: '¿Qué revela la carta de un accidente?',
          options: ['Nada', 'Tránsitos muestran fuerzas cósmicas que causaron evento', 'Falso', 'Error'],
          correct: 1,
          explanation: 'El análisis de tránsitos al momento del accidente revela qué fuerzas cósmicas contribuyeron al evento.'
        },
        {
          q: '¿Cómo se analizan eventos históricos?',
          options: ['No se pueden', 'Hora exacta y tránsitos revelan sincronización cósmica de revoluciones', 'Falso', 'Imposible'],
          correct: 1,
          explanation: 'Los eventos históricos (guerras, revoluciones) se analizan con hora exacta y tránsitos de sincronización.'
        },
        {
          q: '¿Por qué importa la hora exacta?',
          options: ['Sin importancia', 'Determina Ascendente y casas: significado completo del evento', 'Accesorio', 'Falso'],
          correct: 1,
          explanation: 'La hora exacta determina Ascendente y casas: crítica para leer el propósito real del evento.'
        },
        {
          q: '¿Qué muestran los tránsitos al momento?',
          options: ['Nada', 'Qué fuerzas cósmicas estaban actuando en ese momento exacto', 'Sin valor', 'Error'],
          correct: 1,
          explanation: 'Los tránsitos en el momento del evento muestran exactamente qué energías cósmicas estaban presentes.'
        },
        {
          q: '¿Qué es revolución anual de evento?',
          options: ['Repetición igual', 'Aniversario tiene ciclo: tránsitos anuales crean momentos importantes', 'Falso', 'Sin valor'],
          correct: 1,
          explanation: 'Las revoluciones anuales (aniversarios) tienen ciclos propios: tránsitos anuales crean momentos críticos.'
        },
        {
          q: '¿Qué es sincronización de eventos?',
          options: ['Coincidencia', 'Múltiples cartas de evento conectan: inauguración, fundación, accidente relacionados', 'Falso', 'Error'],
          correct: 1,
          explanation: 'La sincronización muestra cómo cartas de múltiples eventos conectan: propósito cósmico integrado.'
        }
      ]
    },

    M18_homeopatica: {
      id: 'M18_homeopatica',
      moduleId: 'M18',
      title: 'Astrología Homeopática',
      titleEn: 'Homeopathic Astrology',
      level: 'profesional',
      prerequisites: ['M13_correspondencias', 'M3_transpersonales'],
      content: {
        summary: 'Los remedios homeopáticos corresponden a arquetipos planetarios. Sepia=Luna, Sulphur=Sol, Phosphorus=Mercurio, Natrum Muriaticum=Luna/Cáncer. Se integra análisis astrológico con selección homeopática para tratamiento resonante con constitución.',
        keyPoints: [
          'Remedios homeopáticos = arquetipos planetarios',
          'Sepia: Luna, lo femenino, melancolía, insensibilidad',
          'Sulphur: Sol, energía bruta, desorden, generosidad',
          'Phosphorus: Mercurio, nerviosismo, sensitividad, comunicación',
          'Natrum Muriaticum: Luna/Cáncer, resentimiento, clausura emocional',
          'Calcarea Carbonicum: Tierra/Saturno, lentitud, frío, rigidez',
          'Lachesis: Plutón, intensidad, celos, transformación',
          'Integración: astrología + homeopatía para tratamiento constitucional'
        ]
      },
      questions: [
        {
          q: '¿Cómo se relacionan remedios homeopáticos con planetas?',
          options: ['Sin relación', 'Remedios corresponden a arquetipos planetarios', 'Falso', 'Invención'],
          correct: 1,
          explanation: 'Cada remedio homeopático corresponde a un arquetipo planetario: Sepia=Luna, Sulphur=Sol, etc.'
        },
        {
          q: '¿Qué planeta corresponde a Sepia?',
          options: ['Sol', 'Luna: lo femenino, melancolía, insensibilidad', 'Marte', 'Mercurio'],
          correct: 1,
          explanation: 'Sepia es el remedio Luna: corresponde a melancolía, insensibilidad emocional y naturaleza femenina.'
        },
        {
          q: '¿Cuál es el remedio del Sol?',
          options: ['Calcarea', 'Sulphur: energía bruta, desorden, generosidad', 'Sepia', 'Pulsatilla'],
          correct: 1,
          explanation: 'Sulphur es el remedio Sol: aporta energía bruta, tendencia al desorden pero generosidad innata.'
        },
        {
          q: '¿Qué remedio corresponde a Mercurio?',
          options: ['Sepia', 'Phosphorus: nerviosismo, sensitividad, comunicación', 'Sulphur', 'Lachesis'],
          correct: 1,
          explanation: 'Phosphorus es el remedio Mercurio: muy nervioso, sensible, comunicativo pero agotado.'
        },
        {
          q: '¿Cuál es remedio de Cáncer/Luna?',
          options: ['Sulphur', 'Natrum Muriaticum: resentimiento, clausura emocional', 'Sepia', 'Phosphorus'],
          correct: 1,
          explanation: 'Natrum Muriaticum es el remedio de Cáncer: resentimiento crónico y clausura emocional guardada.'
        },
        {
          q: '¿Qué remedio corresponde a Tierra/Saturno?',
          options: ['Sulphur', 'Calcarea Carbonicum: lentitud, frío, rigidez estructural', 'Sepia', 'Lachesis'],
          correct: 1,
          explanation: 'Calcarea Carbonicum es remedio tierra: lentitud, frío interno, rigidez estructural y miedo.'
        },
        {
          q: '¿Cuál es remedio de Plutón?',
          options: ['Sepia', 'Lachesis: intensidad, celos, transformación profunda', 'Phosphorus', 'Sulphur'],
          correct: 1,
          explanation: 'Lachesis es el remedio Plutón: intensidad extrema, celos, tendencia a transformación violenta.'
        },
        {
          q: '¿Cuál es valor de astrología homeopática?',
          options: ['Entretenimiento', 'Integración para tratamiento constitucional resonante con ser', 'Falso', 'Sin sentido'],
          correct: 1,
          explanation: 'La integración permite seleccionar remedio que resuena con constitución planetaria del ser para sanación profunda.'
        }
      ]
    },

    M18_tarot: {
      id: 'M18_tarot',
      moduleId: 'M18',
      title: 'Astrología y Tarot',
      titleEn: 'Astrology and Tarot',
      level: 'intermedio',
      prerequisites: ['M2_decanatos', 'M3_personales'],
      content: {
        summary: 'Los Arcanos Mayores corresponden a signos y planetas. Los Arcanos Menores corresponden a decanatos zodiacales. Integrar ambos sistemas proporciona consulta más completa: el tarot ofrece narrativa mientras astrología aporta estructura.',
        keyPoints: [
          'Arcanos Mayores = signos zodiacales (1-12) y planetas (13-22)',
          'El Mago: Mercurio, comunicación y poder',
          'La Sacerdotisa: Luna, intuición y misterio',
          'La Emperatriz: Venus, creatividad y abundancia',
          'El Emperador: Aries, autoridad y poder',
          'Arcanos Menores: Palos = elementos (Fuego, Agua, Aire, Tierra)',
          'Decanatos en Menores: 3 cartas por signo reflejan decanatos',
          'Integración: tarot narrativo + astrología estructural = consulta profunda'
        ]
      },
      questions: [
        {
          q: '¿Cómo corresponden Arcanos Mayores a astrología?',
          options: ['Sin relación', 'Corresponden a signos (1-12) y planetas (13-22)', 'Falso', 'Invención'],
          correct: 1,
          explanation: 'Los Arcanos Mayores corresponden directamente a los 12 signos y 10 planetas principales de astrología.'
        },
        {
          q: '¿Qué planeta corresponde al Mago?',
          options: ['Luna', 'Mercurio: comunicación, poder, inteligencia', 'Venus', 'Marte'],
          correct: 1,
          explanation: 'El Mago corresponde a Mercurio: comunicación, poder de la palabra, magia mental.'
        },
        {
          q: '¿Cuál es carta de la Luna?',
          options: ['La Emperatriz', 'La Sacerdotisa: intuición, misterio, lo oculto', 'El Mago', 'La Rueda'],
          correct: 1,
          explanation: 'La Sacerdotisa es la carta de la Luna: intuición, misterio, el inconsciente, lo oculto.'
        },
        {
          q: '¿Qué corresponde a Venus?',
          options: ['El Emperador', 'La Emperatriz: creatividad, abundancia, belleza', 'El Mago', 'La Fuerza'],
          correct: 1,
          explanation: 'La Emperatriz corresponde a Venus: creatividad, abundancia material y belleza.'
        },
        {
          q: '¿Cuál es carta de Aries?',
          options: ['La Sacerdotisa', 'El Emperador: autoridad, poder, dominio', 'El Mago', 'La Justicia'],
          correct: 1,
          explanation: 'El Emperador es la carta de Aries: autoridad, poder, dominio y liderazgo.'
        },
        {
          q: '¿A qué corresponden los Arcanos Menores?',
          options: ['Sin sistema', 'Palos = elementos (Fuego, Agua, Aire, Tierra)', 'Falso', 'Arbitrario'],
          correct: 1,
          explanation: 'Los Arcanos Menores: Bastos=Fuego, Copas=Agua, Espadas=Aire, Oros=Tierra.'
        },
        {
          q: '¿Cómo se usan decanatos en Tarot?',
          options: ['No se usan', '3 cartas por signo reflejan los 3 decanatos de cada signo', 'Sin relación', 'Error'],
          correct: 1,
          explanation: 'Cada signo tiene 3 decanatos: 3 cartas de Menores por signo corresponden a estos decanatos.'
        },
        {
          q: '¿Cuál es ventaja de integración Tarot-Astrología?',
          options: ['Confusión', 'Tarot narrativo + astrología estructural = consulta más profunda', 'Sin valor', 'Error'],
          correct: 1,
          explanation: 'La integración combina la narrativa del tarot con la estructura astrológica para consulta más completa.'
        }
      ]
    },

    M18_integracion_final: {
      id: 'M18_integracion_final',
      moduleId: 'M18',
      title: 'Integración de Especialidades',
      titleEn: 'Integration of Specialties',
      level: 'profesional',
      prerequisites: ['M18_financiera', 'M18_eventos'],
      content: {
        summary: 'El astrólogo experto integra múltiples ramas: medicina para salud, psicología para trauma, negocios para asesoramiento, eventos para contexto. No es solo lectura natal sino consultor holístico. La integración de especialidades crea práctica única y valiosa.',
        keyPoints: [
          'Lectura natal como base de todas especialidades',
          'Medicina astrológica: comprensión holística de salud',
          'Psicología astrológica: trauma, sombra, arquetipos',
          'Negocios astrológicos: timing de decisiones grandes',
          'Astrocartografía: optimizar ubicación geográfica',
          'Sinastría aplicada: relaciones profesionales y personales',
          'Tránsitos como timing: cuándo iniciar proyectos',
          'Especialización única: combinar ramas para servicio diferenciado'
        ]
      },
      questions: [
        {
          q: '¿Cuál es la base de todas especialidades?',
          options: ['Dinero', 'Lectura natal como fundación de todas ramas', 'Predicción', 'Sin base'],
          correct: 1,
          explanation: 'La lectura natal es la base: de ella se derivan todas las especialidades astrológicas.'
        },
        {
          q: '¿Cómo se aplica medicina astrológica?',
          options: ['Reemplazar medicina', 'Comprensión holística de salud: complemento con medicina', 'Sin valor', 'Falso'],
          correct: 1,
          explanation: 'La medicina astrológica aporta comprensión holística de constitución, vulnerabilidades y ciclos de salud.'
        },
        {
          q: '¿Para qué sirve psicología astrológica?',
          options: ['Sin uso', 'Comprensión de trauma, sombra, arquetipos en psique', 'Falso', 'Entretenimiento'],
          correct: 1,
          explanation: 'La psicología astrológica revela trauma, sombra y arquetipos: permite sanación profunda.'
        },
        {
          q: '¿Cómo aplicar astrología en negocios?',
          options: ['Sin relación', 'Timing de decisiones grandes, ciclos de expansión-contracción', 'Falso', 'Error'],
          correct: 1,
          explanation: 'La astrología de negocios optimiza timing de grandes decisiones, lanzamientos, expansiones.'
        },
        {
          q: '¿Cuál es función de sinastría aplicada?',
          options: ['Entretenimiento', 'Evaluar relaciones profesionales y personales', 'Sin sentido', 'Falso'],
          correct: 1,
          explanation: 'La sinastría aplicada evalúa compatibilidad en relaciones de trabajo, negocios y personal.'
        },
        {
          q: '¿Por qué usar tránsitos como timing?',
          options: ['Innecesario', 'Determinar cuándo iniciar proyectos, cambios, riesgos', 'Sin importancia', 'Error'],
          correct: 1,
          explanation: 'Los tránsitos muestran cuándo es óptimo iniciar proyectos y evitar tiempos desfavorables.'
        },
        {
          q: '¿Cómo diferenciarse como astrólogo?',
          options: ['Sin opción', 'Especialización única: combinar ramas para servicio diferenciado', 'Imposible', 'Igual a otros'],
          correct: 1,
          explanation: 'La especialización única combina ramas según fortaleza: crears práctica diferenciada y valiosa.'
        },
        {
          q: '¿Cuál es ventaja de ser consultor holístico?',
          options: ['Sin ventaja', 'Servicio completo: salud, psicología, negocios, relaciones en una lectura', 'Sin valor', 'Error'],
          correct: 1,
          explanation: 'El enfoque holístico integrado ofrece servicio completo: salud, psique, negocios, relaciones juntos.'
        }
      ]
    }
  });

  console.log('Knowledge Graph Part 3 (M13-M18) loaded');
})();