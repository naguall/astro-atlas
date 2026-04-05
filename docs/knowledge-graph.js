// ASTRO_KNOWLEDGE_GRAPH - Complete Professional Astrology Knowledge Base
// 18 Modules, 132 Nodes with Full Content and Quiz Questions
// All content in Spanish with real astrology information

window.ASTRO_KNOWLEDGE_GRAPH = {
  levels: { basico: { label: 'Básico' }, intermedio: { label: 'Intermedio' }, avanzado: { label: 'Avanzado' }, profesional: { label: 'Profesional' } },

  modules: [
    { id: 'M1', title: 'Fundamentos de la Astrología', icon: '🌟', nodeIds: ['M1_historia','M1_astronomia','M1_carta_natal','M1_software','M1_sincronicidad','M1_corrientes','M1_tropical_sideral','M1_coordenadas'] },
    { id: 'M2', title: 'Signos Zodiacales', icon: '♈', nodeIds: ['M2_zodiaco','M2_elementos','M2_modalidades','M2_polaridades','M2_signos_fuego_tierra','M2_signos_aire_agua','M2_decanatos','M2_grados'] },
    { id: 'M3', title: 'Los Planetas', icon: '♀', nodeIds: ['M3_luminarias','M3_personales','M3_sociales','M3_transpersonales','M3_quiron','M3_lilith','M3_nodos','M3_partes_arabes','M3_asteroides','M3_dignidades','M3_dignidades_menores','M3_fases_planetarias'] },
    { id: 'M4', title: 'Las Casas Astrológicas', icon: '🏠', nodeIds: ['M4_sistemas','M4_clasificacion','M4_casas_1_6','M4_casas_7_12','M4_angulos','M4_interceptadas','M4_casas_vacias','M4_regente_casa'] },
    { id: 'M5', title: 'Aspectos Planetarios', icon: '∠', nodeIds: ['M5_teoria','M5_conjuncion','M5_oposicion','M5_trigono_sextil','M5_menores','M5_aplicativos','M5_gran_trigono','M5_gran_cruz','M5_otras_figuras','M5_aspectos_angulos'] },
    { id: 'M6', title: 'Regencias y Disposiciones', icon: '👑', nodeIds: ['M6_regencias','M6_regente_carta','M6_cadenas','M6_almuten','M6_regente_casa_enlace','M6_co_regentes'] },
    { id: 'M7', title: 'Interpretación Integrada', icon: '🧩', nodeIds: ['M7_patron_planetario','M7_predominancia','M7_planeta_dominante','M7_stellium','M7_jerarquia','M7_personalidad','M7_vocacion','M7_relaciones'] },
    { id: 'M8', title: 'Técnicas Predictivas', icon: '🔮', nodeIds: ['M8_transitos_intro','M8_transitos_lentos','M8_transitos_rapidos','M8_progresiones','M8_fases_progresadas','M8_arco_solar','M8_direcciones_primarias','M8_retorno_solar','M8_retorno_saturno','M8_profecciones','M8_firdaria','M8_eclipses_predictivos'] },
    { id: 'M9', title: 'Sinastría', icon: '💑', nodeIds: ['M9_sinastria_intro','M9_aspectos_clave','M9_planetas_casas','M9_compuesta','M9_davison','M9_nodos_sinastria','M9_temporalidad','M9_sinastria_avanzada'] },
    { id: 'M10', title: 'Astrología Horaria', icon: '⏰', nodeIds: ['M10_fundamentos','M10_radicacion','M10_significadores','M10_tecnicas','M10_temas','M10_via_combusta'] },
    { id: 'M11', title: 'Astrología Electiva', icon: '📅', nodeIds: ['M11_principios','M11_reglas','M11_aplicaciones','M11_vs_horaria'] },
    { id: 'M12', title: 'Astrología Mundana', icon: '🌍', nodeIds: ['M12_fundamentos','M12_ciclos_mayores','M12_eclipses_mundana','M12_cartas_paises','M12_eras','M12_ciclos_civilizatorios'] },
    { id: 'M13', title: 'Astrología Médica', icon: '⚕️', nodeIds: ['M13_correspondencias','M13_indicadores','M13_planetas_salud','M13_diagnostico','M13_etica_medica'] },
    { id: 'M14', title: 'Astrología Kármica', icon: '♻️', nodeIds: ['M14_eje_nodal','M14_regentes_nodos','M14_retrogrados_natal','M14_casa12_karmica','M14_evolutiva_green','M14_integracion_karmica'] },
    { id: 'M15', title: 'Técnicas Avanzadas', icon: '⚡', nodeIds: ['M15_puntos_medios','M15_armonicos','M15_astrocartografia','M15_rectificacion','M15_draconica','M15_estrellas_fijas','M15_fuera_limites','M15_antiscios'] },
    { id: 'M16', title: 'Ética y Práctica Profesional', icon: '🎓', nodeIds: ['M16_codigo_etico','M16_consulta','M16_herramientas','M16_negocio','M16_formacion'] },
    { id: 'M17', title: 'Astrología y Psicología', icon: '🧠', nodeIds: ['M17_jung','M17_humanistica','M17_transpersonal','M17_sombra'] },
    { id: 'M18', title: 'Especialidades', icon: '🔬', nodeIds: ['M18_financiera','M18_meteorologica','M18_eventos','M18_homeopatica','M18_tarot','M18_integracion_final'] }
  ],

  nodes: {
  }
};

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M1_astronomia'] = {
      id: 'M1_astronomia',
      moduleId: 'M1',
      title: 'Astronomía básica para astrólogos',
      titleEn: 'Basic Astronomy for Astrologers',
      level: 'basico',
      prerequisites: [],
      content: {
        summary: 'La astronomía proporciona la base observacional de la astrología: la eclíptica es la proyección aparente de la órbita terrestre en la bóveda celeste donde ocurren los movimientos planetarios. Conceptos como el movimiento retrógrado, la precesión de equinoccios y las velocidades orbitales variables son fundamentales para interpretar una carta natal.',
        keyPoints: [
          'Eclíptica: línea aparente donde se mueven Sun, Moon y planetas en la bóveda celeste',
          'Velocidades orbitales variables: Mercurio 88 días, Venus 225, Tierra 365, Marte 687, Júpiter 12 años, Saturno 29.5 años',
          'Movimiento retrógrado: ilusión óptica geocéntrica cuando Tierra adelanta a un planeta lento',
          'Precesión de equinoccios: desplazamiento lento del punto vernal ~1° cada 72 años (~1° cada 2150 años por signo)',
          'Lunación: ciclo sinódico de Luna Nueva a Luna Nueva = 29.5 días',
          'Perihelio y afelio: puntos más cercano y lejano de órbita respecto al Sun',
          'Nodos lunares: puntos donde órbita lunar cruza eclíptica'
        ]
      },
      questions: [
        {
          q: '¿Qué es la eclíptica en astrología?',
          options: ['Órbita de la Luna', 'Proyección de la órbita terrestre en la bóveda celeste', 'Cinturón de asteroides', 'La Vía Láctea'],
          correct: 1,
          explanation: 'La eclíptica es la línea aparente donde se mueven Sun, Moon y planetas vistos desde la Tierra.'
        },
        {
          q: '¿Cuál es la duración de una lunación completa?',
          options: ['27.3 días (mes sidéreo)', '29.5 días (ciclo sinódico)', '24 horas', '365 días'],
          correct: 1,
          explanation: 'La lunación de 29.5 días es el ciclo sinódico de Luna Nueva a Luna Nueva.'
        },
        {
          q: '¿Qué es el movimiento retrógrado de un planeta?',
          options: ['Cambio real en su órbita', 'Ilusión óptica cuando la Tierra adelanta al planeta', 'Pausa orbital temporal', 'Solo fenómeno lunar'],
          correct: 1,
          explanation: 'Movimiento retrógrado es una ilusión óptica geocéntrica sin cambio real de órbita.'
        },
        {
          q: '¿Cuál es la diferencia entre zodiaco tropical y sideral?',
          options: ['Tropical es antiguo', 'Tropical usa punto vernal; sideral usa constelaciones actuales (~24° diferencia)', 'No hay diferencia', 'Sideral es más preciso'],
          correct: 1,
          explanation: 'Tropical: punto vernal 0° Aries; Sideral: constelaciones actuales ~24° diferencia.'
        },
        {
          q: '¿Qué es la precesión de equinoccios?',
          options: ['Cambio rápido de estaciones', 'Desplazamiento lento del punto vernal ~1° cada 72 años', 'Órbita lunar', 'Rotación lunar'],
          correct: 1,
          explanation: 'La precesión es el movimiento lento del eje terrestre: punto vernal se desplaza continuamente.'
        },
        {
          q: '¿Cuál planeta orbita más rápido, Mercurio o Saturno?',
          options: ['Saturno', 'Mercurio (88 días vs 29.5 años)', 'Igual velocidad', 'No orbitan'],
          correct: 1,
          explanation: 'Mercurio 88 días es el planeta más rápido; Saturno 29.5 años es lento.'
        },
        {
          q: '¿Qué es el perihelio?',
          options: ['Punto más lejano del Sun', 'Punto más cercano del Sun en la órbita', 'Inclinación orbital', 'Velocidad promedio'],
          correct: 1,
          explanation: 'Perihelio es el punto donde un planeta está más cerca del Sun.'
        },
        {
          q: '¿Cuánto dura una Era astrológica (signo precesional)?',
          options: ['72 años', '360 años', '~2150 años (Era Piscis a Era Acuario ~2150 d.C.)', '365 días'],
          correct: 2,
          explanation: 'Una Era astrológica dura ~2150 años para recorrer un signo zodiacal por precesión.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M1_carta_natal'] = {
      id: 'M1_carta_natal',
      moduleId: 'M1',
      title: 'La carta natal',
      titleEn: 'The Natal Chart',
      level: 'basico',
      prerequisites: [],
      content: {
        summary: 'La carta natal es un mapa del cielo al momento exacto del nacimiento que requiere tres datos precisos: fecha, hora exacta y lugar. Representa los cuatro ángulos cardinales (Ascendente, Descendente, Medio Cielo, Fondo Cielo), la posición de los planetas en signos y casas, y se interpreta como un patrón integrado que refleja la psicología y potencial de vida de una persona.',
        keyPoints: [
          'Tres datos esenciales: fecha, hora exacta, lugar con coordenadas precisas',
          'Cuatro ángulos: ASC (personalidad), DESC (relaciones), MC (vocación), IC (raíces)',
          'Sun = identidad y propósito; Moon = emociones e instinto; ASC = máscara social',
          'Hemisferios: oriental (yo), occidental (otros); superior (público), inferior (privado)',
          'Cuadrantes: cuatro secciones del desarrollo psicológico progresivo',
          'Carta como patrón integrado: análisis de elementos, modalidades y polaridades',
          'Cambio de ASC ~1° cada 4 minutos: 15 minutos de error pueden cambiar interpretación',
          'Polaridad: balance entre signos yang (Fuego/Aire) y yin (Tierra/Agua)'
        ]
      },
      questions: [
        {
          q: '¿Cuáles son los tres datos necesarios para una carta natal precisa?',
          options: ['Fecha y lugar', 'Fecha, hora exacta y lugar con coordenadas', 'Solo fecha', 'Hora y lugar'],
          correct: 1,
          explanation: 'Se necesitan TRES datos: fecha, hora precisa, lugar con coordenadas.'
        },
        {
          q: '¿Qué representa el Ascendente?',
          options: ['El signo del Sun', 'La personalidad externa y máscara social', 'El signo lunar', 'La vocación'],
          correct: 1,
          explanation: 'El Ascendente es el signo en el horizonte oriental al nacimiento: cómo nos mostramos al mundo.'
        },
        {
          q: '¿Cuál es la diferencia entre MC e IC?',
          options: ['MC = Sun, IC = Moon', 'MC = alto/vocación, IC = bajo/raíces', 'No hay diferencia', 'IC es más importante'],
          correct: 1,
          explanation: 'MC (Medio Cielo) = punto alto/vocación; IC (Fondo Cielo) = punto bajo/raíces familiares.'
        },
        {
          q: '¿Qué son los cuadrantes en la carta natal?',
          options: ['Las 12 casas', 'Cuatro secciones divididas por los ejes ASC-DESC e IC-MC', 'Los signos zodiacales', 'Aspectos planetarios'],
          correct: 1,
          explanation: 'Los cuadrantes son cuatro secciones con características de desarrollo psicológico distinto.'
        },
        {
          q: '¿Por qué es crítica la hora exacta de nacimiento?',
          options: ['Para ubicar el Sun', 'Porque ASC cambia ~1° cada 4 minutos, afectando casas e interpretación', 'No importa', 'Solo para fases lunares'],
          correct: 1,
          explanation: 'El Ascendente se desplaza ~1° cada 4 minutos; 15 minutos de error puede cambiar todo.'
        },
        {
          q: '¿Cuáles son los hemisferios de la carta?',
          options: ['Doce signos', 'Oriental/occidental (yo/otros) y superior/inferior (público/privado)', 'Cuadrantes', 'Aspectos mayores'],
          correct: 1,
          explanation: 'Los hemisferios dividen la carta en cuadrantes con significados psicológicos distintos.'
        },
        {
          q: '¿En cuánto tiempo el Ascendente cambia un signo completo?',
          options: ['2 horas', '4 horas', 'Aproximadamente 2 horas (varía por latitud)', 'No cambia'],
          correct: 2,
          explanation: '~1° cada 4 minutos, así 30° (un signo) tarda ~2 horas, pero varía según latitud.'
        },
        {
          q: '¿Qué es la polaridad en una carta natal?',
          options: ['Antagonismo entre planetas', 'Balance entre signos yang (Fuego/Aire) y yin (Tierra/Agua)', 'Desorden emocional', 'Falta de aspectos'],
          correct: 1,
          explanation: 'Polaridad analiza el balance energético entre elementos activos y receptivos.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M1_coordenadas'] = {
      id: 'M1_coordenadas',
      moduleId: 'M1',
      title: 'Coordenadas geográficas y casas',
      titleEn: 'Geographic Coordinates and Houses',
      level: 'basico',
      prerequisites: ['M1_carta_natal'],
      content: {
        summary: 'La precisión en coordenadas geográficas es fundamental para calcular correctamente el Ascendente y las casas. Latitud, longitud y zona horaria afectan directamente la posición de los ángulos de la carta. La latitud determina la velocidad de cambio del ASC; la longitud define la zona horaria; ambas requieren verificación cuidadosa. El atlas geográfico y herramientas de precisión son herramientas esenciales del astrólogo profesional.',
        keyPoints: [
          'Latitud: línea norte-sur (0° Ecuador, +90° Polo Norte, -90° Polo Sur)',
          'Longitud: línea este-oeste (0° Meridiano Greenwich, +180° Este, -180° Oeste)',
          'Zona horaria: desplazamiento de 15° longitud = 1 hora de diferencia',
          'Cambio de ASC varía por latitud: más rápido en Ecuador, más lento en polos',
          'Hora oficial vs hora solar: diferencias de 30 minutos a 2 horas según país y épocas',
          'Horario de verano: cambios de hora añaden complicaciones de 1 hora',
          'Atlas geográfico: verificación de coordenadas precisas de lugar de nacimiento',
          'Rectificación: ajuste de hora natal cuando se desconoce exacta mediante eventos o métodos'
        ]
      },
      questions: [
        {
          q: '¿Qué mide la latitud?',
          options: ['Distancia este-oeste', 'Distancia norte-sur desde Ecuador', 'Altura sobre nivel del mar', 'Ángulo solar'],
          correct: 1,
          explanation: 'Latitud es distancia norte-sur: 0° Ecuador, ±90° polos.'
        },
        {
          q: '¿Qué mide la longitud?',
          options: ['Distancia norte-sur', 'Distancia este-oeste desde Meridiano Greenwich', 'Profundidad oceánica', 'Zona horaria'],
          correct: 1,
          explanation: 'Longitud es distancia este-oeste: 0° Greenwich, ±180°.'
        },
        {
          q: '¿Cuánta diferencia de longitud = 1 hora de zona horaria?',
          options: ['5°', '10°', '15°', '30°'],
          correct: 2,
          explanation: 'Una hora = 15° de longitud (360° ÷ 24 horas).'
        },
        {
          q: '¿Cómo afecta la latitud al ASC?',
          options: ['No la afecta', 'Determina la velocidad de cambio del ASC', 'Solo afecta Moon', 'Afecta aspectos'],
          correct: 1,
          explanation: 'Latitud afecta cuán rápido cambia el ASC: rápido en Ecuador, lento en polos.'
        },
        {
          q: '¿Cuál es la diferencia entre hora oficial y hora solar?',
          options: ['No hay diferencia', 'Hora oficial es zona horaria estándar; hora solar local varía según longitud exacta', 'Son idénticas', 'Hora solar es antigua'],
          correct: 1,
          explanation: 'Hora oficial puede diferir de hora solar local por 30 minutos a 2 horas.'
        },
        {
          q: '¿Qué complicación añade el horario de verano?',
          options: ['Ninguna', 'Cambios de 1 hora que afectan ASC y casas', 'Solo influencias solares', 'Cambios menores'],
          correct: 1,
          explanation: 'El horario de verano añade complejidad; debe verificarse la hora en la zona.'
        },
        {
          q: '¿Cuándo es necesaria la rectificación?',
          options: ['Siempre', 'Cuando se desconoce la hora exacta de nacimiento', 'Nunca', 'Para simplificar'],
          correct: 1,
          explanation: 'Rectificación ajusta hora natal usando eventos biográficos cuando hora exacta se desconoce.'
        },
        {
          q: '¿Cuál es la herramienta esencial para verificar coordenadas?',
          options: ['Software solo', 'Atlas geográfico con coordenadas precisas', 'Cálculo mental', 'Intuición'],
          correct: 1,
          explanation: 'Un buen atlas geográfico permite verificación independiente de coordenadas.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M1_corrientes'] = {
      id: 'M1_corrientes',
      moduleId: 'M1',
      title: 'Corrientes astrológicas principales',
      titleEn: 'Main Astrological Schools',
      level: 'basico',
      prerequisites: [],
      content: {
        summary: 'La astrología contemporánea se divide en varias corrientes principales que ofrecen perspectivas complementarias. La astrología tradicional (Ptolomeo, medieval) enfatiza dignidades y regencias; la humanística (Rudhyar) destaca el potencial y libre albedrío; la psicológica (Jung, Tarnas) conecta arquetipos con psique; la evolutiva (Green) ve la carta como mapa de desarrollo del alma; la técnica helenística recupera métodos antiguos; cada una proporciona herramientas valiosas para la práctica profesional.',
        keyPoints: [
          'Astrología tradicional: dignidades, regencias, detrimentos, exaltaciones, caídas; énfasis en estructura',
          'Astrología humanística (Rudhyar): potencial, libre albedrío, auto-realización, carta como diagrama de desarrollo',
          'Astrología psicológica: Jung, Tarnas; arquetipos como dinámicas psicológicas inconscientes',
          'Astrología evolutiva (Green): carta como mapa de evolución del alma; nodos lunares como eje evolutivo',
          'Astrología helenística: técnicas antiguas (partes árabes, fases, dignidades menores); redescubrimiento moderno',
          'Astrología transpersonal: énfasis en Saturno, Plutón, nodos; transformación y trascendencia',
          'Astrología sistémica: enfoque relacional en sinastría, cartas combinadas, ciclos sociales',
          'Integración moderna: síntesis de múltiples corrientes según contexto y cliente'
        ]
      },
      questions: [
        {
          q: '¿Cuál es el énfasis principal de la astrología tradicional?',
          options: ['Potencial del individuo', 'Dignidades, regencias y estructura del sistema', 'Evolución del alma', 'Psicología'],
          correct: 1,
          explanation: 'Astrología tradicional enfatiza dignidades, regencias y estructura formal.'
        },
        {
          q: '¿Quién desarrolla la astrología humanística?',
          options: ['Jung', 'Rudhyar', 'Green', 'Ptolomeo'],
          correct: 1,
          explanation: 'Dane Rudhyar desarrolla la astrología humanística enfatizando potencial y libre albedrío.'
        },
        {
          q: '¿Qué es la astrología evolutiva?',
          options: ['Estudio de ciclos', 'Carta como mapa de evolución del alma con nodos como eje', 'Métodos antiguos', 'Astrología de eventos'],
          correct: 1,
          explanation: 'Astrología evolutiva (Green) ve la carta natal como mapa del desarrollo anímica.'
        },
        {
          q: '¿Cuál es el conexión entre Jung y la astrología?',
          options: ['Negó la astrología', 'Conectó arquetipos con dinámicas psicológicas inconscientes', 'No hay relación', 'Creó nuevos métodos'],
          correct: 1,
          explanation: 'Jung introduce arquetipos como patrones psicológicos universales correlatos de símbolos astrológicos.'
        },
        {
          q: '¿Qué recupera la astrología helenística?',
          options: ['Signos nuevos', 'Técnicas antiguas: partes árabes, fases, dignidades menores', 'Planetas modernos', 'Software'],
          correct: 1,
          explanation: 'Helenística moderna redescubre técnicas antiguas de astronomía griega y helenística.'
        },
        {
          q: '¿Cuál es la perspectiva de la astrología transpersonal?',
          options: ['Individual solamente', 'Énfasis en Saturno, Plutón, transformación y trascendencia', 'Tradicional', 'Humanística'],
          correct: 1,
          explanation: 'Astrología transpersonal destaca transformación y conexión con lo trascendente.'
        },
        {
          q: '¿Qué es la astrología sistémica?',
          options: ['Tradicional pura', 'Enfoque relacional en sinastría, cartas combinadas y ciclos sociales', 'Evolutiva', 'Humanística'],
          correct: 1,
          explanation: 'Astrología sistémica analiza relaciones entre cartas y ciclos colectivos.'
        },
        {
          q: '¿Cuál es la mejor práctica profesional respecto a corrientes astrológicas?',
          options: ['Usar solo una', 'Integrar múltiples perspectivas según contexto y necesidades del cliente', 'Rechazar todas', 'No hay sistema'],
          correct: 1,
          explanation: 'Profesionales competentes sintetizan múltiples corrientes para servir mejor al cliente.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M1_historia'] = {
      id: 'M1_historia',
      moduleId: 'M1',
      title: 'Historia y filosofía',
      titleEn: 'History and Philosophy',
      level: 'basico',
      prerequisites: [],
      content: {
        summary: 'La astrología surge en Mesopotamia alrededor del 2000 a.C. como sistema de observación astronómica y divinación. A través de Babilonia, Helenismo, Edad Media y Renacimiento, evoluciona hacia una disciplina integradora de matemáticas, astronomía y psicología que busca comprender sincronías entre ciclos cósmicos y eventos humanos.',
        keyPoints: [
          'Babilonia 2000 a.C.: primeros registros astrológicos, desarrollo del astrolabio y zodíaco de 12 signos',
          'Ptolomeo s.II d.C.: sistematiza astrología natal con dignidades, aspectos y sistema de casas',
          'Transmisión árabe medieval: astrólogos árabes traducen y preservan textos helenísticos durante Edad Media',
          'Renacimiento: reintroducción de astrología en Europa; Copérnico, Tycho Brahe y Kepler usan cálculos astrológicos',
          'Jung introduce sincronicidad: principio acausal de coincidencia significativa entre eventos internos y externos',
          'Rudhyar desarrolla astrología humanística: énfasis en potencial y libre albedrío versus determinismo',
          'Green astrología evolutiva: carta como mapa de evolución del alma a través de vidas'
        ]
      },
      questions: [
        {
          q: '¿Cuál es el origen documentado más antiguo de la astrología?',
          options: ['Antiguo Egipto', 'Mesopotamia babilónica ~2000 a.C.', 'Grecia antigua', 'China imperial'],
          correct: 1,
          explanation: 'Mesopotamia babilónica ~2000 a.C. contiene los primeros cálculos astrológicos registrados en tablillas de barro.'
        },
        {
          q: '¿Quién sistematiza la astrología natal con dignidades y casas?',
          options: ['Hipócrates', 'Ptolomeo s.II d.C.', 'Aristóteles', 'Hiparco'],
          correct: 1,
          explanation: 'Ptolomeo en su Tetrabiblos formaliza la carta natal con dignidades planetarias y el sistema de casas.'
        },
        {
          q: '¿Cuál fue la contribución de Jung a la astrología?',
          options: ['Negarla completamente', 'Introducir sincronicidad como principio acausal', 'Crear nuevos planetas', 'Rechazar aspectos'],
          correct: 1,
          explanation: 'Jung introduce la sincronicidad: coincidencia significativa entre eventos sin causa aparente.'
        },
        {
          q: '¿Cuándo se descubren los planetas modernos?',
          options: ['Antigüedad clásica', 'Edad Media', 'S.XVIII-XX: Urano 1781, Neptuno 1846, Plutón 1930', 'S.XXI'],
          correct: 2,
          explanation: 'Los descubrimientos telescópicos expandieron el panteón planetario astrológico a 10+ cuerpos.'
        },
        {
          q: '¿Qué es la astrología humanística?',
          options: ['Astrología determinista', 'Sistema de potencial y libertad de elección', 'Rechazo de planetas', 'Solo matemática'],
          correct: 1,
          explanation: 'Rudhyar enfatiza que la carta es potencial de vida, no destino predeterminado.'
        },
        {
          q: '¿Cuál es la escuela de transformación del alma?',
          options: ['Tradicional babilónica', 'Astrología evolutiva de Green', 'Matemática pura', 'Horaria'],
          correct: 1,
          explanation: 'La astrología evolutiva ve la carta natal como mapa de la evolución anímica.'
        },
        {
          q: '¿Cuál fue el papel de los astrólogos árabes en la historia?',
          options: ['Inventar nuevos planetas', 'Traducir y preservar textos helenísticos', 'Rechazarla completamente', 'Crear software'],
          correct: 1,
          explanation: 'Astrólogos árabes como Al-Biruni tradujeron textos griegos y desarrollaron nuevas técnicas.'
        },
        {
          q: '¿Cómo se ve la astrología en la perspectiva contemporánea?',
          options: ['Como ciencia determinista', 'Como sistema sincrónico y simbólico', 'Como superstición pura', 'Como pseudociencia'],
          correct: 1,
          explanation: 'La astrología moderna se entiende como sistema sincrónico de símbolos y arquetipos.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M1_sincronicidad'] = {
      id: 'M1_sincronicidad',
      moduleId: 'M1',
      title: 'Sincronicidad y principio acausal',
      titleEn: 'Synchronicity and Acausal Principle',
      level: 'basico',
      prerequisites: [],
      content: {
        summary: 'Jung desarrolla el concepto de sincronicidad como "coincidencia significativa": eventos internos (psicológicos) y externos (cósmicos) que coinciden sin relación causal aparente. Este principio acausal es fundamental para entender cómo la astrología puede funcionar sin depender de causación física: los ciclos cósmicos no causan eventos humanos, sino que coinciden significativamente con ellos en una conexión acausal.',
        keyPoints: [
          'Sincronicidad: coincidencia significativa entre eventos psicológicos y cósmicos sin causa aparente',
          'Principio acausal: rechaza la causación directa (planetas no "causan" eventos)',
          'Jung: "La causalidad es solo un principio, y hay otros"',
          'Isomorfismo: eventos cósmicos y humanos comparten patrones estructurales similares',
          'Arquetipos: patrones universales que conectan psicología individual con ciclos cósmicos',
          'Momento sincrónico: la carta natal registra patrones cósmicos del nacimiento como correlato simbólico',
          'Diferencia con superstición: la sincronicidad es mecanismo profundo, no magia',
          'Implicaciones terapéuticas: entender sincronicidades revela patrones psicológicos inconscientes'
        ]
      },
      questions: [
        {
          q: '¿Qué es la sincronicidad según Jung?',
          options: ['Causación física directa', 'Coincidencia significativa entre eventos internos y externos sin causa aparente', 'Superstición', 'Imaginación'],
          correct: 1,
          explanation: 'Sincronicidad es coincidencia significativa acausal entre procesos psicológicos y cósmicos.'
        },
        {
          q: '¿Cuál es el principio acausal en astrología?',
          options: ['Planetas causan eventos', 'Ciclos cósmicos coinciden con eventos humanos sin causación directa', 'No existe relación', 'Es superstición'],
          correct: 1,
          explanation: 'No hay causación; hay correlación significativa entre patrones cósmicos y humanos.'
        },
        {
          q: '¿Qué es un isomorfismo en el contexto de sincronicidad?',
          options: ['Cambio de forma', 'Patrones estructurales similares entre eventos cósmicos y psicológicos', 'Ilusión óptica', 'Coincidencia'],
          correct: 1,
          explanation: 'Isomorfismo: eventos cósmicos y humanos comparten estructuras similares.'
        },
        {
          q: '¿Qué son los arquetipos en relación a la astrología?',
          options: ['Signos individuales', 'Patrones universales que conectan psicología individual con ciclos cósmicos', 'Planetas', 'Casas'],
          correct: 1,
          explanation: 'Arquetipos son patrones universales que personifican ciclos cósmicos en la psique.'
        },
        {
          q: '¿Cómo registra la carta natal la sincronicidad?',
          options: ['Por causación', 'Como patrón cósmico correlato del momento exacto de nacimiento', 'Al azar', 'No la registra'],
          correct: 1,
          explanation: 'La carta natal captura el patrón cósmico sincrónico al nacimiento exacto.'
        },
        {
          q: '¿Cuál es la diferencia entre sincronicidad y superstición?',
          options: ['No hay diferencia', 'Sincronicidad es mecanismo profundo de conexión acausal; superstición es atribución mágica', 'Superstición es verdadera', 'Ninguna relación'],
          correct: 1,
          explanation: 'La sincronicidad es principio psicológico-cósmico real; la superstición es atribución mágica falsa.'
        },
        {
          q: '¿Qué implicación terapéutica tiene entender sincronicidades?',
          options: ['Ninguna', 'Revela patrones psicológicos inconscientes y su correlato cósmico', 'Causa enfermedad', 'Es distracción'],
          correct: 1,
          explanation: 'Comprender sincronicidades permite integración consciente de patrones inconscientes.'
        },
        {
          q: '¿Cómo se relaciona el tiempo exacto con la sincronicidad?',
          options: ['No importa', 'El momento exacto captura el patrón cósmico sincrónico del nacimiento', 'Solo aproximado', 'Es arbitrario'],
          correct: 1,
          explanation: 'La precisión temporal es crítica para capturar la sincronicidad exacta del momento.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M1_software'] = {
      id: 'M1_software',
      moduleId: 'M1',
      title: 'Software astrológico profesional',
      titleEn: 'Professional Astrology Software',
      level: 'basico',
      prerequisites: [],
      content: {
        summary: 'Las herramientas de cálculo astrológico van desde plataformas web gratuitas hasta software especializados para profesionales. Cada uno ofrece diferentes características: Solar Fire es el estándar profesional; Astro.com es gratuito y preciso; Sirius enfatiza técnicas helenísticas; TimePassages destaca por interface intuitiva. El astrólogo competente debe verificar cálculos y entender los principios detrás de cada herramienta.',
        keyPoints: [
          'Solar Fire: estándar oro profesional con cobertura completa de técnicas (tránsitos, progresiones, sinastría, horaria)',
          'Astro.com: plataforma suiza gratuita, precisa, accesible sin instalación',
          'Sirius: énfasis en astrología helenística y técnicas antiguas avanzadas',
          'TimePassages: interface intuitiva enfocada en tránsitos y progresiones para público general',
          'AstroWin: opción económica para cálculos básicos de cartas y tránsitos',
          'Efemérides, tablas de casas y atlas geográfico: herramientas de referencia esenciales',
          'Verificación manual: astrólogo competente entiende cómo se calculan posiciones, orbes y aspectos',
          'Selección según técnicas, cliente y presupuesto: no existe software único para todos'
        ]
      },
      questions: [
        {
          q: '¿Cuál es la plataforma astrológica web gratuita más confiable?',
          options: ['Solar Fire', 'Astro.com', 'Sirius', 'TimePassages'],
          correct: 1,
          explanation: 'Astro.com (suiza) proporciona cálculos precisos y accesibles sin instalación ni costo.'
        },
        {
          q: '¿Cuál es la ventaja principal de Solar Fire?',
          options: ['Es gratuito', 'Cobertura completa profesional de técnicas y métodos', 'Interface intuitiva', 'Solo cálculos solares'],
          correct: 1,
          explanation: 'Solar Fire es el estándar oro para profesionales con tránsitos, progresiones, sinastría, horaria.'
        },
        {
          q: '¿Por qué debe un astrólogo hacer cálculos manuales además de usar software?',
          options: ['Para no depender de máquinas', 'Para entender principios, verificar resultados y ser competente', 'No importa', 'Para ser lento'],
          correct: 1,
          explanation: 'Un astrólogo competente entiende cómo se calculan posiciones, orbes y aspectos.'
        },
        {
          q: '¿Cuál es la característica distintiva de Sirius?',
          options: ['El más barato', 'Énfasis especializado en astrología helenística avanzada', 'Solo para Mac', 'No permite aspectos menores'],
          correct: 1,
          explanation: 'Sirius (alemán) destaca por técnicas helenísticas y antiguas sofisticadas.'
        },
        {
          q: '¿Qué herramientas de referencia debe poseer un astrólogo además de software?',
          options: ['Solo software', 'Efemérides, tablas de casas y atlas geográfico', 'Solo calculadora', 'Nada más'],
          correct: 1,
          explanation: 'Herramientas de referencia permiten verificación manual independiente.'
        },
        {
          q: '¿Para qué es particularmente útil TimePassages?',
          options: ['Astrología mundana', 'Análisis intuitivo de tránsitos y progresiones personales', 'Horaria avanzada', 'Asteroides'],
          correct: 1,
          explanation: 'TimePassages destaca por interface amigable para análisis de tránsitos y progresiones.'
        },
        {
          q: '¿Cómo se debe seleccionar el software astrológico?',
          options: ['Solo por precio', 'Según técnicas que usarás, necesidades del cliente y presupuesto', 'El más popular', 'Todos son iguales'],
          correct: 1,
          explanation: 'La selección debe considerar técnicas, cliente, presupuesto y características específicas.'
        },
        {
          q: '¿Cuál es una buena práctica profesional respecto a los cálculos?',
          options: ['Confiar ciegamente en software', 'Comparar entre softwares y verificar cálculos importantes manualmente', 'No verificar', 'Solo intuición'],
          correct: 1,
          explanation: 'Profesionales competentes verifican cálculos críticos entre múltiples fuentes.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M1_tropical_sideral'] = {
      id: 'M1_tropical_sideral',
      moduleId: 'M1',
      title: 'Zodiaco tropical versus sideral',
      titleEn: 'Tropical versus Sidereal Zodiac',
      level: 'basico',
      prerequisites: ['M1_astronomia'],
      content: {
        summary: 'Existen dos sistemas zodiacales principales: el tropical usa el punto vernal (0° Aries al equinoccio vernal ~21 marzo) como referencia fija independiente de constelaciones; el sideral usa la posición actual de constelaciones ajustado por precesión. La diferencia es ~24° en la actualidad. El sistema tropical es el más usado en Occidente; el sideral predomina en India y tiene defensores en Occidente.',
        keyPoints: [
          'Zodiaco tropical: 0° Aries = punto vernal equinoccio vernal ~21 marzo, referencia fija',
          'Zodiaco sideral: 0° Aries = constelación Aries actual, ajustado por precesión',
          'Diferencia actual: ~23°-24° entre tropical y sideral (ayanamsa)',
          'Ayanamsa: desplazamiento cálculo por precesión desde época fija',
          'Tropical: dominante Occidente; énfasis en ciclos estacionales y arquetípicos',
          'Sideral: predominante India (Jyotish); énfasis en constelaciones reales',
          'Precesión: desplazamiento ~1° cada 72 años, ~24° cada 1728 años',
          'Selección es elección metodológica: ambos sistemas funcionan si se aplican consistentemente'
        ]
      },
      questions: [
        {
          q: '¿Cuál es el punto de referencia del zodiaco tropical?',
          options: ['Constelación Aries', 'Punto vernal equinoccio vernal ~21 marzo', 'Primera estrella', 'Afelio terrestre'],
          correct: 1,
          explanation: 'Tropical usa punto vernal como referencia fija independiente de constelaciones.'
        },
        {
          q: '¿Qué usa como referencia el zodiaco sideral?',
          options: ['Punto vernal', 'Posición actual de constelaciones ajustada por precesión', 'Equinoccios', 'Solsticios'],
          correct: 1,
          explanation: 'Sideral usa constelaciones reales actuales como referencia.'
        },
        {
          q: '¿Cuál es la diferencia actual entre tropical y sideral?',
          options: ['0°', '~12°', '~23°-24° (ayanamsa)', '~45°'],
          correct: 2,
          explanation: 'La diferencia actual es aproximadamente 23°-24°, cifra llamada ayanamsa.'
        },
        {
          q: '¿Qué es el ayanamsa?',
          options: ['Constelación', 'Desplazamiento angular por precesión entre tropical y sideral', 'Tipo de aspecto', 'Planeta'],
          correct: 1,
          explanation: 'Ayanamsa es la diferencia numérica entre sistemas tropical y sideral.'
        },
        {
          q: '¿Cuál sistema predomina en Occidente?',
          options: ['Sideral', 'Tropical', 'Ambos por igual', 'Ninguno'],
          correct: 1,
          explanation: 'El sistema tropical es estándar en astrología occidental moderna.'
        },
        {
          q: '¿Cuál sistema predomina en India?',
          options: ['Tropical occidental', 'Sideral (Jyotish/astrología védica)', 'Ambos', 'Uno nuevo'],
          correct: 1,
          explanation: 'Jyotish (astrología hindú) usa tradicionalmente el sistema sideral.'
        },
        {
          q: '¿Cuál es la causa de la diferencia entre tropical y sideral?',
          options: ['Error de cálculo', 'Precesión de equinoccios: desplazamiento lento del eje terrestre', 'Órbita lunar', 'Diferencia de métodos'],
          correct: 1,
          explanation: 'La precesión causa el desplazamiento ~1° cada 72 años entre sistemas.'
        },
        {
          q: '¿Cómo deben funcionar ambos sistemas?',
          options: ['Uno es correcto, otro falso', 'Ambos funcionan si se aplican consistentemente en su propia lógica', 'No funcionan', 'Son idénticos'],
          correct: 1,
          explanation: 'Ambos sistemas son válidos si se usan coherentemente; la selección es metodológica.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M2_decanatos'] = {
      id: 'M2_decanatos',
      moduleId: 'M2',
      title: 'Los decanatos y segundas cúspides',
      titleEn: 'Decanates and Second Cusps',
      level: 'intermedio',
      prerequisites: ['M2_zodiaco','M2_elementos','M2_modalidades'],
      content: {
        summary: 'Cada signo de 30° se divide en tres decanatos de 10° cada uno. El primer decanato (0-10°) es puro del signo; el segundo (10-20°) recibe influencia del siguiente signo de su elemento; el tercero (20-30°) recibe influencia del segundo signo siguiente del mismo elemento. Los decanatos proporcionan matices psicológicos refinados en la interpretación de planetas y ASC.',
        keyPoints: [
          'Estructura: cada signo = 3 decanatos de 10° cada uno',
          'Primer decanato (0-10°): puro del signo, energía máxima, características definidas',
          'Segundo decanato (10-20°): mezcla del signo + siguiente signo del mismo elemento',
          'Tercer decanato (20-30°): mezcla del signo + segundo signo siguiente del mismo elemento',
          'Ejemplo: Aries 1° decanato (puro Aries), 11° decanato (Aries-Leo), 21° decanato (Aries-Sagitario)',
          'Planetas en decanatos refinan su interpretación con matices adicionales',
          'ASC en decanato específico: nuances de máscara social y personalidad',
          'Regentes planetarios: cada decanato tiene regente del signo y del sub-regente del decanato'
        ]
      },
      questions: [
        {
          q: '¿Cuántos grados tiene cada decanato?',
          options: ['5°', '10°', '15°', '20°'],
          correct: 1,
          explanation: 'Cada decanato ocupa 10° (30° ÷ 3 decanatos).'
        },
        {
          q: '¿Cómo es la energía en el primer decanato de un signo?',
          options: ['Débil', 'Pura del signo, máxima expresión característica', 'Mixta', 'Alterada'],
          correct: 1,
          explanation: 'Primer decanato es puro del signo sin influencias externas.'
        },
        {
          q: '¿Qué influencias recibe el segundo decanato?',
          options: ['Solo del signo', 'Del signo + siguiente signo del mismo elemento', 'De otros elementos', 'Ninguna'],
          correct: 1,
          explanation: 'Segundo decanato mezcla el signo + siguiente del mismo elemento.'
        },
        {
          q: '¿Ejemplo de segundo decanato de Aries?',
          options: ['Aries puro', 'Aries + Leo (ambos Fuego)', 'Aries + Tauro', 'Aries + Géminis'],
          correct: 1,
          explanation: 'Aries segundo decanato (10-20°) = Aries + Leo (siguiente Fuego).'
        },
        {
          q: '¿Ejemplo de tercer decanato de Tauro?',
          options: ['Tauro puro', 'Tauro + Virgo', 'Tauro + Capricornio (siguiente Tierra después de Virgo)', 'Tauro + Géminis'],
          correct: 2,
          explanation: 'Tauro tercer decanato (20-30°) = Tauro + Capricornio (segundo Tierra).'
        },
        {
          q: '¿Cómo se interpreta un planeta en un decanato específico?',
          options: ['Ignora el decanato', 'Se refina con matices del decanato además del signo', 'Solo por signo', 'Cambia completamente'],
          correct: 1,
          explanation: 'Planeta en decanato recibe matices refinados del sub-regente decanatario.'
        },
        {
          q: '¿Qué son los regentes en decanatos?',
          options: ['Dos signos', 'Regente del signo + sub-regente del decanato específico', 'Solo uno', 'Ninguno'],
          correct: 1,
          explanation: 'Cada decanato tiene dos regentes: el del signo y el sub-regente del decanato.'
        },
        {
          q: '¿Cómo afecta el decanato al Ascendente?',
          options: ['No afecta', 'Proporciona matices en máscara social y presentación personal', 'Lo cambia completamente', 'Es irrelevante'],
          correct: 1,
          explanation: 'ASC en decanato específico refina la presentación social y máscara.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M2_elementos'] = {
      id: 'M2_elementos',
      moduleId: 'M2',
      title: 'Los elementos: triplicidades',
      titleEn: 'Elements: Triplicities',
      level: 'basico',
      prerequisites: ['M2_zodiaco'],
      content: {
        summary: 'Los cuatro elementos —Fuego, Tierra, Aire y Agua— son la clasificación más fundamental del zodiaco. Cada elemento agrupa tres signos que comparten cualidades energéticas similares. El balance de elementos en la carta revela el temperamento dominante y áreas de desarrollo. Fuego y Aire son activos (yang); Tierra y Agua son receptivos (yin).',
        keyPoints: [
          'Fuego (Aries, Leo, Sagitario): impulso, acción, inspiración, voluntad, entusiasmo, seguridad en sí mismo',
          'Tierra (Tauro, Virgo, Capricornio): materialidad, pragmatismo, estructura, eficiencia, realización práctica',
          'Aire (Géminis, Libra, Acuario): intelecto, comunicación, análisis, relación, pensamiento abstracto',
          'Agua (Cáncer, Escorpio, Piscis): emoción, intuición, profundidad psíquica, sensibilidad, transformación',
          'Fuego y Aire = elementos activos/yang: orientados hacia expansión y expresión',
          'Tierra y Agua = elementos receptivos/yin: orientados hacia introspección y asimilación',
          'Elemento sin planetas: área de vida que requiere desarrollo consciente e integración',
          'Balance elemental: carta equilibrada en elementos vs sobrecarga de un elemento'
        ]
      },
      questions: [
        {
          q: '¿Cuáles son los signos de Fuego?',
          options: ['Aries, Tauro, Géminis', 'Aries, Leo, Sagitario', 'Leo, Virgo, Libra', 'Sagitario, Capricornio, Acuario'],
          correct: 1,
          explanation: 'Los signos de Fuego son Aries, Leo y Sagitario.'
        },
        {
          q: '¿Cuáles son los signos de Tierra?',
          options: ['Aries, Tauro, Géminis', 'Tauro, Virgo, Capricornio', 'Cáncer, Escorpio, Piscis', 'Géminis, Libra, Acuario'],
          correct: 1,
          explanation: 'Los signos de Tierra son Tauro, Virgo y Capricornio.'
        },
        {
          q: '¿Cuáles son los signos de Aire?',
          options: ['Aries, Leo, Sagitario', 'Tauro, Virgo, Capricornio', 'Géminis, Libra, Acuario', 'Cáncer, Escorpio, Piscis'],
          correct: 2,
          explanation: 'Los signos de Aire son Géminis, Libra y Acuario.'
        },
        {
          q: '¿Cuáles son los signos de Agua?',
          options: ['Aries, Leo, Sagitario', 'Tauro, Virgo, Capricornio', 'Géminis, Libra, Acuario', 'Cáncer, Escorpio, Piscis'],
          correct: 3,
          explanation: 'Los signos de Agua son Cáncer, Escorpio y Piscis.'
        },
        {
          q: '¿Cuáles elementos son activos (yang)?',
          options: ['Tierra y Agua', 'Fuego y Aire', 'Fuego y Tierra', 'Aire y Agua'],
          correct: 1,
          explanation: 'Fuego y Aire son activos/yang, orientados hacia expansión.'
        },
        {
          q: '¿Cuáles elementos son receptivos (yin)?',
          options: ['Fuego y Aire', 'Tierra y Agua', 'Fuego y Agua', 'Aire y Tierra'],
          correct: 1,
          explanation: 'Tierra y Agua son receptivos/yin, orientados hacia introspección.'
        },
        {
          q: '¿Qué indica un elemento completamente sin planetas en la carta?',
          options: ['Fortaleza extrema', 'Área de vida que requiere desarrollo consciente e integración', 'Debilidad permanente', 'Sin significado'],
          correct: 1,
          explanation: 'Elemento sin planetas indica área que requiere integración consciente.'
        },
        {
          q: '¿Cuál es la importancia del balance elemental?',
          options: ['No importa', 'Revela temperamento y áreas de desarrollo en la carta', 'Solo para astrólogos', 'Es arbitrario'],
          correct: 1,
          explanation: 'El balance elemental revela el temperamento y potenciales de desarrollo.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M2_grados'] = {
      id: 'M2_grados',
      moduleId: 'M2',
      title: 'Grados zodiacales especiales',
      titleEn: 'Special Zodiacal Degrees',
      level: 'intermedio',
      prerequisites: ['M2_zodiaco','M2_decanatos'],
      content: {
        summary: 'Dentro del zodiaco existen grados especiales que potencian o modifican el significado de planetas y puntos. Los grados críticos (0°, 15°, 30°) marcan fases del signo; los grados Sabiáricos proporcionan símbolos arquetípicos adicionales; los grados fijos/cardinales/mutables refuerzan cualidades de modalidad; los grados anarética crean urgencia. La maestría en grados proporciona profundidad interpretativa refinada.',
        keyPoints: [
          'Grados críticos: 0° (iniciación), 15° (plenitud/poder), 30° (culminación/crisis)',
          'Grados Sabiáricos: imágenes arquetípicas específicas para cada grado (1°-30° cada signo)',
          'Grados cardinales: 0°, 10°, 20° enfatizan iniciativa y movimiento',
          'Grados fijos: 8-9°, 18-19°, 26-27° enfatizan estabilidad y consolidación',
          'Grados mutables: 4-5°, 14-15°, 24-25° enfatizan adaptabilidad',
          'Grado anarético (29°): urgencia, culminación, síntesis; "grado de crisis"',
          'Grados en signos fijos pueden indicar fijación psicológica',
          'Integración: grados refinan interpretación planetaria junto con signo, casa, aspectos'
        ]
      },
      questions: [
        {
          q: '¿Cuál es la significancia del grado 0° en un signo?',
          options: ['Débil', 'Iniciación, potencial puro, comienzo del signo', 'Culminación', 'Crisis'],
          correct: 1,
          explanation: '0° es el punto de iniciación y potencial puro del signo.'
        },
        {
          q: '¿Cuál es la significancia del grado 15°?',
          options: ['Debilidad', 'Plenitud máxima, poder pleno, expresión completa del signo', 'Comienzo', 'Final'],
          correct: 1,
          explanation: '15° es el grado de plenitud y poder máximo del signo.'
        },
        {
          q: '¿Cuál es la significancia del grado 30°?',
          options: ['Plenitud', 'Culminación, crisis, síntesis/conclusión del signo', 'Inicio', 'Potencial'],
          correct: 1,
          explanation: '30° marca culminación y crisis del signo antes de transición.'
        },
        {
          q: '¿Qué son los grados Sabiáricos?',
          options: ['Astrología árabe', 'Imágenes arquetípicas específicas para cada grado 1-30 de cada signo', 'Divisiones numéricas', 'Aspectos'],
          correct: 1,
          explanation: 'Sabiáricos proporcionan símbolos y significados específicos por grado.'
        },
        {
          q: '¿Cuál es la característica del grado anarético (29°)?',
          options: ['Iniciación', 'Urgencia, culminación, síntesis, "grado de crisis"', 'Estabilidad', 'Debilidad'],
          correct: 1,
          explanation: 'Grado anarético (29°) es punto final de tensión y culminación.'
        },
        {
          q: '¿Qué refuerzan los grados cardinales?',
          options: ['Receptividad', 'Iniciativa, movimiento hacia adelante, acción', 'Análisis', 'Emoción'],
          correct: 1,
          explanation: 'Grados cardinales refuerzan iniciativa y movimiento.'
        },
        {
          q: '¿Qué refuerzan los grados fijos?',
          options: ['Cambio', 'Estabilidad, consolidación, fijación', 'Adaptabilidad', 'Movimiento'],
          correct: 1,
          explanation: 'Grados fijos refuerzan estabilidad y consolidación.'
        },
        {
          q: '¿Cómo se integran los grados en interpretación?',
          options: ['Se ignoran', 'Se refinan junto con signo, casa, aspectos para matices adicionales', 'Reemplazan al signo', 'Son independientes'],
          correct: 1,
          explanation: 'Los grados proporcionan matices refinados en la interpretación completa.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M2_modalidades'] = {
      id: 'M2_modalidades',
      moduleId: 'M2',
      title: 'Las modalidades: cardinales, fijas, mutables',
      titleEn: 'Modalities: Cardinal, Fixed, Mutable',
      level: 'basico',
      prerequisites: ['M2_zodiaco'],
      content: {
        summary: 'Las tres modalidades describen estilos de funcionamiento energético: cardinales inician, fijas mantienen, mutables adaptan. Cada modalidad agrupa cuatro signos (uno de cada elemento). Las modalidades revelan cómo una persona aborda la vida: iniciativa versus estabilidad versus flexibilidad. Una carta con exceso de una modalidad muestra un patrón particular de comportamiento y adaptación.',
        keyPoints: [
          'Cardinales (Aries, Cáncer, Libra, Capricornio): iniciativa, acción, comienzo nuevos ciclos, liderazgo',
          'Fijas (Tauro, Leo, Escorpio, Acuario): estabilidad, persistencia, resistencia al cambio, profundidad',
          'Mutables (Géminis, Virgo, Sagitario, Piscis): adaptabilidad, flexibilidad, comunicación, transición',
          'Cardinales: energía de comienzo y movimiento hacia adelante',
          'Fijas: energía de consolidación, profundidad, poder latente',
          'Mutables: energía de intercambio, versatilidad, puente entre ciclos',
          'Cuadratura de modalidades: 90° entre signos de misma modalidad',
          'Exceso de modalidad: carácter dominado por uno solo de los tres estilos'
        ]
      },
      questions: [
        {
          q: '¿Cuáles son los signos cardinales?',
          options: ['Aries, Leo, Sagitario, Acuario', 'Aries, Cáncer, Libra, Capricornio', 'Tauro, Leo, Escorpio, Acuario', 'Géminis, Virgo, Sagitario, Piscis'],
          correct: 1,
          explanation: 'Los signos cardinales son Aries, Cáncer, Libra y Capricornio.'
        },
        {
          q: '¿Cuáles son los signos fijos?',
          options: ['Aries, Cáncer, Libra, Capricornio', 'Tauro, Leo, Escorpio, Acuario', 'Géminis, Virgo, Sagitario, Piscis', 'Aries, Leo, Sagitario, Acuario'],
          correct: 1,
          explanation: 'Los signos fijos son Tauro, Leo, Escorpio y Acuario.'
        },
        {
          q: '¿Cuáles son los signos mutables?',
          options: ['Aries, Cáncer, Libra, Capricornio', 'Tauro, Leo, Escorpio, Acuario', 'Géminis, Virgo, Sagitario, Piscis', 'Aries, Leo, Sagitario, Acuario'],
          correct: 2,
          explanation: 'Los signos mutables son Géminis, Virgo, Sagitario y Piscis.'
        },
        {
          q: '¿Cuál es la característica de los signos cardinales?',
          options: ['Estabilidad', 'Iniciativa, acción, comienzo de nuevos ciclos, liderazgo', 'Adaptabilidad', 'Resistencia'],
          correct: 1,
          explanation: 'Los cardinales son iniciadores, líderes que comienzan ciclos nuevos.'
        },
        {
          q: '¿Cuál es la característica de los signos fijos?',
          options: ['Cambio constante', 'Estabilidad, persistencia, resistencia al cambio, profundidad', 'Adaptabilidad', 'Ligereza'],
          correct: 1,
          explanation: 'Los fijos proporcionan estabilidad, persistencia y profundidad.'
        },
        {
          q: '¿Cuál es la característica de los signos mutables?',
          options: ['Rigidez', 'Estabilidad total', 'Adaptabilidad, flexibilidad, comunicación, transición', 'Liderazgo'],
          correct: 2,
          explanation: 'Los mutables son adaptativos, flexibles, puente entre ciclos.'
        },
        {
          q: '¿Qué indica exceso de modalidad cardinal en la carta?',
          options: ['Apatía', 'Carácter dominado por iniciativa, acción y liderazgo', 'Falta de movimiento', 'Sin significado'],
          correct: 1,
          explanation: 'Exceso cardinal = persona de acción, iniciativa y liderazgo.'
        },
        {
          q: '¿Cómo se distribuyen las modalidades entre elementos?',
          options: ['Una modalidad por elemento', 'Cada modalidad agrupa un signo de cada elemento', 'No hay distribución', 'Arbitraria'],
          correct: 1,
          explanation: 'Cada modalidad tiene 4 signos: uno de cada elemento (Fuego, Tierra, Aire, Agua).'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M2_polaridades'] = {
      id: 'M2_polaridades',
      moduleId: 'M2',
      title: 'Polaridades: masculina y femenina',
      titleEn: 'Polarities: Masculine and Feminine',
      level: 'basico',
      prerequisites: ['M2_elementos','M2_modalidades'],
      content: {
        summary: 'Las polaridades dividen el zodiaco en signos masculinos (yang: Fuego, Aire) y femeninos (yin: Tierra, Agua). Esto no se refiere a género biológico sino a cualidades energéticas: extroversión/introversión, expresión/recepción, proyección/introspección. El balance de polaridades en la carta revela tendencias psicológicas de adaptación y estilo de vida.',
        keyPoints: [
          'Signos masculinos/yang: Aries, Géminis, Leo, Libra, Sagitario, Acuario (Fuego, Aire)',
          'Signos femeninos/yin: Tauro, Cáncer, Virgo, Escorpio, Capricornio, Piscis (Tierra, Agua)',
          'Yang = extroversión, expresión activa, proyección hacia mundo externo',
          'Yin = introversión, recepción, inmersión en mundo interno',
          'Polaridad No = opuestos complementarios en el zodiaco (Aries-Libra, Tauro-Escorpio, etc.)',
          'Balance de polaridades: armonía entre acción/recepción, expresión/introspección',
          'Sobrecarga yang: tendencia excesiva a acción, dificultad con introspección',
          'Sobrecarga yin: tendencia excesiva a introspección, dificultad con acción decisiva'
        ]
      },
      questions: [
        {
          q: '¿Cuántos signos son masculinos/yang?',
          options: ['4', '6', '8', '12'],
          correct: 1,
          explanation: 'Hay 6 signos masculinos: Aries, Géminis, Leo, Libra, Sagitario, Acuario.'
        },
        {
          q: '¿Cuál es la característica principal de polaridad yang?',
          options: ['Receptividad', 'Extroversión, expresión activa, proyección', 'Introspección', 'Pasividad'],
          correct: 1,
          explanation: 'Yang = extroversión, expresión activa hacia mundo externo.'
        },
        {
          q: '¿Cuál es la característica principal de polaridad yin?',
          options: ['Agresión', 'Introversión, recepción, inmersión en mundo interno', 'Acción', 'Extroversión'],
          correct: 1,
          explanation: 'Yin = introversión, recepción, inmersión en procesos internos.'
        },
        {
          q: '¿Cuál es la polaridad de Tauro?',
          options: ['Yang/masculina', 'Yin/femenina', 'Neutra', 'Ambas'],
          correct: 1,
          explanation: 'Tauro (Tierra) es femenino/yin.'
        },
        {
          q: '¿Cuál es la polaridad de Sagitario?',
          options: ['Yin/femenina', 'Yang/masculina', 'Neutra', 'Ambas'],
          correct: 1,
          explanation: 'Sagitario (Fuego) es masculino/yang.'
        },
        {
          q: '¿Qué son los opuestos complementarios en polaridad?',
          options: ['Signos iguales', 'Signos en polaridad No opuesta (Aries-Libra, Tauro-Escorpio, etc.)', 'Misma modalidad', 'Mismo elemento'],
          correct: 1,
          explanation: 'Polaridad No = opuestos complementarios a 180° en el zodiaco.'
        },
        {
          q: '¿Qué indica sobrecarga de polaridad yang?',
          options: ['Introspección excesiva', 'Tendencia a acción, dificultad con introspección', 'Equilibrio', 'Pasividad'],
          correct: 1,
          explanation: 'Sobrecarga yang = tendencia excesiva a acción, falta de introspección.'
        },
        {
          q: '¿Cuál es el ideal en términos de polaridades?',
          options: ['Solo yang', 'Solo yin', 'Balance armónico entre yang/yin', 'No importa'],
          correct: 2,
          explanation: 'El balance de polaridades proporciona armonía entre acción e introspección.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M2_signos_aire_agua'] = {
      id: 'M2_signos_aire_agua',
      moduleId: 'M2',
      title: 'Signos de Aire y Agua',
      titleEn: 'Air and Water Signs',
      level: 'intermedio',
      prerequisites: ['M2_elementos','M2_modalidades'],
      content: {
        summary: 'Los signos de Aire (Géminis, Libra, Acuario) aportan intelecto, comunicación, relación; los de Agua (Cáncer, Escorpio, Piscis) aportan emoción, intuición, profundidad psíquica. Juntos forman el eje relacional: Aire proporciona comprensión mental, Agua la empatía emocional. El desequilibrio entre ambos afecta la capacidad de conectar mentalmente y emocionalmente.',
        keyPoints: [
          'GÉMINIS (Mutable Aire): comunicador, inquieto, intelectual, versatilidad, información, curiosidad',
          'LIBRA (Cardinal Aire): diplomático, estético, relacional, justicia, balance, asociación',
          'ACUARIO (Fijo Aire): revolucionario, humanitario, perspectiva universal, innovación, independencia',
          'CÁNCER (Cardinal Agua): emocional, protector, familia, raíces, sensibilidad, seguridad emocional',
          'ESCORPIO (Fijo Agua): intenso, investigador, transformación, psiquismo, poder, profundidad oculta',
          'PISCIS (Mutable Agua): visionario, empático, espiritual, intuición, disolución límites, compasión',
          'Aire sin Agua: intelecto frío, dificultad emocional',
          'Agua sin Aire: emoción sin comprensión, comunicación confusa'
        ]
      },
      questions: [
        {
          q: '¿Cuál es la cualidad principal de Géminis?',
          options: ['Profundidad', 'Comunicación, intelectualidad, versatilidad, curiosidad informativa', 'Emoción', 'Silencio'],
          correct: 1,
          explanation: 'Géminis es el comunicador mutable, inquieto e intelectual.'
        },
        {
          q: '¿Cuál es la cualidad principal de Libra?',
          options: ['Conflicto', 'Diplomacia, estética, relación, justicia, balance', 'Soledad', 'Desequilibrio'],
          correct: 1,
          explanation: 'Libra es el diplomático cardinal, buscador de balance.'
        },
        {
          q: '¿Cuál es la cualidad principal de Acuario?',
          options: ['Tradicionalismo', 'Revolución, humanitarismo, perspectiva universal, innovación', 'Conformismo', 'Conservadurismo'],
          correct: 1,
          explanation: 'Acuario es el revolucionario fijo, humanitario e innovador.'
        },
        {
          q: '¿Cuál es la cualidad principal de Cáncer?',
          options: ['Dureza', 'Emoción, protección, familia, raíces, sensibilidad emocional', 'Desapego', 'Frialdad'],
          correct: 1,
          explanation: 'Cáncer es el emocional cardinal, protector familiar.'
        },
        {
          q: '¿Cuál es la cualidad principal de Escorpio?',
          options: ['Superficialidad', 'Intensidad, investigación, transformación, profundidad psíquica', 'Ligereza', 'Ingenuidad'],
          correct: 1,
          explanation: 'Escorpio es el intenso fijo, investigador de lo oculto.'
        },
        {
          q: '¿Cuál es la cualidad principal de Piscis?',
          options: ['Materialismo', 'Visión mística, empatía, intuición, espiritualidad, compasión universal', 'Egoísmo', 'Cinismo'],
          correct: 1,
          explanation: 'Piscis es el visionario mutable, empático y espiritual.'
        },
        {
          q: '¿Cuál es el peligro del exceso de Aire sin Agua?',
          options: ['Emoción excesiva', 'Intelecto frío, desconexión emocional, frialdad relacional', 'Ilusión', 'Pasión ciega'],
          correct: 1,
          explanation: 'Aire sin Agua = mente sin corazón, desconexión emocional.'
        },
        {
          q: '¿Cuál es el peligro del exceso de Agua sin Aire?',
          options: ['Frialdad total', 'Emoción confusa sin comprensión mental, comunicación turbulenta', 'Insensibilidad', 'Sequedad'],
          correct: 1,
          explanation: 'Agua sin Aire = emoción sin comprensión, confusión comunicativa.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M2_signos_fuego_tierra'] = {
      id: 'M2_signos_fuego_tierra',
      moduleId: 'M2',
      title: 'Signos de Fuego y Tierra',
      titleEn: 'Fire and Earth Signs',
      level: 'intermedio',
      prerequisites: ['M2_elementos','M2_modalidades'],
      content: {
        summary: 'Los signos de Fuego (Aries, Leo, Sagitario) aportan iniciativa, pasión, confianza; los de Tierra (Tauro, Virgo, Capricornio) aportan realización práctica, solidez, eficiencia. Juntos forman el eje de manifestación: Fuego proporciona la chispa inspiradora, Tierra la materialización concreta. El balance entre ambos es crucial en una carta natal profesional.',
        keyPoints: [
          'ARIES (Cardinal Fuego): iniciador, pionero, guerrero, coraje, acción inmediata, impulsivo, libre albedrío',
          'LEO (Fijo Fuego): creador, generoso, dramático, confianza, autoexpresión, orgullo, poder personal',
          'SAGITARIO (Mutable Fuego): explorador, filósofo, aventurero, optimismo, expansión, búsqueda de verdad',
          'TAURO (Fijo Tierra): constructor, sentido práctico, lealtad, sensorial, acumulación, seguridad material',
          'VIRGO (Mutable Tierra): analista, servicio, atención al detalle, discriminación, organización, purificación',
          'CAPRICORNIO (Cardinal Tierra): ambicioso, disciplinado, estructura, responsabilidad, control, autoridad',
          'Fuego sin Tierra: ideas sin implementación práctica',
          'Tierra sin Fuego: acción sin inspiración, vida monótona'
        ]
      },
      questions: [
        {
          q: '¿Cuál es la cualidad principal de Aries?',
          options: ['Estabilidad', 'Iniciativa, coraje, acción inmediata, pionerismo', 'Análisis', 'Emoción'],
          correct: 1,
          explanation: 'Aries es el iniciador cardinal del zodiaco, guerrero impulsor.'
        },
        {
          q: '¿Cuál es la cualidad principal de Leo?',
          options: ['Introversión', 'Creatividad, generosidad, autoexpresión, poder personal', 'Análisis', 'Timidez'],
          correct: 1,
          explanation: 'Leo es el creador fijo del zodiaco, confiado y dramático.'
        },
        {
          q: '¿Cuál es la cualidad principal de Sagitario?',
          options: ['Prudencia', 'Exploración, optimismo, búsqueda de verdad y expansión', 'Fijación', 'Pesimismo'],
          correct: 1,
          explanation: 'Sagitario es el explorador mutable, filósofo aventurero.'
        },
        {
          q: '¿Cuál es la cualidad principal de Tauro?',
          options: ['Cambio constante', 'Practicidad, lealtad, sensorialidad, seguridad material', 'Impulsividad', 'Desapego'],
          correct: 1,
          explanation: 'Tauro es el constructor fijo, sensorial y leal.'
        },
        {
          q: '¿Cuál es la cualidad principal de Virgo?',
          options: ['Dispersión', 'Análisis, servicio, atención a detalle, discriminación', 'Ilusión', 'Caos'],
          correct: 1,
          explanation: 'Virgo es el analista mutable, servicial y discriminador.'
        },
        {
          q: '¿Cuál es la cualidad principal de Capricornio?',
          options: ['Impulsividad', 'Ambición, disciplina, estructura, responsabilidad, autoridad', 'Apatía', 'Desorden'],
          correct: 1,
          explanation: 'Capricornio es el ambicioso cardinal, estructurado y disciplinado.'
        },
        {
          q: '¿Cuál es el peligro del exceso de Fuego sin Tierra?',
          options: ['Exceso de análisis', 'Ideas sin implementación práctica, acciones sin resultado', 'Rigidez', 'Materialismo'],
          correct: 1,
          explanation: 'Fuego sin Tierra = inspiración sin manifestación concreta.'
        },
        {
          q: '¿Cuál es el peligro del exceso de Tierra sin Fuego?',
          options: ['Exceso de emoción', 'Acción sin inspiración, vida monótona y sin alma', 'Frivolidad', 'Caos'],
          correct: 1,
          explanation: 'Tierra sin Fuego = trabajo sin pasión, rutina sin significado.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M2_zodiaco'] = {
      id: 'M2_zodiaco',
      moduleId: 'M2',
      title: 'El zodiaco tropical',
      titleEn: 'The Tropical Zodiac',
      level: 'basico',
      prerequisites: ['M1_carta_natal'],
      content: {
        summary: 'El zodiaco tropical consiste de 12 signos de 30° cada uno, comenzando en 0° Aries (punto vernal, ~21 marzo). Cada signo representa una fase de 30° del ciclo anual y proporciona arquetipos psicológicos universales. El orden fijo (Aries a Piscis) refleja un ciclo completo de energía desde iniciación hasta conclusión, con grados críticos y transiciones significativas entre signos.',
        keyPoints: [
          '0° Aries = punto vernal, equinoccio vernal ~21 marzo, referencia zodiacal absoluta',
          'Cada signo = 30° arco eclíptico, duración ~30 días solares',
          'Sun tarda ~30 días transitar signo; rangos precisos 28-31 días según posición orbital',
          'Arquetipos zodiacales: patrones psicológicos universales representados en cada signo',
          'Orden zodiacal fijo: Aries, Tauro, Géminis, Cáncer, Leo, Virgo, Libra, Escorpio, Sagitario, Capricornio, Acuario, Piscis',
          'Grados críticos: 0° (poder potencial), 15° (plenitud máxima), 30° (crisis culminación)',
          'Cúspide: frontera entre signos, zona de transición con influencias mixtas',
          'Ciclo anual: zodiaco refleja proyección simbólica órbita terrestre alrededor Sun'
        ]
      },
      questions: [
        {
          q: '¿Dónde comienza el zodiaco tropical?',
          options: ['Constelación Aries real', '0° Aries punto vernal equinoccio vernal ~21 marzo', 'Primera estrella visible', 'Sol de medianoche'],
          correct: 1,
          explanation: 'El zodiaco tropical comienza en 0° Aries, punto vernal fijo.'
        },
        {
          q: '¿Cuántos grados ocupa cada signo zodiacal?',
          options: ['15°', '20°', '30°', '45°'],
          correct: 2,
          explanation: '12 signos × 360° = 30° por signo exactamente.'
        },
        {
          q: '¿Cuánto tiempo tarda el Sun en transitar un signo?',
          options: ['1 semana', '2 semanas', 'Aproximadamente 30 días (rango 28-31 días)', '2 meses'],
          correct: 2,
          explanation: 'El Sun tarda ~30 días; el rango varía 28-31 días según posición orbital.'
        },
        {
          q: '¿Cuál es la función principal de los arquetipos zodiacales?',
          options: ['Matemática pura', 'Proporcionar patrones psicológicos universales', 'Solo astrología antigua', 'Sin función'],
          correct: 1,
          explanation: 'Los arquetipos son patrones psicológicos universales en cada signo.'
        },
        {
          q: '¿Por qué el orden zodiacal es siempre fijo?',
          options: ['Al azar', 'Refleja ciclo anual completo de energía desde iniciación a conclusión', 'No es importante', 'Cambió en historia'],
          correct: 1,
          explanation: 'El orden fijo refleja un ciclo completo de crecimiento y transformación.'
        },
        {
          q: '¿Cuáles son los grados críticos en un signo?',
          options: ['Grados pares', '0° (potencial), 15° (plenitud), 30° (culminación)', 'Solo múltiplos de 10', 'No existen'],
          correct: 1,
          explanation: 'Grados críticos: 0°=potencial, 15°=plenitud, 30°=crisis culminación.'
        },
        {
          q: '¿Qué es la cúspide entre signos?',
          options: ['El signo principal', 'Frontera/transición entre signos con influencias mixtas', 'Un aspecto', 'Una casa'],
          correct: 1,
          explanation: 'Cúspide es zona de transición con influencias de ambos signos.'
        },
        {
          q: '¿Cómo se relaciona el zodiaco con la órbita terrestre?',
          options: ['No hay relación', 'El zodiaco es proyección simbólica de la órbita terrestre alrededor del Sun', 'Órbita causa zodiaco', 'Son no relacionados'],
          correct: 1,
          explanation: 'El zodiaco refleja la órbita terrestre proyectada en la bóveda celeste.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M3_asteroides'] = {
      id: 'M3_asteroides',
      moduleId: 'M3',
      title: 'Asteroides significativos: Ceres, Juno, Vesta, Palas',
      titleEn: 'Significant Asteroids: Ceres, Juno, Vesta, Pallas',
      level: 'avanzado',
      prerequisites: ['M1_carta_natal','M3_personales'],
      content: {
        summary: 'Los asteroides femeninos ofrecen matices psicológicos adicionales, especialmente para mujeres. Ceres representa el nurturing y crianza; Juno, el compromiso matrimonial; Vesta, la dedicación y el fuego interior; Palas, la sabiduría y estrategia. No reemplazan los planetas pero refinan la interpretación de funciones femeninas.',
        keyPoints: [
          'CERES: nurturing, crianza, fertilidad, madre que da, nutrición emocional, pérdida/duelo',
          'JUNO: compromiso matrimonial, fidelidad, esposa legítima, contratos, igualdad en pareja',
          'VESTA: dedicación, fuego interior, celibato/monacato, servicio, hogar sagrado',
          'PALAS: sabiduría, estrategia, creatividad, paternidad intelectual, curación',
          'Asteroide en signo: cualidad particular del arquetipo femenino',
          'Asteroide en casa: área de vida donde ese arquetipo se expresa',
          'Aspectos asteroides-planetas: cómo se integra ese arquetipo femenino',
          'Asteroides en sinastría: dinámica femenina específica en relaciones'
        ]
      },
      questions: [
        {
          q: '¿Qué representa Ceres?',
          options: ['Guerrera', 'Nurturing, crianza, nutrición emocional y duelo', 'Independencia', 'Rechazo'],
          correct: 1,
          explanation: 'Ceres es la madre nutricia que también experimenta pérdida.'
        },
        {
          q: '¿Qué representa Juno?',
          options: ['Libertad', 'Compromiso matrimonial, fidelidad, igualdad en pareja', 'Soltería', 'Aventura'],
          correct: 1,
          explanation: 'Juno es la esposa comprometida y socia en igualdad.'
        },
        {
          q: '¿Qué representa Vesta?',
          options: ['Dispersión', 'Dedicación, fuego interior, celibato, servicio consciente', 'Disipación', 'Frivolidad'],
          correct: 1,
          explanation: 'Vesta es la sacerdotisa dedicada que mantiene fuego sagrado.'
        },
        {
          q: '¿Qué representa Palas?',
          options: ['Debilidad intelectual', 'Sabiduría, estrategia, creatividad, paternidad intelectual', 'Ilusión', 'Confusión'],
          correct: 1,
          explanation: 'Palas es la guerrera sabia y estratega creativa.'
        },
        {
          q: '¿Cuál asteroide representa compromiso matrimonial?',
          options: ['Ceres', 'Vesta', 'Juno', 'Palas'],
          correct: 2,
          explanation: 'Juno rige el compromiso duradero y la pareja legal.'
        },
        {
          q: '¿Cuál asteroide representa servicio y dedicación?',
          options: ['Juno', 'Palas', 'Vesta', 'Ceres'],
          correct: 2,
          explanation: 'Vesta representa dedicación consciente y fuego sagrado.'
        },
        {
          q: '¿Cuál asteroide representa sabiduría estratégica?',
          options: ['Ceres', 'Juno', 'Vesta', 'Palas'],
          correct: 3,
          explanation: 'Palas combina sabiduría con estrategia y creatividad.'
        },
        {
          q: '¿Para quién es especialmente relevante estudiar asteroides?',
          options: ['Solo hombres', 'Especialmente mujeres pero relevante para ambos géneros', 'Nadie', 'Astrólogos antiguos'],
          correct: 1,
          explanation: 'Asteroides son especialmente iluminadores para cartas femeninas.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M3_dignidades'] = {
      id: 'M3_dignidades',
      moduleId: 'M3',
      title: 'Dignidades planetarias: Domicilio, Exaltación',
      titleEn: 'Planetary Dignities: Rulership and Exaltation',
      level: 'intermedio',
      prerequisites: ['M2_zodiaco','M3_luminarias','M3_personales','M3_sociales'],
      content: {
        summary: 'Las dignidades definen la fortaleza de un planeta según su posición en signos. Un planeta en su signo gobernado (Domicilio) es fuerte; en su signo de Exaltación es máximamente poderoso; en Detrimento es débil; en Caída es muy débil. Las dignidades proporcionan información crítica sobre cómo funciona cada planeta en la carta.',
        keyPoints: [
          'DOMICILIO: planeta en su signo regido, máxima afinidad natural',
          'Sun domicilio Leo, Moon domicilio Cáncer',
          'Mercurio domicilio Géminis-Virgo, Venus Tauro-Libra, Marte Aries-Escorpio',
          'Júpiter domicilio Sagitario-Piscis, Saturno Capricornio-Acuario',
          'EXALTACIÓN: planeta a máxima potencia pero no natural',
          'Sun exaltación Aries, Moon exaltación Tauro, Mercurio Virgo, Venus Piscis, Marte Capricornio',
          'DETRIMENTO: planeta en signo opuesto a domicilio, débil',
          'CAÍDA: planeta en signo opuesto a exaltación, muy débil'
        ]
      },
      questions: [
        {
          q: '¿Qué es el domicilio de un planeta?',
          options: ['Casa en la carta', 'Signo gobernado por el planeta, máxima afinidad natural', 'Aspecto', 'Transito'],
          correct: 1,
          explanation: 'Domicilio es el signo natural del planeta; está en casa.'
        },
        {
          q: '¿Cuál es el domicilio del Sun?',
          options: ['Aries', 'Tauro', 'Leo', 'Sagitario'],
          correct: 2,
          explanation: 'Sun domicilio Leo; gobernador natural de Leo.'
        },
        {
          q: '¿Cuál es el domicilio de la Moon?',
          options: ['Aries', 'Cáncer', 'Libra', 'Piscis'],
          correct: 1,
          explanation: 'Moon domicilio Cáncer; gobernadora natural de Cáncer.'
        },
        {
          q: '¿Cuáles son los domicilios de Mercurio?',
          options: ['Leo-Virgo', 'Géminis-Virgo', 'Aries-Tauro', 'Sagitario-Piscis'],
          correct: 1,
          explanation: 'Mercurio domicilio Géminis y Virgo.'
        },
        {
          q: '¿Qué es la exaltación de un planeta?',
          options: ['Debilidad', 'Signo donde planeta alcanza máxima potencia, no natural pero poderoso', 'Domicilio', 'Detrimento'],
          correct: 1,
          explanation: 'Exaltación es potencia máxima; planeta está glorificado.'
        },
        {
          q: '¿Cuál es la exaltación del Sun?',
          options: ['Tauro', 'Aries', 'Leo', 'Sagitario'],
          correct: 1,
          explanation: 'Sun exaltación Aries; máxima potencia guerrera.'
        },
        {
          q: '¿Qué es el detrimento de un planeta?',
          options: ['Exaltación', 'Signo opuesto al domicilio, planeta débil', 'Domicilio', 'Caída'],
          correct: 1,
          explanation: 'Detrimento es signo opuesto al domicilio; planeta incómodo.'
        },
        {
          q: '¿Qué es la caída de un planeta?',
          options: ['Domicilio', 'Signo opuesto a exaltación, planeta muy débil', 'Exaltación', 'Normal'],
          correct: 1,
          explanation: 'Caída es signo opuesto a exaltación; planeta en dificultad máxima.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M3_dignidades_menores'] = {
      id: 'M3_dignidades_menores',
      moduleId: 'M3',
      title: 'Dignidades menores: Triplicidad, Términos, Faz',
      titleEn: 'Minor Dignities: Triplicity, Terms, Face',
      level: 'avanzado',
      prerequisites: ['M3_dignidades','M2_decanatos'],
      content: {
        summary: 'Las dignidades menores (Triplicidad, Términos/Confines, Faz/Decanato) ofrecen matices adicionales a la fortaleza planetaria. Aunque menos importantes que domicilio-exaltación-detrimento-caída, proporcionan información refinada usada especialmente en astrología helenística y técnica avanzada. El sistema de dignidades completo requiere conocer los 5 niveles.',
        keyPoints: [
          'TRIPLICIDAD: planeta en elemento propio recibe triplicidad (10 puntos)',
          'TÉRMINOS/CONFINES: planeta en su término de signo (definiciones varían: ptolemaico vs árabe)',
          'FAZ/DECANATO: planeta en su decanato recibe afinidad decanataria',
          'Sistemas diferentes: Ptolemaico, árabe, egipcio, etc.',
          'Tabla de dignidades: cinco niveles Domicilio(5), Exaltación(4), Triplicidad(3), Término(2), Faz(1)',
          'Cálculo de fortaleza esencial: suma de dignidades otorga puntuación 0-5',
          'Planeta con 5 puntos: máxima fortaleza esencial y fácil expresión',
          'Planeta sin dignidades: débil esencialmente, requiere soporte de aspectos'
        ]
      },
      questions: [
        {
          q: '¿Qué es la triplicidad de un planeta?',
          options: ['Aspecto de 120°', 'Planeta en elemento propio, tercera fila de dignidad', 'Casa tercera', 'Tres signos'],
          correct: 1,
          explanation: 'Triplicidad es afinidad por elemento; planeta en elemento propio.'
        },
        {
          q: '¿Qué son los términos o confines?',
          options: ['Aspecto', 'Divisiones dentro de signo con regentes específicos, segunda fila dignidad', 'Casas', 'Decanatos'],
          correct: 1,
          explanation: 'Términos son divisiones de signos con regentes según tabla.'
        },
        {
          q: '¿Qué es la faz o decanato en dignidades?',
          options: ['Aspecto', 'División de 10° dentro signo con regente decanatario', 'Casa', 'Elemento'],
          correct: 1,
          explanation: 'Faz es decanato con su regente; última fila dignidad.'
        },
        {
          q: '¿Cuáles son los 5 niveles de dignidades?',
          options: ['Complejos', 'Domicilio, Exaltación, Triplicidad, Término, Faz de mayor a menor', 'No hay 5', 'Solo 2'],
          correct: 1,
          explanation: 'Sistema completo tiene 5 niveles ordenados por importancia.'
        },
        {
          q: '¿Cuántos puntos suma un planeta con máxima fortaleza?',
          options: ['3', '4', '5', '10'],
          correct: 2,
          explanation: 'Máxima fortaleza esencial suma 5 puntos (1+1+1+1+1).'
        },
        {
          q: '¿Por qué varían los términos entre sistemas?',
          options: ['Error', 'Porque astronomía antigua diferente entre Ptolemaico, árabe, egipcio', 'Sin razón', 'Invención'],
          correct: 1,
          explanation: 'Sistemas antiguos diferentes produjeron términos distintos.'
        },
        {
          q: '¿Qué indica un planeta sin dignidades?',
          options: ['Fortaleza perfecta', 'Debilidad esencial, requiere soporte de aspectos para funcionar', 'Máximo poder', 'Normal'],
          correct: 1,
          explanation: 'Planeta sin dignidades esenciales es vulnerable, depende de aspectos.'
        },
        {
          q: '¿En qué rama de astrología se usan más dignidades menores?',
          options: ['Moderna psicológica', 'Astrología helenística y técnicas antiguas avanzadas', 'Solo mundana', 'Moderna occidental'],
          correct: 1,
          explanation: 'Dignidades menores son herramientas helenísticas especializada.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M3_fases_planetarias'] = {
      id: 'M3_fases_planetarias',
      moduleId: 'M3',
      title: 'Fases planetarias y ciclos sinódicos',
      titleEn: 'Planetary Phases and Synodic Cycles',
      level: 'avanzado',
      prerequisites: ['M3_luminarias','M3_personales','M3_sociales'],
      content: {
        summary: 'Cada planeta tiene un ciclo sinódico: tiempo que tarda desde un aspecto importante con el Sun hasta el mismo aspecto nuevamente. Dentro del ciclo existen fases (Conjunción, Primer Cuarto, Oposición, Último Cuarto) que revelan dinámicas psicológicas y evolutivas. La fase natal del planeta define cómo se integra su energía.',
        keyPoints: [
          'Ciclo sinódico: tiempo planeta-Sun regresan a mismo aspecto (ej Moon 29.5 días)',
          'CONJUNCIÓN: planeta y Sun alineados, culminación enfoque y nuevo comienzo',
          'PRIMER CUARTO: creciente, tensión creativa, acción, cuadratura creciente',
          'OPOSICIÓN: máxima visibilidad, luz plena, conciencia externa, culminación',
          'ÚLTIMO CUARTO: menguante, reflexión, integración, cuadratura decreciente',
          'Fase natal revela: cómo planeta energía entra en psique (nueva vs llena vs otra)',
          'Ciclo Mercurio 116 días, Venus 584 días, Marte 780 días, Júpiter 13 meses, Saturno 378 días',
          'Interpretación: fase + signo + casa + aspectos = totalidad expresión'
        ]
      },
      questions: [
        {
          q: '¿Qué es un ciclo sinódico planetario?',
          options: ['Órbita del planeta', 'Tiempo desde aspecto planeta-Sun hasta mismo aspecto nuevamente', 'Órbita terrestre', 'No existe'],
          correct: 1,
          explanation: 'Ciclo sinódico es período planetario respecto al Sun.'
        },
        {
          q: '¿Cuál es el significado de conjunción en fase planetaria?',
          options: ['Oposición', 'Culminación, enfoque, nuevo comienzo del ciclo', 'Debilidad', 'Invisibilidad'],
          correct: 1,
          explanation: 'Conjunción es punto de renovación y nuevo enfoque.'
        },
        {
          q: '¿Cuál es el significado de oposición en fase planetaria?',
          options: ['Conjunción', 'Máxima visibilidad, luz plena, conciencia externa, culminación', 'Invisibilidad', 'Debilidad'],
          correct: 1,
          explanation: 'Oposición es punto de máxima visibilidad y conciencia.'
        },
        {
          q: '¿Qué indica primer cuarto en fase planetaria?',
          options: ['Reflexión', 'Creciente, tensión creativa, acción, cuadratura creciente', 'Menguante', 'Consumación'],
          correct: 1,
          explanation: 'Primer cuarto es fase de acción y crecimiento.'
        },
        {
          q: '¿Qué indica último cuarto en fase planetaria?',
          options: ['Acción', 'Menguante, reflexión, integración consciente, cuadratura decreciente', 'Crecimiento', 'Inicio'],
          correct: 1,
          explanation: 'Último cuarto es fase de reflexión e integración.'
        },
        {
          q: '¿Cuál es el ciclo sinódico de Mercurio?',
          options: ['29.5 días', '116 días', '365 días', '12 años'],
          correct: 1,
          explanation: 'Ciclo sinódico Mercurio ~116 días.'
        },
        {
          q: '¿Cuál es el ciclo sinódico de Venus?',
          options: ['116 días', '365 días', '584 días ciclo amor/relaciones', '780 días'],
          correct: 2,
          explanation: 'Ciclo sinódico Venus ~584 días.'
        },
        {
          q: '¿Cómo se interpreta una fase planetaria natal?',
          options: ['Se ignora', 'Fase + signo + casa + aspectos = totalidad expresión', 'Solo signo importa', 'Sin valor'],
          correct: 1,
          explanation: 'Fase natal integrada con otros factores define expresión total.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M3_lilith'] = {
      id: 'M3_lilith',
      moduleId: 'M3',
      title: 'Lilith: lo rechazado y el poder femenino',
      titleEn: 'Lilith: The Rejected and Feminine Power',
      level: 'intermedio',
      prerequisites: ['M1_carta_natal'],
      content: {
        summary: 'Lilith representa el punto lunar lejano (apogeo lunar) y simboliza lo rechazado, lo marginal y el poder femenino no domesticado. En la mitología es la primera mujer de Adán que se rebeló contra sumisión. En la carta astrológica, Lilith señala donde nos sentimos "fuera" y donde reside nuestro poder inconformista y sexualidad radical.',
        keyPoints: [
          'Lilith punto lunar lejano: punto de máxima distancia Tierra-Luna, 9° norte 5° sur órbita lunar',
          'Lilith negra (punto apogeo): la más usada; ciclo ~9 años',
          'Lilith blanca (el nodo medio): menos usada, conexión con lo transpersonal',
          'Lilith Verdadera (con perturbaciones): cálculo más preciso, variable hasta 30° diferencia',
          'Lilith en signo: cualidad del rechazo/poder marginal y sexualidad',
          'Lilith en casa: área donde nos sentimos marginados pero poseemos poder único',
          'Nodos vs Lilith: nodos evolución intencional; Lilith poder instintivo inconformista',
          'Lilith en sinastría: atracción magnética, sexualidad intensa, fascinación peligrosa'
        ]
      },
      questions: [
        {
          q: '¿Qué es Lilith astronómicamente?',
          options: ['Planeta real', 'Punto lunar lejano (apogeo lunar), máxima distancia Tierra-Luna', 'Constelación', 'Asteroide'],
          correct: 1,
          explanation: 'Lilith es el apogeo lunar, punto de distancia máxima.'
        },
        {
          q: '¿Cuál es el mito de Lilith?',
          options: ['Eva secundaria', 'Primera mujer de Adán que se rebeló contra sumisión', 'Ángel bueno', 'Deidad mayor'],
          correct: 1,
          explanation: 'Lilith mitológica se rebeló contra sumisión, símbolo de poder femenino.'
        },
        {
          q: '¿Cuál es el ciclo de Lilith Negra?',
          options: ['1 año', '~9 años', '20 años', '84 años'],
          correct: 1,
          explanation: 'Lilith Negra tiene un ciclo de aproximadamente 9 años.'
        },
        {
          q: '¿Qué representa Lilith en la carta?',
          options: ['Bondad pura', 'Lo rechazado, marginal, poder femenino no domesticado, sexualidad radical', 'Debilidad', 'Conformismo'],
          correct: 1,
          explanation: 'Lilith es el poder inconformista y sexualidad auténtica.'
        },
        {
          q: '¿Cuál es el significado de Lilith en casa?',
          options: ['Suerte', 'Área donde nos sentimos marginados pero poseemos poder único', 'Tristeza', 'Nada'],
          correct: 1,
          explanation: 'Lilith en casa = campo donde el rechazo se convierte en poder.'
        },
        {
          q: '¿Cuál es la diferencia entre nodos lunares y Lilith?',
          options: ['No hay diferencia', 'Nodos evolución intencional; Lilith poder instintivo inconformista', 'Iguales en todo', 'No se usan ambos'],
          correct: 1,
          explanation: 'Nodos = propósito evolución; Lilith = poder instintivo marginal.'
        },
        {
          q: '¿Qué indican aspectos Lilith-Venus?',
          options: ['Amor tradicional', 'Sexualidad radical, atracción magnética, desafío valores convencionales', 'Frigidez', 'Castidad'],
          correct: 1,
          explanation: 'Lilith-Venus = intensidad sexual y desafío valores amorosos.'
        },
        {
          q: '¿Qué significa Lilith en sinastría?',
          options: ['Amistad superficial', 'Atracción magnética intensa, sexualidad profunda, fascinación peligrosa', 'Sin importancia', 'Rechazo'],
          correct: 1,
          explanation: 'Lilith en sinastría = fascinación mutua pero también posible turbulencia.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M3_luminarias'] = {
      id: 'M3_luminarias',
      moduleId: 'M3',
      title: 'Las luminarias: Sun y Moon',
      titleEn: 'The Luminaries: Sun and Moon',
      level: 'basico',
      prerequisites: ['M1_carta_natal'],
      content: {
        summary: 'El Sun y la Moon son los dos cuerpos más importantes de la carta natal. El Sun representa la identidad, propósito, voluntad y rayo de vida; la Moon representa emociones, instinto, necesidades psicológicas y reactividad. Juntos forman la base de la personalidad: Sun es quién somos, Moon es cómo nos sentimos. Su signo, casa y aspectos revelan dimensiones fundamentales del ser.',
        keyPoints: [
          'SUN: identidad, propósito, voluntad, rayo de vida, autoridad, paternidad, brillantez interior',
          'MOON: emociones, instinto, necesidades psicológicas, seguridad, maternidad, inconsciente reactivo',
          'Sun en signo: cualidad básica de identidad y expresión de poder personal',
          'Moon en signo: patrón emocional reactivo e instintivo inconsciente',
          'Sun en casa: área de vida donde el ego/identidad busca expresarse',
          'Moon en casa: área de vida donde las emociones necesitan seguridad y nutrición',
          'Aspecto Sun-Moon: relación entre voluntad consciente e instinto emocional',
          'Sinastría Sun-Moon: vínculo fundamental en cartas relacionales (amor profundo)'
        ]
      },
      questions: [
        {
          q: '¿Qué representa el Sun en la carta natal?',
          options: ['Emociones superficiales', 'Identidad, propósito, voluntad, rayo de vida', 'Instinto reactivo', 'Dinero'],
          correct: 1,
          explanation: 'El Sun es el centro del ser, identidad y propósito fundamental.'
        },
        {
          q: '¿Qué representa la Moon en la carta natal?',
          options: ['Identidad fija', 'Emociones, instinto, necesidades psicológicas y seguridad', 'Voluntad consciente', 'Ambición'],
          correct: 1,
          explanation: 'La Moon es el mundo emocional interior y necesidades psicológicas.'
        },
        {
          q: '¿Cuál es la relación entre Sun y Moon?',
          options: ['Idéntica', 'Sun es quién somos, Moon es cómo nos sentimos; complementarios', 'Opuesta', 'Sin relación'],
          correct: 1,
          explanation: 'Sun-Moon forman la base: voluntad consciente + instinto emocional.'
        },
        {
          q: '¿Qué significa Sun en una casa específica?',
          options: ['Influencia aleatoria', 'Área de vida donde la identidad busca expresarse', 'Enfermedad', 'Dinero garantizado'],
          correct: 1,
          explanation: 'Sun en casa = campo donde el ego/identidad se expresan.'
        },
        {
          q: '¿Qué significa Moon en una casa específica?',
          options: ['Carrera profesional', 'Área de vida donde las emociones necesitan seguridad', 'Sin importancia', 'Dinero'],
          correct: 1,
          explanation: 'Moon en casa = campo donde emociones necesitan nutrición.'
        },
        {
          q: '¿Qué aspecto Sun-Moon indica?',
          options: ['Sin significado', 'Relación entre voluntad consciente e instinto emocional', 'Solo dinero', 'Enfermedad'],
          correct: 1,
          explanation: 'Aspectos Sun-Moon revelan armonía o tensión voluntad-instinto.'
        },
        {
          q: '¿Por qué es importante Sun en sinastría?',
          options: ['No importa', 'Sun-Moon es vínculo fundamental en cartas relacionales', 'Solo superficial', 'Irrelevante'],
          correct: 1,
          explanation: 'Sun-Moon en sinastría crea vínculo profundo de amor y comprensión.'
        },
        {
          q: '¿Cuál es la diferencia entre Sun consciente y Moon inconsciente?',
          options: ['No hay diferencia', 'Sun es identidad consciente deliberada; Moon es inconsciente reactivo', 'Iguales', 'Opuestos totales'],
          correct: 1,
          explanation: 'Sun consciente + Moon inconsciente = totalidad del ser.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M3_nodos'] = {
      id: 'M3_nodos',
      moduleId: 'M3',
      title: 'Nodos lunares: eje kármico',
      titleEn: 'Lunar Nodes: Karmic Axis',
      level: 'intermedio',
      prerequisites: ['M1_astronomia','M3_luminarias'],
      content: {
        summary: 'Los nodos lunares son puntos donde la órbita lunar cruza la eclíptica. El nodo norte es el punto futuro de evolución; el nodo sur es el punto pasado de talento innato. Juntos forman un eje que revela el propósito evolutivo de la encarnación. En la astrología evolutiva, los nodos son la brújula del desarrollo anímica.',
        keyPoints: [
          'Nodo norte: punto futuro, dirección de evolución, crecimiento necesario, destino',
          'Nodo sur: punto pasado, talento innato, capacidades naturales, lo cómodo',
          'Nodos avanzan ~3 minutos diarios; retrogrado siempre; ciclo 18.6 años',
          'Eje nodal en signos: patrón de evolución entre dos arquetipos opuestos',
          'Nodos en casas: áreas de vida donde evolucionar (norte) vs donde soltar (sur)',
          'Retorno nodal ~18.6 años: revisión de propósito evolucional',
          'Tránsito nodos: activación del eje evolutivo en la vida',
          'Aspecto planetas-nodos: cómo los planetas participan en la evolución'
        ]
      },
      questions: [
        {
          q: '¿Qué son los nodos lunares astronómicamente?',
          options: ['Planetas', 'Puntos donde órbita lunar cruza eclíptica', 'Constelaciones', 'Aspectos'],
          correct: 1,
          explanation: 'Nodos son puntos de intersección entre órbita lunar y eclíptica.'
        },
        {
          q: '¿Cuál es la función del nodo norte?',
          options: ['Pasado', 'Futuro, dirección de evolución, crecimiento necesario, destino', 'Presente', 'Sin función'],
          correct: 1,
          explanation: 'Nodo norte es la brújula del crecimiento futuro.'
        },
        {
          q: '¿Cuál es la función del nodo sur?',
          options: ['Futuro', 'Pasado, talento innato, capacidades naturales, zona de confort', 'Presente', 'Nada'],
          correct: 1,
          explanation: 'Nodo sur contiene dones del pasado pero también atrapamiento.'
        },
        {
          q: '¿Cuál es el ciclo de los nodos lunares?',
          options: ['1 año', '~18.6 años', '29.5 años', '84 años'],
          correct: 1,
          explanation: 'El ciclo nodal es de aproximadamente 18.6 años.'
        },
        {
          q: '¿Qué movimiento tienen los nodos?',
          options: ['Directo como otros planetas', 'Retrógrado siempre, avanzan ~3 minutos diarios', 'Estacionarios', 'No se mueven'],
          correct: 1,
          explanation: 'Nodos siempre retrógrados; avance medio ~3 min diarios.'
        },
        {
          q: '¿Qué significa nodo norte en una casa?',
          options: ['Debilidad', 'Área donde el alma necesita evolucionar y crecer', 'Pérdida', 'Enfermedad'],
          correct: 1,
          explanation: 'Nodo norte en casa = campo de crecimiento evolutivo.'
        },
        {
          q: '¿Qué significa nodo sur en una casa?',
          options: ['Evolución', 'Área donde hay talento innato pero también apego/comodidad', 'Destino', 'Novedad'],
          correct: 1,
          explanation: 'Nodo sur en casa = talento pero también zona de confort a trascender.'
        },
        {
          q: '¿Cuándo ocurre el retorno nodal?',
          options: ['29.5 años', '~18.6 años revisión de propósito', '84 años', 'Cada 20 años'],
          correct: 1,
          explanation: 'Retorno nodal ~18.6 años es revisión del propósito evolutivo.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M3_partes_arabes'] = {
      id: 'M3_partes_arabes',
      moduleId: 'M3',
      title: 'Partes árabes y puntos sensibles',
      titleEn: 'Arabic Parts and Sensitive Points',
      level: 'avanzado',
      prerequisites: ['M1_carta_natal','M3_luminarias','M3_personales'],
      content: {
        summary: 'Las partes árabes son puntos calculados a través de fórmulas que combinan posiciones planetarias. Desarrolladas por astrólogos árabes medievales, proporcionan información refinada sobre áreas específicas de vida. La Parte de Fortuna es la más conocida (ASC + Moon - Sun), pero hay 200+ partes para amor, dinero, carrera, enfermedad, etc.',
        keyPoints: [
          'Parte de Fortuna: ASC + Moon - Sun; prosperidad material y destino',
          'Parte de Espíritu: ASC + Sun - Moon; voluntad y poder espiritual',
          'Parte de Amor: Venus + Marte - Sun; potencial amoroso y romántico',
          'Parte de Riqueza: Júpiter + Mercurio - Sun; ganancias y abundancia',
          'Parte de Carrera: Midheaven + Saturno - Sun; éxito profesional',
          'Parte de Enfermedad: Luna + Marte - Mercurio; vulnerabilidades de salud',
          'Cálculo diferente día/noche: fórmulas varían según Day/Night chart',
          'Interpretación: Parte en signo/casa como activador adicional'
        ]
      },
      questions: [
        {
          q: '¿Cuál es la fórmula de la Parte de Fortuna?',
          options: ['ASC + Sun - Moon', 'ASC + Moon - Sun', 'Moon + Venus - Marte', 'Júpiter + Saturno'],
          correct: 1,
          explanation: 'Fortuna = ASC + Moon - Sun (noche: ASC + Sun - Moon).'
        },
        {
          q: '¿Qué representa la Parte de Fortuna?',
          options: ['Enfermedad', 'Prosperidad material y destino externo', 'Amor', 'Espiritualidad'],
          correct: 1,
          explanation: 'Fortuna indica flujo de prosperidad y oportunidades en vida.'
        },
        {
          q: '¿Cuál es la fórmula de la Parte de Espíritu?',
          options: ['ASC + Moon - Sun', 'ASC + Sun - Moon', 'Sun + Moon - ASC', 'Mercurio + Marte'],
          correct: 1,
          explanation: 'Espíritu = ASC + Sun - Moon (noche: ASC + Moon - Sun).'
        },
        {
          q: '¿Qué representa la Parte de Espíritu?',
          options: ['Dinero', 'Voluntad consciente y poder espiritual interior', 'Enfermedad', 'Relaciones'],
          correct: 1,
          explanation: 'Espíritu indica propósito consciente y poder interior.'
        },
        {
          q: '¿Cuál es la fórmula de la Parte de Amor?',
          options: ['Venus + Marte - Sun', 'Venus + Sun - Marte', 'Marte - Venus + Sun', 'Venus + Marte - ASC'],
          correct: 0,
          explanation: 'Amor = Venus + Marte - Sun; potencial romántico.'
        },
        {
          q: '¿Por qué varían las fórmulas entre día y noche?',
          options: ['Capricho', 'Porque Sun y Moon invierten roles en carta diurna/nocturna', 'No varían', 'Error antiguo'],
          correct: 1,
          explanation: 'En cartas nocturnas se invierte la posición de Sun y Moon en fórmulas.'
        },
        {
          q: '¿Cuántas partes árabes existen?',
          options: ['5', '50', '200+', '12'],
          correct: 2,
          explanation: 'Hay 200+ partes árabes descritas en textos medievales.'
        },
        {
          q: '¿Cómo se interpreta una Parte árab?',
          options: ['Se ignora', 'Por signo y casa como activador adicional de tema', 'Solo por fórmula', 'Sin valor'],
          correct: 1,
          explanation: 'Parte en signo/casa activa ese tema adicional en la interpretación.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M3_personales'] = {
      id: 'M3_personales',
      moduleId: 'M3',
      title: 'Planetas personales: Mercurio, Venus, Marte',
      titleEn: 'Personal Planets: Mercury, Venus, Mars',
      level: 'basico',
      prerequisites: ['M1_carta_natal'],
      content: {
        summary: 'Los planetas personales (Mercurio, Venus, Marte) describen funciones psicológicas fundamentales. Mercurio es la mente, comunicación y proceso mental; Venus es atracción, valores y capacidad de amar; Marte es impulso, energía, acción y deseo. Estos tres planetas junto con Sun y Moon constituyen el núcleo de la psicología personal.',
        keyPoints: [
          'MERCURIO: mente, comunicación, aprendizaje, análisis, escritura, comercio, hermandad',
          'VENUS: atracción, valores, capacidad de amar, belleza, placer, sexualidad receptiva, dinero',
          'MARTE: impulso, energía, acción, deseo, sexualidad activa, agresión, guerra, coraje',
          'Mercurio en signo: estilo mental, forma de pensar y comunicar',
          'Venus en signo: estilo de amor, atracción, valores estéticos y morales',
          'Marte en signo: estilo de acción, energía sexual, forma de afirmar voluntad',
          'Aspectos Mercurio-Venus: cómo comunica el amor y valores',
          'Aspectos Venus-Marte: equilibrio entre pasión receptiva/activa en sexualidad'
        ]
      },
      questions: [
        {
          q: '¿Qué representa Mercurio en la carta?',
          options: ['Emociones', 'Mente, comunicación, proceso mental, análisis', 'Poder físico', 'Dinero'],
          correct: 1,
          explanation: 'Mercurio es la mente y comunicación, cómo pensamos y nos expresamos.'
        },
        {
          q: '¿Qué representa Venus en la carta?',
          options: ['Agresión', 'Atracción, valores, capacidad de amar y disfrutar', 'Pensamiento', 'Guerra'],
          correct: 1,
          explanation: 'Venus es el amor, belleza, valores y capacidad de relacionarse.'
        },
        {
          q: '¿Qué representa Marte en la carta?',
          options: ['Dulzura', 'Impulso, energía, acción, deseo y forma de afirmar voluntad', 'Amor pasivo', 'Análisis'],
          correct: 1,
          explanation: 'Marte es la energía, acción y sexualidad activa.'
        },
        {
          q: '¿Cuál es la función de Mercurio en comunicación?',
          options: ['Silencio', 'Determina estilo mental y forma de pensar/comunicar', 'No comunica', 'Solo escucha'],
          correct: 1,
          explanation: 'Mercurio en signo revela tu estilo particular de pensar y expresarte.'
        },
        {
          q: '¿Cuál es la función de Venus en relaciones?',
          options: ['Rechazo', 'Determina cómo amas, atraes y qué valoras en relaciones', 'Frialdad', 'Indiferencia'],
          correct: 1,
          explanation: 'Venus en signo revela tu estilo de amor y atracción.'
        },
        {
          q: '¿Cuál es la función de Marte en sexualidad?',
          options: ['Debilidad', 'Energía sexual activa, forma de desear y afirmar sexualidad', 'Pasividad total', 'No hay'],
          correct: 1,
          explanation: 'Marte en signo revela tu estilo de impulso sexual y energía.'
        },
        {
          q: '¿Qué indican aspectos Mercurio-Venus armoniosos?',
          options: ['Conflicto', 'Comunicación clara del amor y valores, social hábil', 'Aislamiento', 'Confusión'],
          correct: 1,
          explanation: 'Mercurio-Venus armónicos = expresar amor y valores claramente.'
        },
        {
          q: '¿Qué indican aspectos Venus-Marte tensos?',
          options: ['Armonía perfecta', 'Tensión entre sexualidad receptiva/activa, posible conflicto pasional', 'Amistad pura', 'Nada'],
          correct: 1,
          explanation: 'Venus-Marte tensos = desafío integrando receptividad con acción.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M3_quiron'] = {
      id: 'M3_quiron',
      moduleId: 'M3',
      title: 'Quirón: el sanador herido',
      titleEn: 'Chiron: The Wounded Healer',
      level: 'intermedio',
      prerequisites: ['M1_carta_natal'],
      content: {
        summary: 'Quirón es un planetoide descubierto en 1977 que orbita entre Saturno y Urano. Representa la herida primaria y el talento sanador asociado. En la mitología, Quirón fue un centauro herido incurablemente que se convirtió en maestro y sanador. En la carta, Quirón revela dónde experimentamos dolor profundo que, al ser integrado, se convierte en sabiduría y capacidad de sanar a otros.',
        keyPoints: [
          'Quirón: planetoide 1977, órbita entre Saturno y Urano',
          'Herida y sanación: dolor primario que lleva a sabiduría terapéutica',
          'Quirón en signo: cualidad particular de la herida y el don sanador',
          'Quirón en casa: área de vida donde experimentas la herida pero también dotes de sanación',
          'Retorno de Quirón ~51 años: revisión completa de herida y sabiduría adquirida',
          'Tránsito Quirón: activación de la herida para integración y sanación',
          'Aspectos Quirón-planetas personales: cómo la herida permea áreas específicas',
          'Quirón en sinastría: donde sanaturas mutuamente pero también herimos'
        ]
      },
      questions: [
        {
          q: '¿Cuándo se descubre Quirón?',
          options: ['Antigüedad', '1977', 'Antes de 1900', 'Futuro'],
          correct: 1,
          explanation: 'Quirón se descubre en 1977 entre órbitas de Saturno y Urano.'
        },
        {
          q: '¿Qué representa Quirón en la carta?',
          options: ['Buena suerte', 'Herida primaria y talento sanador asociado', 'Dinero', 'Poder'],
          correct: 1,
          explanation: 'Quirón es el sanador herido: dolor que se convierte en sabiduría.'
        },
        {
          q: '¿Cuál es el mito de Quirón?',
          options: ['Guerrero brutal', 'Centauro herido incurablemente que se convirtió en maestro sanador', 'Rey tirano', 'Villano'],
          correct: 1,
          explanation: 'Quirón mitológico fue herido pero trascendió para sanar a otros.'
        },
        {
          q: '¿Cuál es la duración del retorno de Quirón?',
          options: ['29.5 años', '~51 años', '84 años', '165 años'],
          correct: 1,
          explanation: 'Quirón retorna aproximadamente a los 51 años.'
        },
        {
          q: '¿Qué significa Quirón en casa?',
          options: ['Suerte pura', 'Área donde se experimenta herida pero también dotes de sanación', 'Enfermedad permanente', 'Nada'],
          correct: 1,
          explanation: 'Quirón en casa = campo donde el dolor se convierte en maestría.'
        },
        {
          q: '¿Qué ocurre en tránsito Quirón?',
          options: ['Suerte exterior', 'Activación de la herida para integración y sanación consciente', 'Sin cambios', 'Daño puro'],
          correct: 1,
          explanation: 'Tránsito Quirón trae la herida a consciencia para sanarla.'
        },
        {
          q: '¿Qué indican aspectos Quirón-Luna?',
          options: ['Emoción pura', 'Cómo la herida afecta necesidades emocionales e instinto', 'Sin relación', 'Dinero'],
          correct: 1,
          explanation: 'Quirón-Luna = herida en emocionalidad y necesidades seguridad.'
        },
        {
          q: '¿Qué significa Quirón en sinastría?',
          options: ['Amor puro', 'Donde sanaturas mutuamente pero también existe posible dolor relacional', 'Sin significado', 'Traición'],
          correct: 1,
          explanation: 'Quirón en sinastría = sanación y herida mutua en relaciones.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M3_sociales'] = {
      id: 'M3_sociales',
      moduleId: 'M3',
      title: 'Planetas sociales: Júpiter y Saturno',
      titleEn: 'Social Planets: Jupiter and Saturn',
      level: 'basico',
      prerequisites: ['M1_carta_natal'],
      content: {
        summary: 'Júpiter y Saturno son los planetas sociales que rigen relaciones con sociedades, instituciones y autoridades. Júpiter representa expansión, optimismo, crecimiento y beneficio; Saturno representa contracción, restricción, estructura y responsabilidad. Juntos crean ciclos de expansión-contracción que gobiernan la vida social y profesional.',
        keyPoints: [
          'JÚPITER: expansión, optimismo, crecimiento, beneficio, fortuna, educación, religión, viajes, abundancia',
          'SATURNO: contracción, restricción, estructura, responsabilidad, límites, tiempo, karma, madurez',
          'Júpiter en signo: áreas de optimismo, crecimiento natural y oportunidades',
          'Saturno en signo: áreas de restricción, responsabilidad y lecciones a aprender',
          'Ciclo Júpiter-Saturno 20 años: expansión (Júpiter) alternando con consolidación (Saturno)',
          'Aspectos Júpiter-Saturno: equilibrio entre ambición/expansión y prudencia/construcción',
          'Retorno de Saturno (~29.5 años): punto de madurez y cambio de responsabilidades',
          'Grandes conjunciones Júpiter-Saturno cada 20 años: marcan cambios de eras sociales'
        ]
      },
      questions: [
        {
          q: '¿Qué representa Júpiter en la carta?',
          options: ['Límites', 'Expansión, optimismo, crecimiento, beneficio y abundancia', 'Restricción', 'Pérdida'],
          correct: 1,
          explanation: 'Júpiter es el planeta del crecimiento y la buena fortuna.'
        },
        {
          q: '¿Qué representa Saturno en la carta?',
          options: ['Abundancia', 'Restricción, estructura, responsabilidad y lecciones a aprender', 'Lujo', 'Dinero fácil'],
          correct: 1,
          explanation: 'Saturno es el planeta del límite, la madurez y el karma.'
        },
        {
          q: '¿Cuál es el ciclo Júpiter-Saturno?',
          options: ['1 año', '10 años', '20 años de expansión alternando con consolidación', '100 años'],
          correct: 2,
          explanation: 'El ciclo social es de 20 años: expansión Júpiter, consolidación Saturno.'
        },
        {
          q: '¿Qué ocurre en el retorno de Saturno?',
          options: ['Nada importante', 'Punto de madurez (~29.5 años) con cambio de responsabilidades', 'Juventud perpetua', 'Enfermedad'],
          correct: 1,
          explanation: 'Retorno de Saturno (~29.5 años) es transición a adultez responsable.'
        },
        {
          q: '¿Qué indican grandes conjunciones Júpiter-Saturno?',
          options: ['Eventos menores', 'Cambios históricos importantes, nuevas eras sociales cada 20 años', 'Sin significado', 'Solo personales'],
          correct: 1,
          explanation: 'Conjunciones Júpiter-Saturno marcan cambios de ciclos civilizatorios.'
        },
        {
          q: '¿Cuál es el significado de Júpiter en casa?',
          options: ['Problema', 'Área donde hay optimismo, crecimiento natural y oportunidades', 'Peligro', 'Pérdida'],
          correct: 1,
          explanation: 'Júpiter en casa = oportunidades naturales de crecimiento en ese campo.'
        },
        {
          q: '¿Cuál es el significado de Saturno en casa?',
          options: ['Suerte', 'Área donde hay responsabilidad, restricción y lecciones a aprender', 'Riqueza', 'Facilidad'],
          correct: 1,
          explanation: 'Saturno en casa = desafíos y responsabilidad para madurez.'
        },
        {
          q: '¿Qué indican aspectos Júpiter-Saturno armoniosos?',
          options: ['Exceso puro', 'Balance entre ambición expansiva y prudencia constructiva', 'Restricción total', 'Anarquía'],
          correct: 1,
          explanation: 'Júpiter-Saturno armónicos = éxito por balance expansión-disciplina.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M3_transpersonales'] = {
      id: 'M3_transpersonales',
      moduleId: 'M3',
      title: 'Planetas transpersonales: Urano, Neptuno, Plutón',
      titleEn: 'Transpersonal Planets: Uranus, Neptune, Pluto',
      level: 'intermedio',
      prerequisites: ['M1_carta_natal','M3_sociales'],
      content: {
        summary: 'Los planetas transpersonales (Urano, Neptuno, Plutón) trascienden la personalidad individual, representando fuerzas colectivas y arquetipos de transformación. Urano trae innovación y ruptura; Neptuno, disolución e ilusión; Plutón, muerte y regeneración. Sus tránsitos generacionales afectan no solo individuos sino colectividades enteras.',
        keyPoints: [
          'URANO: innovación, ruptura, revolucion, libertad, genio, futuro, lo inesperado',
          'NEPTUNO: disolución, ilusión, misterio, espiritualidad, compasión, confusión, víctima-salvador',
          'PLUTÓN: muerte-regeneración, poder, transformación profunda, lo oculto, control, obsesión',
          'Urano en signo (7 años cada): generación revolucionaria, innovaciones tecnológicas',
          'Neptuno en signo (14 años cada): generación espiritual/ilusionada, visión colectiva',
          'Plutón en signo (20-30 años cada): generación transformadora, poder colectivo',
          'Tránsito Urano: ruptura, libertad, giro de 180°, despertar súbito',
          'Tránsito Neptuno: disolución, confusión, redención espiritual, víctima-salvador'
        ]
      },
      questions: [
        {
          q: '¿Qué representa Urano en la carta?',
          options: ['Tradición', 'Innovación, ruptura, libertad y lo inesperado', 'Conservación', 'Pasado'],
          correct: 1,
          explanation: 'Urano es el revolucionario, trae cambios inesperados y futuro.'
        },
        {
          q: '¿Qué representa Neptuno en la carta?',
          options: ['Realismo', 'Disolución, ilusión, espiritualidad y confusión', 'Solidez', 'Claridad'],
          correct: 1,
          explanation: 'Neptuno es el místico, trae visión pero también ilusión.'
        },
        {
          q: '¿Qué representa Plutón en la carta?',
          options: ['Transformación leve', 'Muerte-regeneración, poder profundo y transformación radical', 'Cambio superficial', 'Debilidad'],
          correct: 1,
          explanation: 'Plutón es el transformador, trae cambios profundos irreversibles.'
        },
        {
          q: '¿Cuánto tiempo pasa Urano en cada signo?',
          options: ['2 años', '7 años', '14 años', '30 años'],
          correct: 1,
          explanation: 'Urano pasa ~7 años en cada signo; ciclo completo 84 años.'
        },
        {
          q: '¿Cuánto tiempo pasa Neptuno en cada signo?',
          options: ['7 años', '14 años', '21 años', '30 años'],
          correct: 1,
          explanation: 'Neptuno pasa ~14 años en cada signo; ciclo completo 165 años.'
        },
        {
          q: '¿Qué ocurre en tránsito Urano?',
          options: ['Sin cambios', 'Ruptura, libertad, giro de 180°, despertar súbito', 'Lentitud', 'Tradición'],
          correct: 1,
          explanation: 'Tránsito Urano trae cambios revolucionarios y liberadores.'
        },
        {
          q: '¿Qué ocurre en tránsito Neptuno?',
          options: ['Claridad', 'Disolución, confusión, redención espiritual, trampa ilusoria', 'Solidez', 'Certeza'],
          correct: 1,
          explanation: 'Tránsito Neptuno disuelve lo conocido; requiere fe y discernimiento.'
        },
        {
          q: '¿Por qué se llaman "transpersonales"?',
          options: ['Porque son pequeños', 'Porque trascienden la personalidad individual, afectan colectividades', 'Porque son antiguos', 'Sin razón'],
          correct: 1,
          explanation: 'Transpersonales afectan generaciones enteras, no solo individuos.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M4_angulos'] = {
      id: 'M4_angulos',
      moduleId: 'M4',
      title: 'Los ángulos cardinales: ASC, DESC, MC, IC',
      titleEn: 'The Cardinal Angles: ASC, DESC, MC, IC',
      level: 'basico',
      prerequisites: ['M1_carta_natal','M4_clasificacion'],
      content: {
        summary: 'Los cuatro ángulos cardinales son los puntos más importantes de la carta: Ascendente (ASC) en el horizonte Este, Descendente (DESC) en Oeste, Medio Cielo (MC) en el Sur, Fondo Cielo (IC) en el Norte. Son los "puntales" que sostienen la carta. Planetas en ángulos son excepcionalmente potentes. Los ángulos definen los ejes existenciales fundamentales.',
        keyPoints: [
          'ASCENDENTE (ASC): horizonte Este, cúspide casa 1, personalidad, máscara social',
          'DESCENDENTE (DESC): horizonte Oeste, cúspide casa 7, relaciones, proyección',
          'MEDIO CIELO (MC): sur, cúspide casa 10, carrera, vocación pública, autoridad',
          'FONDO CIELO (IC): norte, cúspide casa 4, hogar, raíces, bases emocionales',
          'Eje ASC-DESC: personalidad vs relaciones, yo vs otros',
          'Eje IC-MC: privado vs público, emoción vs autoridad',
          'Planetas en ángulos: máxima potencia, impacto mundial',
          'Casas angulares (1, 4, 7, 10): más potentes que sucedentes o cadentes'
        ]
      },
      questions: [
        {
          q: '¿Dónde se ubica el Ascendente?',
          options: ['Meridiano Norte', 'Horizonte Este, cúspide casa 1', 'Horizonte Oeste', 'Meridiano Sur'],
          correct: 1,
          explanation: 'ASC está en el horizonte Este donde Sun nace.'
        },
        {
          q: '¿Qué representa el Ascendente?',
          options: ['Vocación', 'Personalidad externa, máscara social, comienzo vida', 'Familia', 'Relaciones'],
          correct: 1,
          explanation: 'ASC es cómo el mundo te ve al nacer.'
        },
        {
          q: '¿Dónde se ubica el Descendente?',
          options: ['Horizonte Este', 'Horizonte Oeste, cúspide casa 7', 'Meridiano Sur', 'Meridiano Norte'],
          correct: 1,
          explanation: 'DESC está en el horizonte Oeste, opuesto a ASC.'
        },
        {
          q: '¿Qué representa el Descendente?',
          options: ['Personalidad', 'Relaciones, pareja, proyección en otros', 'Hogar', 'Carrera'],
          correct: 1,
          explanation: 'DESC es donde proyectas relaciones y ves otros.'
        },
        {
          q: '¿Dónde se ubica el Medio Cielo?',
          options: ['Horizonte Este', 'Horizonte Oeste', 'Meridiano Sur, cúspide casa 10, punto más alto', 'Meridiano Norte'],
          correct: 2,
          explanation: 'MC está en el meridiano Sur, punto más alto del cielo.'
        },
        {
          q: '¿Qué representa el Medio Cielo?',
          options: ['Familia', 'Carrera, vocación pública, reputación, autoridad', 'Relaciones', 'Dinero'],
          correct: 1,
          explanation: 'MC es tu imagen pública y logros profesionales.'
        },
        {
          q: '¿Cuál es el eje ASC-DESC?',
          options: ['Personal', 'Personalidad vs relaciones, yo vs otros', 'Público', 'Sin importancia'],
          correct: 1,
          explanation: 'Eje ASC-DESC representa tension entre yo y otros.'
        },
        {
          q: '¿Cuál es el eje IC-MC?',
          options: ['Relacional', 'Privado vs público, emoción/raíces vs autoridad/vocación', 'Físico', 'Sin relación'],
          correct: 1,
          explanation: 'Eje IC-MC representa tensión entre lo privado y público.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M4_casas_1_6'] = {
      id: 'M4_casas_1_6',
      moduleId: 'M4',
      title: 'Casas 1-6: personalidad a servicio',
      titleEn: 'Houses 1-6: Personality to Service',
      level: 'basico',
      prerequisites: ['M4_clasificacion'],
      content: {
        summary: 'Las primeras seis casas representan el desarrollo personal desde la identidad externa (casa 1) hasta el refinamiento del servicio (casa 6). Casa 1 es apariencia; casa 2, valores y dinero; casa 3, comunicación; casa 4, familia; casa 5, creatividad; casa 6, salud y servicio. Estas casas se enfocan en desarrollo personal y ajuste práctico al mundo.',
        keyPoints: [
          'CASA 1 (ASC): personalidad, apariencia, comienzo, voluntad, acción inmediata',
          'CASA 2: valores, dinero, posesiones, autoestima, recursos propios',
          'CASA 3: comunicación, hermanos, viajes cortos, aprendizaje, intelecto local',
          'CASA 4 (IC): familia, hogar, raíces, padre/madre, final, herencia',
          'CASA 5: creatividad, romance, hijos, juego, placer, expresión artística',
          'CASA 6: salud, trabajo, servicio, rutina, animales, ajuste práctico',
          'Primer cuadrante (1-3): aprendizaje y desarrollo temprano',
          'Casa 4: giro hacia sí mismo; casa 5-6: aplicación personal'
        ]
      },
      questions: [
        {
          q: '¿Qué representa la casa 1?',
          options: ['Dinero', 'Personalidad, apariencia, comienzo, ASC, voluntad', 'Relaciones', 'Espiritualidad'],
          correct: 1,
          explanation: 'Casa 1 ASC es cómo te presentas al mundo.'
        },
        {
          q: '¿Qué representa la casa 2?',
          options: ['Personalidad', 'Valores, dinero, posesiones, autoestima', 'Hermanos', 'Creatividad'],
          correct: 1,
          explanation: 'Casa 2 es tus valores materiales y económicos.'
        },
        {
          q: '¿Qué representa la casa 3?',
          options: ['Hogar', 'Comunicación, hermanos, viajes cortos, aprendizaje', 'Dinero', 'Romance'],
          correct: 1,
          explanation: 'Casa 3 es mente local y comunicación.'
        },
        {
          q: '¿Qué representa la casa 4?',
          options: ['Carrera', 'Familia, hogar, raíces, padre, final, IC', 'Relaciones', 'Dinero'],
          correct: 1,
          explanation: 'Casa 4 IC es donde vienes, raíces familiares.'
        },
        {
          q: '¿Qué representa la casa 5?',
          options: ['Trabajo', 'Creatividad, romance, hijos, juego, expresión artística', 'Salud', 'Servicio'],
          correct: 1,
          explanation: 'Casa 5 es placer, creatividad y romance.'
        },
        {
          q: '¿Qué representa la casa 6?',
          options: ['Romance', 'Salud, trabajo, servicio, rutina, animales', 'Hogar', 'Hijos'],
          correct: 1,
          explanation: 'Casa 6 es ajuste práctico, salud, servicio.'
        },
        {
          q: '¿Qué es el primer cuadrante?',
          options: ['Casas 7-12', 'Casas 1-3: aprendizaje y desarrollo temprano', 'Casas 4-6', 'Casas 10-12'],
          correct: 1,
          explanation: 'Primer cuadrante (1-3) es desarrollo personal inicial.'
        },
        {
          q: '¿Cuál es el patrón de las casas 1-6?',
          options: ['Aleatorio', 'Progresión desde identidad personal a servicio y refinamiento', 'Hacia adentro', 'Sin patrón'],
          correct: 1,
          explanation: 'Casas 1-6 siguen línea de desarrollo personal progresivo.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M4_casas_7_12'] = {
      id: 'M4_casas_7_12',
      moduleId: 'M4',
      title: 'Casas 7-12: relaciones a trascendencia',
      titleEn: 'Houses 7-12: Relationships to Transcendence',
      level: 'basico',
      prerequisites: ['M4_clasificacion'],
      content: {
        summary: 'Las casas 7-12 representan evolución desde relaciones externas (casa 7) hacia trascendencia espiritual (casa 12). Casa 7 es pareja y contrato; casa 8, muerte y regeneración; casa 9, filosofía; casa 10, carrera pública; casa 11, amigos y grupos; casa 12, lo oculto e inconsciente. Estas casas enfatizan relación con otros y trascendencia.',
        keyPoints: [
          'CASA 7 (DESC): pareja, matrimonio, contrato, enemigos abiertos, "yó en espejo"',
          'CASA 8: muerte, sexualidad, herencia, transformación, poder ajeno, psicología profunda',
          'CASA 9: filosofía, religión, viajes lejanos, educación superior, significado',
          'CASA 10 (MC): carrera, vocación, reputación pública, autoridad, logros sociales',
          'CASA 11: amigos, grupos, comunidad, esperanzas, innovación social',
          'CASA 12: lo oculto, inconsciente, retiro espiritual, encarcelamiento, redención',
          'Segundo cuadrante (7-9): relaciones y expansión hacia otros',
          'Cuarto cuadrante (10-12): madurez y retorno espiritual'
        ]
      },
      questions: [
        {
          q: '¿Qué representa la casa 7?',
          options: ['Dinero', 'Pareja, matrimonio, contrato, DESC, enemigos', 'Trabajos', 'Creatividad'],
          correct: 1,
          explanation: 'Casa 7 DESC es relaciones significativas y pareja.'
        },
        {
          q: '¿Qué representa la casa 8?',
          options: ['Amigos', 'Muerte, sexualidad, herencia, transformación, psique profunda', 'Carrera', 'Familia'],
          correct: 1,
          explanation: 'Casa 8 es lo oculto, la muerte y regeneración.'
        },
        {
          q: '¿Qué representa la casa 9?',
          options: ['Dinero', 'Filosofía, religión, viajes lejanos, educación, significado', 'Relaciones', 'Salud'],
          correct: 1,
          explanation: 'Casa 9 es búsqueda de significado y expansión mental.'
        },
        {
          q: '¿Qué representa la casa 10?',
          options: ['Familia', 'Carrera, vocación, reputación pública, MC, logros', 'Amigos', 'Oculto'],
          correct: 1,
          explanation: 'Casa 10 MC es posición pública y profesional.'
        },
        {
          q: '¿Qué representa la casa 11?',
          options: ['Pareja', 'Amigos, grupos, comunidad, esperanzas, innovación', 'Hogar', 'Salud'],
          correct: 1,
          explanation: 'Casa 11 es amigos, grupos y aspiraciones colectivas.'
        },
        {
          q: '¿Qué representa la casa 12?',
          options: ['Dinero', 'Lo oculto, inconsciente, retiro espiritual, redención', 'Carrera', 'Romance'],
          correct: 1,
          explanation: 'Casa 12 es lo inconsciente, retiro, trascendencia.'
        },
        {
          q: '¿Qué es el segundo cuadrante?',
          options: ['Casas 1-3', 'Casas 7-9: relaciones y expansión hacia otros', 'Casas 10-12', 'Casas 4-6'],
          correct: 1,
          explanation: 'Segundo cuadrante (7-9) enfatiza relaciones.'
        },
        {
          q: '¿Qué es el cuarto cuadrante?',
          options: ['Casas 1-3', 'Casas 4-6', 'Casas 7-9', 'Casas 10-12: madurez y retorno espiritual'],
          correct: 3,
          explanation: 'Cuarto cuadrante (10-12) es madurez pública y retorno espiritual.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M4_casas_vacias'] = {
      id: 'M4_casas_vacias',
      moduleId: 'M4',
      title: 'Casas vacías: significado e interpretación',
      titleEn: 'Empty Houses: Meaning and Interpretation',
      level: 'intermedio',
      prerequisites: ['M4_clasificacion','M4_casas_1_6','M4_casas_7_12'],
      content: {
        summary: 'Una casa vacía (sin planetas) no significa falta de actividad en ese área de vida; simplemente indica que esa esfera requiere desarrollo más consciente y deliberado. La energía viene del regente de la casa y de tránsitos planetarios. Muchas cartas tienen varias casas vacías; esto es normal. Una casa llena vs vacía tiene dinámicas distintas.',
        keyPoints: [
          'Casa vacía: ningún planeta dentro de sus límites (algunos incluyen Quirón/Lilith)',
          'No significa ausencia de vida en ese área',
          'Requiere desarrollo consciente y deliberado del tema',
          'Regente de la casa vacía: governa la energía disponible',
          'Tránsitos: cuando planeta transita casa vacía activa el tema',
          'Casa vacía vs llena: llena = automática; vacía = deliberada y consciente',
          'Todas casas vacías es raro; todas llenas también',
          'Patrón de casas vacías revela donde necesitas integración adicional'
        ]
      },
      questions: [
        {
          q: '¿Qué es una casa vacía?',
          options: ['Destruida', 'Sin planetas dentro de sus límites', 'Con solo Luna', 'Sin cuadrantes'],
          correct: 1,
          explanation: 'Casa vacía simplemente no contiene planetas natales.'
        },
        {
          q: '¿Qué indica una casa vacía?',
          options: ['Ausencia total de esa área', 'Requiere desarrollo consciente, no automático como casa llena', 'Mala suerte', 'Sin vida'],
          correct: 1,
          explanation: 'Casa vacía no significa ausencia sino desarrollo deliberado.'
        },
        {
          q: '¿Cuál es el rol del regente de la casa vacía?',
          options: ['Sin rol', 'Governa la energía disponible en esa casa', 'La debilita', 'La fortalece'],
          correct: 1,
          explanation: 'Regente de casa vacía dirige cómo funciona esa casa.'
        },
        {
          q: '¿Cómo se activa una casa vacía?',
          options: ['Nunca', 'Mediante tránsitos de planetas que la recorren', 'Solo por viaje', 'No se activa'],
          correct: 1,
          explanation: 'Tránsitos planetarios activan casas vacías cuando las atraviesan.'
        },
        {
          q: '¿Cuál es la diferencia casa llena vs vacía?',
          options: ['No hay diferencia', 'Llena automática/inconsciente; vacía deliberada/consciente', 'Iguales', 'Al azar'],
          correct: 1,
          explanation: 'Casa llena = automática; casa vacía = requiere esfuerzo consciente.'
        },
        {
          q: '¿Es anormal tener muchas casas vacías?',
          options: ['Sí', 'No, es completamente normal y frecuente', 'Indica enfermedad', 'Muy raro'],
          correct: 1,
          explanation: 'La mayoría de cartas tienen varias casas vacías.'
        },
        {
          q: '¿Todos los planetas afectan casas de igual forma?',
          options: ['Sí', 'No, Sol/Luna/Ascendente y ángulos tienen mayor impacto', 'Aleatorio', 'Sin importancia'],
          correct: 1,
          explanation: 'Luminarias y ángulos tienen peso especial en interpretación.'
        },
        {
          q: '¿Cuál es el enfoque con casas vacías?',
          options: ['Ignorarlas', 'Reconocer que requieren cultivo consciente mediante trabajo intencional', 'Evitarlas', 'Lamentar'],
          correct: 1,
          explanation: 'Las casas vacías invitan a desarrollo consciente de esos temas.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M4_clasificacion'] = {
      id: 'M4_clasificacion',
      moduleId: 'M4',
      title: 'Clasificación de casas: angulares, sucedentes, cadentes',
      titleEn: 'Classification of Houses: Angular, Succedent, Cadent',
      level: 'basico',
      prerequisites: ['M1_carta_natal'],
      content: {
        summary: 'Las 12 casas se dividen en tres grupos según su fortaleza angular: casas angulares (1, 4, 7, 10) son poderosas; casas sucedentes (2, 5, 8, 11) son moderadas; casas cadentes (3, 6, 9, 12) son débiles. Esta clasificación refleja la cercanía a los ángulos cardinales (ASC, IC, DESC, MC) y afecta la potencia de planetas en cada casa.',
        keyPoints: [
          'CASAS ANGULARES (1, 4, 7, 10): más poderosas, cerca ángulos ASC-IC-DESC-MC',
          'Casa 1 Ascendente: personalidad, apariencia, comienzo de vida',
          'Casa 4 Fondo Cielo: familia, hogar, raíces, final de vida',
          'Casa 7 Descendente: relaciones, pareja, contrato, otros',
          'Casa 10 Medio Cielo: carrera, reputación, pubicidad, vocación',
          'CASAS SUCEDENTES (2, 5, 8, 11): potencia moderada, estabilidad',
          'CASAS CADENTES (3, 6, 9, 12): debilitantes, comunicación/servicio/espiritualidad',
          'Planeta angular vs cadente: varía importancia según posición'
        ]
      },
      questions: [
        {
          q: '¿Cuáles son las casas angulares?',
          options: ['1, 2, 3, 4', '1, 4, 7, 10', '3, 6, 9, 12', '2, 5, 8, 11'],
          correct: 1,
          explanation: 'Casas angulares son 1, 4, 7, 10; cerca de ángulos cardinales.'
        },
        {
          q: '¿Cuáles son las casas sucedentes?',
          options: ['1, 4, 7, 10', '2, 5, 8, 11', '3, 6, 9, 12', 'Solo pares'],
          correct: 1,
          explanation: 'Casas sucedentes son 2, 5, 8, 11; potencia moderada.'
        },
        {
          q: '¿Cuáles son las casas cadentes?',
          options: ['1, 4, 7, 10', '2, 5, 8, 11', '3, 6, 9, 12', 'Impares'],
          correct: 2,
          explanation: 'Casas cadentes son 3, 6, 9, 12; debilitantes.'
        },
        {
          q: '¿Por qué las casas angulares son más poderosas?',
          options: ['Arbitrario', 'Porque están cerca de los ángulos ASC, IC, DESC, MC', 'No son más fuertes', 'Convención'],
          correct: 1,
          explanation: 'Proximidad a ángulos cardinales otorga potencia.'
        },
        {
          q: '¿Cuál es el significado de la casa 1?',
          options: ['Dinero', 'Personalidad, apariencia, comienzo de vida, ASC', 'Relaciones', 'Carrera'],
          correct: 1,
          explanation: 'Casa 1 Ascendente es la máscara y presentación personal.'
        },
        {
          q: '¿Cuál es el significado de la casa 10?',
          options: ['Dinero', 'Carrera, vocación, reputación pública, MC', 'Familia', 'Espiritualidad'],
          correct: 1,
          explanation: 'Casa 10 MC es posición pública y logros profesionales.'
        },
        {
          q: '¿Cuál es el significado de la casa 7?',
          options: ['Dinero', 'Relaciones, pareja, contrato, DESC', 'Hogar', 'Amigos'],
          correct: 1,
          explanation: 'Casa 7 DESC es relaciones y asociaciones significativas.'
        },
        {
          q: '¿Qué indica un planeta angular vs cadente?',
          options: ['No hay diferencia', 'Angular más potente/importante; cadente más débil/interno', 'Iguales', 'Al azar'],
          correct: 1,
          explanation: 'Posición angular refuerza importancia y visibilidad.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M4_interceptadas'] = {
      id: 'M4_interceptadas',
      moduleId: 'M4',
      title: 'Casas interceptadas y signos duplicados',
      titleEn: 'Intercepted Houses and Duplicate Signs',
      level: 'intermedio',
      prerequisites: ['M4_sistemas','M2_zodiaco'],
      content: {
        summary: 'En algunos sistemas de casas (especialmente Placidus) puede ocurrir que un signo entero se contenga dentro de una casa (interceptado) o que un signo sea cúspide de dos casas (duplicado). Las casas interceptadas sugieren áreas de la vida que requieren atención consciente; los signos duplicados indican énfasis en esa energía.',
        keyPoints: [
          'Casa interceptada: signo completo (0° a 30°) contenido dentro de una casa',
          'Signo duplicado: mismo signo es cúspide de dos casas distintas',
          'Ocurre principalmente en latitudes altas y con sistema Placidus',
          'Casa interceptada: área de vida que requiere desarrollo/integración consciente',
          'Signo duplicado: énfasis/potencia en ese arquetipo zodiacal',
          'Regente de casa interceptada: determina cómo se activa esa casa',
          'Patrón: si una casa está interceptada, otra también (siempre en pares opuestos)',
          'Interpretación: casa interceptada más desafiante, requiere búsqueda interna'
        ]
      },
      questions: [
        {
          q: '¿Qué es una casa interceptada?',
          options: ['Vacía', 'Signo completo contenido dentro una casa, sin cúspide propia', 'Con planeta', 'Normal'],
          correct: 1,
          explanation: 'Casa interceptada tiene signo entero sin marcar la cúspide.'
        },
        {
          q: '¿Qué es un signo duplicado?',
          options: ['Dos signos', 'Mismo signo es cúspide de dos casas distintas', 'Aspecto', 'Raro'],
          correct: 1,
          explanation: 'Signo duplicado aparece como cúspide de dos casas.'
        },
        {
          q: '¿En qué sistema de casas ocurren más las interceptadas?',
          options: ['Iguales', 'Placidus especialmente en latitudes altas', 'Whole Sign', 'Todas igual'],
          correct: 1,
          explanation: 'Placidus es vulnerable a casas interceptadas en altas latitudes.'
        },
        {
          q: '¿Qué indica una casa interceptada?',
          options: ['Debilidad total', 'Área de vida que requiere integración/desarrollo consciente', 'Irrelevancia', 'Fuerza extra'],
          correct: 1,
          explanation: 'Casa interceptada = área donde necesitas trabajo consciente.'
        },
        {
          q: '¿Cuál es el rol del regente de la casa interceptada?',
          options: ['Sin rol', 'Determina cómo se activa y expresa esa casa', 'Irrelevante', 'Opuesto'],
          correct: 1,
          explanation: 'Regente de casa interceptada governa cómo funciona.'
        },
        {
          q: '¿Qué indica un signo duplicado?',
          options: ['Debilidad', 'Énfasis y potencia en ese arquetipo zodiacal', 'Sin importancia', 'Defecto'],
          correct: 1,
          explanation: 'Signo duplicado refuerza energía de ese signo en carta.'
        },
        {
          q: '¿Ocurren las casas interceptadas de forma aislada?',
          options: ['Sí', 'No, siempre en pares opuestos (una casa no anula otra)', 'Una sola', 'Aleatorio'],
          correct: 1,
          explanation: 'Si una casa está interceptada, su opuesta también (1-7, 2-8, etc.).'
        },
        {
          q: '¿Cuál es el enfoque interpretativo con casas interceptadas?',
          options: ['Ignorarlas', 'Entenderlas como áreas que requieren búsqueda/integración interna consciente', 'Considerarlas débiles', 'Fortuitamente fuertes'],
          correct: 1,
          explanation: 'Las casas interceptadas requieren atención y desarrollo consciente.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M4_regente_casa'] = {
      id: 'M4_regente_casa',
      moduleId: 'M4',
      title: 'Regente de casa y dispositor',
      titleEn: 'House Ruler and Dispositor',
      level: 'intermedio',
      prerequisites: ['M2_zodiaco','M4_clasificacion','M3_dignidades'],
      content: {
        summary: 'El regente de una casa es el planeta que gobierna el signo en la cúspide. Ejemplo: si Casa 7 comienza en Escorpio, Marte es regente. El regente de la casa determina cómo se manifiesta la energía de esa casa. Un dispositor es el regente del signo donde un planeta está posicionado. El seguimiento de cadenas de dispositores revela patrones profundos en la carta.',
        keyPoints: [
          'Regente de casa: planeta que gobierna signo en cúspide casa',
          'Ejemplo: Escorpio en casa 7 = Marte regente de relaciones',
          'Signo en cúspide determina cualidad de la casa',
          'Regente aspecto/casa posición: revela cómo funciona esa casa',
          'Dispositor: regente del signo donde un planeta está',
          'Cadena de disposición: seguir dispositor a dispositor até llegar a dispositor final',
          'Dispositor final (usualmente Sun o punto angular): revela síntesis de carta',
          'Análisis dispositional: técnica helenística sofisticada'
        ]
      },
      questions: [
        {
          q: '¿Qué es el regente de una casa?',
          options: ['Planeta en la casa', 'Planeta que gobierna el signo en la cúspide', 'Ángulo', 'Aspecto'],
          correct: 1,
          explanation: 'Regente de casa = planeta gobernador del signo cuspidiano.'
        },
        {
          q: '¿Ejemplo de regente de casa?',
          options: ['Venus en casa 7', 'Si Tauro está en cúspide casa 2, Venus es regente', 'Sun en casa 1', 'Mercurio en casa 3'],
          correct: 1,
          explanation: 'Tauro en cúspide = Venus regente, sin importar dónde esté Venus.'
        },
        {
          q: '¿Qué es un dispositor?',
          options: ['Planeta en casa', 'Regente del signo donde un planeta está posicionado', 'Aspecto', 'Transito'],
          correct: 1,
          explanation: 'Dispositor es regente del signo ocupado por un planeta.'
        },
        {
          q: '¿Ejemplo de dispositor?',
          options: ['Mercurio en Tauro', 'Si Mercurio está en Tauro, Venus es dispositor', 'Sun en Leo', 'Moon en Cáncer'],
          correct: 1,
          explanation: 'Mercurio en Tauro = Venus dispositor de Mercurio.'
        },
        {
          q: '¿Qué es una cadena de disposición?',
          options: ['Aspectos varios', 'Secuencia de dispositor a dispositor hasta llegar al final', 'Casas', 'Signos'],
          correct: 1,
          explanation: 'Cadena disposicional sigue dispositor -> dispositor -> final.'
        },
        {
          q: '¿Cuál es el dispositor final típicamente?',
          options: ['Mercurio', 'Sun o punto angular que no tiene dispositor sobre él', 'Venus', 'Plutón'],
          correct: 1,
          explanation: 'Dispositor final usualmente Sun o Ascendente.'
        },
        {
          q: '¿Cómo se usa el dispositor en interpretación?',
          options: ['Se ignora', 'Revela cómo se manifiesta un planeta a través de su dispositor', 'Sin importancia', 'Opcional'],
          correct: 1,
          explanation: 'Dispositor explica cómo un planeta funciona en su contexto.'
        },
        {
          q: '¿Qué es una cadena final significativa?',
          options: ['Rara', 'Cuando cadena disposicional termina en planeta fuerte o angular', 'Sin importancia', 'Imaginaria'],
          correct: 1,
          explanation: 'Cadena que termina en planeta angular revela síntesis poderosa.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M4_sistemas'] = {
      id: 'M4_sistemas',
      moduleId: 'M4',
      title: 'Sistemas de casas: Placidus, Koch, Campanus, Iguales',
      titleEn: 'House Systems: Placidus, Koch, Campanus, Equal',
      level: 'intermedio',
      prerequisites: ['M1_carta_natal','M1_coordenadas'],
      content: {
        summary: 'Las casas dividen la carta en 12 sectores de vida. Existen múltiples sistemas para calcularlas basados en diferentes geometrías: Placidus (estándar occidental), Koch, Campanus, Sistema de Casas Iguales, Whole Sign, etc. No hay consenso absoluto; la elección de sistema afecta posiciones de cúspides y análisis de casa. Placidus es el más usado en Occidente.',
        keyPoints: [
          'PLACIDUS: estándar occidental, divide tiempo sidéreo en 12 partes desiguales',
          'KOCH: basado en tiempos locales del orto y ocaso',
          'CAMPANUS: divide horizonte y meridiano en 12 partes',
          'CASAS IGUALES: divide eclíptica en 12 sectores de 30° cada uno',
          'WHOLE SIGN: cada signo = una casa (casa 1 signo Ascendente)',
          'Diferencias visibles: especialmente en latitudes altas (>60°)',
          'Cambio de cúspides: planetas pueden cambiar de casa según sistema',
          'Selección de sistema: elección personal de astrólogo, coherencia más importante'
        ]
      },
      questions: [
        {
          q: '¿Cuál es el sistema de casas estándar en Occidente?',
          options: ['Koch', 'Placidus', 'Campanus', 'Whole Sign'],
          correct: 1,
          explanation: 'Placidus es el sistema más usado en astrología occidental moderna.'
        },
        {
          q: '¿Cómo funciona el sistema Placidus?',
          options: ['Eclíptica en 12 partes', 'Divide tiempo sidéreo en 12 partes desiguales', 'Horizonte dividido', 'Signos como casas'],
          correct: 1,
          explanation: 'Placidus divide el tiempo sidéreo proporcionalmente.'
        },
        {
          q: '¿Cuál sistema se basa en tiempos locales del orto/ocaso?',
          options: ['Placidus', 'Koch', 'Campanus', 'Iguales'],
          correct: 1,
          explanation: 'Sistema Koch usa tiempos de orto, mediodía y ocaso local.'
        },
        {
          q: '¿Cómo funciona el sistema de Casas Iguales?',
          options: ['Tiempo sidéreo', 'Divide eclíptica en 12 sectores de 30° cada uno', 'Horizonte local', 'Signos naturales'],
          correct: 1,
          explanation: 'Casas Iguales crea 12 casas idénticas de 30°.'
        },
        {
          q: '¿Qué es Whole Sign Houses?',
          options: ['Sistema antiguo', 'Cada signo zodiacal = una casa, casa 1 signo ASC', 'Distancia igual', 'Moderno reciente'],
          correct: 1,
          explanation: 'Whole Sign es sistema helenístico donde cada signo = casa.'
        },
        {
          q: '¿Cuándo son más visibles las diferencias entre sistemas de casas?',
          options: ['Latitudes bajas', 'Latitudes altas >60° donde diferencias geométricas son extremas', 'Ecuador', 'Nunca'],
          correct: 1,
          explanation: 'Diferencias son más extremas en altas latitudes.'
        },
        {
          q: '¿Puede un planeta cambiar de casa según el sistema?',
          options: ['Nunca', 'Sí, especialmente en cambios entre sistemas radicales', 'Solo en algunas casas', 'No existe diferencia'],
          correct: 1,
          explanation: 'Planetas pueden cambiar de casa según sistema elegido.'
        },
        {
          q: '¿Cuál es la práctica profesional respecto a sistemas de casas?',
          options: ['Cambiar constantemente', 'Elegir uno y mantener coherencia en toda la interpretación', 'No importa', 'Todos iguales'],
          correct: 1,
          explanation: 'Lo importante es coherencia; elegir y mantener un sistema.'
        }
      ]
    };

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M5_aplicativos'] = {
  id: 'M5_aplicativos',
  moduleId: 'M5',
  title: 'Aspectos aplicativos y separativos',
  titleEn: 'Applying and Separating Aspects',
  level: 'intermedio',
  prerequisites: ['M5_teoria','M1_astronomia'],
  content: {
    summary: 'Un aspecto aplicativo ocurre cuando el planeta más rápido se acerca al más lento hacia el aspecto exacto; es dinámico y activo. Un aspecto separativo ocurre cuando se alejan tras el aspecto exacto; es pasado e integrativo. Los aspectos aplicativos son más activos y potentes que los separativos. Esta distinción es especialmente importante en astrología horaria y predictiva.',
    keyPoints: [
      'APLICATIVO: planeta rápido se acerca al lento hacia aspecto exacto',
      'SEPARATIVO: planetas se alejan tras aspecto exacto',
      'Aplicativo: dinámico, activo, potencia presente y futura',
      'Separativo: pasado, integrativo, potencia en disminución',
      'Velocidades: Moon rápida, Mercury rápido, Sun mediocre, lento Saturno-Plutón',
      'Orbe aplicativo: típicamente 8-12° antes de exactitud',
      'Orbe separativo: típicamente 8-12° después de exactitud',
      'Importancia en horarismo y predicción; natal es menos crítico'
    ]
  },
  questions: [
    {
      q: '¿Qué es un aspecto aplicativo?',
      options: ['Separándose', 'Planeta rápido acercándose al lento hacia aspecto exacto', 'Pasado', 'Débil'],
      correct: 1,
      explanation: 'Aplicativo es movimiento hacia aspecto exacto.'
    },
    {
      q: '¿Qué es un aspecto separativo?',
      options: ['Acercándose', 'Planetas alejándose tras aspecto exacto', 'Futuro', 'Fuerte'],
      correct: 1,
      explanation: 'Separativo es movimiento tras aspecto exacto.'
    },
    {
      q: '¿Cuál es más potente: aplicativo o separativo?',
      options: ['Iguales', 'Aplicativo es más dinámico y activo', 'Separativo', 'Ninguno'],
      correct: 1,
      explanation: 'Aplicativo trae energía presente y futura.'
    },
    {
      q: '¿Qué indica aplicativo psicológicamente?',
      options: ['Pasado', 'Dinámico, activo, potencia presente y futura', 'Débil', 'Integrado'],
      correct: 1,
      explanation: 'Aplicativo es activo y presente.'
    },
    {
      q: '¿Qué indica separativo psicológicamente?',
      options: ['Futuro', 'Pasado, integrativo, potencia en disminución', 'Activo', 'Fuerte'],
      correct: 1,
      explanation: 'Separativo es pasado en proceso de integración.'
    },
    {
      q: '¿Cuál planeta es más rápido?',
      options: ['Saturno', 'Mercury/Moon (Mercury y Moon son los más rápidos)', 'Sun', 'Plutón'],
      correct: 1,
      explanation: 'Mercury y Moon son los planetas más rápidos.'
    },
    {
      q: '¿En qué técnica es más importante la distinción aplicativo/separativo?',
      options: ['Natal', 'Horarismo y predicción', 'Sinastría', 'Ninguna'],
      correct: 1,
      explanation: 'Horaria y tránsitos usan aplicativo/separativo activamente.'
    },
    {
      q: '¿Cuál es el orbe típico de un aspecto aplicativo?',
      options: ['1-2°', '8-12° antes de exactitud', '20°', 'Sin límite'],
      correct: 1,
      explanation: 'Orbe aplicativo típico 8-12° antes exacto.'
    }
  ]
};

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M5_aspectos_angulos'] = {
  id: 'M5_aspectos_angulos',
  moduleId: 'M5',
  title: 'Aspectos con ángulos: planetas en ángulos',
  titleEn: 'Aspects with Angles: Planets on Angles',
  level: 'intermedio',
  prerequisites: ['M4_angulos','M5_teoria'],
  content: {
    summary: 'Los planetas en aspecto con los ángulos (ASC, DESC, MC, IC) tienen impacto especial porque los ángulos son los puntales de la carta. Un planeta aspecto al MC por ejemplo, afecta la carrera y reputación pública intensamente. Los aspectos planeta-ángulo son críticos para entender cómo ese planeta funciona en áreas de vida específicas.',
    keyPoints: [
      'Planetas aspecto ASC: afectan personalidad y cómo te presentas',
      'Planetas aspecto DESC: afectan relaciones y cómo atraes pareja',
      'Planetas aspecto MC: afectan carrera, reputación pública, vocación',
      'Planetas aspecto IC: afectan familia, hogar, raíces emocionales',
      'Orbes: típicamente 1-2° para ángulos (más cerrado que aspectos planetarios)',
      'Trígono/sextil a ángulo: apoyo en esa área',
      'Cuadratura/oposición a ángulo: desafío en esa área',
      'Conjunción a ángulo: fusión e intensidad en esa área'
    ]
  },
  questions: [
    {
      q: '¿Cuál es la importancia de aspectos planeta-ángulos?',
      options: ['Sin importancia', 'Critical; los ángulos son puntales de carta y forman vida', 'Menor que aspectos', 'Irrelevantes'],
      correct: 1,
      explanation: 'Aspectos ángulo son críticos para vida concreta.'
    },
    {
      q: '¿Cómo afecta un planeta aspecto al MC?',
      options: ['Sin efecto', 'Afecta carrera, reputación pública, vocación intensamente', 'Solo dinero', 'No relacionado'],
      correct: 1,
      explanation: 'Planeta-MC = influencia en carrera y reputación.'
    },
    {
      q: '¿Cómo afecta un planeta aspecto al ASC?',
      options: ['Sin efecto', 'Afecta personalidad, presentación, cómo te ven', 'Solo genes', 'Irrelevante'],
      correct: 1,
      explanation: 'Planeta-ASC = influencia en presentación personal.'
    },
    {
      q: '¿Cómo afecta un planeta aspecto al IC?',
      options: ['Sin significado', 'Afecta familia, hogar, raíces emocionales profundamente', 'Solo dinero', 'Exterior'],
      correct: 1,
      explanation: 'Planeta-IC = influencia en familia y raíces.'
    },
    {
      q: '¿Cuáles orbes se usan para aspectos planeta-ángulos?',
      options: ['8-12° como aspectos', 'Típicamente 1-2° más cerrados que aspectos planetarios', '20°', 'Sin límite'],
      correct: 1,
      explanation: 'Los ángulos requieren orbes más cerrados.'
    },
    {
      q: '¿Qué indica un trígono planeta-MC?',
      options: ['Desafío', 'Apoyo y facilidad en carrera y vocación', 'Obstáculo', 'Sin significado'],
      correct: 1,
      explanation: 'Trígono MC = suerte y flujo profesional.'
    },
    {
      q: '¿Qué indica una oposición planeta-ASC?',
      options: ['Armonía', 'Desafío en presentación; tendencia a proyectar en otros', 'Facilidad', 'Sin efecto'],
      correct: 1,
      explanation: 'Oposición ASC = dificultad en cómo te presentas.'
    },
    {
      q: '¿Cuál es el poder de una conjunción planeta-ángulo?',
      options: ['Débil', 'Máximo; fusión intensa en esa área de vida', 'Medio', 'Sin poder'],
      correct: 1,
      explanation: 'Conjunción ángulo = potencia extrema en ese campo.'
    }
  ]
};

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M5_conjuncion'] = {
  id: 'M5_conjuncion',
  moduleId: 'M5',
  title: 'Conjunción: fusión e identidad',
  titleEn: 'Conjunction: Fusion and Identity',
  level: 'basico',
  prerequisites: ['M5_teoria'],
  content: {
    summary: 'La conjunción es el aspecto más potente: dos planetas a 0° de distancia. Representa fusión total de energías, identidad compartida, potencia máxima. Puede ser muy armoniosa o muy tensa según los planetas involucrados. Conjunciones con luminarias son especialmente significativas. El signo y casa de la conjunción define su cualidad.',
    keyPoints: [
      'Conjunción 0°: fusión identidad, energías inseparables',
      'Potencia máxima: aspecto más fuerte de todos',
      'Puede ser armoniosa o tensa según planetas',
      'Sun-Moon conjunción: Luna Nueva en natal, identidad integrada, pero puede ser obsesiva',
      'Conjunción con luminarias: impacto psicológico profundo',
      'Conjunción en signo: cualidad de la fusión según energía zodiacal',
      'Conjunción en casa: área de vida donde energía se concentra',
      'Orbe más cerrado = aspecto más potente (1° mejor que 8°)'
    ]
  },
  questions: [
    {
      q: '¿Cuál es el ángulo de una conjunción?',
      options: ['30°', '60°', '0° exacto exacto', '90°'],
      correct: 2,
      explanation: 'Conjunción es 0° de separación angular.'
    },
    {
      q: '¿Qué significa fusión en una conjunción?',
      options: ['Separación', 'Las dos energías se vuelven inseparables e identificadas', 'Conflicto', 'Rechazo'],
      correct: 1,
      explanation: 'Conjunción funde dos energías en una.'
    },
    {
      q: '¿Cuán potente es una conjunción?',
      options: ['Débil', 'Moderada', 'Máxima potencia de todos los aspectos', 'Sin poder'],
      correct: 2,
      explanation: 'Conjunción es el aspecto más fuerte.'
    },
    {
      q: '¿Qué indica Sun-Moon en conjunción?',
      options: ['Conflicto emocional', 'Identidad integrada pero puede ser obsesiva, Luna Nueva natal', 'Separación total', 'Normal'],
      correct: 1,
      explanation: 'Sun-Moon conj = Luna Nueva: identidad unificada.'
    },
    {
      q: '¿Pueden ser difíciles las conjunciones?',
      options: ['Nunca', 'Sí, según planetas involucrados; Marte-Saturno es tensa', 'Siempre fáciles', 'Sin efecto'],
      correct: 1,
      explanation: 'Conjunción intensifica; puede ser positiva o difícil.'
    },
    {
      q: '¿Cómo afecta el signo a una conjunción?',
      options: ['No afecta', 'Define la cualidad de la fusión según energía zodiacal', 'Solo importa casa', 'Sin valor'],
      correct: 1,
      explanation: 'Signo da color a la energía conjunta.'
    },
    {
      q: '¿Qué es mejor orbe en conjunción?',
      options: ['10°', '8°', '1° o lo más cerrado posible', '15°'],
      correct: 2,
      explanation: 'Orbes cerrados (1-2°) son más potentes.'
    },
    {
      q: '¿Cuál es el impacto de conjunción en casa?',
      options: ['Sin efecto', 'Concentra la energía fusionada en esa área de vida', 'Debilitante', 'Irrelevante'],
      correct: 1,
      explanation: 'Conjunción en casa intensifica ese campo de vida.'
    }
  ]
};

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M5_gran_cruz'] = {
  id: 'M5_gran_cruz',
  moduleId: 'M5',
  title: 'Gran Cruz: tensión y crecimiento',
  titleEn: 'Grand Cross: Tension and Growth',
  level: 'avanzado',
  prerequisites: ['M5_oposicion','M5_teoria'],
  content: {
    summary: 'Una Gran Cruz es un cuadrado perfecto de cuatro planetas, con dos oposiciones y cuatro cuadraturas. Trae tensión máxima pero también potencial de crecimiento máximo. Personas con Gran Cruz enfrentan desafíos continuos que los fuerzan a desarrollarse. Es una configuración desafiante pero tremendamente transformadora si se canaliza conscientemente.',
    keyPoints: [
      'Gran Cruz: cuatro planetas en cruz perfecta, dos oposiciones + cuatro cuadraturas',
      'Tensión máxima, desafío continuo, presión constante',
      'Crecimiento forzado; persona motivada a desarrollarse',
      'Energía volcánica que requiere canalización positiva',
      'Peligro: autodestrucción si se reprime energía; explosión si incontrolada',
      'Cardinales, fijos o mutables en esquinas revelan modalidad de tensión',
      'Requiere canalización creativa: arte, deporte, acción social',
      'Con madurez emocional Gran Cruz genera personas excepcionales'
    ]
  },
  questions: [
    {
      q: '¿Qué es una Gran Cruz?',
      options: ['Una simple cuadratura', 'Cuatro planetas en cruz con dos oposiciones y cuatro cuadraturas', 'Dos oposiciones', 'Sin efecto'],
      correct: 1,
      explanation: 'Gran Cruz es configuración de máxima tensión.'
    },
    {
      q: '¿Cuántos aspectos forma una Gran Cruz?',
      options: ['2', '4 cuadraturas y 2 oposiciones = 6 aspectos tensos', '8', 'Varios'],
      correct: 1,
      explanation: 'Gran Cruz crea 2 oposiciones + 4 cuadraturas.'
    },
    {
      q: '¿Qué indica una Gran Cruz?',
      options: ['Debilidad total', 'Tensión máxima, desafío continuo, presión motivadora', 'Sin significado', 'Mala suerte'],
      correct: 1,
      explanation: 'Gran Cruz trae tensión que fuerza crecimiento.'
    },
    {
      q: '¿Cuál es el peligro de una Gran Cruz?',
      options: ['Pasividad', 'Autodestrucción si se reprime; explosión si incontrolada', 'Debilidad', 'Sin riesgo'],
      correct: 1,
      explanation: 'Gran Cruz requiere canalización sabia.'
    },
    {
      q: '¿Cuál es el potencial de una Gran Cruz?',
      options: ['Ninguno', 'Crecimiento máximo si se canaliza conscientemente', 'Debilidad', 'Sin poder'],
      correct: 1,
      explanation: 'Gran Cruz bien canalizada genera personas excepcionales.'
    },
    {
      q: '¿Cómo se canaliza positivamente una Gran Cruz?',
      options: ['Represión', 'Mediante arte, deporte, acción social, expresión creativa', 'Inactividad', 'Escape'],
      correct: 1,
      explanation: 'Expresión creativa y acción transforman la tensión.'
    },
    {
      q: '¿Qué revela la modalidad (cardinal/fijo/mutable) de Gran Cruz?',
      options: ['Nada', 'Cómo experimenta y expresa la tensión la persona', 'Solo energía', 'Sin valor'],
      correct: 1,
      explanation: 'Modalidad modula expresión de la Gran Cruz.'
    },
    {
      q: '¿Es siempre "mala" una Gran Cruz?',
      options: ['Sí', 'No; es desafiante pero transformadora con madurez emocional', 'Siempre buena', 'Sin efecto'],
      correct: 1,
      explanation: 'Gran Cruz es desafío que genera maestría.'
    }
  ]
};

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M5_gran_trigono'] = {
  id: 'M5_gran_trigono',
  moduleId: 'M5',
  title: 'Figuras de aspectos: Gran Trígono',
  titleEn: 'Aspect Figures: Grand Trine',
  level: 'avanzado',
  prerequisites: ['M5_trigono_sextil','M2_elementos'],
  content: {
    summary: 'Un Gran Trígono es un triángulo de tres planetas, cada uno a 120° de los otros, usualmente en signos del mismo elemento. Crea una armonía perfecta y flujo de energía, pero puede llevar a pasividad extrema. El talento está disponible pero requiere acción consciente para manifestarse. Gran Trígono sin aspectos tensos puede ser potencialmente debilitante.',
    keyPoints: [
      'Gran Trígono: tres planetas en trígono mutuo 120° cada uno',
      'Usualmente en signos del mismo elemento (Fuego, Tierra, Aire o Agua)',
      'Armonía perfecta, flujo de energía, talento extraordinario',
      'Peligro: pasividad extrema, falta de motivación, complacencia',
      'Requiere integración de otros aspectos tensos en carta',
      'Elemento del gran trígono revela área de talento natural',
      'Necesidad de acción consciente para activar potencial',
      'Gran trígono sin cuadratura = debilidad motivacional'
    ]
  },
  questions: [
    {
      q: '¿Qué es un Gran Trígono?',
      options: ['Un trígono simple', 'Tres planetas en trígono mutuo cada uno 120° entre ellos', 'Dos trígonos', 'Sin efecto'],
      correct: 1,
      explanation: 'Gran Trígono es configuración perfecta de tres trígonos.'
    },
    {
      q: '¿En qué signos ocurre típicamente un Gran Trígono?',
      options: ['Aleatorios', 'En signos del mismo elemento (Fuego, Tierra, Aire o Agua)', 'Diferentes elementos', 'Solo Leo'],
      correct: 1,
      explanation: 'Gran Trígono agrupa planetas en elemento común.'
    },
    {
      q: '¿Qué indica un Gran Trígono?',
      options: ['Debilidad', 'Armonía perfecta, flujo de energía, talento extraordinario', 'Conflicto', 'Sin significado'],
      correct: 1,
      explanation: 'Gran Trígono es bendición de facilidad.'
    },
    {
      q: '¿Cuál es el peligro del Gran Trígono?',
      options: ['Tensión extrema', 'Pasividad extrema, falta de motivación, complacencia', 'Debilidad', 'Pobreza'],
      correct: 1,
      explanation: 'Gran Trígono puede crear complacencia y estancamiento.'
    },
    {
      q: '¿Qué revela el elemento del Gran Trígono?',
      options: ['Debilidad', 'Área de vida donde talento fluye naturalmente', 'Enemistades', 'Dinero'],
      correct: 1,
      explanation: 'Elemento revela campo natural del talento.'
    },
    {
      q: '¿Cómo se activa el potencial del Gran Trígono?',
      options: ['Automáticamente', 'Mediante acción consciente e integración de aspectos tensos', 'Nunca', 'Espera pasiva'],
      correct: 1,
      explanation: 'Gran Trígono requiere acción deliberada.'
    },
    {
      q: '¿Qué ocurre si Gran Trígono carece de aspectos tensos?',
      options: ['Fuerza máxima', 'Debilidad motivacional; falta impulso para crecer', 'Equilibrio perfecto', 'Éxito automático'],
      correct: 1,
      explanation: 'Sin tensos, faltan estímulos de crecimiento.'
    },
    {
      q: '¿Por qué se necesita una cuadratura con Gran Trígono?',
      options: ['Complicar', 'Para crear fricción motivadora y activar potencial latente', 'No se necesita', 'Para debilitar'],
      correct: 1,
      explanation: 'La tensión de cuadratura activa el talento dormido.'
    }
  ]
};

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M5_menores'] = {
  id: 'M5_menores',
  moduleId: 'M5',
  title: 'Aspectos menores: 30°, 45°, 72°, 150°, etc.',
  titleEn: 'Minor Aspects: 30°, 45°, 72°, 150°, etc.',
  level: 'avanzado',
  prerequisites: ['M5_teoria','M5_conjuncion','M5_trigono_sextil'],
  content: {
    summary: 'Los aspectos menores (semisextil 30°, semisquare 45°, quintil 72°, quincuncio 150°, etc.) proporcionan matices adicionales. No son tan obvios como los mayores pero comunican significados específicos. El semisextil y quincuncio son incómodos; el quintil es creativo. Astrólogos que buscan profundidad incluyen aspectos menores en análisis avanzado.',
    keyPoints: [
      'SEMISEXTIL 30°: conexión tenue, incómoda, requiere ajuste',
      'SEMISQUARE 45°: fricción menor, irritación, molestia persistente',
      'QUINTIL 72°: creatividad, talento específico, expresión artística',
      'SESQUICUADRATURA 135°: tensión interna, incertidumbre, conflicto sutil',
      'QUINCUNCIO 150°: ajuste requerido, incompatibilidad, síndrome de ajuste',
      'Uso variable según escuela astrológica',
      'Menos potentes que aspectos mayores pero significativos',
      'Refinamiento avanzado de interpretación'
    ]
  },
  questions: [
    {
      q: '¿Qué es un semisextil?',
      options: ['60°', '30° conexión tenue incómoda', '90°', '45°'],
      correct: 1,
      explanation: 'Semisextil 30° crea conexión incómoda.'
    },
    {
      q: '¿Qué es un quincuncio?',
      options: ['120°', '180°', '150° incompatibilidad ajuste requerido', '60°'],
      correct: 2,
      explanation: 'Quincuncio 150° requiere constante ajuste.'
    },
    {
      q: '¿Qué es un quintil?',
      options: ['Incómodo', '72° creatividad talento específico artístico', 'Conflictivo', 'Débil'],
      correct: 1,
      explanation: 'Quintil 72° trae expresión creativa.'
    },
    {
      q: '¿Qué es una sesquicuadratura?',
      options: ['30°', '90°', '135° tensión interna incertidumbre', '60°'],
      correct: 2,
      explanation: 'Sesquicuadratura 135° crea conflicto sutil.'
    },
    {
      q: '¿Cuán potentes son los aspectos menores?',
      options: ['Igual que mayores', 'Menos potentes pero significativos en profundidad', 'Irrelevantes', 'Más potentes'],
      correct: 1,
      explanation: 'Menores son sutiles pero valiosos.'
    },
    {
      q: '¿Quién usa más aspectos menores?',
      options: ['Principiantes', 'Astrólogos avanzados buscando profundidad interpretativa', 'Nadie', 'Anticuados'],
      correct: 1,
      explanation: 'Menores son herramienta avanzada.'
    },
    {
      q: '¿Qué caracteriza el quincuncio psicológicamente?',
      options: ['Armonía', 'Síndrome de ajuste; nunca se siente "correcto"', 'Conflicto agudo', 'Facilidad'],
      correct: 1,
      explanation: 'Quincuncio requiere ajuste perpetuo.'
    },
    {
      q: '¿Cuál aspecto menor es creativo?',
      options: ['Semisextil', 'Quincuncio', 'Quintil 72° creatividad artística', 'Semisquare'],
      correct: 2,
      explanation: 'Quintil favorece expresión creativa.'
    }
  ]
};

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M5_oposicion'] = {
  id: 'M5_oposicion',
  moduleId: 'M5',
  title: 'Oposición: conflicto e integración',
  titleEn: 'Opposition: Conflict and Integration',
  level: 'basico',
  prerequisites: ['M5_teoria'],
  content: {
    summary: 'La oposición es el aspecto de máxima tensión: dos planetas a 180° de distancia. Representa polaridad, conflicto, proyección psicológica. Pero también ofrece potencial de integración consciente. La oposición no es "mala" sino desafiante; requiere aceptar y reconciliar dos fuerzas opuestas dentro de sí mismo.',
    keyPoints: [
      'Oposición 180°: máxima separación angular, polaridad extrema',
      'Conflicto potencial pero también potencial de integración',
      'Proyección: tendemos a proyectar un lado en otros',
      'Dos perspectivas opuestas requieren síntesis',
      'Planetas en casas opuestas: conflicto entre áreas de vida',
      'Trabajo consciente: integrar ambos lados, aceptar complejidad',
      'Sun-Moon oposición: Luna Llena natal, polaridad emocional-voluntad',
      'No debe rechazarse sino entenderse como oportunidad de madurez'
    ]
  },
  questions: [
    {
      q: '¿Cuál es el ángulo de una oposición?',
      options: ['0°', '60°', '90°', '180° máxima separación angular'],
      correct: 3,
      explanation: 'Oposición es 180° de separación.'
    },
    {
      q: '¿Qué significa oposición en términos psicológicos?',
      options: ['Armonía pura', 'Polaridad, conflicto, proyección psicológica', 'Debilidad total', 'Sin efecto'],
      correct: 1,
      explanation: 'Oposición presenta dos visiones opuestas.'
    },
    {
      q: '¿Es "mala" una oposición?',
      options: ['Siempre', 'No, es desafiante pero ofrece integración consciente', 'Siempre buena', 'Sin significado'],
      correct: 1,
      explanation: 'Oposición desafía pero invita madurez.'
    },
    {
      q: '¿Qué es proyección en una oposición?',
      options: ['Ilusión pura', 'Tendencia a ver un lado en otros y negar el propio lado opuesto', 'Sin significado', 'Imaginación'],
      correct: 1,
      explanation: 'Proyección: ver afuera lo que no vemos adentro.'
    },
    {
      q: '¿Qué indica Sun-Moon en oposición?',
      options: ['Armonía', 'Luna Llena natal; polaridad emocional-voluntad; integración necesaria', 'Iguales', 'Sin efecto'],
      correct: 1,
      explanation: 'Sun-Moon oposición = Luna Llena: tensión voluntad-instinto.'
    },
    {
      q: '¿Dónde ocurren oposiciones entre casas?',
      options: ['No ocurren', 'Planetas en casas opuestas (1-7, 2-8, etc.)', 'Solo una casa', 'No importa'],
      correct: 1,
      explanation: 'Oposición casa = conflicto entre dos áreas de vida opuestas.'
    },
    {
      q: '¿Cuál es el trabajo consciente con oposición?',
      options: ['Ignorarla', 'Integrar ambos lados, aceptar complejidad y paradoja', 'Elegir un lado', 'Rechazarla'],
      correct: 1,
      explanation: 'Oposición invita a síntesis madura de opuestos.'
    },
    {
      q: '¿Puede ser creativa una oposición?',
      options: ['Nunca', 'Sí, la tensión puede generar creatividad y crecimiento si se integra', 'No hay tensión', 'Débil'],
      correct: 1,
      explanation: 'Oposición bien integrada crea creatividad dinámica.'
    }
  ]
};

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M5_otras_figuras'] = {
  id: 'M5_otras_figuras',
  moduleId: 'M5',
  title: 'Otras figuras de aspectos: Yod, Cometa, Trapecio',
  titleEn: 'Other Aspect Figures: Yod, Comet, Trapezoid',
  level: 'avanzado',
  prerequisites: ['M5_teoria','M5_menores'],
  content: {
    summary: 'Existen otras configuraciones menores de aspectos además de Gran Trígono y Gran Cruz. El Yod (Dedo de Dios) con dos quincuncios y sextil indica destino específico; el Cometa o Cometa de Destino es una variación; el Trapecio es un rectángulo con dos trígonos. Cada figura proporciona información adicional sobre patrones psicológicos y destino.',
    keyPoints: [
      'YOD (Dedo de Dios): un planeta con dos quincuncios de otros, sextil entre los dos',
      'Yod indica punto focal, destino específico, vocación',
      'Planeta ápice del Yod: punto de canalización de energía',
      'COMETA o COMETA DE DESTINO: variación del Yod con aspectos adicionales',
      'TRAPECIO: rectángulo con dos lados trígonos y dos lados cuadrados',
      'Trapecio balance entre armonía y tensión',
      'RECTÁNGULO MISTICO: dos oposiciones conectadas por dos sextiles',
      'Diferentes figuras revelan patrones de destino y psicología profunda'
    ]
  },
  questions: [
    {
      q: '¿Qué es un Yod?',
      options: ['Aspecto simple', 'Dedo de Dios: planeta con dos quincuncios de otros, sextil entre dos', 'Trígono', 'Una cuadratura'],
      correct: 1,
      explanation: 'Yod es configuración de destino específico.'
    },
    {
      q: '¿Cuál es el significado del Yod?',
      options: ['Debilidad', 'Punto focal de destino, vocación específica, canalización energética', 'Sin significado', 'Casualidad'],
      correct: 1,
      explanation: 'Yod señala una dirección de vida clara.'
    },
    {
      q: '¿Cuál es la función del planeta ápice del Yod?',
      options: ['Sin rol', 'Punto de canalización de energía y expresión del destino', 'Débil', 'Irrelevante'],
      correct: 1,
      explanation: 'Planeta ápice es foco de energía del Yod.'
    },
    {
      q: '¿Qué es un Cometa o Cometa de Destino?',
      options: ['Objeto celeste real', 'Variación del Yod con aspectos adicionales amplificando destino', 'Trígono', 'Sin significado'],
      correct: 1,
      explanation: 'Cometa es Yod amplificado con poder destinal.'
    },
    {
      q: '¿Qué es un Trapecio en aspectos?',
      options: ['Cuadratura simple', 'Rectángulo con dos lados trígonos y dos lados cuadrados', 'Gran Trígono', 'Oposición'],
      correct: 1,
      explanation: 'Trapecio balancea armonía con tensión.'
    },
    {
      q: '¿Qué es un Rectángulo Místico?',
      options: ['Cuadrado normal', 'Dos oposiciones conectadas por dos sextiles, energía fluida', 'Triángulo', 'Una línea'],
      correct: 1,
      explanation: 'Rectángulo Místico es flujo de energía equilibrado.'
    },
    {
      q: '¿Para qué sirven estas figuras de aspectos?',
      options: ['Sin propósito', 'Revelan patrones de destino, psicología profunda y canalización', 'Solo curiosidad', 'No existen'],
      correct: 1,
      explanation: 'Figuras revelan patrones de vida más profundos.'
    },
    {
      q: '¿Son más importantes que los aspectos individuales?',
      options: ['Siempre', 'Proporcionan contexto adicional pero aspectos individuales son base', 'Sin importancia', 'Opuesto'],
      correct: 1,
      explanation: 'Figuras enriquecen pero no reemplazan análisis de base.'
    }
  ]
};

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M5_teoria'] = {
  id: 'M5_teoria',
  moduleId: 'M5',
  title: 'Teoría de aspectos: orbes y significado',
  titleEn: 'Aspect Theory: Orbs and Meaning',
  level: 'basico',
  prerequisites: ['M1_carta_natal','M3_luminarias','M3_personales'],
  content: {
    summary: 'Un aspecto es un ángulo entre dos planetas que crea una relación energética específica. Los aspectos mayores (conjunción, sextil, cuadratura, trígono, oposición) tienen significados arquetípicos. El orbe define el rango angular aceptable; orbes más cercanos son más potentes. Los aspectos armónicos facilitan; los tensos crean fricción creativa.',
    keyPoints: [
      'Aspecto: ángulo entre dos planetas que crea relación energética',
      'Orbe: margen angular aceptable; más cerrado = más potente',
      'Conjunción 0°: fusión, identidad, potencia máxima',
      'Sextil 60°: apoyo, oportunidad, suerte suave, facilidad',
      'Cuadratura 90°: fricción, tensión, crecimiento forzado',
      'Trígono 120°: armonía, flujo, talento natural',
      'Oposición 180°: conflicto, proyección, integración necesaria',
      'Aspectos menores: semisextil 30°, quincuncio 150°, quintil 72°, etc.'
    ]
  },
  questions: [
    {
      q: '¿Qué es un aspecto astrológico?',
      options: ['Planeta', 'Ángulo entre dos planetas que crea relación energética', 'Casa', 'Signo'],
      correct: 1,
      explanation: 'Aspecto es relación angular entre dos cuerpos celestes.'
    },
    {
      q: '¿Qué es el orbe en un aspecto?',
      options: ['Distancia orbital', 'Margen angular aceptable; más cerrado más potente', 'Signo', 'Tiempo'],
      correct: 1,
      explanation: 'Orbe define tolerancia angular del aspecto.'
    },
    {
      q: '¿Cuál es el ángulo de conjunción?',
      options: ['60°', '90°', '0° fusión identidad potencia máxima', '180°'],
      correct: 2,
      explanation: 'Conjunción 0° = fusión de dos energías.'
    },
    {
      q: '¿Cuál es el ángulo de sextil?',
      options: ['0°', '60° apoyo oportunidad suerte suave', '90°', '120°'],
      correct: 1,
      explanation: 'Sextil 60° facilita y apoya.'
    },
    {
      q: '¿Cuál es el ángulo de trígono?',
      options: ['60°', '90°', '120° armonía flujo talento natural', '180°'],
      correct: 2,
      explanation: 'Trígono 120° crea armonía y flujo.'
    },
    {
      q: '¿Cuál es el ángulo de cuadratura?',
      options: ['60°', '90° fricción tensión crecimiento', '120°', '180°'],
      correct: 1,
      explanation: 'Cuadratura 90° trae fricción creativa.'
    },
    {
      q: '¿Cuál es el ángulo de oposición?',
      options: ['0°', '90°', '120°', '180° conflicto proyección integración'],
      correct: 3,
      explanation: 'Oposición 180° requiere integración consciente.'
    },
    {
      q: '¿Cuáles aspectos son armónicos?',
      options: ['Cuadratura y oposición', 'Sextil y trígono', 'Todos', 'Ninguno'],
      correct: 1,
      explanation: 'Sextil (60°) y trígono (120°) facilitan flujo.'
    }
  ]
};

window.ASTRO_KNOWLEDGE_GRAPH.nodes['M5_trigono_sextil'] = {
  id: 'M5_trigono_sextil',
  moduleId: 'M5',
  title: 'Trígono y sextil: armonía y oportunidad',
  titleEn: 'Trine and Sextile: Harmony and Opportunity',
  level: 'basico',
  prerequisites: ['M5_teoria'],
  content: {
    summary: 'El trígono (120°) y sextil (60°) son los aspectos armónicos por excelencia. Crean flujo, facilidad y apoyo mutuo entre los planetas. El trígono es más potente (120°) que el sextil (60°) pero ambos indican talentos naturales. El peligro es la pasividad; estos aspectos ofrecen oportunidad pero requieren acción para manifestarse.',
    keyPoints: [
      'Trígono 120°: armonía máxima, flujo naturales, talento innato',
      'Sextil 60°: apoyo mutuo, oportunidad, suerte suave',
      'Ambos aspectos facilitan pero pueden crear pasividad',
      'Trígono: energía fluye naturalmente, poco esfuerzo requerido',
      'Sextil: apertura a oportunidad; requiere acción consciente',
      'Estos aspectos no son "mejor" que aspectos tensos',
      'Carta sin tensos = falta de motivación para crecer',
      'Plantea preocupación: aprender a activar estas oportunidades'
    ]
  },
  questions: [
    {
      q: '¿Cuál es el ángulo de un trígono?',
      options: ['60°', '90°', '120° armonía máxima', '180°'],
      correct: 2,
      explanation: 'Trígono es 120° de separación.'
    },
    {
      q: '¿Cuál es el ángulo de un sextil?',
      options: ['0°', '60° apoyo oportunidad', '90°', '120°'],
      correct: 1,
      explanation: 'Sextil es 60° de separación.'
    },
    {
      q: '¿Cuál es más potente: trígono o sextil?',
      options: ['Iguales', 'Trígono 120° es más potente que sextil 60°', 'Sextil', 'Ninguno'],
      correct: 1,
      explanation: 'Trígono trae más facilidad que sextil.'
    },
    {
      q: '¿Qué significan aspectos armónicos?',
      options: ['Conflicto', 'Flujo, facilidad, talento natural, apoyo mutuo', 'Tensión', 'Sin efecto'],
      correct: 1,
      explanation: 'Armónicos crean flow natural.'
    },
    {
      q: '¿Cuál es el peligro de los aspectos armónicos?',
      options: ['Demasiada fuerza', 'Pasividad; ofrecen oportunidad pero no motivan acción', 'Debilidad', 'Sin peligro'],
      correct: 1,
      explanation: 'Armonía puede llevar a complacencia.'
    },
    {
      q: '¿Es mejor una carta con solo trígonos?',
      options: ['Sí', 'No; falta motivación tensión para crecer', 'Ideal', 'Perfecto'],
      correct: 1,
      explanation: 'Carta sin tensos carece de impulso.'
    },
    {
      q: '¿Qué requiere un sextil para manifestarse?',
      options: ['Nada', 'Acción consciente; oportunidad debe ser activada', 'Solo espera', 'Pasividad'],
      correct: 1,
      explanation: 'Sextil abre puerta pero tú debes caminar.'
    },
    {
      q: '¿Cómo se trabaja un trígono para máximo potencial?',
      options: ['Se ignora', 'Desarrollar conscientemente el talento natural ofrecido', 'Evitarlo', 'Rechazarlo'],
      correct: 1,
      explanation: 'Trígono ofrece talento; trabajo consciente lo perfecciona.'
    }
  ]
};

console.log('ASTRO_KNOWLEDGE_GRAPH loaded: ' + Object.keys(window.ASTRO_KNOWLEDGE_GRAPH.nodes).length + ' nodes');
