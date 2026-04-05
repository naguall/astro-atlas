// Knowledge Graph Part 2: Modules M6-M12
// Regencias, Interpretación Integrada, Técnicas Predictivas, Sinastría, Horaria, Electiva, Mundana
(function() {
  if (!window.ASTRO_KNOWLEDGE_GRAPH) { console.error('Load knowledge-graph.js first'); return; }
  const G = window.ASTRO_KNOWLEDGE_GRAPH;

  Object.assign(G.nodes, {
    // ===== MODULE 6: Regencias y Disposiciones =====
    'M6_regencias': {
      id: 'M6_regencias',
      moduleId: 'M6',
      title: 'Regencias planetarias',
      titleEn: 'Planetary Rulerships',
      level: 'intermedio',
      prerequisites: ['M3_dignidades', 'M4_casas_7_12'],
      content: {
        summary: 'Cada signo tiene un planeta regente que lo rige y define su naturaleza. Las regencias tradicionales Mercurio Géminis Virgo, Venus Tauro Libra, Mars Aries Escorpio son fundamentales para entender dominios.',
        keyPoints: [
          'Regente signo = planeta que lo rige naturalmente',
          'Aries Mars; Tauro Venus; Géminis Mercurio; Cáncer Moon; Leo Sun',
          'Virgo Mercurio; Libra Venus; Escorpio Mars/Plutón; Sagitario Jupiter',
          'Capricornio Saturn; Acuario Saturno/Uranio; Piscis Jupiter/Neptuno',
          'Regencias casas distintas signos pero mismo planeta',
          'Regencias menores co-regentes modernos Plutón Uranio Neptuno',
          'Posición casa regente colora toda interpretación signo',
          'Almuten dignidad evaluación fortaleza regente'
        ]
      },
      questions: [
        {
          q: '¿Quién rige Aries?',
          options: ['Venus', 'Mars', 'Sun', 'Jupiter'],
          correct: 1,
          explanation: 'Mars rige Aries signo fuego masculino iniciativa'
        },
        {
          q: '¿Géminis regente?',
          options: ['Venus', 'Mercurio', 'Moon', 'Saturn'],
          correct: 1,
          explanation: 'Mercurio rige Géminis aire mental comunicación'
        },
        {
          q: '¿Escorpio regencias?',
          options: ['Jupiter', 'Mars solo', 'Mars tradicional Plutón moderno', 'Saturn'],
          correct: 2,
          explanation: 'Mars regencia tradicional Plutón moderna ambas válidas'
        },
        {
          q: '¿Piscis regente?',
          options: ['Saturn', 'Neptuno moderno Jupiter tradicional', 'Mars', 'Mercurio'],
          correct: 1,
          explanation: 'Jupiter regencia antigua Neptuno descubierto 1846'
        },
        {
          q: '¿Por qué importan regencias?',
          options: ['Decorativa', 'Define dominios psicológicos energías signo', 'Sin efecto', 'Solo para astrólogos'],
          correct: 1,
          explanation: 'Regencias estructuran el significado de signos casas'
        },
        {
          q: '¿Regente carta vs signo?',
          options: ['Mismo', 'Planeta rige signo vs posición regente colora interpretación', 'No hay diferencia', 'Opuesto'],
          correct: 1,
          explanation: 'Regente es planeta posición casa regente amplifica interpretación'
        },
        {
          q: '¿Libra regencia?',
          options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
          correct: 2,
          explanation: 'Venus rige Libra aire relacionalidad belleza justicia'
        },
        {
          q: '¿Virgo regencia?',
          options: ['Venus', 'Saturn', 'Mercurio', 'Mars'],
          correct: 2,
          explanation: 'Mercurio rige Virgo tierra análisis servicio detalles'
        }
      ]
    },

    'M6_regente_carta': {
      id: 'M6_regente_carta',
      moduleId: 'M6',
      title: 'Regente de la carta natal',
      titleEn: 'Chart Ruler',
      level: 'intermedio',
      prerequisites: ['M6_regencias'],
      content: {
        summary: 'El regente de la carta es el planeta que rige el signo Ascendente. Su posición por casa elemento aspectos colorea toda la interpretación de la personalidad y orientación vital.',
        keyPoints: [
          'Regente carta = planeta rige signo ASC',
          'Si ASC Aries regente Mars; ASC Tauro Venus; ASC Géminis Mercurio',
          'Casa regente muestra área vida donde se expresa personalidad',
          'Planeta dignificado regente facilita expresión personalidad',
          'Planeta debilitado regente crea obstáculos expresión',
          'Aspectos regente especialmente con Sun Moon son significativos',
          'Retrogradación regente sugiere introspección',
          'Regente es segundo más importante después Ascendente'
        ]
      },
      questions: [
        {
          q: '¿Qué es regente carta?',
          options: ['Planeta más fuerte', 'Planeta rige signo Ascendente', 'Sun de carta', 'Moon natal'],
          correct: 1,
          explanation: 'Regente carta es específicamente planeta que rige ASC'
        },
        {
          q: 'ASC Tauro regente?',
          options: ['Mars', 'Venus', 'Moon', 'Mercurio'],
          correct: 1,
          explanation: 'Venus rige Tauro así es regente cuando ASC Tauro'
        },
        {
          q: '¿Regente en casa 10?',
          options: ['Sin importancia', 'Expresa vocación visibilidad pública', 'Privado', 'Débil'],
          correct: 1,
          explanation: 'Regente angular especialmente casa 10 expresión fuerte vocación'
        },
        {
          q: '¿Regente retrógrado?',
          options: ['Siempre negativo', 'Introspección reflexión', 'Sin efecto', 'Muy fuerte'],
          correct: 1,
          explanation: 'Retrógrado sugiere expresión interna reflexiva'
        },
        {
          q: '¿Regente debilitado?',
          options: ['No importa', 'Obstáculos en expresión personalidad', 'Muy bueno', 'Significa nada'],
          correct: 1,
          explanation: 'Debilidades dignidad regente crean bloqueos personales'
        },
        {
          q: '¿Aspectos significativos?',
          options: ['Ninguno', 'Regente con Sun Moon ASC especialmente importantes', 'Solo menores', 'No hay'],
          correct: 1,
          explanation: 'Aspectos regente con lumirarias definen personalidad'
        },
        {
          q: 'ASC Escorpio regente?',
          options: ['Jupiter', 'Saturn', 'Mars/Plutón', 'Mercurio'],
          correct: 2,
          explanation: 'Mars regencia tradicional Plutón moderna'
        },
        {
          q: '¿Importancia regente vs Sun?',
          options: ['Igual', 'Regente es ASC cara externa Sun identidad profunda', 'Sun más importante', 'No relación'],
          correct: 1,
          explanation: 'Ambos importantes Sun identidad Regente máscara externa'
        }
      ]
    },

    'M6_cadenas': {
      id: 'M6_cadenas',
      moduleId: 'M6',
      title: 'Cadenas de disposición',
      titleEn: 'Chains of Rulership',
      level: 'avanzado',
      prerequisites: ['M6_regencias'],
      content: {
        summary: 'Seguir las cadenas de regencias hasta encontrar el dispositor final. Venus en Mars muestra Mars rige Venus; si Mars está en Mercurio entonces Mercurio gobierna Mars que rige Venus.',
        keyPoints: [
          'Cadena de disposición = jerarquía gobernancia planetaria',
          'Seguir hasta encontrar planeta en su propio signo (dispositor final)',
          'Si no hay planeta en propio signo busca conjunción con dispositor final',
          'Retrógrados pueden cortar cadenas o crear ciclos',
          'Receptaciones mutuas = dos planetas en signo del otro',
          'Dispositor final gobierna toda configuración',
          'Analiza cadenas del regente carta para ver verdadera gobernancia',
          'Cadenas revelan jerarquías profundas sistema psicológico'
        ]
      },
      questions: [
        {
          q: '¿Qué es cadena de disposición?',
          options: ['Cadena física', 'Seguir regencias hasta dispositor final', 'Aspecto duro', 'Luna nodal'],
          correct: 1,
          explanation: 'Cadena sigue quién rige quién hasta planeta en propio signo'
        },
        {
          q: 'Venus en Mars Mars en Mercury?',
          options: ['Mercury governa Venus', 'Venus es final', 'Sin cadena', 'Igual'],
          correct: 0,
          explanation: 'Mercury rige Mars que rige Venus Mercury es dispositor final'
        },
        {
          q: '¿Dispositor final?',
          options: ['Planeta débil', 'Planeta en propio signo o conjunción ese planeta', 'Más retrógrado', 'Más lejano'],
          correct: 1,
          explanation: 'Dispositor final termina cadena gobernando toda configuración'
        },
        {
          q: '¿Planeta retrógrado cadena?',
          options: ['Continúa normal', 'Puede cortar cadena o crear ciclo', 'Fortalece', 'Sin efecto'],
          correct: 1,
          explanation: 'Retrógrado modifica flujo gobernancia creando reversión'
        },
        {
          q: '¿Receptación mutua?',
          options: ['Planeta solo', 'Dos planetas en signo del otro', 'Aspecto', 'Casa compartida'],
          correct: 1,
          explanation: 'Ej Venus en Mars Mars en Venus igual fuerte ambos se aceptan'
        },
        {
          q: '¿Por qué importante analizar cadenas?',
          options: ['Decorativo', 'Revela jerarquías gobernancia alma', 'No importante', 'Solo curiosidad'],
          correct: 1,
          explanation: 'Cadenas muestran estructura profunda psicológica'
        },
        {
          q: 'Cadena sin dispositor?',
          options: ['Imposible', 'Siempre hay uno', 'No existe', 'Roto'],
          correct: 1,
          explanation: 'Siempre existe dispositor final debe buscarse'
        },
        {
          q: '¿Analizar cadena regente?',
          options: ['No necesario', 'Esencial muestra gobernancia real personalidad', 'Solo curiosidad', 'Decorativo'],
          correct: 1,
          explanation: 'Cadena regente es análisis esencial de la carta'
        }
      ]
    },

    'M6_almuten': {
      id: 'M6_almuten',
      moduleId: 'M6',
      title: 'Almuten',
      titleEn: 'Almuten',
      level: 'avanzado',
      prerequisites: ['M3_dignidades_menores', 'M6_regencias'],
      content: {
        summary: 'El almuten es el planeta con mayor dignidad acumulada en un grado específico de la carta. Se calcula sumando dignidades: rulership 5pts, exaltation 4pts, triplicity 3pts, decan 2pts, term 1pt.',
        keyPoints: [
          'Almuten = planeta con más dignidad en grado específico',
          'Metodología: regencia +5, exaltación +4, triplicidad +3, decanato +2, término +1',
          'Planeta dignificado tiene 10+ puntos almuten potente',
          'Planeta débil tiene <5 puntos o negativos en ese grado',
          'Almuten casa 10 muestra gobernancia vocación',
          'Almuten Ascendente importante para regencia',
          'Helenístico: almuten de luminarias, ángulos especial importancia',
          'Modernos ignoran almuten pero expertos lo usan'
        ]
      },
      questions: [
        {
          q: '¿Qué es almuten?',
          options: ['Nombre antiguo', 'Planeta mayor dignidad grado específico', 'Retrogrado', 'Planeta rápido'],
          correct: 1,
          explanation: 'Almuten árabe: planeta acumula más dignidad en grado'
        },
        {
          q: '¿Puntos rulership?',
          options: ['+1', '+3', '+5', '+2'],
          correct: 2,
          explanation: 'Rulership dominio signo vale 5 puntos almuten'
        },
        {
          q: '¿Exaltación puntos?',
          options: ['+1', '+2', '+3', '+4'],
          correct: 3,
          explanation: 'Exaltación +4 puntos dignidad'
        },
        {
          q: '¿Triplicidad valor?',
          options: ['+1', '+2', '+3', '+5'],
          correct: 2,
          explanation: 'Triplicidad elemento +3 puntos'
        },
        {
          q: '¿Decanato?',
          options: ['+1', '+2', '+3', '+4'],
          correct: 1,
          explanation: 'Decanato sub-división signo +2 puntos'
        },
        {
          q: '¿Término almuten?',
          options: ['+1', '+2', '+3', '+4'],
          correct: 0,
          explanation: 'Término +1 punto menor dignidad'
        },
        {
          q: '¿Almuten debilitado?',
          options: ['<5 puntos', '>10 puntos', 'No existe', 'Siempre fuerte'],
          correct: 0,
          explanation: 'Menos de 5 puntos o dignidades negativas indica almuten débil'
        },
        {
          q: '¿Almuten MC importancia?',
          options: ['Nada', 'Muy importante para vocación carrera', 'Privado', 'Débil'],
          correct: 1,
          explanation: 'Almuten Medio Cielo es aspecto importante vocacional'
        }
      ]
    },

    'M6_regente_casa_enlace': {
      id: 'M6_regente_casa_enlace',
      moduleId: 'M6',
      title: 'Enlace temático entre casas',
      titleEn: 'Thematic Links Between Houses',
      level: 'intermedio',
      prerequisites: ['M6_regencias', 'M4_regente_casa'],
      content: {
        summary: 'Cuando el regente de una casa está en otra casa, crea un vínculo temático donde los asuntos de una casa se entrelazan con los de la otra. Ej regente casa 7 en casa 4 vincula pareja con familia.',
        keyPoints: [
          'Regente casa X en casa Y = vínculo temático',
          'Regente casa 7 (pareja) en 4 (familia) vincula pareja a raíces familiares',
          'Regente casa 10 (vocación) en 5 (creatividad) vocación es expresión creativa',
          'Regente casa 2 (recursos) en 8 (herencias) recursos ligados herencias',
          'Regentes en misma casa = concentración temática',
          'Analiza todo regente casa especialmente ángulos',
          'Enlaces revelan dónde se viven los temas de casas',
          'Síntesis temática importante para comprensión global'
        ]
      },
      questions: [
        {
          q: '¿Qué es enlace temático?',
          options: ['Aspecto duro', 'Regente de casa en otra crea vinculo temático', 'Signo', 'Planeta solo'],
          correct: 1,
          explanation: 'Enlace es vínculo donde temas casas se entrelazan'
        },
        {
          q: 'Regente 7 en 4?',
          options: ['Pareja privada', 'Pareja vinculada familia raíces', 'Sin relación', 'Débil'],
          correct: 1,
          explanation: 'Casa 7 pareja en 4 familia vincula pareja a origen'
        },
        {
          q: 'Regente 10 en 5?',
          options: ['Carrera privada', 'Vocación es expresión creativa artística', 'Sin relación', 'Vocación económica'],
          correct: 1,
          explanation: 'MC en 5 muestra carrera profesión en arte performance'
        },
        {
          q: 'Regente 2 en 8?',
          options: ['Dinero privado', 'Recursos herencias deudas compartidas', 'No hay relación', 'Sin importancia'],
          correct: 1,
          explanation: 'Casa 2 recursos en 8 herencias mostramos dinero ajeno compartido'
        },
        {
          q: '¿Regentes misma casa?',
          options: ['Imposible', 'Concentración temática potencia asuntos casa', 'Débil', 'Sin efecto'],
          correct: 1,
          explanation: 'Múltiples regentes en una casa concentra energía ese ámbito'
        },
        {
          q: '¿Analizar enlace importante?',
          options: ['No', 'Sí muestra integración temas carta', 'Solo ocasionalmente', 'Para astrólogos avanzados'],
          correct: 1,
          explanation: 'Enlaces revelan cómo se viven temas casas'
        },
        {
          q: 'Regente 5 en 10?',
          options: ['Sin efecto', 'Carrera en creatividad performance paternidad pública', 'Privado', 'Débil'],
          correct: 1,
          explanation: 'Casa 5 en 10 muestra profesión ligada hijos creatividad'
        },
        {
          q: '¿Síntesis enlaces?',
          options: ['Opcional', 'Esencial para comprensión integrada carta', 'Decorativo', 'Confuso'],
          correct: 1,
          explanation: 'Síntesis enlaces muestra cómo se vive la carta integrada'
        }
      ]
    },

    'M6_co_regentes': {
      id: 'M6_co_regentes',
      moduleId: 'M6',
      title: 'Co-regentes tradicionales vs modernos',
      titleEn: 'Traditional vs Modern Co-Rulers',
      level: 'avanzado',
      prerequisites: ['M6_regencias'],
      content: {
        summary: 'Algunos signos tienen dos regentes: uno tradicional (helenístico) y uno moderno (descubierto después 1800). Escorpio Mars/Plutón, Acuario Saturn/Uranio, Piscis Jupiter/Neptuno. Ambos válidos en interpretación.',
        keyPoints: [
          'Escorpio Mars (tradicional) Plutón (moderno 1930)',
          'Acuario Saturn (tradicional) Uranio (moderno 1781)',
          'Piscis Jupiter (tradicional) Neptuno (moderno 1846)',
          'Ambas regencias coexisten simultáneamente válidas',
          'Mars en Escorpio más clásico Mars; Plutón más transformación muerte renacimiento',
          'Saturn en Acuario estructura reglas; Uranio rebelión libertad innovación',
          'Jupiter en Piscis expansión espiritualidad; Neptuno disolución intuición',
          'Elegir según contexto cliente énfasis interpretativo'
        ]
      },
      questions: [
        {
          q: '¿Escorpio regente tradicional?',
          options: ['Plutón', 'Mars', 'Saturn', 'Neptuno'],
          correct: 1,
          explanation: 'Mars es regencia tradicional helenística antigua'
        },
        {
          q: '¿Plutón descubierto?',
          options: ['1781', '1846', '1930', '2005'],
          correct: 2,
          explanation: 'Plutón descubierto 1930 asignado Escorpio'
        },
        {
          q: '¿Acuario regencias?',
          options: ['Uranio', 'Saturn y Uranio', 'Saturn solo', 'Mercurio'],
          correct: 1,
          explanation: 'Saturn regencia antigua Uranio 1781'
        },
        {
          q: '¿Uranio descubierto?',
          options: ['1930', '1846', '1781', '1600'],
          correct: 2,
          explanation: 'Uranio descubierto 1781'
        },
        {
          q: '¿Piscis regencias?',
          options: ['Neptuno solo', 'Jupiter y Neptuno', 'Mars', 'Saturno'],
          correct: 1,
          explanation: 'Jupiter tradicional Neptuno 1846'
        },
        {
          q: 'Mars vs Plutón Escorpio?',
          options: ['Un regente solo', 'Ambos válidos Mars clásico Plutón transformación', 'Opuestos', 'Incompatible'],
          correct: 1,
          explanation: 'Coexisten ambos enfatizan aspectos diferentes'
        },
        {
          q: 'Saturn vs Uranio?',
          options: ['Incompatible', 'Saturn estructura Uranio rebelión ambos Acuario', 'Uno negación otro', 'Sin relación'],
          correct: 1,
          explanation: 'Ambos aspectos Acuario estructura+libertad'
        },
        {
          q: '¿Usar ambos regentes?',
          options: ['Solo uno', 'Ambos según contexto cliente', 'Ninguno', 'Aleatorio'],
          correct: 1,
          explanation: 'Buen astrólogo usa ambos regencias según énfasis'
        }
      ]
    },

    // ===== MODULE 7: Interpretación Integrada =====
    'M7_patron_planetario': {
      id: 'M7_patron_planetario',
      moduleId: 'M7',
      title: 'Patrón planetario global (Jones)',
      titleEn: 'Jones Chart Patterns',
      level: 'intermedio',
      prerequisites: ['M5_teoria', 'M4_casas_7_12'],
      content: {
        summary: 'Donald Jones identificó 7 patrones de distribución planetaria: Splash, Bundle, Locomotive, Bowl, Bucket, Seesaw, Splay. Cada patrón sugiere temperamento psicológico y enfoque vital.',
        keyPoints: [
          'Splash disperso 360° todos cuadrantes versátil adaptable',
          'Bundle comprimido <120° energía enfocada obsesión',
          'Locomotive 2 fuerzas halador dinámico accionable',
          'Bowl todos una mitad carta orientación clara',
          'Bucket 11 uno opuesto misionero propósito único',
          'Seesaw opuesto a opuesto diálogo oscilante',
          'Splay aglomerados dispersos especialista múltiple',
          'Identifica patrón como rasgo carácter fundamental'
        ]
      },
      questions: [
        {
          q: '¿Patrón Splash?',
          options: ['Comprimido', 'Disperso 360° versatilidad', 'Opuesto', 'Lineal'],
          correct: 1,
          explanation: 'Splash dispersión todos cuadrantes persona adaptable versátil'
        },
        {
          q: '¿Bundle significa?',
          options: ['Disperso', 'Comprimido <120° energía enfocada', 'Lineal', 'Dos haladores'],
          correct: 1,
          explanation: 'Bundle concentración energía obsesiva tema enfocado'
        },
        {
          q: '¿Locomotive?',
          options: ['Estático', 'Dos fuerzas halador dinámico', 'Disperso', 'Comprimido'],
          correct: 1,
          explanation: 'Locomotive accionador dinámico mover cosas'
        },
        {
          q: '¿Bowl?',
          options: ['Disperso', 'Todos una mitad clara orientación', 'Opuesto', 'Comprimido'],
          correct: 1,
          explanation: 'Bowl mitad carta enfoque dirección clara'
        },
        {
          q: '¿Bucket?',
          options: ['Igual', '11 en grupo 1 opuesto misionero', 'Dos grupos', 'Disperso'],
          correct: 1,
          explanation: 'Bucket propósito misión especial persona elegida'
        },
        {
          q: '¿Seesaw?',
          options: ['Lineal', 'Opuesto a opuesto diálogo oscilante', 'Comprimido', 'Bundle'],
          correct: 1,
          explanation: 'Seesaw equilibrio dinámico dos extremos'
        },
        {
          q: '¿Splay?',
          options: ['Comprimido', 'Aglomerados dispersos especialista múltiple', 'Lineal', 'Splash'],
          correct: 1,
          explanation: 'Splay múltiples aglomeraciones especialidades variadas'
        },
        {
          q: '¿Importancia patrón?',
          options: ['Decorativa', 'Carácter fundamental psicología', 'Sin efecto', 'Solo para bebés'],
          correct: 1,
          explanation: 'Patrón revela temperamento base orientación existencial'
        }
      ]
    },

    'M7_predominancia': {
      id: 'M7_predominancia',
      moduleId: 'M7',
      title: 'Predominancia de elemento y modalidad',
      titleEn: 'Elemental and Modal Predominance',
      level: 'intermedio',
      prerequisites: ['M2_elementos', 'M2_modalidades', 'M7_patron_planetario'],
      content: {
        summary: 'Contar planetas en cada elemento (fuego aire agua tierra) y modalidad (cardinal fijo mutable) identifica balance temperamental. Exceso fuego = impulsivo; exceso tierra = pragmático; deficiencia = área débil.',
        keyPoints: [
          'Elemento cuenta Sun Moon ASC regente cada planeta 1 punto',
          'Fuego 3+ impulsivo creativo; <1 falta iniciativa',
          'Aire 3+ mental comunicativo; <1 dificultad expresión',
          'Agua 3+ emocional intuitivo; <1 desconexión sentimientos',
          'Tierra 3+ pragmático concreto; <1 desapego realidad',
          'Cardinal iniciador; Fijo consolidador; Mutable adaptable',
          'Exceso cardinal atiborrado responsabilidad',
          'Deficiencia cardinal falta dirección'
        ]
      },
      questions: [
        {
          q: '¿Exceso fuego?',
          options: ['Retraído', 'Impulsivo creativo', 'Pragmático', 'Emocional'],
          correct: 1,
          explanation: 'Fuego 3+ exceso optimismo iniciativa'
        },
        {
          q: '¿Deficiencia tierra?',
          options: ['Muy concreto', 'Dificultad materializar desapego práctico', 'Muy lógico', 'Aterrado'],
          correct: 1,
          explanation: 'Tierra <1 falta conexión realidad pragmatismo'
        },
        {
          q: '¿Aire 3+?',
          options: ['Emocional', 'Mental comunicativo intelectual', 'Visceral', 'Concreto'],
          correct: 1,
          explanation: 'Aire exceso verborragia mental especulación'
        },
        {
          q: '¿Agua <1?',
          options: ['Demasiado sensible', 'Desconexión emocional intuición bloqueada', 'Muy empático', 'Llorador'],
          correct: 1,
          explanation: 'Agua deficiencia dificultad acceso emociones'
        },
        {
          q: '¿Modal cardinal?',
          options: ['Estática', 'Iniciadora accionadora lideranza', 'Adaptable', 'Consolidadora'],
          correct: 1,
          explanation: 'Cardinal comienza acciona dirige'
        },
        {
          q: '¿Modal fijo?',
          options: ['Cambio', 'Consolidación resistencia constancia', 'Adaptabilidad', 'Inicio'],
          correct: 1,
          explanation: 'Fijo sostiene persevera profundiza'
        },
        {
          q: '¿Modal mutable?',
          options: ['Estable', 'Flexible adaptable comunicativa', 'Directa', 'Rígida'],
          correct: 1,
          explanation: 'Mutable fluida flexible versátil'
        },
        {
          q: '¿Cómo contar?',
          options: ['Solo Sun', 'Planetas en signos + ASC regente', 'Solo Moon', 'No se cuenta'],
          correct: 1,
          explanation: 'Todos planetas Sun Moon ASC regente cada 1 punto'
        }
      ]
    },

    'M7_planeta_dominante': {
      id: 'M7_planeta_dominante',
      moduleId: 'M7',
      title: 'Planeta dominante',
      titleEn: 'Dominant Planet',
      level: 'intermedio',
      prerequisites: ['M5_aplicativos', 'M3_dignidades'],
      content: {
        summary: 'El planeta dominante es el más destacado por dignidad, aspectación o angularidad. Puede haber varios dominantes. Colorea toda la interpretación de la carta proporciona tema central psicológico.',
        keyPoints: [
          'Planeta dominante = más aspectado OR angular OR dignificado',
          'Más aspectado (6+ aspectos) especialmente mayores',
          'Angular casa 1 4 7 10 presencia fuerte',
          'Dignificado en exaltación regencia muestra poder',
          'Puede haber 1 2 o 3 planetas dominantes',
          'Dominante solar = identidad; dominante Moon = emociones',
          'Dominante Mars = acción; dominante Venus = relación',
          'Dominante estructura el mapa central temático'
        ]
      },
      questions: [
        {
          q: '¿Planeta dominante?',
          options: ['Más rápido', 'Más aspectado angular dignificado', 'Más lejano', 'Retrogrado'],
          correct: 1,
          explanation: 'Dominante destaca por influencia múltiple'
        },
        {
          q: '¿Cuántos aspectos mínimo?',
          options: ['2', '4', '6+', '10+'],
          correct: 2,
          explanation: 'Generalmente 6+ aspectos especialmente mayores'
        },
        {
          q: '¿Casa angular?',
          options: ['2 3 5 6', '1 4 7 10', '8 9 11 12', 'No existe'],
          correct: 1,
          explanation: 'Ángulos son casa 1 4 7 10 presencia fuerte'
        },
        {
          q: '¿Dignificado?',
          options: ['Débil', 'En exaltación regencia muestra poder', 'Desterrado', 'Invertido'],
          correct: 1,
          explanation: 'Dignidad amplifica poder planeta'
        },
        {
          q: '¿Múltiples dominantes?',
          options: ['Imposible', 'Posible 2-3 planetas si todos destacan', 'Solo uno', 'Confuso'],
          correct: 1,
          explanation: 'Múltiples dominantes crea complejidad psicológica'
        },
        {
          q: 'Venus dominante?',
          options: ['Caos', 'Relación pareja valores belleza central', 'Sin efecto', 'Privado'],
          correct: 1,
          explanation: 'Venus dominante vida gira relación belleza'
        },
        {
          q: 'Mars dominante?',
          options: ['Pasivo', 'Acción energía conflicto iniciativa', 'Calma', 'Espera'],
          correct: 1,
          explanation: 'Mars dominante persona accionadora'
        },
        {
          q: '¿Por qué importante?',
          options: ['Decorativo', 'Estructura tema central interpretación', 'Sin efecto', 'Opcional'],
          correct: 1,
          explanation: 'Dominante es clave para síntesis interpretativa'
        }
      ]
    },

    'M7_stellium': {
      id: 'M7_stellium',
      moduleId: 'M7',
      title: 'Stellium',
      titleEn: 'Stellium',
      level: 'intermedio',
      prerequisites: ['M7_patron_planetario'],
      content: {
        summary: 'Stellium es concentración de 3 o más planetas en un signo o casa. Indica energía intensificada enfocada en ese ámbito tema de vida. Sun Moon contar; algunos incluyen ángulos nodos.',
        keyPoints: [
          'Stellium = 3+ planetas signo o casa',
          'Definición: algunos incluyen Sun Moon nodos; otros excluyen',
          'Stellium signo enfatiza cualidades energía signo',
          'Stellium casa concentra temas actividades casa',
          'Stellium dispone mayor potencial pero obsesión',
          'Deficiencia opuesta casa/signo sin stellium es débil',
          'Stellium casa 1 presencia fuerte visibilidad',
          'Stellium casa 12 secretos capacidad oculta'
        ]
      },
      questions: [
        {
          q: '¿Cuántos planetas stellium?',
          options: ['2', '3+', '4+', '5+'],
          correct: 1,
          explanation: 'Stellium mínimo 3 planetas concentración'
        },
        {
          q: '¿Stellium Aries?',
          options: ['Quietud', 'Energía Mars multiplicada iniciativa', 'Depresión', 'Sin efecto'],
          correct: 1,
          explanation: 'Stellium signo enfatiza cualidades ese signo'
        },
        {
          q: '¿Stellium casa 10?',
          options: ['Privado', 'Vocación carrera muy enfatizada visibilidad', 'Ocultación', 'Debilidad'],
          correct: 1,
          explanation: 'Stellium MC muestra carrera es foco vida'
        },
        {
          q: '¿Incluir Sun Moon?',
          options: ['No', 'Algunos astrólogos incluyen otros no', 'Siempre', 'Nunca'],
          correct: 1,
          explanation: 'Definición varía según escuela'
        },
        {
          q: '¿Stellium casa 12?',
          options: ['Público', 'Capacidad oculta secretos misterio espiritualidad', 'Débil', 'Sin efecto'],
          correct: 1,
          explanation: 'Stellium casa 12 mundo interno profundo'
        },
        {
          q: '¿Deficiencia opuesta?',
          options: ['Sin importancia', 'Área débil no desarrollada', 'Muy fuerte', 'Normal'],
          correct: 1,
          explanation: 'Signo opuesto a stellium es área desapego'
        },
        {
          q: '¿Potencial stellium?',
          options: ['Limitación', 'Mayor potencial energía pero obsesión', 'Sin fuerza', 'Debilidad'],
          correct: 1,
          explanation: 'Stellium amplifica pero puede ser obsesivo'
        },
        {
          q: '¿Stellium signo vs casa?',
          options: ['Igual', 'Signo enfatiza cualidades casa enfatiza temas', 'No hay diferencia', 'Opuesto'],
          correct: 1,
          explanation: 'Signo describe cualidad casa describe ámbito vida'
        }
      ]
    },

    'M7_jerarquia': {
      id: 'M7_jerarquia',
      moduleId: 'M7',
      title: 'Jerarquía interpretativa',
      titleEn: 'Interpretive Hierarchy',
      level: 'avanzado',
      prerequisites: ['M7_planeta_dominante', 'M6_regente_carta'],
      content: {
        summary: 'Orden prioritario de análisis: 1)Sun/Moon/ASC 2)Regente carta 3)Planetas ángulos 4)Aspectos tensos 5)Figuras planetarias 6)Nodos 7)Chiron. Esta jerarquía asegura síntesis coherente.',
        keyPoints: [
          'Paso 1 Sun Moon ASC como tríada fundamental',
          'Paso 2 Regente carta colora expresión ASC',
          'Paso 3 Planetas en casas 1 4 7 10 presencia',
          'Paso 4 Aspectos tensos especialmente dinámicos',
          'Paso 5 Figuras Gran Trigono Gran Cruz T-square',
          'Paso 6 Nodos eje nodal propósito kármico',
          'Paso 7 Chiron herida inteligencia compasión',
          'Síntesis final integrando de arriba hacia abajo'
        ]
      },
      questions: [
        {
          q: '¿Primer paso?',
          options: ['Planetas lejanos', 'Sun Moon ASC tríada fundamental', 'Nodos', 'Aspectos'],
          correct: 1,
          explanation: 'Inicio análisis es siempre triada básica'
        },
        {
          q: '¿Paso 2?',
          options: ['Nodos', 'Regente carta', 'Chiron', 'Asteroides'],
          correct: 1,
          explanation: 'Regente modula expresión Ascendente'
        },
        {
          q: '¿Planetas qué casas?',
          options: ['2 5 8 11', '1 4 7 10 ángulos', '3 6 9 12', 'No importa'],
          correct: 1,
          explanation: 'Ángulos son casa 1 4 7 10'
        },
        {
          q: '¿Qué aspectos analizar primero?',
          options: ['Sextiles', 'Aspectos tensos cuadraturas oposiciones', 'Trígonos', 'Menores'],
          correct: 1,
          explanation: 'Aspectos dinámicos muestran desafío'
        },
        {
          q: '¿Figuras planetarias?',
          options: ['Poco importante', 'Después aspectos individuales', 'Primero', 'Nunca'],
          correct: 1,
          explanation: 'Figuras patrones después elementos individuales'
        },
        {
          q: '¿Nodos ubicación?',
          options: ['Antes Chiron', 'Después figuras', 'Primero', 'Nunca'],
          correct: 1,
          explanation: 'Nodos son asunto kármico profundo'
        },
        {
          q: '¿Chiron último?',
          options: ['Muy importante', 'Herida inteligencia compasión integrador final', 'Sin efecto', 'Primero'],
          correct: 1,
          explanation: 'Chiron es punto curación inteligencia sutil'
        },
        {
          q: '¿Por qué jerarquía?',
          options: ['Decorativa', 'Asegura síntesis coherente no superficial', 'Sin importancia', 'Opcional'],
          correct: 1,
          explanation: 'Jerarquía previene análisis fragmentado confuso'
        }
      ]
    },

    'M7_personalidad': {
      id: 'M7_personalidad',
      moduleId: 'M7',
      title: 'Área: Personalidad y psicología',
      titleEn: 'Area: Personality and Psychology',
      level: 'avanzado',
      prerequisites: ['M7_jerarquia'],
      content: {
        summary: 'Síntesis de Sun (identidad profunda) Moon (emociones necesidades) ASC (personalidad externa) Mercury (mente comunicación) para crear un perfil psicológico coherente de persona.',
        keyPoints: [
          'Sun qué buscas ser propósito identidad',
          'Moon qué necesitas emocionalmente pasado',
          'ASC cómo aparentas máscara externa',
          'Mercury cómo piensas comunicas procesas',
          'Síntesis: identidad+emocionalidad+presencia+mente',
          'Configuración aspectos estos cuatro muestra armonia conflicto',
          'Defensa psicológica en aspecto Sun-Moon difícil',
          'Autoimagen en discordancia ASC vs Sun genera confusión'
        ]
      },
      questions: [
        {
          q: '¿Sun representa?',
          options: ['Emociones', 'Identidad profunda propósito', 'Apariencia', 'Mente'],
          correct: 1,
          explanation: 'Sun es núcleo identidad consciente'
        },
        {
          q: '¿Moon?',
          options: ['Identidad', 'Emociones necesidades pasado', 'Mente', 'Carrera'],
          correct: 1,
          explanation: 'Moon es mundo emocional instintivo'
        },
        {
          q: '¿ASC?',
          options: ['Identidad profunda', 'Máscara externa cómo aparentas', 'Mente', 'Emociones'],
          correct: 1,
          explanation: 'ASC es personalidad externa visible'
        },
        {
          q: '¿Mercury?',
          options: ['Emociones', 'Mente lógica comunicación', 'Identidad', 'Pasado'],
          correct: 1,
          explanation: 'Mercury es cómo piensas comunicas procesas'
        },
        {
          q: 'Sun-Moon conjunto?',
          options: ['Conflicto', 'Armonía identidad-emoción consciente inconsciente', 'Débil', 'Sin efecto'],
          correct: 1,
          explanation: 'Buen aspecto integración consciente-inconsciente'
        },
        {
          q: 'Sun cuadrado ASC?',
          options: ['Armonía', 'Discordancia identidad apariencia conflicto', 'Sin efecto', 'Fuerte'],
          correct: 1,
          explanation: 'Tensión quién eres vs cómo aparentas'
        },
        {
          q: 'Moon opuesto Mercury?',
          options: ['Armonía mente emoción', 'Conflicto razón emociones', 'Balanceado', 'Sin efecto'],
          correct: 1,
          explanation: 'Discordancia entre sentimientos y lógica'
        },
        {
          q: '¿Síntesis psicológica?',
          options: ['Superficial', 'Perfil integrado cuatro factores personalidad', 'Sin valor', 'Decorativa'],
          correct: 1,
          explanation: 'Síntesis crea retrato psicológico profundo'
        }
      ]
    },

    'M7_vocacion': {
      id: 'M7_vocacion',
      moduleId: 'M7',
      title: 'Área: Vocación y carrera',
      titleEn: 'Area: Vocation and Career',
      level: 'avanzado',
      prerequisites: ['M7_jerarquia'],
      content: {
        summary: 'Análisis integrado de MC (vocación pública), casa 10 (carrera), casa 6 (trabajo día a día), casa 2 (recursos), Saturn (limitaciones disciplina) y Jupiter (expansión oportunidad) para vocación coherente.',
        keyPoints: [
          'MC Medio Cielo vocación pública destino',
          'Casa 10 actividades profesión visibilidad',
          'Casa 6 trabajo diario servicio rutina',
          'Casa 2 recursos dinero estabilidad económica',
          'Saturn limitación disciplina tiempo paciencia',
          'Jupiter expansión oportunidades suerte fortuna',
          'MC regente muestra cualidades carrera ideal',
          'Desafío Saturn en MC demora madurez temprana'
        ]
      },
      questions: [
        {
          q: '¿MC representa?',
          options: ['Privado', 'Vocación pública destino profesión', 'Dinero', 'Pasado'],
          correct: 1,
          explanation: 'Medio Cielo es punto más alto público carrera'
        },
        {
          q: '¿Casa 10?',
          options: ['Privada', 'Carrera profesión visibilidad reputación', 'Emociones', 'Creatividad'],
          correct: 1,
          explanation: 'Casa 10 es campo profesional'
        },
        {
          q: '¿Casa 6?',
          options: ['Vocación pública', 'Trabajo diario servicio rutina salud', 'Pareja', 'Dinero'],
          correct: 1,
          explanation: 'Casa 6 día a día trabajo empleado'
        },
        {
          q: '¿Casa 2?',
          options: ['Carrera', 'Recursos dinero estabilidad económica', 'Trabajo', 'Emociones'],
          correct: 1,
          explanation: 'Casa 2 es dinero posesiones valores'
        },
        {
          q: 'Saturn en MC?',
          options: ['Fácil rápido', 'Desafío disciplina demora madurez temprana', 'Sin efecto', 'Riqueza'],
          correct: 1,
          explanation: 'Saturn MC requiere esfuerzo paciencia pero éxito duradero'
        },
        {
          q: 'Jupiter en MC?',
          options: ['Limitación', 'Oportunidades expansión suerte carrera', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Jupiter MC trae oportunidades profesionales'
        },
        {
          q: '¿Regente MC importante?',
          options: ['No', 'Sí muestra cualidades dirección carrera ideal', 'Sin efecto', 'Poco'],
          correct: 1,
          explanation: 'Regente MC rige dirección profesional'
        },
        {
          q: '¿Análisis completo vocación?',
          options: ['Solo MC', 'MC casa 10 6 2 Saturn Jupiter integrado', 'Solo casa 10', 'Innecesario'],
          correct: 1,
          explanation: 'Vocación requiere síntesis múltiples factores'
        }
      ]
    },

    'M7_relaciones': {
      id: 'M7_relaciones',
      moduleId: 'M7',
      title: 'Área: Relaciones y pareja',
      titleEn: 'Area: Relationships and Partnership',
      level: 'avanzado',
      prerequisites: ['M7_jerarquia'],
      content: {
        summary: 'Análisis de Venus (amor valores), Mars (pasión deseo), casa 7 (pareja asociación), Descendente (qué buscas otros), Juno (compromiso lealtad). Incluye aspectos estos planetas y significadores pareja.',
        keyPoints: [
          'Venus qué amas valores belleza atracción',
          'Mars deseo pasión sexualidad iniciativa relación',
          'Casa 7 pareja asociación espejo yo',
          'Descendente qué ves buscas en otros',
          'Juno compromiso fidelidad lealtad pareja',
          'Aspectos Venus-Mars armonía conflicto pasión',
          'Venus-Saturn restricción timidez soledad',
          'Mars-Plutón obsesión intensidad pasional'
        ]
      },
      questions: [
        {
          q: '¿Venus significa?',
          options: ['Pasión', 'Amor valores belleza atracción', 'Conflicto', 'Dinero'],
          correct: 1,
          explanation: 'Venus es principio afecto atracción'
        },
        {
          q: '¿Mars en relaciones?',
          options: ['Pasividad', 'Pasión deseo iniciativa sexualidad', 'Sin efecto', 'Emociones'],
          correct: 1,
          explanation: 'Mars es energía erótica ímpetu relación'
        },
        {
          q: '¿Casa 7?',
          options: ['Privada', 'Pareja asociación espejo proyecciones', 'Emociones', 'Dinero'],
          correct: 1,
          explanation: 'Casa 7 es relación íntima pareja'
        },
        {
          q: '¿Descendente?',
          options: ['Yo', 'Lo que buscas ves en otros', 'Emociones', 'Privado'],
          correct: 1,
          explanation: 'Descendente opuesto Ascendente refleja pareja'
        },
        {
          q: '¿Juno?',
          options: ['Pasión', 'Compromiso fidelidad lealtad pareja', 'Dinero', 'Sin efecto'],
          correct: 1,
          explanation: 'Juno es asteroides matrimonio compromiso'
        },
        {
          q: 'Venus trigono Mars?',
          options: ['Conflicto', 'Armonía amor pasión', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Buen aspecto integración afecto pasión'
        },
        {
          q: 'Venus cuadrado Saturn?',
          options: ['Facilidad', 'Restricción timidez soledad lecciones amorosas', 'Sin efecto', 'Fortuna'],
          correct: 1,
          explanation: 'Saturn Venus requiere madurez emocional'
        },
        {
          q: '¿Análisis relaciones?',
          options: ['Solo Venus', 'Venus Mars casa 7 DESC Juno integrados', 'Solo Mars', 'Innecesario'],
          correct: 1,
          explanation: 'Relaciones requieren síntesis múltiples factores'
        }
      ]
    },

    // ===== MODULE 8: Técnicas Predictivas (continued) =====
    'M8_transitos_intro': {
      id: 'M8_transitos_intro',
      moduleId: 'M8',
      title: 'Introducción a tránsitos',
      titleEn: 'Introduction to Transits',
      level: 'intermedio',
      prerequisites: ['M5_teoria', 'M3_sociales'],
      content: {
        summary: 'Tránsito es cuando planeta actual forma aspecto con planeta natal. Describe circunstancias externas eventos temporales. Orb ~1° planetas veloces 2° lentos; duración segundos (Moon) a años (Plutón).',
        keyPoints: [
          'Tránsito = planeta actual aspecto planeta natal',
          'Orb 1° planetas veloces Moon Mercurio Venus Mars',
          'Orb 2° planetas lentos Jupiter Saturn transpersonales',
          'Activación 3 meses antes exactitud 3 meses después total 9 meses',
          'Moon tránsitos horas a 2.5 días efectos rápidos',
          'Mercury tránsitos semanas cambios mentales comunicación',
          'Sun tránsitos meses tema vital anual identidad',
          'Planetas lentos años transformación profunda'
        ]
      },
      questions: [
        {
          q: '¿Qué es tránsito?',
          options: ['Aspecto natal', 'Planeta actual aspecto planeta natal', 'Progresión', 'Revolución'],
          correct: 1,
          explanation: 'Tránsito es movimiento planetario ahora'
        },
        {
          q: '¿Orb Moon?',
          options: ['2°', '1°', '3°', '4°'],
          correct: 1,
          explanation: 'Moon rápida requiere orb preciso 1°'
        },
        {
          q: '¿Duración Sun natal?',
          options: ['Días', 'Semanas', 'Meses', 'Años'],
          correct: 2,
          explanation: 'Sun tránsito dura meses'
        },
        {
          q: '¿Moon tránsito?',
          options: ['Semanas', 'Meses', 'Horas días a 2.5 días', 'Años'],
          correct: 2,
          explanation: 'Moon rápida efectos efímeros'
        },
        {
          q: '¿Fase activación?',
          options: ['Exactitud solo', '3 meses antes exactitud 3 meses después', 'Semanas', 'Año entero'],
          correct: 1,
          explanation: 'Tránsito activa 3 meses aproximación hasta 3 meses después'
        },
        {
          q: '¿Mercury tránsito?',
          options: ['Débil', 'Cambios mentales comunicación semanas', 'Años', 'Sin efecto'],
          correct: 1,
          explanation: 'Mercury tránsito afecta mente comunicación'
        },
        {
          q: '¿Orb Jupiter?',
          options: ['1°', '2°', '3°', '4°'],
          correct: 1,
          explanation: 'Planetas lentos ~2° orb'
        },
        {
          q: '¿Tránsito vs progresión?',
          options: ['Igual', 'Tránsito actual progresión desarrollo interno', 'Opuesto', 'Sin diferencia'],
          correct: 1,
          explanation: 'Tránsitos circunstancias externas progresiones internas'
        }
      ]
    },

    'M8_transitos_lentos': {
      id: 'M8_transitos_lentos',
      moduleId: 'M8',
      title: 'Tránsitos de planetas lentos',
      titleEn: 'Slow Planet Transits',
      level: 'intermedio',
      prerequisites: ['M8_transitos_intro', 'M3_transpersonales'],
      content: {
        summary: 'Jupiter Saturn Uranus Neptune Pluto transitan lentamente causando eventos transformaciones duraderas. Jupiter ~12 años ciclo, Saturn ~30, Uranus ~84, Neptune ~165, Pluto ~248.',
        keyPoints: [
          'Jupiter ~1 año por signo 12 años ciclo completo',
          'Saturn ~2.5 años por signo 29.5 años ciclo completo',
          'Uranus ~7 años por signo 84 años ciclo completo',
          'Neptune ~14 años por signo 165 años ciclo',
          'Pluto ~20 años por signo 248 años ciclo',
          'Jupiter tránsito oportunidad expansión suerte 1 año',
          'Saturn tránsito restricción aprendizaje madurez 2.5 años',
          'Transpersonales describen generaciones transformación larga'
        ]
      },
      questions: [
        {
          q: '¿Jupiter ciclo?',
          options: ['6 años', '12 años', '20 años', '30 años'],
          correct: 1,
          explanation: 'Jupiter tarda 12 años orbitar zodiaco'
        },
        {
          q: '¿Saturn ciclo?',
          options: ['12 años', '29.5 años', '84 años', '165 años'],
          correct: 1,
          explanation: 'Saturn ciclo ~30 años'
        },
        {
          q: '¿Uranus período?',
          options: ['30 años', '84 años', '165 años', '248 años'],
          correct: 1,
          explanation: 'Uranus tarda 84 años'
        },
        {
          q: '¿Neptune período?',
          options: ['84 años', '165 años', '248 años', '365 años'],
          correct: 1,
          explanation: 'Neptune ~165 años'
        },
        {
          q: '¿Pluto período?',
          options: ['165 años', '248 años', '300 años', '365 años'],
          correct: 1,
          explanation: 'Pluto ~248 años'
        },
        {
          q: 'Jupiter tránsito dura?',
          options: ['Meses', '~1 año en signo', 'Años', 'Decades'],
          correct: 1,
          explanation: 'Jupiter ~1 año por signo'
        },
        {
          q: 'Saturn tránsito?',
          options: ['1 año', '~2.5 años en signo', 'Década', '5 años'],
          correct: 1,
          explanation: 'Saturn ~2.5 años por signo'
        },
        {
          q: '¿Lentos describen?',
          options: ['Individuo solo', 'Generaciones transformación social larga', 'Pasado', 'Sin efecto'],
          correct: 1,
          explanation: 'Lentos afectan generaciones ciclos sociales'
        }
      ]
    },

    'M8_transitos_rapidos': {
      id: 'M8_transitos_rapidos',
      moduleId: 'M8',
      title: 'Tránsitos rápidos y a ángulos',
      titleEn: 'Fast Transits and Angle Transits',
      level: 'intermedio',
      prerequisites: ['M8_transitos_intro'],
      content: {
        summary: 'Sun Moon Mercury Venus Mars tránsitos son rápidos duran horas a semanas. Tránsitos a ASC IC DESC MC son especialmente significativos pues estos ángulos son sensibles activadores de la carta.',
        keyPoints: [
          'Sun tránsito durará ~1 mes tema identidad',
          'Moon tránsito durará ~2.5 días emociones',
          'Mercury tránsito durará ~2 semanas mente comunicación',
          'Venus tránsito durará ~3 semanas relaciones placer',
          'Mars tránsito durará ~4 semanas acción energía',
          'Tránsitos a ASC activación externa presencia',
          'Tránsitos a MC vocación carrera visibilidad',
          'Tránsitos a DESC relación pareja proyecciones'
        ]
      },
      questions: [
        {
          q: '¿Sun tránsito dura?',
          options: ['Días', '~1 mes', 'Semanas', 'Años'],
          correct: 1,
          explanation: 'Sun tránsito ~1 mes en signo'
        },
        {
          q: '¿Moon tránsito?',
          options: ['Semanas', '~2.5 días rápido', 'Meses', 'Años'],
          correct: 1,
          explanation: 'Moon más rápida ~2.5 días'
        },
        {
          q: '¿Mercury tránsito?',
          options: ['Días', '~2 semanas mente', 'Meses', 'Años'],
          correct: 1,
          explanation: 'Mercury tránsito afecta comunicación'
        },
        {
          q: 'Tránsito ASC?',
          options: ['Sin efecto', 'Muy significativo activación externa presencia', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Ascendente es ángulo sensible'
        },
        {
          q: 'Tránsito MC?',
          options: ['Privado', 'Muy significativo vocación carrera', 'Sin importancia', 'Débil'],
          correct: 1,
          explanation: 'MC activación pública profesional'
        },
        {
          q: 'Tránsito DESC?',
          options: ['Interior', 'Relación pareja proyecciones otros', 'Privado', 'Sin efecto'],
          correct: 1,
          explanation: 'Descendente especular pareja'
        },
        {
          q: 'Tránsito IC?',
          options: ['Público', 'Privado familia raíces hogar', 'Sin efecto', 'Carrera'],
          correct: 1,
          explanation: 'IC fondo cielo privado'
        },
        {
          q: '¿Ángulos más sensibles?',
          options: ['No', 'Sí muy reactivos cambios transitorios', 'Igual otros', 'Débiles'],
          correct: 1,
          explanation: 'Ángulos son puntos energéticamente sensibles'
        }
      ]
    },

    'M8_progresiones': {
      id: 'M8_progresiones',
      moduleId: 'M8',
      title: 'Progresiones secundarias',
      titleEn: 'Secondary Progressions',
      level: 'avanzado',
      prerequisites: ['M8_transitos_lentos'],
      content: {
        summary: 'Regla: 1 día = 1 año de vida. Tomar efemérides nacimiento avanzar 1 día por cada año edad para ver progresiones. Muy importante para desarrollo psicológico interno a largo plazo.',
        keyPoints: [
          '1 día vida = 1 año vida después nacimiento',
          'Edad 30 años mira efemérides 30 días post-nacimiento',
          'Progresiones muestran desarrollo psicológico interno',
          'Sun progreso ~1°/año identidad evoluciona',
          'Moon progreso ~12-15°/año emociones cambios rápido',
          'Progresión Moon nueva casa/signo es ciclo emocional nuevo',
          'Aspectos progresión Sun Moon especialmente importantes',
          'Conjunción progreso Moon Sun importante síntesis'
        ]
      },
      questions: [
        {
          q: '¿Regla progresiones?',
          options: ['1 hora 1 año', '1 día 1 año', '1 semana 1 año', '1 mes 1 año'],
          correct: 1,
          explanation: 'Progresiones: 1 día = 1 año vida'
        },
        {
          q: 'Edad 25 años?',
          options: ['Mira día 25 post-nac', 'Mira efemérides 25 días post-nac', 'Mira mes 25', 'Mira año 25'],
          correct: 1,
          explanation: 'Avanza 1 día por cada año de vida'
        },
        {
          q: '¿Progresiones muestran?',
          options: ['Eventos externos', 'Desarrollo psicológico interno cambios', 'Tránsitos', 'Revolución'],
          correct: 1,
          explanation: 'Progresiones = desarrollo alma interior'
        },
        {
          q: 'Sun progreso?',
          options: ['~10°/año', '~1°/año identidad', '~5°/año', 'No progresa'],
          correct: 1,
          explanation: 'Sun lento progresa ~1° por año'
        },
        {
          q: 'Moon progreso?',
          options: ['~1°/año', '~12-15°/año emociones', '~20°/año', 'Estable'],
          correct: 1,
          explanation: 'Moon rápida progresa 12-15° por año'
        },
        {
          q: 'Progresión Moon nueva casa?',
          options: ['Sin efecto', 'Nuevo ciclo emocional fase vida', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Cambio casa Moon marca nueva etapa emocional'
        },
        {
          q: 'Aspectos importantes?',
          options: ['Progresión Venus', 'Progresión Sun Moon especialmente', 'Progresión Mercurio', 'Todos igual'],
          correct: 1,
          explanation: 'Progresión Sun Moon son clave desarrollo'
        },
        {
          q: '¿Cuándo revisar?',
          options: ['Cuando problemas', 'Regularmente desarrollo continuo', 'Nunca', 'Solo eventos'],
          correct: 1,
          explanation: 'Progresiones se leen anualmente para entender evolución'
        }
      ]
    },

    'M8_fases_progresadas': {
      id: 'M8_fases_progresadas',
      moduleId: 'M8',
      title: 'Fases lunares progresadas',
      titleEn: 'Progressed Lunar Phases',
      level: 'avanzado',
      prerequisites: ['M8_progresiones'],
      content: {
        summary: 'Ciclos lunares progresados describen fases emocionales psicológicas. Luna Nueva progresada = nuevo comienzo; Cuarto Creciente = crisis acción; Luna Llena = culminación consciencia; Cuarto Menguante = suelta.',
        keyPoints: [
          'Ciclo Luna Nueva a Luna Nueva dura ~29.5 años progresados',
          'Luna Nueva progresada nueva semilla emocional',
          'Cuarto Creciente progresado crisis de acción',
          'Luna Llena progresada culminación iluminación consciencia',
          'Cuarto Menguante progresado suelta integración',
          'Fase actual indica etapa emocional psicológica',
          'Cambio de fase importante transición importante',
          'Alineación con nacimiento cíclico intenso'
        ]
      },
      questions: [
        {
          q: '¿Ciclo lunar progreso dura?',
          options: ['18 años', '~29.5 años', '40 años', '50 años'],
          correct: 1,
          explanation: 'Ciclo lunar progresado ~29.5 años'
        },
        {
          q: 'Luna Nueva progresada?',
          options: ['Culminación', 'Nueva semilla emocional comienzo', 'Soltura', 'Sin efecto'],
          correct: 1,
          explanation: 'Luna Nueva progresada = inicio nuevo ciclo'
        },
        {
          q: 'Cuarto Creciente?',
          options: ['Descanso', 'Crisis de acción construcción', 'Culminación', 'Cierre'],
          correct: 1,
          explanation: 'Cuarto Creciente = tensión actitud'
        },
        {
          q: 'Luna Llena progresada?',
          options: ['Comienzo', 'Culminación iluminación consciencia', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Luna Llena progresada = clímax realización'
        },
        {
          q: 'Cuarto Menguante?',
          options: ['Inicio', 'Suelta soltura integración', 'Acción', 'Crisis'],
          correct: 1,
          explanation: 'Cuarto Menguante = liberación aprendizaje'
        },
        {
          q: '¿Fase indica?',
          options: ['Evento externo', 'Etapa emocional psicológica interna', 'Carrera', 'Dinero'],
          correct: 1,
          explanation: 'Fases = desarrollo emocional ciclo'
        },
        {
          q: 'Cambio fase?',
          options: ['Sin importancia', 'Transición importante ciclo emocional', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Cambio fase es momento transformativo'
        },
        {
          q: '¿Con nacimiento?',
          options: ['No relacionado', 'Alineación con fase nac es cíclico intenso', 'Opuesto', 'Sin efecto'],
          correct: 1,
          explanation: 'Retorno a fase natal crea intensidad especial'
        }
      ]
    },

    'M8_arco_solar': {
      id: 'M8_arco_solar',
      moduleId: 'M8',
      title: 'Direcciones de arco solar',
      titleEn: 'Solar Arc Directions',
      level: 'avanzado',
      prerequisites: ['M8_progresiones'],
      content: {
        summary: 'Todos planetas avanzan al ritmo del Sun (~1°/año). Grado exacto Sun progresado que avanzó se suma a todos planetas natales. Muestra desarrollo externo visible más rápido que transitos.',
        keyPoints: [
          'Sun progreso distancia viaja en años',
          'Suma ese grado a TODOS planetas natales',
          'Resultado es posición arco solar planeta',
          'Muestra desarrollo externo visible',
          'Más rápido que transitos ~1°/año',
          'Aspectos arco solar con natales activan cambios',
          'Arco solar Venus con natal Mars puede trigger evento',
          'Similar progresiones pero enfoque externo'
        ]
      },
      questions: [
        {
          q: '¿Arco solar ritmo?',
          options: ['Variable', '~1°/año', '~5°/año', 'Lunar'],
          correct: 1,
          explanation: 'Arco solar ritmo Sun ~1°/año'
        },
        {
          q: '¿Cómo calcular?',
          options: ['Solo Sun', 'Sun progreso suma a TODOS planetas', 'Cada planeta solo', 'No se calcula'],
          correct: 1,
          explanation: 'Arco solar es aplicación Sun a todos'
        },
        {
          q: '¿Arco muestra?',
          options: ['Interno psicológico', 'Desarrollo externo visible', 'Pasado', 'Privado'],
          correct: 1,
          explanation: 'Arco solar desarrollo manifestado visible'
        },
        {
          q: '¿Velocidad?',
          options: ['Transitos más rápido', 'Progresiones más lento', 'Intermedio entre', 'No hay ritmo'],
          correct: 2,
          explanation: 'Arco solar entre velocidad transitos y progresiones'
        },
        {
          q: 'Aspecto arco importante?',
          options: ['No', 'Sí aspecto arco-natal activa cambios', 'Débil', 'Sin efecto'],
          correct: 1,
          explanation: 'Aspectos arco solar-natal son activadores'
        },
        {
          q: 'Arco Venus con Mars?',
          options: ['Sin efecto', 'Puede trigger evento relación acción', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Arco Venus trigono Mars natal = evento relacional'
        },
        {
          q: '¿Vs progresiones?',
          options: ['Igual', 'Progresiones internas arco externo visible', 'Opuesto', 'Sin relación'],
          correct: 1,
          explanation: 'Ambas importantes perspectiva complementaria'
        },
        {
          q: '¿Incluir en análisis?',
          options: ['Opcional', 'Sí especialmente período crítico', 'No importante', 'Decorativo'],
          correct: 1,
          explanation: 'Arco solar importante para síntesis predictiva'
        }
      ]
    },

    'M8_direcciones_primarias': {
      id: 'M8_direcciones_primarias',
      moduleId: 'M8',
      title: 'Direcciones primarias',
      titleEn: 'Primary Directions',
      level: 'profesional',
      prerequisites: ['M8_arco_solar'],
      content: {
        summary: 'Sistema más antiguo predictivo basado en movimiento diurno. 1 hora movimiento diurno = 1 año vida. Requiere cálculos complejos. Muy respetado en astrología helenística antigua.',
        keyPoints: [
          'Basada en movimiento diurno rotación Tierra',
          '1 hora movimiento diurno = 1 año vida',
          'Cálculos complejos requieren tablas especiales',
          'Sistema helenístico antiguo muy respetado',
          'Direcciones primarias más precisas que arco solar',
          'Predicciones eventos específicos fecha',
          'Requiere hora natal exacta rectificación',
          'Astrólogos profesionales clásicos especializan'
        ]
      },
      questions: [
        {
          q: '¿Dirección primaria base?',
          options: ['1 día 1 año', '1 hora movimiento diurno 1 año', '1 signo 1 año', '1 semana 1 año'],
          correct: 1,
          explanation: 'Primarias: 1 hora movimiento diurno = 1 año'
        },
        {
          q: '¿Origen?',
          options: ['Moderno', 'Helenístico antiguo', 'Medieval', 'Renacimiento'],
          correct: 1,
          explanation: 'Sistema más antiguo predictivo conocido'
        },
        {
          q: '¿Complejidad cálculo?',
          options: ['Simple', 'Complejos requieren tablas especiales', 'Muy fácil', 'Imposible'],
          correct: 1,
          explanation: 'Cálculos difíciles requieren herramientas'
        },
        {
          q: '¿Precisión?',
          options: ['Baja', 'Alta más precisas que arco solar', 'Media', 'Variable'],
          correct: 1,
          explanation: 'Primarias muy precisas para eventos'
        },
        {
          q: '¿Requiere?',
          options: ['Hora aproximada', 'Hora exacta rectificación posible', 'Cualquier hora', 'No hora'],
          correct: 1,
          explanation: 'Hora exacta crucial para primarias'
        },
        {
          q: '¿Quién usa?',
          options: ['Todos astrólogos', 'Profesionales clásicos especializados', 'Nadie', 'Principiantes'],
          correct: 1,
          explanation: 'Especialidad astrólogos profesionales clásicos'
        },
        {
          q: 'Eventos específicos?',
          options: ['No', 'Sí fechas eventos precisas', 'Débil', 'Aproximado'],
          correct: 1,
          explanation: 'Primarias pueden predecir evento específico fecha'
        },
        {
          q: '¿Utilidad hoy?',
          options: ['Obsoleta', 'Muy valiosa profesionales serios', 'Sin valor', 'Hobby'],
          correct: 1,
          explanation: 'Primarias siguen siendo herramienta respetada'
        }
      ]
    },

    'M8_retorno_solar': {
      id: 'M8_retorno_solar',
      moduleId: 'M8',
      title: 'Retorno solar',
      titleEn: 'Solar Return',
      level: 'intermedio',
      prerequisites: ['M8_transitos_intro'],
      content: {
        summary: 'Cada año Sun regresa grado exacto natal (retorno solar). Carta levantada para esa momento (exactitud ~4 minutos) describe temas año. Sun en posición nueva describe enfoque anual.',
        keyPoints: [
          'Retorno Solar = Sun regresa grado natal',
          'Se calcula año específico para fecha exacta',
          'Levantada para lugar actual residencia año',
          'Sun en casa RS muestra enfoque anual',
          'Aspectos RS describen eventos año probable',
          'Casas RS sobre natales describen áreas enfoque',
          'Luna RS emocionalidad año',
          'MC RS vocación carrera enfoque año'
        ]
      },
      questions: [
        {
          q: '¿Retorno Solar?',
          options: ['Revolución lunar', 'Sun regresa grado natal', 'Progresión', 'Tránsito'],
          correct: 1,
          explanation: 'RS = Sun retorna posición natal'
        },
        {
          q: '¿Cuándo?',
          options: ['Cada mes', 'Cada año ~4 minutos exactitud', 'Cada década', 'Aleatorio'],
          correct: 1,
          explanation: 'RS ocurre anualmente cerca cumpleaños'
        },
        {
          q: '¿Dónde levantar?',
          options: ['Lugar nacimiento', 'Lugar residencia actual', 'Mismo siempre', 'No importa'],
          correct: 1,
          explanation: 'RS levantada para lugar donde estés año'
        },
        {
          q: 'Sun RS en casa?',
          options: ['Sin efecto', 'Muestra enfoque área vida anual', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Casa Sun RS describe dónde enfoque anual'
        },
        {
          q: '¿Aspectos RS?',
          options: ['Irrelevantes', 'Describen eventos año probable', 'Débiles', 'Sin efecto'],
          correct: 1,
          explanation: 'Aspectos RS son templates año'
        },
        {
          q: 'Luna RS?',
          options: ['Sin importancia', 'Emocionalidad tono emocional año', 'Menor', 'Privado'],
          correct: 1,
          explanation: 'Luna RS colorea emocional año'
        },
        {
          q: 'MC RS?',
          options: ['Privado', 'Vocación carrera enfoque profesional', 'Débil', 'Sin efecto'],
          correct: 1,
          explanation: 'MC RS describe dirección carrera'
        },
        {
          q: '¿Útil análisis anual?',
          options: ['No', 'Sí muy útil para anticipar temas año', 'Poco', 'Decorativo'],
          correct: 1,
          explanation: 'RS es herramienta excelente planning anual'
        }
      ]
    },

    'M8_retorno_saturno': {
      id: 'M8_retorno_saturno',
      moduleId: 'M8',
      title: 'Retorno de Saturno',
      titleEn: 'Saturn Return',
      level: 'intermedio',
      prerequisites: ['M8_transitos_lentos'],
      content: {
        summary: 'Cada ~30 años Saturn regresa grado natal. Puntos críticos edad ~29, ~58, ~87. Representa madurez crisis responsabilidad redefinición identidad vida.',
        keyPoints: [
          'Ciclo Saturn ~29.5 años',
          'Primer retorno ~edad 29 madurez identidad',
          'Segundo retorno ~edad 58-60 revisión vida',
          'Tercer retorno ~edad 87-88 última lección',
          'Período: 2 años antes después exactitud',
          'Crisis reformulación responsabilidad vida',
          'Toma decisiones importantes para próximo ciclo',
          'Restructuración identidad valores prioridades'
        ]
      },
      questions: [
        {
          q: '¿Retorno Saturn?',
          options: ['Cada 12 años', '~Cada 30 años regresa natal', 'Cada 7 años', 'Aleatorio'],
          correct: 1,
          explanation: 'Saturn ciclo ~29.5 años'
        },
        {
          q: 'Primer retorno edad?',
          options: ['18 años', '~29 años madurez crisis', '35 años', '50 años'],
          correct: 1,
          explanation: 'Primer retorno Saturn ~edad 29'
        },
        {
          q: 'Segundo retorno?',
          options: ['~edad 45', '~edad 58-60', '~edad 70', '~edad 80'],
          correct: 1,
          explanation: 'Segundo retorno ~edad 58-60'
        },
        {
          q: 'Tercer retorno?',
          options: ['~edad 70', '~edad 80', '~edad 87-88', '~edad 90'],
          correct: 2,
          explanation: 'Tercer retorno ~edad 87-88'
        },
        {
          q: '¿Período duración?',
          options: ['Meses', '~2 años antes después exactitud', 'Días', '1 año'],
          correct: 1,
          explanation: 'Retorno Saturn es período largo 2 años'
        },
        {
          q: '¿Crisis vs oportunidad?',
          options: ['Solo crisis', 'Ambas crisis + reformulación importante', 'Solo oportunidad', 'Débil'],
          correct: 1,
          explanation: 'Saturn return es desafío+madurez'
        },
        {
          q: 'Decisiones importantes?',
          options: ['No', 'Sí tomar decisiones próximo ciclo', 'Postergar', 'Sin efecto'],
          correct: 1,
          explanation: 'Saturn return es tiempo decidir dirección'
        },
        {
          q: '¿Tema central?',
          options: ['Felicidad', 'Responsabilidad madurez restructuración vida', 'Diversión', 'Dinero'],
          correct: 1,
          explanation: 'Saturn return = crecimiento madurez'
        }
      ]
    },

    'M8_profecciones': {
      id: 'M8_profecciones',
      moduleId: 'M8',
      title: 'Profecciones anuales',
      titleEn: 'Annual Profections',
      level: 'avanzado',
      prerequisites: ['M8_retorno_solar', 'M6_regencias'],
      content: {
        summary: 'Técnica helenística antigua: cada año activa una casa zodiacal en secuencia. Edad X = casa (1+X mod 12). Regente año actúa como dispositor temporal vida ese año.',
        keyPoints: [
          'Profección = cada año avanza casa secuencia',
          'Edad = determina casa activa año',
          'Año 1 casa 1; año 2 casa 2; etc.',
          'Regente casa es dispositor temporal año',
          'Dignidad regente describe facilidad año',
          'Aspectos regente muestra temas transitorios',
          'Retorno solar + profección combinación poderosa',
          'Cada ciclo 12 años completa retorna inicio'
        ]
      },
      questions: [
        {
          q: '¿Profección anual?',
          options: ['Solar return', 'Cada año casa zodiacal activa secuencia', 'Progresión', 'Tránsito'],
          correct: 1,
          explanation: 'Profección = técnica helenística casa anual'
        },
        {
          q: '¿Edad determina?',
          options: ['Signo', 'Casa activa año', 'Planeta', 'Aspecto'],
          correct: 1,
          explanation: 'Edad = número casa año'
        },
        {
          q: 'Año 1?',
          options: ['Casa 2', 'Casa 1 Ascendente temas personales', 'Casa 12', 'Casa 7'],
          correct: 1,
          explanation: 'Año 1 edad = Casa 1 activa'
        },
        {
          q: 'Año 12?',
          options: ['Casa 1 nuevo ciclo', 'Casa 12 clausura', 'Casa 6', 'Casa 10'],
          correct: 1,
          explanation: 'Año 12 cierra ciclo retorna 1'
        },
        {
          q: '¿Regente año?',
          options: ['Poco importante', 'Dispositor temporal describe tema año', 'Sin efecto', 'Decorativo'],
          correct: 1,
          explanation: 'Regente año es clave profección'
        },
        {
          q: 'Regente dignificado?',
          options: ['Sin importancia', 'Facilita flujo año armonía', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Dignidad regente muestra facilidad'
        },
        {
          q: 'Regente debilitado?',
          options: ['Sin efecto', 'Obstáculos desafíos año', 'Positivo', 'Fuerte'],
          correct: 1,
          explanation: 'Debilidad regente sugiere desafíos'
        },
        {
          q: '¿Con RS combinación?',
          options: ['No necesario', 'Sí poderosa síntesis para año', 'Redundante', 'Débil'],
          correct: 1,
          explanation: 'RS + profección = herramientas complementarias'
        }
      ]
    },

    'M8_firdaria': {
      id: 'M8_firdaria',
      moduleId: 'M8',
      title: 'Firdaria',
      titleEn: 'Firdaria',
      level: 'profesional',
      prerequisites: ['M8_profecciones'],
      content: {
        summary: 'Sistema medieval persa de períodos planetarios. Cada planeta rige período años. Sun 10 años, Venus 8, Mercury 13, Moon 9, Saturn 11, Jupiter 12, Mars 7. Se repite ciclo 120 años dividido periodos.',
        keyPoints: [
          'Sistema persa periodos planetarios antiguos',
          'Sun 10 años; Venus 8; Mercury 13; Moon 9',
          'Saturn 11 años; Jupiter 12; Mars 7',
          'Ciclo completo 120 años se repite',
          'Cada período coloreado cualidades planeta',
          'Sub-períodos dividen períodos principales',
          'Muy específico predecir temas años',
          'Especialidad astrólogos helenísticos profesionales'
        ]
      },
      questions: [
        {
          q: '¿Firdaria origen?',
          options: ['Helenístico', 'Medieval Persa antiguo', 'Moderno', 'Árabe tardío'],
          correct: 1,
          explanation: 'Firdaria sistema persa medieval'
        },
        {
          q: 'Sun período años?',
          options: ['8', '10 años', '12', '13'],
          correct: 1,
          explanation: 'Sun rige 10 años firdaria'
        },
        {
          q: 'Venus período?',
          options: ['7 años', '8 años', '10 años', '12 años'],
          correct: 1,
          explanation: 'Venus 8 años firdaria'
        },
        {
          q: 'Mercury período?',
          options: ['10 años', '12 años', '13 años', '15 años'],
          correct: 2,
          explanation: 'Mercury 13 años período más largo'
        },
        {
          q: 'Mars período?',
          options: ['7 años', '9 años', '11 años', '12 años'],
          correct: 0,
          explanation: 'Mars 7 años período más corto'
        },
        {
          q: 'Ciclo completo?',
          options: ['60 años', '90 años', '120 años', '180 años'],
          correct: 2,
          explanation: 'Ciclo firdaria 120 años repeats'
        },
        {
          q: '¿Usa hoy?',
          options: ['No', 'Especialistas helenísticos profesionales', 'Todos', 'Raro'],
          correct: 1,
          explanation: 'Firdaria es especialidad'
        },
        {
          q: '¿Especificidad?',
          options: ['Vago', 'Muy específico predecir temas años', 'General', 'Sin detalle'],
          correct: 1,
          explanation: 'Firdaria predice tema año muy específico'
        }
      ]
    },

    'M8_eclipses_predictivos': {
      id: 'M8_eclipses_predictivos',
      moduleId: 'M8',
      title: 'Técnica de eclipses predictivos',
      titleEn: 'Predictive Eclipse Technique',
      level: 'avanzado',
      prerequisites: ['M8_transitos_lentos', 'M1_astronomia'],
      content: {
        summary: 'Eclipses precesores de eventos importantes ~6 meses después. Saros ciclos de eclipses repiten cada 18 años 10 días. Activación por tránsito a grado eclipse predice timing evento.',
        keyPoints: [
          'Eclipse precede evento importante ~6 meses',
          'Saros ciclo 18 años 10 días eclipses repeaten',
          'Eclipse prenatal importante para carta',
          'Grado eclipse activo por tránsito planeta',
          'Luna Nodos describe eclipse tema',
          'Eclipse lunar vs solar diferente significado',
          'Séries saros comparten tema similar',
          'Eclipse con ASC MC especialmente activo'
        ]
      },
      questions: [
        {
          q: '¿Eclipse precede?',
          options: ['Semanas', '~6 meses evento importante', 'Años', 'Inmediato'],
          correct: 1,
          explanation: 'Eclipse precede evento típicamente 6 meses'
        },
        {
          q: 'Saros ciclo?',
          options: ['12 años', '18 años 10 días', '30 años', '84 años'],
          correct: 1,
          explanation: 'Saros ciclo eclipse 18.6 años'
        },
        {
          q: '¿Eclipse lunar vs solar?',
          options: ['Igual', 'Lunar emociones interior solar externo', 'Opuesto', 'Sin diferencia'],
          correct: 1,
          explanation: 'Lunar=interno solar=externo público'
        },
        {
          q: 'Eclipse prenatal?',
          options: ['Sin importancia', 'Muy importante tema vida toda', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Prenatal eclipse = asunto de vida'
        },
        {
          q: '¿Activación?',
          options: ['Automática', 'Tránsito a grado eclipse predice timing', 'Sin necesidad', 'Aleatoria'],
          correct: 1,
          explanation: 'Tránsito a eclipse activa manifestación'
        },
        {
          q: '¿Series saros?',
          options: ['Sin relación', 'Comparten tema similar repeaten', 'Opuestas', 'Variadas'],
          correct: 1,
          explanation: 'Saros serie tiene tema consistente'
        },
        {
          q: 'Eclipse ASC?',
          options: ['Sin efecto', 'Muy activo especialmente importante', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Eclipse en ángulo muy reactivo'
        },
        {
          q: '¿Técnica confiable?',
          options: ['No', 'Sí cuando combinada transitos timing evento', 'Poco', 'Decorativa'],
          correct: 1,
          explanation: 'Eclipses + tránsitos = herramienta predictiva'
        }
      ]
    },

    // ===== MODULE 9: Sinastría =====
    'M9_sinastria_intro': {
      id: 'M9_sinastria_intro',
      moduleId: 'M9',
      title: 'Introducción a sinastría',
      titleEn: 'Introduction to Synastry',
      level: 'intermedio',
      prerequisites: ['M5_trigono_sextil', 'M5_oposicion', 'M4_casas_7_12'],
      content: {
        summary: 'Sinastría superpone dos cartas natales para ver compatibilidad aspectos interplanetarios. Examina dónde planetas una persona caen en casas del otro. Revela dinámicas relación pareja.',
        keyPoints: [
          'Sinastría = superposición dos cartas natales',
          'Aspectos interplanetarios persona A vs persona B',
          'Casa placement: planetas A en casas B y viceversa',
          'Sun-Moon aspectos importante intimidad',
          'Venus-Mars aspectos química pasión',
          'Saturn aspectos duración seriedad relación',
          'Nodos aspectos destino kármico pareja',
          'Compuesta + davison + sinastría síntesis completa'
        ]
      },
      questions: [
        {
          q: '¿Sinastría?',
          options: ['Una carta sola', 'Superposición dos cartas compatibilidad', 'Progresión', 'Tránsito'],
          correct: 1,
          explanation: 'Sinastría = comparación dos cartas'
        },
        {
          q: '¿Qué examina?',
          options: ['Una persona', 'Aspectos interplanetarios dinámica pareja', 'Solo Sun', 'Solo Luna'],
          correct: 1,
          explanation: 'Sinastría examina interacciones planetarias'
        },
        {
          q: '¿Casas importantes?',
          options: ['No', 'Sí dónde planetas caen en casas otro', 'Solo ángulos', 'Sin efecto'],
          correct: 1,
          explanation: 'Casa placement modula expresión planeta'
        },
        {
          q: 'Sun-Moon?',
          options: ['Sin efecto', 'Muy importante intimidad conexión', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Sun-Moon es conexión fundamental'
        },
        {
          q: 'Venus-Mars?',
          options: ['Sin significado', 'Química pasión sexualidad', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Venus-Mars = atracción física'
        },
        {
          q: 'Saturn sinastría?',
          options: ['Sin importancia', 'Duración seriedad límites relación', 'Débil', 'Negativo solo'],
          correct: 1,
          explanation: 'Saturn = estructurador relación'
        },
        {
          q: '¿Nodos?',
          options: ['Sin efecto', 'Destino kármico pareja', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Nodos = asunto kármico relación'
        },
        {
          q: '¿Técnicas complementarias?',
          options: ['Sinastría sola suficiente', 'Sinastría + compuesta + davison síntesis', 'Solo compuesta', 'Sin combinación'],
          correct: 1,
          explanation: 'Múltiples técnicas dan visión completa'
        }
      ]
    },

    'M9_aspectos_clave': {
      id: 'M9_aspectos_clave',
      moduleId: 'M9',
      title: 'Aspectos clave en sinastría',
      titleEn: 'Key Aspects in Synastry',
      level: 'intermedio',
      prerequisites: ['M9_sinastria_intro'],
      content: {
        summary: 'Sun-Moon, Venus-Mars, Saturn cross-aspects son clave. Sun trígono Moon = armonía; Venus cuadrado Mars = conflicto pasión; Saturn aspectos = duración responsabilidad. Lumin.,arias + personales más significativos.',
        keyPoints: [
          'Sun A con Moon B: consciente reconoce inconsciente',
          'Trigono/sextil armonía; cuadrado/oposición desafío',
          'Venus A con Mars B: atracción química directa',
          'Mars A con Venus B: iniciativa respuesta',
          'Saturn aspectos: duración seriedad límites',
          'Plutón aspectos: intensidad transformación control',
          'Nodos aspectos: karmico destino pareja',
          'Aspectos tensos más dinámicos interés'
        ]
      },
      questions: [
        {
          q: 'Sun A trigono Moon B?',
          options: ['Conflicto', 'Armonía consciente-inconsciente', 'Débil', 'Sin efecto'],
          correct: 1,
          explanation: 'Trigono = flow flujo fácil'
        },
        {
          q: 'Sun A cuadrado Moon B?',
          options: ['Fácil', 'Desafío tensión pero dinámico', 'Sin efecto', 'Muy débil'],
          correct: 1,
          explanation: 'Cuadrado = fricción crecimiento'
        },
        {
          q: 'Venus A sextil Mars B?',
          options: ['Conflicto', 'Química atracción mutua armoniosa', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Sextil Venus-Mars = atracción suave'
        },
        {
          q: 'Mars A cuadrado Venus B?',
          options: ['Fácil relación', 'Conflicto pasión intensidad', 'Sin efecto', 'Armonía'],
          correct: 1,
          explanation: 'Cuadrado Mars-Venus = fricción pasional'
        },
        {
          q: 'Saturn A trigono Mars B?',
          options: ['Sin efecto', 'Duración enfoque disciplina energía', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Saturn estructura Mars acciona'
        },
        {
          q: 'Saturn A oposición Sun B?',
          options: ['Armonía', 'Desafío limitación restrictiva', 'Fácil', 'Débil'],
          correct: 1,
          explanation: 'Saturn-Sun = aprendizaje madurez'
        },
        {
          q: 'Plutón A trigono Venus B?',
          options: ['Débil', 'Intensidad transformación profunda', 'Sin efecto', 'Normal'],
          correct: 1,
          explanation: 'Plutón = transformación intensidad'
        },
        {
          q: '¿Tensos más importantes?',
          options: ['No tensos mejor', 'Tensos más dinámicos generan interés', 'Igual', 'Sin importancia'],
          correct: 1,
          explanation: 'Aspectos tensos crean fricción crecimiento'
        }
      ]
    },

    'M9_planetas_casas': {
      id: 'M9_planetas_casas',
      moduleId: 'M9',
      title: 'Planetas en casas del otro',
      titleEn: 'Planets in the Other\'s Houses',
      level: 'intermedio',
      prerequisites: ['M9_sinastria_intro'],
      content: {
        summary: 'Cuando planeta A cae en casa B modula su expresión. Venus en casa 7 otro muestra pareja importancia; Plutón en casa 8 otro intensidad compartida profunda. Overlay = superposición cartas para ver placements.',
        keyPoints: [
          'Overlay = planetas de cada uno en casas otro',
          'Venus en 1: atracción presencia agrada',
          'Venus en 7: pareja relación importancia',
          'Mars en 5: pasión creatividad atracción sexual',
          'Saturn en 1: limitación seriedad formal',
          'Saturn en 7: duración seriedad compromiso',
          'Plutón en 8: intensidad muerte renacimiento compartido',
          'Nodos en casas: karma asunto específico'
        ]
      },
      questions: [
        {
          q: '¿Overlay?',
          options: ['Dos cartas separadas', 'Planetas A en casas B superposición', 'Aspecto solo', 'Sin relación'],
          correct: 1,
          explanation: 'Overlay = placements cruzados'
        },
        {
          q: 'Venus en casa 1?',
          options: ['Sin efecto', 'Atracción presencia agrada', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Venus-1 = yo veo belleza ti'
        },
        {
          q: 'Venus en casa 7?',
          options: ['Privado', 'Pareja relación importancia para relación', 'Débil', 'Sin efecto'],
          correct: 1,
          explanation: 'Venus-7 = pareja importa mucho'
        },
        {
          q: 'Mars en casa 5?',
          options: ['Sin efecto', 'Pasión creatividad atracción sexual', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Mars-5 = química física'
        },
        {
          q: 'Saturn en casa 1?',
          options: ['Atracción', 'Limitación seriedad restricción', 'Débil', 'Positivo'],
          correct: 1,
          explanation: 'Saturn-1 = yo veo límites ti'
        },
        {
          q: 'Saturn en casa 7?',
          options: ['Diversión', 'Duración seriedad compromiso duradero', 'Débil', 'Negativo solo'],
          correct: 1,
          explanation: 'Saturn-7 = relación seria responsable'
        },
        {
          q: 'Plutón en casa 8?',
          options: ['Sin efecto', 'Intensidad muerte renacimiento compartido', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Plutón-8 = transformación profunda'
        },
        {
          q: '¿Nodos en casas?',
          options: ['Sin efecto', 'Karma asunto específico casa', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Nodos indican asunto kármico'
        }
      ]
    },

    'M9_compuesta': {
      id: 'M9_compuesta',
      moduleId: 'M9',
      title: 'Carta compuesta',
      titleEn: 'Composite Chart',
      level: 'avanzado',
      prerequisites: ['M9_aspectos_clave'],
      content: {
        summary: 'Carta del punto medio entre dos personas. ASC compuesta = promedio ASC; Sun compuesta = promedio Sun; etc. Describe relación como entidad viviente propia con ciclos temas crecimiento.',
        keyPoints: [
          'Carta compuesta = punto medio dos cartas',
          'Calcula promedio cada planeta signo casa',
          'Compuesta es entidad relación viva',
          'Sun compuesta muestra identidad relación',
          'Moon compuesta emocionalidad relación',
          'Venus compuesta valores amor relación',
          'Mars compuesta acción energía relación',
          'Ciclos progresiones compuesta = ciclos relación'
        ]
      },
      questions: [
        {
          q: '¿Carta compuesta?',
          options: ['Una sola persona', 'Punto medio dos personas relación', 'Progresión', 'Tránsito'],
          correct: 1,
          explanation: 'Compuesta = carta relación entidad'
        },
        {
          q: '¿Cómo calcular?',
          options: ['Una persona', 'Promedio cada planeta signo casa ambas', 'Solo Sun', 'Resta'],
          correct: 1,
          explanation: 'Promedio midpoints dos cartas'
        },
        {
          q: 'Sun compuesta?',
          options: ['Sin importancia', 'Identidad propósito relación', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Sun = núcleo relación'
        },
        {
          q: 'Moon compuesta?',
          options: ['Sin efecto', 'Emocionalidad tono emocional relación', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Moon = corazón relación'
        },
        {
          q: 'Venus compuesta?',
          options: ['Sin importancia', 'Valores amor belleza relación', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Venus = afecto relación'
        },
        {
          q: 'Mars compuesta?',
          options: ['Sin efecto', 'Acción energía dinámicas relación', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Mars = motor relación'
        },
        {
          q: '¿Progresiones compuesta?',
          options: ['Sin valor', 'Ciclos crecimiento relación similar personal', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Progresiones compuesta = evolución relación'
        },
        {
          q: '¿Vs sinastría?',
          options: ['Igual', 'Sinastría dinámica interpersonal compuesta relación entidad', 'Opuesto', 'Sin relación'],
          correct: 1,
          explanation: 'Perspectivas complementarias'
        }
      ]
    },

    'M9_davison': {
      id: 'M9_davison',
      moduleId: 'M9',
      title: 'Carta de Davison',
      titleEn: 'Davison Chart',
      level: 'avanzado',
      prerequisites: ['M9_compuesta'],
      content: {
        summary: 'Punto medio en TIEMPO y ESPACIO de dos nacimientos. Levanta carta para momento y lugar exacto midpoint. Alternativa a compuesta describe relación potencial real futuro.',
        keyPoints: [
          'Davison = midpoint tiempo + espacio dos personas',
          'Calcula momento exacto mid entre nacimientos',
          'Levanta carta ese momento lugar exacto mid',
          'Más precisa que compuesta geográficamente',
          'Describe realidad relación potencial futuro',
          'Nodos davison importantes para destino relación',
          'ASC davison = cómo relación se ve mundo',
          'MC davison = objetivo público relación'
        ]
      },
      questions: [
        {
          q: '¿Davison?',
          options: ['Promedio planetas', 'Midpoint tiempo espacio relación realidad', 'Progresión', 'Tránsito'],
          correct: 1,
          explanation: 'Davison = punto medio espacio-tiempo'
        },
        {
          q: '¿Vs compuesta?',
          options: ['Igual', 'Compuesta promedio davison midpoint geográfico', 'Opuesto', 'Sin relación'],
          correct: 1,
          explanation: 'Davison = espacial compuesta = matemática'
        },
        {
          q: '¿Cómo calcula?',
          options: ['Solo planetas', 'Momento lugar exacto mid dos nacimientos', 'Un solo grado', 'Suma'],
          correct: 1,
          explanation: 'Moment exacto + lugar midpoint'
        },
        {
          q: '¿Describe?',
          options: ['Potencial solo', 'Realidad relación potencial futuro', 'Pasado', 'Privado'],
          correct: 1,
          explanation: 'Davison = realidad relación'
        },
        {
          q: 'Nodos davison?',
          options: ['Sin importancia', 'Muy importantes destino relación kármico', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Nodos davison = propósito relación'
        },
        {
          q: 'ASC davison?',
          options: ['Sin efecto', 'Cómo relación se ve mundo presenta', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'ASC = cara relación externa'
        },
        {
          q: 'MC davison?',
          options: ['Privado', 'Objetivo público relación meta', 'Débil', 'Sin efecto'],
          correct: 1,
          explanation: 'MC = propósito carrera relación'
        },
        {
          q: '¿Cuándo usar?',
          options: ['Siempre sola', 'Complementaria sinastría compuesta análisis completo', 'Nunca', 'Decorativo'],
          correct: 1,
          explanation: 'Davison suma perspectiva geográfica'
        }
      ]
    },

    'M9_nodos_sinastria': {
      id: 'M9_nodos_sinastria',
      moduleId: 'M9',
      title: 'Nodos y Quirón en sinastría',
      titleEn: 'Nodes and Chiron in Synastry',
      level: 'avanzado',
      prerequisites: ['M9_aspectos_clave', 'M3_nodos', 'M3_quiron'],
      content: {
        summary: 'Nodos describen karma asuntos kármicos pareja. Nodo norte A en nodo norte B = destino compartido. Quirón en sinastría muestra herida compartida oportunidad curación mutua profunda.',
        keyPoints: [
          'Nodo norte = dirección crecimiento cármica',
          'Nodo sur = talento pasado apego soltar',
          'Nodo A con nodo B = destino conexión',
          'Nodo norte A en nodo norte B = evolución conjunta',
          'Plutón aspecto nodos = transformación kármica',
          'Quirón = herida inteligencia compasión',
          'Quirón en sinastría = curación mutua profunda',
          'Conexión nodos predice duración relación'
        ]
      },
      questions: [
        {
          q: '¿Nodo norte sinastría?',
          options: ['Sin importancia', 'Dirección crecimiento cármica pareja', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Nodo norte = evolución alma'
        },
        {
          q: 'Nodo sur?',
          options: ['Futuro', 'Talento pasado apego soltar', 'Destino', 'Crecimiento'],
          correct: 1,
          explanation: 'Nodo sur = herencia bagaje'
        },
        {
          q: 'Nodo A con nodo B?',
          options: ['Sin relación', 'Destino compartido conexión kármica', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Nodo-nodo = destino conectado'
        },
        {
          q: 'Plutón aspecto nodos?',
          options: ['Sin efecto', 'Transformación intensidad kármica', 'Débil', 'Normal'],
          correct: 1,
          explanation: 'Plutón-nodos = cambio profundo'
        },
        {
          q: '¿Quirón sinastría?',
          options: ['Sin importancia', 'Herida inteligencia curación mutua', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Quirón = herida curación'
        },
        {
          q: 'Quirón trigono Quirón?',
          options: ['Conflicto', 'Comprensión mutua curación conjunta', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Quirón-Quirón = sanación mutua'
        },
        {
          q: '¿Duración relación?',
          options: ['Sin indicador', 'Conexión nodos predice duración seriedad', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Nodos = longevidad kármica'
        },
        {
          q: '¿Kármico?',
          options: ['Astrología superstición', 'Nodos describen deuda aprendizaje vidas', 'Sin significado', 'Solo moderno'],
          correct: 1,
          explanation: 'Nodos = propósito alma'
        }
      ]
    },

    'M9_temporalidad': {
      id: 'M9_temporalidad',
      moduleId: 'M9',
      title: 'Temporalidad de relaciones',
      titleEn: 'Timing of Relationships',
      level: 'avanzado',
      prerequisites: ['M9_sinastria_intro', 'M8_transitos_lentos'],
      content: {
        summary: 'Tránsitos a nodos sinastría indican cuándo relación comienza termina. Saturn tránsito nodos = fin ciclo. Jupiter tránsito nodos = oportunidad expansión relación. Progresiones compuesta marcan hitos.',
        keyPoints: [
          'Tránsito Saturn nodos = fin ciclo relación',
          'Tránsito Jupiter nodos = expansión oportunidad',
          'Tránsito Plutón nodos = transformación intensidad',
          'Progresión compuesta Moon nueva casa = cambio',
          'Nodo norte transitar ASC otro = destino encuentro',
          'Saturn retorno pareja = crisis decisión',
          'Dinámicas tránsitos activan sincronización pareja',
          'Timing astrológico explica inicio fin relaciones'
        ]
      },
      questions: [
        {
          q: 'Saturn tránsito nodo?',
          options: ['Inicio relación', 'Fin ciclo restricción crisis', 'Expansión', 'Débil'],
          correct: 1,
          explanation: 'Saturn = cierre culmen'
        },
        {
          q: 'Jupiter tránsito nodo?',
          options: ['Débil', 'Oportunidad expansión fortuna relación', 'Fin', 'Sin efecto'],
          correct: 1,
          explanation: 'Jupiter = crecimiento fortuna'
        },
        {
          q: 'Plutón tránsito nodo?',
          options: ['Sin efecto', 'Transformación intensidad control', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Plutón = renacimiento'
        },
        {
          q: 'Progresión Moon nueva casa?',
          options: ['Sin importancia', 'Cambio hito nuevo capítulo relación', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Moon progreso = ciclo emocional'
        },
        {
          q: 'Nodo norte transitar ASC?',
          options: ['Sin efecto', 'Destino encuentro sincronización', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Nodo = destino kármico'
        },
        {
          q: 'Saturn retorno pareja?',
          options: ['Diversión', 'Crisis decisión futuro relación', 'Sin efecto', 'Débil'],
          correct: 1,
          explanation: 'Saturn = madurez responsabilidad'
        },
        {
          q: '¿Sincronización?',
          options: ['No existe', 'Tránsitos activan timing sincrónico pareja', 'Coincidencia', 'Sin importancia'],
          correct: 1,
          explanation: 'Tránsitos = sincronización relación'
        },
        {
          q: '¿Predicción?',
          options: ['Imposible', 'Astrología ayuda entender timing dinámicas', 'Siempre fallo', 'Sin utilidad'],
          correct: 1,
          explanation: 'Astrología revela patrones tiempo'
        }
      ]
    },

    'M9_sinastria_avanzada': {
      id: 'M9_sinastria_avanzada',
      moduleId: 'M9',
      title: 'Sinastría avanzada completa',
      titleEn: 'Complete Advanced Synastry',
      level: 'profesional',
      prerequisites: ['M9_compuesta', 'M9_davison', 'M9_nodos_sinastria'],
      content: {
        summary: 'Síntesis de sinastría + compuesta + davison + progresiones + tránsitos para retrato relación 360°. Incluye asteroides Juno, timing tránsitos, ciclos progresiones, casa overlays.',
        keyPoints: [
          'Sinastría aspectos dinamicas interpersonales',
          'Compuesta relación como entidad viva',
          'Davison realidad geográfica relación',
          'Progresiones compuesta ciclos crecimiento',
          'Tránsitos pareja timing eventos',
          'Juno asteroides compromiso fidelidad',
          'Karmic indicators nodos Plutón Chiron',
          'Síntesis holística vs fragmentada análisis'
        ]
      },
      questions: [
        {
          q: '¿Técnicas combinar?',
          options: ['Una sola', 'Sinastría compuesta davison tránsitos síntesis', 'Ninguna', 'Confuso'],
          correct: 1,
          explanation: 'Síntesis múltiples técnicas = análisis completo'
        },
        {
          q: '¿Juno?',
          options: ['Sin importancia', 'Asteroide compromiso fidelidad pareja', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Juno = matrimonio lealtad'
        },
        {
          q: '¿Indicadores kármicos?',
          options: ['No existen', 'Nodos Plutón Chiron karma alma', 'Superstición', 'Sin efecto'],
          correct: 1,
          explanation: 'Nodos = propósito alma'
        },
        {
          q: '¿Síntesis vs fragmentado?',
          options: ['Igual resultado', 'Síntesis holística vs análisis piezas separadas', 'Sin diferencia', 'Confuso'],
          correct: 1,
          explanation: 'Síntesis = visión completa integrada'
        },
        {
          q: '¿Timing importancia?',
          options: ['Decora', 'Timing tránsitos explica cuándo eventos ocurren', 'Débil', 'Sin efecto'],
          correct: 1,
          explanation: 'Timing = cuándo qué sucede'
        },
        {
          q: '¿Casa overlays?',
          options: ['Sin importancia', 'Dónde energías se expresan relación áreas', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Casa = contexto expresión'
        },
        {
          q: 'Retrato 360°?',
          options: ['Innecesario', 'Sí para comprensión profunda relación', 'Confuso', 'Débil'],
          correct: 1,
          explanation: 'Análisis completo = visión integral'
        },
        {
          q: '¿Para cliente?',
          options: ['Demasiado complejo', 'Síntesis clara datos relevantes para cliente', 'Sin valor', 'Decorativo'],
          correct: 1,
          explanation: 'Profesional presenta síntesis útil'
        }
      ]
    },

    // ===== MODULE 10: Astrología Horaria =====
    'M10_fundamentos': {
      id: 'M10_fundamentos',
      moduleId: 'M10',
      title: 'Fundamentos de horaria',
      titleEn: 'Fundamentals of Horary',
      level: 'avanzado',
      prerequisites: ['M3_dignidades', 'M6_regencias'],
      content: {
        summary: 'Astrología horaria levanta carta para momento pregunta es hecha. Interpreta para respuesta específica sí/no u asunto particular. Más antigua técnica viva astrología pre-natal natal predictiva.',
        keyPoints: [
          'Horaria = carta momento pregunta exacta',
          'Pregunta clara específica sí-no u asunto',
          'Significador querent persona pregunta',
          'Significador quesited asunto o persona buscada',
          'Moon co-significador universal movimiento',
          'Regencias casas describe naturaleza pregunta',
          'Técnicas antiguas translation light collection',
          'Respuesta es sí-no o descripción asunto'
        ]
      },
      questions: [
        {
          q: '¿Horaria?',
          options: ['Natal', 'Carta momento pregunta hecha', 'Progresión', 'Tránsito'],
          correct: 1,
          explanation: 'Horaria = momento pregunta'
        },
        {
          q: '¿Pregunta?',
          options: ['Abierta', 'Clara específica sí-no u asunto', 'Vaga', 'Múltiple'],
          correct: 1,
          explanation: 'Pregunta debe ser precisa'
        },
        {
          q: '¿Querent?',
          options: ['Asunto buscado', 'Persona que pregunta significador H1', 'Otro', 'Sin definición'],
          correct: 1,
          explanation: 'Querent = quién pregunta'
        },
        {
          q: '¿Quesited?',
          options: ['Persona pregunta', 'Asunto persona buscada significador', 'Random', 'Sin definición'],
          correct: 1,
          explanation: 'Quesited = qué se busca'
        },
        {
          q: 'Moon co-significador?',
          options: ['No importante', 'Universal movimiento indica aplicación', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Moon = flujo movimiento'
        },
        {
          q: '¿Técnica antigua?',
          options: ['Moderna reciente', 'Medieval helenística muy respetada', 'New Age', 'Sin historia'],
          correct: 1,
          explanation: 'Horaria es técnica antigua viva'
        },
        {
          q: '¿Respuesta formato?',
          options: ['Vaga', 'Sí-no o descripción precisa asunto', 'Siempre positiva', 'Nunca clara'],
          correct: 1,
          explanation: 'Respuesta es directa'
        },
        {
          q: '¿Vs natal?',
          options: ['Igual', 'Horaria pregunta específica natal patrón vida', 'Opuesto', 'Sin relación'],
          correct: 1,
          explanation: 'Horaria responde preguntas específicas'
        }
      ]
    },

    'M10_radicacion': {
      id: 'M10_radicacion',
      moduleId: 'M10',
      title: 'Reglas de radicación',
      titleEn: 'Rules of Radication',
      level: 'avanzado',
      prerequisites: ['M10_fundamentos'],
      content: {
        summary: 'Radicación verifica si carta horaria es válida para juzgar. Criterios: pregunta genuina, momento exacto, ASC no en cuspidie, planets no retrógrados innecesarios.',
        keyPoints: [
          'Radicación = validez carta para respuesta',
          'Pregunta genuina sincera verdadera',
          'Hora exacta ±1 minuto preferible',
          'ASC no en últimos 3° cuspidie signo',
          'Signos móviles house cups intermedias buscarse',
          'Planetas retrógrados innecesarios invalidan',
          'Significador combustión debilita mucho',
          'Carta radical válida juzgable'
        ]
      },
      questions: [
        {
          q: '¿Radicación?',
          options: ['Astrología diferente', 'Verificación validez carta horaria', 'Técnica nueva', 'Sin importancia'],
          correct: 1,
          explanation: 'Radicación = carta válida?'
        },
        {
          q: '¿Pregunta genuina?',
          options: ['Siempre sí', 'Debe ser sincera verdadera preocupación', 'No importa', 'Irrelevante'],
          correct: 1,
          explanation: 'Pregunta debe ser real'
        },
        {
          q: '¿Precisión hora?',
          options: ['Aproximada', '±1 minuto preferible exactitud', 'Cualquier hora', '±30 minutos'],
          correct: 1,
          explanation: 'Hora debe ser precisa'
        },
        {
          q: 'ASC en cuspidie?',
          options: ['Válido', 'No últimos 3° invalida inestable', 'Muy bueno', 'Sin efecto'],
          correct: 1,
          explanation: 'Cuspidie = frontera débil'
        },
        {
          q: '¿Retrógrado?',
          options: ['Siempre válido', 'Innecesario retrogrado invalida debilita', 'Normal', 'Fortalece'],
          correct: 1,
          explanation: 'Retrogrado = reversión debilidad'
        },
        {
          q: '¿Combustión?',
          options: ['Sin efecto', 'Planeta muy cercano Sun debilitado mucho', 'Fortalece', 'Normal'],
          correct: 1,
          explanation: 'Combustión = debilitamiento severo'
        },
        {
          q: '¿Signos móviles?',
          options: ['No importa', 'Casas intermedias buscarse precisión', 'Sin efecto', 'Decorativo'],
          correct: 1,
          explanation: 'Signos móviles = cálculos complejos'
        },
        {
          q: '¿No radical?',
          options: ['Juzgable igual', 'No válida respuesta cuestionable', 'Muy fiable', 'Mejor'],
          correct: 1,
          explanation: 'Carta no radical = no confiar'
        }
      ]
    },

    'M10_significadores': {
      id: 'M10_significadores',
      moduleId: 'M10',
      title: 'Significadores',
      titleEn: 'Significators',
      level: 'avanzado',
      prerequisites: ['M10_radicacion'],
      content: {
        summary: 'Significador querent = regente casa 1 persona pregunta. Significador quesited = regente casa relevante asunto o planeta natural. Moon es co-significador universal movimiento.',
        keyPoints: [
          'Querent regente casa 1 persona pregunta',
          'Quesited regente casa natural asunto buscado',
          'Casa 7 pareja relación; Casa 2 dinero posesiones',
          'Casa 8 herencias compartidas muerte; Casa 10 carrera',
          'Planetas naturales significadores secundarios',
          'Venus natural significador amor relación',
          'Mars natural significador conflicto acción',
          'Saturn natural significador muerte restricción'
        ]
      },
      questions: [
        {
          q: '¿Significador querent?',
          options: ['Sun siempre', 'Regente casa 1 persona pregunta', 'Moon', 'Ascendente'],
          correct: 1,
          explanation: 'Querent = quien pregunta'
        },
        {
          q: '¿Significador quesited?',
          options: ['Random', 'Regente casa natural asunto buscado', 'Siempre Moon', 'Variable'],
          correct: 1,
          explanation: 'Quesited = qué se pregunta'
        },
        {
          q: 'Pareja significador casa?',
          options: ['Casa 5', 'Casa 7 DESC asociación pareja', 'Casa 8', 'Casa 10'],
          correct: 1,
          explanation: 'Casa 7 = relación pareja'
        },
        {
          q: 'Dinero casa?',
          options: ['Casa 1', 'Casa 2 posesiones recursos dinero', 'Casa 5', 'Casa 8'],
          correct: 1,
          explanation: 'Casa 2 = dinero valores'
        },
        {
          q: 'Herencia casa?',
          options: ['Casa 2', 'Casa 8 herencias compartidas muerte', 'Casa 4', 'Casa 10'],
          correct: 1,
          explanation: 'Casa 8 = cosas compartidas'
        },
        {
          q: '¿Venus natural?',
          options: ['Sin importancia', 'Significador amor relación belleza', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Venus = afecto'
        },
        {
          q: '¿Mars natural?',
          options: ['Sin efecto', 'Significador conflicto acción energía', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Mars = confrontación'
        },
        {
          q: 'Moon co-significador?',
          options: ['No importante', 'Universal movimiento aplicación situación', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Moon = flujo universal'
        }
      ]
    },

    'M10_tecnicas': {
      id: 'M10_tecnicas',
      moduleId: 'M10',
      title: 'Técnicas horarias',
      titleEn: 'Horary Techniques',
      level: 'profesional',
      prerequisites: ['M10_significadores'],
      content: {
        summary: 'Translation of light Moon aplica aspecto a quesited. Collection of light múltiples planetas median. Mutual reception significadores aceptan uno otro. Prohibition Moon separa sin completar.',
        keyPoints: [
          'Translation light Moon aplica a quesited',
          'Significa sí respuesta aplicación sucede',
          'Collection light otro planeta medio',
          'Mutual reception significadores en signos el otro',
          'Prohibition Moon separa sin aspectar quesited',
          'Refranation retrogrado antes aplicación',
          'Aspect bestowal aspectos pasados confirman',
          'Técnicas complejas requieren pericia'
        ]
      },
      questions: [
        {
          q: '¿Translation light?',
          options: ['Luz física', 'Moon aplica aspecto quesited respuesta sí', 'Retrogrado', 'Sin efecto'],
          correct: 1,
          explanation: 'Translation = sí sucede'
        },
        {
          q: '¿Collection light?',
          options: ['Sin efecto', 'Otro planeta median respuesta sí', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Collection = intermediario'
        },
        {
          q: '¿Mutual reception?',
          options: ['Sin importancia', 'Significadores en signos uno otro aceptación', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Mutual = aceptación mutua'
        },
        {
          q: '¿Prohibition?',
          options: ['Sin efecto', 'Moon separa sin aspectar quesited NO', 'Sí respuesta', 'Débil'],
          correct: 1,
          explanation: 'Prohibition = no sucede'
        },
        {
          q: '¿Refranation?',
          options: ['Sin importancia', 'Retrogrado antes aplicación invalidates', 'Fuerte', 'Normal'],
          correct: 1,
          explanation: 'Refranation = reversión'
        },
        {
          q: '¿Aspecto bestowal?',
          options: ['Sin efecto', 'Aspectos pasados confirman respuesta', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Bestowal = confirmación pasada'
        },
        {
          q: '¿Complejidad?',
          options: ['Simple', 'Complejas requieren pericia interpretación', 'Fácil', 'Sin aprendizaje'],
          correct: 1,
          explanation: 'Horaria = técnica difícil'
        },
        {
          q: '¿Especialista?',
          options: ['Todos pueden', 'Especialistas horarios profesionales serios', 'Principiantes fácil', 'Sin necesidad'],
          correct: 1,
          explanation: 'Horaria = especialidad'
        }
      ]
    },

    'M10_temas': {
      id: 'M10_temas',
      moduleId: 'M10',
      title: 'Temas horarios comunes',
      titleEn: 'Common Horary Themes',
      level: 'profesional',
      prerequisites: ['M10_tecnicas'],
      content: {
        summary: 'Amor relación negocios asuntos legales salud médicos objetos perdidos preguntas frecuentes. Cada tema requiere significadores casa específicos e interpretación experta.',
        keyPoints: [
          'Amor relación casa 7 Venus significadores',
          'Dinero negocios casa 2 10 8 significadores',
          'Legal asuntos casa 9 10 Saturn Mercurio',
          'Salud médica casa 6 8 significadores salud',
          'Objetos perdidos casa 2 4 ubicación',
          'Viajes mudanzas casa 9 3 significadores movimiento',
          'Empleo carrera casa 10 6 Jupiter',
          'Herencia testamento casa 8 Saturno'
        ]
      },
      questions: [
        {
          q: '¿Amor relación?',
          options: ['Casa 10', 'Casa 7 DESC Venus Mars significadores', 'Casa 5', 'Casa 8'],
          correct: 1,
          explanation: 'Casa 7 = relación pareja'
        },
        {
          q: '¿Dinero negocios?',
          options: ['Casa 1', 'Casa 2 10 8 recursos dinero', 'Casa 5', 'Casa 12'],
          correct: 1,
          explanation: 'Casa 2 = dinero valores'
        },
        {
          q: '¿Asuntos legales?',
          options: ['Casa 1', 'Casa 9 10 Saturno Mercurio ley', 'Casa 5', 'Casa 12'],
          correct: 1,
          explanation: 'Casa 9 = ley justicia'
        },
        {
          q: '¿Salud médica?',
          options: ['Casa 2', 'Casa 6 8 significadores salud', 'Casa 10', 'Casa 12'],
          correct: 1,
          explanation: 'Casa 6 = salud servicio'
        },
        {
          q: '¿Objeto perdido?',
          options: ['Casa 1', 'Casa 2 4 ubicación movimiento', 'Casa 7', 'Casa 12'],
          correct: 1,
          explanation: 'Casa 2 = posesiones 4 = donde'
        },
        {
          q: '¿Viajes mudanza?',
          options: ['Casa 1', 'Casa 9 3 significadores movimiento', 'Casa 5', 'Casa 12'],
          correct: 1,
          explanation: 'Casa 9 = viajes lejanos'
        },
        {
          q: '¿Empleo carrera?',
          options: ['Casa 2', 'Casa 10 6 Jupiter significadores', 'Casa 5', 'Casa 12'],
          correct: 1,
          explanation: 'Casa 10 = carrera pública'
        },
        {
          q: '¿Herencia?',
          options: ['Casa 2', 'Casa 8 Saturno muerte legados', 'Casa 10', 'Casa 5'],
          correct: 1,
          explanation: 'Casa 8 = herencias compartidas'
        }
      ]
    },

    'M10_via_combusta': {
      id: 'M10_via_combusta',
      moduleId: 'M10',
      title: 'Vía combusta y combustión',
      titleEn: 'Via Combusta and Combustion',
      level: 'profesional',
      prerequisites: ['M10_tecnicas'],
      content: {
        summary: 'Vía combusta es área 15° Libra a 15° Escorpio debilitada oscuridad. Combustión es planeta muy cercano Sun 8.5° debilitado quemado. Ambos invalidan significador debilitan respuesta.',
        keyPoints: [
          'Vía combusta 15° Libra a 15° Escorpio',
          'Zona debilitada oscura no favorable',
          'Planeta en vía combusta invalidado débil',
          'Combustión planeta 8.5° Sun débil quemado',
          'Combusta + significador debilita toda respuesta',
          'Evitar preguntar cuando significador combusta',
          'Combustión invalida no confiar significador',
          'Conocer zona combusta astrología horaria clave'
        ]
      },
      questions: [
        {
          q: '¿Vía combusta?',
          options: ['15° Aries', '15° Libra a 15° Escorpio zona débil', '15° Cáncer', 'Aleatoria'],
          correct: 1,
          explanation: 'Vía combusta = zona oscura'
        },
        {
          q: '¿Efecto vía?',
          options: ['Fortalece', 'Debilita debilitada oscuridad', 'Sin efecto', 'Neutral'],
          correct: 1,
          explanation: 'Vía = debilitamiento'
        },
        {
          q: '¿Combustión significador?',
          options: ['Válido igual', 'Debilitado muy invalidado combustión', 'Fuerte', 'Normal'],
          correct: 1,
          explanation: 'Combustión = debilitamiento severo'
        },
        {
          q: 'Sun cerca 8.5°?',
          options: ['Normal', 'Combustión planeta quemado debilitado', 'Fortaleza', 'Sin efecto'],
          correct: 1,
          explanation: 'Combustión = fuego Sun'
        },
        {
          q: '¿Combusta + combusta?',
          options: ['Puede usarse', 'Doble debilitamiento invalida completamente', 'Débil solo', 'Normal'],
          correct: 1,
          explanation: 'Doble debilidad = no confiar'
        },
        {
          q: '¿Cuándo preguntar?',
          options: ['Siempre ok', 'Evitar significador en combusta débil respuesta', 'No importa', 'Decorativo'],
          correct: 1,
          explanation: 'Timing pregunta = calidad respuesta'
        },
        {
          q: '¿No combustión?',
          options: ['Sin diferencia', 'Significador fuerte válido respuesta confiable', 'Débil', 'Sin importancia'],
          correct: 1,
          explanation: 'Sin combustión = fuerza'
        },
        {
          q: '¿Importancia horaria?',
          options: ['Decorativa', 'Esencial saber zonas débiles validez', 'Poco', 'Sin efecto'],
          correct: 1,
          explanation: 'Vía combusta = conocimiento esencial'
        }
      ]
    },

    // ===== MODULE 11: Astrología Electiva =====
    'M11_principios': {
      id: 'M11_principios',
      moduleId: 'M11',
      title: 'Principios de electiva',
      titleEn: 'Principles of Electional Astrology',
      level: 'avanzado',
      prerequisites: ['M8_transitos_intro', 'M3_dignidades'],
      content: {
        summary: 'Elegir mejor momento comenzar actividad. Moon aplicando beneficios, evitar VOC, regente no retrógrado, ángulos activados. Diferentes reglas para matrimonio negocio cirugía.',
        keyPoints: [
          'Elegir momento mejor para actividad',
          'Moon aplicando aspecto benefico 2 horas antes',
          'Moon VOC void of course inefectiva',
          'Regente activo directo no retrógrado',
          'Ángulos activados ASC MC importante',
          'Dignidades planeta significador fuerte',
          'Evitar aspectos tensos significadores',
          'Diferente reglas cada tipo actividad'
        ]
      },
      questions: [
        {
          q: '¿Electiva?',
          options: ['Astrología natal', 'Elegir mejor momento comenzar actividad', 'Tránsitos', 'Horaria'],
          correct: 1,
          explanation: 'Electiva = timing elección'
        },
        {
          q: '¿Moon aplicando?',
          options: ['Separando', 'Aproximándose aspecto benefico 2 horas', 'Sin importancia', 'Débil'],
          correct: 1,
          explanation: 'Aplicando = movimiento hacia'
        },
        {
          q: '¿Beneficios?',
          options: ['Mars', 'Venus Jupiter trigono sextil', 'Saturn', 'Plutón'],
          correct: 1,
          explanation: 'Venus Jupiter = beneficios'
        },
        {
          q: '¿VOC?',
          options: ['Void of course Moon inefectiva sin aspectos', 'Muy bueno', 'Normal', 'Fuerte'],
          correct: 0,
          explanation: 'VOC = Moon sin aspectos'
        },
        {
          q: '¿Regente retrógrado?',
          options: ['Válido igual', 'Evitar reversión debilitamiento', 'Fuerte', 'Normal'],
          correct: 1,
          explanation: 'Retrógrado = debilidad'
        },
        {
          q: '¿Ángulos?',
          options: ['Sin importancia', 'ASC MC importante activación', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Ángulos = puntos sensitivos'
        },
        {
          q: '¿Dignidades?',
          options: ['Sin efecto', 'Planeta significador fuerte exaltación regencia', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Dignidad = fortaleza'
        },
        {
          q: '¿Diferencias tipo?',
          options: ['Todas iguales', 'Matrimonio negocio cirugía reglas distintas', 'Sin diferencia', 'Opcional'],
          correct: 1,
          explanation: 'Cada actividad diferente significadores'
        }
      ]
    },

    'M11_reglas': {
      id: 'M11_reglas',
      moduleId: 'M11',
      title: 'Reglas de elección',
      titleEn: 'Rules of Election',
      level: 'avanzado',
      prerequisites: ['M11_principios', 'M10_fundamentos'],
      content: {
        summary: 'Matrimonio: Venus fuerte dignificada, Moon aplicando Venus, evitar Saturn Plutón. Negocio: Mercury Jupiter dignificados, regente casa 10 fuerte. Cirugía: evitar Moon Marte, ángulos activados.',
        keyPoints: [
          'Matrimonio Venus fuerte Moon aplicando Venus',
          'Evitar Mars Saturn Plutón tensiones matrimoniales',
          'Negocio Mercury Jupiter dignificados 10 fuerte',
          'Moon en signo fijo para durabilidad',
          'Cirugía Moon creciente NO decreciente',
          'Evitar Marte cirugía evitar hemorragia',
          'Saturn útil restricción limitación',
          'Cada tipo actividad significadores específicos'
        ]
      },
      questions: [
        {
          q: '¿Matrimonio Venus?',
          options: ['Sin importancia', 'Muy importante fuerte dignificada', 'Débil', 'Privado'],
          correct: 1,
          explanation: 'Venus = amor matrimonio'
        },
        {
          q: 'Matrimonio evitar?',
          options: ['Nada', 'Mars Saturn Plutón tensiones', 'Venus', 'Moon'],
          correct: 1,
          explanation: 'Maléficos = conflicto'
        },
        {
          q: '¿Negocio planetas?',
          options: ['Venus', 'Mercury Jupiter dignificados carrera', 'Mars', 'Saturn'],
          correct: 1,
          explanation: 'Mercury = transacciones; Jupiter = expansión'
        },
        {
          q: 'Negocio durabilidad?',
          options: ['Moon mutable', 'Moon signo fijo solidez', 'Moon rápida', 'No importa'],
          correct: 1,
          explanation: 'Fijo = duración'
        },
        {
          q: '¿Cirugía fase Moon?',
          options: ['Decreciente', 'Creciente para curación', 'Llena', 'Irrelevante'],
          correct: 1,
          explanation: 'Creciente = construcción curación'
        },
        {
          q: 'Cirugía evitar?',
          options: ['Venus', 'Mars hemorragia infección', 'Jupiter', 'Mercury'],
          correct: 1,
          explanation: 'Mars = sangre cirugía'
        },
        {
          q: '¿Saturn útil?',
          options: ['Evitar siempre', 'Útil restricción limitación complicaciones', 'Débil', 'Normal'],
          correct: 1,
          explanation: 'Saturn = protección restricción'
        },
        {
          q: '¿Reglas rígidas?',
          options: ['Absoluta', 'Directrices flexibles contexto actividad', 'Decorativa', 'Sin importancia'],
          correct: 1,
          explanation: 'Principios guía no dogma'
        }
      ]
    },

    'M11_aplicaciones': {
      id: 'M11_aplicaciones',
      moduleId: 'M11',
      title: 'Aplicaciones prácticas',
      titleEn: 'Practical Applications',
      level: 'profesional',
      prerequisites: ['M11_reglas'],
      content: {
        summary: 'Matrimonio ceremonia, negocio apertura tienda/oficina firma contratos, cirugía scheduling hora exacta, mudanza cambio residencia, contrato firma documentos legales. Cada requiere timing preciso.',
        keyPoints: [
          'Matrimonio hora ceremonia voto votos',
          'Negocio apertura tienda firma contrato cliente',
          'Cirugía scheduling exacto corte anestesia',
          'Mudanza entrada primera casa nueva',
          'Contrato firma documento fecha exacta',
          'Lanzamiento producto fecha hora publicidad',
          'Entrevista laboral hora cita',
          'Cuidado timing exacto segundos minutos'
        ]
      },
      questions: [
        {
          q: '¿Matrimonio?',
          options: ['Fecha solo', 'Hora exacta ceremonia votos voto', 'Día solo', 'Aproximado'],
          correct: 1,
          explanation: 'Matrimonio = hora voto'
        },
        {
          q: '¿Negocio apertura?',
          options: ['Primer día solo', 'Hora exacta puerta abre primeras transacciones', 'Semana', 'Aproximado'],
          correct: 1,
          explanation: 'Negocio = hora primer transacción'
        },
        {
          q: '¿Cirugía hora?',
          options: ['Día solo', 'Hora exacta corte anestesia inicio operación', 'Mañana', 'Aproximado'],
          correct: 1,
          explanation: 'Cirugía = hora corte'
        },
        {
          q: '¿Mudanza?',
          options: ['Día solo', 'Hora entrada primera casa nueva', 'Semana', 'Aproximado'],
          correct: 1,
          explanation: 'Mudanza = hora entrada'
        },
        {
          q: '¿Contrato?',
          options: ['Fecha solo', 'Hora exacta firma documento acuerdo', 'Mes', 'Aproximado'],
          correct: 1,
          explanation: 'Contrato = hora firma'
        },
        {
          q: '¿Lanzamiento producto?',
          options: ['Día solo', 'Hora exacta publicidad primera venta', 'Mes', 'Aproximado'],
          correct: 1,
          explanation: 'Lanzamiento = hora publicidad'
        },
        {
          q: '¿Entrevista laboral?',
          options: ['Día solo', 'Hora cita exacta inicio entrevista', 'Semana', 'Aproximado'],
          correct: 1,
          explanation: 'Entrevista = hora cita'
        },
        {
          q: '¿Precisión?',
          options: ['Aproximada', 'Exacta segundos minutos cambios carta', 'Horas', 'Días'],
          correct: 1,
          explanation: 'Precisión = calidad electiva'
        }
      ]
    },

    'M11_vs_horaria': {
      id: 'M11_vs_horaria',
      moduleId: 'M11',
      title: 'Diferencias electiva vs horaria',
      titleEn: 'Electional vs Horary Differences',
      level: 'avanzado',
      prerequisites: ['M11_principios', 'M10_fundamentos'],
      content: {
        summary: 'Horaria pregunta sí-no momento pregunta hecha. Electiva elige mejor momento comenzar. Horaria interpreta pasado presente electiva proyecta futuro. Técnicas herramientas opuestas.',
        keyPoints: [
          'Horaria pregunta sí-no hecha',
          'Electiva elegir momento futuro',
          'Horaria interpreta momento pregunta',
          'Electiva crea carta favorable',
          'Horaria análisis carta existente',
          'Electiva manipulación timing',
          'Horaria responde específica pregunta',
          'Electiva optimiza potencial evento futuro'
        ]
      },
      questions: [
        {
          q: '¿Horaria pregunta?',
          options: ['Presente', 'Sí-no momento pregunta hecha', 'Futuro', 'Pasado solo'],
          correct: 1,
          explanation: 'Horaria = pregunta específica'
        },
        {
          q: '¿Electiva?',
          options: ['Interpretar', 'Elegir mejor momento comenzar futuro', 'Pregunta', 'Pasado'],
          correct: 1,
          explanation: 'Electiva = timing futuro'
        },
        {
          q: '¿Horaria tipo?',
          options: ['Creativa', 'Interpretativa carta existente análisis', 'Manipulativa', 'Predictiva'],
          correct: 1,
          explanation: 'Horaria = análisis'
        },
        {
          q: '¿Electiva tipo?',
          options: ['Interpretativa', 'Creativa elección óptima', 'Analítica', 'Reactiva'],
          correct: 1,
          explanation: 'Electiva = selección'
        },
        {
          q: '¿Herramientas?',
          options: ['Iguales', 'Diferentes técnicas según tipo', 'Opuestas', 'Sin relación'],
          correct: 1,
          explanation: 'Cada técnica = herramientas propias'
        },
        {
          q: '¿Horaria significadores?',
          options: ['Irrelevantes', 'Clave para juzgar pregunta', 'Opcionales', 'Sin importancia'],
          correct: 1,
          explanation: 'Significadores = esencia horaria'
        },
        {
          q: '¿Electiva significadores?',
          options: ['Principales', 'Importante pero enfoque timing fase Moon', 'Sin efecto', 'Opcional'],
          correct: 1,
          explanation: 'Electiva = Moon timing'
        },
        {
          q: '¿Usar ambas?',
          options: ['No relacionadas', 'Sí complementarias astrología completa', 'Opuestas', 'Una sola'],
          correct: 1,
          explanation: 'Ambas = herramientas profesional'
        }
      ]
    },

    // ===== MODULE 12: Astrología Mundana =====
    'M12_fundamentos': {
      id: 'M12_fundamentos',
      moduleId: 'M12',
      title: 'Fundamentos de mundana',
      titleEn: 'Fundamentals of Mundane Astrology',
      level: 'avanzado',
      prerequisites: ['M8_transitos_lentos'],
      content: {
        summary: 'Astrología mundana aplica astrología a naciones eventos mundiales. Levanta carta países, interpreta tránsitos ciclos mayores mundiales. Predice eventos políticos económicos sociales.',
        keyPoints: [
          'Mundana = astrología naciones eventos sociales',
          'Carta país independencia ingreso',
          'Tránsitos planetas lentos eventos mundiales',
          'Ciclos mayores Jupiter-Saturn cambios políticos',
          'Eclipses mundana impacto eventos importantes',
          'Equinoccios solsticios ängra mundana anual',
          'Eje Nodo importante mundana mundial',
          'Geodesia ubicación cartas por latitud'
        ]
      },
      questions: [
        {
          q: '¿Mundana?',
          options: ['Astrología personal', 'Astrología naciones eventos sociales', 'Horaria', 'Electiva'],
          correct: 1,
          explanation: 'Mundana = social política'
        },
        {
          q: '¿Carta país?',
          options: ['Nacimiento líder', 'Independencia ingreso fundación', 'Elecciones', 'Random'],
          correct: 1,
          explanation: 'Carta país = independencia'
        },
        {
          q: '¿Tránsitos lentos?',
          options: ['Personal solo', 'Generacionales eventos mundiales', 'Sin efecto', 'Débil'],
          correct: 1,
          explanation: 'Lentos = sociales'
        },
        {
          q: 'Jupiter-Saturn?',
          options: ['Sin efecto', 'Ciclo 20 años cambios políticos económicos', 'Personal', 'Débil'],
          correct: 1,
          explanation: 'J-S ciclo = eras'
        },
        {
          q: '¿Eclipses mundana?',
          options: ['Sin efecto', 'Importante impacto eventos mundiales', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Eclipses = eventos importantes'
        },
        {
          q: '¿Equinoccios?',
          options: ['Sin importancia', 'Ingress anual tema político economía año', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Ingress = tema anual'
        },
        {
          q: '¿Eje Nodo?',
          options: ['Sin efecto', 'Importante cara destino mundo', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Nodos mundana = destino colectivo'
        },
        {
          q: '¿Geodesia?',
          options: ['Sin importancia', 'Ubicación cartas por latitud geografía', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Geodesia = lugar geografía'
        }
      ]
    },

    'M12_ciclos_mayores': {
      id: 'M12_ciclos_mayores',
      moduleId: 'M12',
      title: 'Ciclos planetarios mayores',
      titleEn: 'Major Planetary Cycles',
      level: 'avanzado',
      prerequisites: ['M12_fundamentos'],
      content: {
        summary: 'Jupiter-Saturn 20 años grandes mutaciones, Uranus-Pluto revolución generacional ~138 años, Neptune-Pluto ~492 años civilizatorio. Ciclos estructuran eras políticas económicas.',
        keyPoints: [
          'Jupiter-Saturn 20 años ciclo conjunción',
          'Trígonos sextiles crisis cuadratura crisis',
          'Grandes mutaciones cambios política economía',
          'Uranus-Pluto ~138 años revolución generacional',
          'Conjunción Uranus-Pluto cambios radicales',
          'Neptune-Pluto ~492 años ciclo civilizatorio',
          'Ciclos definen eras históricas movimientos',
          'Alineaciones planetarias causan eventos mundiales'
        ]
      },
      questions: [
        {
          q: 'Jupiter-Saturn ciclo?',
          options: ['12 años', '20 años conjunción política', '30 años', '40 años'],
          correct: 1,
          explanation: 'J-S ciclo = 20 años'
        },
        {
          q: '¿Gran mutación?',
          options: ['Sin efecto', 'Cambios políticos económicos mayores J-S', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Gran mutación = transformación'
        },
        {
          q: 'Cuadratura J-S?',
          options: ['Armonía', 'Crisis tensión política', 'Fácil', 'Débil'],
          correct: 1,
          explanation: 'Cuadratura = fricción crisis'
        },
        {
          q: 'Uranus-Pluto ciclo?',
          options: ['80 años', '~138 años revolución generacional', '165 años', '248 años'],
          correct: 1,
          explanation: 'U-P ciclo = 138 años generacional'
        },
        {
          q: '¿Conjunción U-P?',
          options: ['Sin efecto', 'Cambios radicales revolución generacional', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Conjunción U-P = revolución'
        },
        {
          q: 'Neptune-Pluto ciclo?',
          options: ['165 años', '248 años', '~492 años civilizatorio', '600 años'],
          correct: 2,
          explanation: 'N-P ciclo = civilizatorio'
        },
        {
          q: '¿Ciclos definen?',
          options: ['Nada', 'Eras históricas movimientos culturales', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Ciclos = estructura historia'
        },
        {
          q: '¿Alineaciones?',
          options: ['Sin efecto', 'Causantes eventos mundiales cambios', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Alineaciones = catalizadores mundiales'
        }
      ]
    },

    'M12_eclipses_mundana': {
      id: 'M12_eclipses_mundana',
      moduleId: 'M12',
      title: 'Eclipses en mundana',
      titleEn: 'Eclipses in Mundane Astrology',
      level: 'avanzado',
      prerequisites: ['M12_fundamentos', 'M8_eclipses_predictivos'],
      content: {
        summary: 'Eclipses en carta país o eje Nodo predicen eventos importantes. Eclipses en eje mundo global ~6 meses después evento. Saros ciclos eclipse repiten tema.',
        keyPoints: [
          'Eclipses en carta país predicen eventos',
          'Eje Nodo ecuador mundial astrocartografía',
          'Eclipse eje Nodo = evento importante global',
          '~6 meses después eclipse manifestación evento',
          'Saros ciclos eclipse comparten tema similar',
          'Lunar vs solar diferente internó-externo',
          'Eclipses Casa 10 carrera política gobierno',
          'Prenatal eclipse importante para país destino'
        ]
      },
      questions: [
        {
          q: '¿Eclipses país?',
          options: ['Sin efecto', 'Predicen eventos importantes', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Eclipses = activadores eventos'
        },
        {
          q: '¿Eje mundial?',
          options: ['Random', 'Eje Nodo ecuador mundial geodesia', 'Latitud', 'Longitud'],
          correct: 1,
          explanation: 'Eje Nodo = mundial'
        },
        {
          q: 'Eclipse eje Nodo?',
          options: ['Sin efecto', 'Muy importante evento global', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Eje Nodo = destino mundial'
        },
        {
          q: '¿Timing manifestación?',
          options: ['Inmediato', '~6 meses después eclipse', 'Años', 'Nunca'],
          correct: 1,
          explanation: 'Eclipse precede evento 6 meses'
        },
        {
          q: '¿Saros ciclos?',
          options: ['Sin relación', 'Comparten tema similar repiten', 'Opuesto', 'Random'],
          correct: 1,
          explanation: 'Saros = tema consistente'
        },
        {
          q: 'Lunar vs solar?',
          options: ['Igual', 'Lunar interno social solar externo político', 'Opuesto', 'Sin diferencia'],
          correct: 1,
          explanation: 'Lunar=interno solar=externo'
        },
        {
          q: 'Eclipse casa 10?',
          options: ['Sin efecto', 'Carrera política gobierno liderazgo', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Casa 10 = poder público'
        },
        {
          q: '¿Prenatal eclipse país?',
          options: ['Sin importancia', 'Muy importante tema destino país', 'Débil', 'Random'],
          correct: 1,
          explanation: 'Prenatal = asunto vida'
        }
      ]
    },

    'M12_cartas_paises': {
      id: 'M12_cartas_paises',
      moduleId: 'M12',
      title: 'Cartas de países',
      titleEn: 'National Charts',
      level: 'profesional',
      prerequisites: ['M12_ciclos_mayores'],
      content: {
        summary: 'Carta independencia país fundamental. Carta ingreso similar. Carta constitución. Cada levantada momento formal fecha hora exacta. Tránsitos a chart país predicen eventos años.',
        keyPoints: [
          'Carta independencia declaración día hora',
          'Carta ingreso entrada Aries punto vernal anual',
          'Carta constitución ratificación adoptada',
          'Tránsitos a ASC DESC MC IC cardinales',
          'Progresiones país ciclos gobierno',
          'Nodos transitar ASC MC cambio destino',
          'Saturn retorno país ciclos políticos 30 años',
          'Revolución solar país temas año gobierno'
        ]
      },
      questions: [
        {
          q: '¿Independencia carta?',
          options: ['Constitución', 'Momento declaración independencia fecha hora', 'Ingreso', 'Fundación'],
          correct: 1,
          explanation: 'Independencia = natividad país'
        },
        {
          q: '¿Ingreso carta?',
          options: ['Independencia', 'Entrada Aries anual temas año', 'Constitución', 'Random'],
          correct: 1,
          explanation: 'Ingreso = carta anual país'
        },
        {
          q: '¿Constitución?',
          options: ['Independencia', 'Ratificación adopción fecha hora', 'Ingreso', 'Random'],
          correct: 1,
          explanation: 'Constitución = ley fundamental'
        },
        {
          q: '¿Tránsitos ángulos?',
          options: ['Sin efecto', 'ASC DESC MC IC predicen eventos cardinales', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Ángulos = eventos importantes'
        },
        {
          q: '¿Progresiones país?',
          options: ['Sin efecto', 'Ciclos gobierno cambios internos', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Progresiones = desarrollo interno'
        },
        {
          q: 'Nodos transitar ASC?',
          options: ['Sin efecto', 'Cambio destino nación identidad', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Nodos = destino kármico'
        },
        {
          q: 'Saturn retorno país?',
          options: ['Sin efecto', 'Ciclo 30 años político madurez', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Saturn ciclo = 30 años'
        },
        {
          q: '¿RS país?',
          options: ['Sin efecto', 'Temas año gobierno dirección', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'RS = carta anual'
        }
      ]
    },

    'M12_eras': {
      id: 'M12_eras',
      moduleId: 'M12',
      title: 'Las eras astrológicas',
      titleEn: 'Astrological Ages',
      level: 'intermedio',
      prerequisites: ['M1_tropical_sideral'],
      content: {
        summary: 'Era Piscis ~0-2150 d.C. espiritualidad religiosos. Era Acuario ~2150 d.C. tecnología humanitario. Cada era ~2150 años precesión 1°/72 años. Cambio de era influye cultura sociedad.',
        keyPoints: [
          'Signo precesional ~2150 años duración',
          'Era Aries ~2150 a.C. militarismo conquista',
          'Era Piscis ~0 d.C. cristianismo religión',
          'Era Acuario ~2150 d.C. tecnología revolución',
          'Transición gradual 1° cada 72 años',
          'Cusp era ~200 años influencia ambas',
          'Cambio era transformación cultura sociedad',
          'Hipótesis astrológica era actual 2024'
        ]
      },
      questions: [
        {
          q: '¿Duración era?',
          options: ['500 años', '~2150 años precesional', '1000 años', '5000 años'],
          correct: 1,
          explanation: 'Era = signo precesional'
        },
        {
          q: '¿Era Piscis inicio?',
          options: ['500 a.C.', '~0 d.C. cristianismo religión', '1000 d.C.', '500 d.C.'],
          correct: 1,
          explanation: 'Piscis = espiritualidad'
        },
        {
          q: '¿Era Acuario inicio?',
          options: ['1900 d.C.', '~2150 d.C. tecnología humanitario', '2050 d.C.', 'Nunca'],
          correct: 1,
          explanation: 'Acuario = futuro'
        },
        {
          q: 'Era Aries?',
          options: ['No existió', '~2150 a.C. militarismo conquista', '0 d.C.', '1000 d.C.'],
          correct: 1,
          explanation: 'Aries = guerra conquista'
        },
        {
          q: '¿Transición?',
          options: ['Inmediata', 'Gradual 1° cada 72 años', 'Sin cambio', 'Aleatoria'],
          correct: 1,
          explanation: 'Transición = 72 años por grado'
        },
        {
          q: '¿Cusp era?',
          options: ['Sin efecto', '~200 años influencia ambas eras', 'Débil', 'Random'],
          correct: 1,
          explanation: 'Cusp = transición overlapping'
        },
        {
          q: '¿Influencia cultura?',
          options: ['Superstición', 'Cambio era transforma cultura sociedad', 'Sin efecto', 'Débil'],
          correct: 1,
          explanation: 'Era = contexto cultural'
        },
        {
          q: '¿Hipótesis actual?',
          options: ['Piscis definitivo', 'Transición Piscis-Acuario 2024 debate', 'Acuario completo', 'Aries'],
          correct: 1,
          explanation: 'Actual = cusp Piscis-Acuario'
        }
      ]
    },

    'M12_ciclos_civilizatorios': {
      id: 'M12_ciclos_civilizatorios',
      moduleId: 'M12',
      title: 'Ciclos civilizatorios',
      titleEn: 'Civilizational Cycles',
      level: 'profesional',
      prerequisites: ['M12_ciclos_mayores'],
      content: {
        summary: 'Neptune-Pluto ciclo ~492 años define eras civilizatorias. Conjunción grande transformación. Uranus-Pluto ~138 años revolución generacional. Ciclos anidan jerárquicamente eras civilizatorias.',
        keyPoints: [
          'Neptune-Pluto ~492 años ciclo civilizatorio',
          'Conjunción grandes transformaciones culturales',
          'Uranus-Pluto ~138 años generacional',
          'Jupiter-Saturn ~20 años político-económico',
          'Ciclos anidan jerárquicamente',
          'Sincronización ciclos mayores eventos mundiales',
          'Alineaciones planetarias causan civilización change',
          'Historia estructura patrones astrológicos recurrentes'
        ]
      },
      questions: [
        {
          q: 'Neptune-Pluto ciclo?',
          options: ['138 años', '~492 años civilizatorio', '248 años', '600 años'],
          correct: 1,
          explanation: 'N-P = civilizatorio'
        },
        {
          q: '¿Conjunción N-P?',
          options: ['Sin efecto', 'Transformación cultural era civilizatoria', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Conjunción = nuevo ciclo'
        },
        {
          q: 'Uranus-Pluto?',
          options: ['20 años', '~138 años generacional', '248 años', '492 años'],
          correct: 1,
          explanation: 'U-P = generacional'
        },
        {
          q: '¿Ciclos anidan?',
          options: ['Independientes', 'Jerárquicamente eras ciclos anidados', 'Opuestos', 'Random'],
          correct: 1,
          explanation: 'Ciclos = estructura jerárquica'
        },
        {
          q: '¿Sincronización?',
          options: ['Sin relación', 'Ciclos mayores sincronizados eventos mundiales', 'Débil', 'Random'],
          correct: 1,
          explanation: 'Sincronización = conexión'
        },
        {
          q: '¿Alineaciones planeta?',
          options: ['Sin efecto', 'Causantes transformación civilización', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Alineaciones = catalizadores'
        },
        {
          q: '¿Historia astrología?',
          options: ['Sin relación', 'Historia estructura patrones astrológicos', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Historia = ciclos recurrentes'
        },
        {
          q: '¿Predicción futura?',
          options: ['Imposible', 'Ciclos sugieren tendencias transformaciones futuras', 'Débil', 'Personal'],
          correct: 1,
          explanation: 'Ciclos = patrón futuro'
        }
      ]
    }
  });

  console.log('Knowledge Graph Part 2 (M6-M12) loaded successfully');
})();
