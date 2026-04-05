/**
 * Learner Profile — Adaptive learning system for Astro Currents
 * Tracks knowledge mastery, learning style, and progress
 */
window.LearnerProfile = (function() {

  const STORAGE_KEY = 'astroCurrents_learnerProfile';
  const MASTERY_THRESHOLD = 0.7; // 70% to mark as "dominado"

  // Mastery levels
  const MASTERY = {
    NOT_EXPOSED: 'no_expuesto',
    EXPLORED: 'explorado',
    DEVELOPING: 'en_desarrollo',
    MASTERED: 'dominado',
    EXCELLENCE: 'maestria'
  };

  // Student levels based on total mastered nodes
  const STUDENT_LEVELS = [
    { id: 'principiante', label: 'Principiante', labelEn: 'Beginner', minNodes: 0, icon: '🌑' },
    { id: 'estudiante', label: 'Estudiante', labelEn: 'Student', minNodes: 15, icon: '🌒' },
    { id: 'intermedio', label: 'Intermedio', labelEn: 'Intermediate', minNodes: 40, icon: '🌓' },
    { id: 'avanzado', label: 'Avanzado', labelEn: 'Advanced', minNodes: 80, icon: '🌔' },
    { id: 'profesional', label: 'Astrólogo Profesional', labelEn: 'Professional Astrologer', minNodes: 120, icon: '🌕' }
  ];

  let _profile = null;

  // Default profile structure
  function _createDefaultProfile() {
    return {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),

      // Node mastery map: { nodeId: { level, score, lastInteraction, attempts, conversationCount } }
      mastery: {},

      // Learning style detection
      learningStyle: {
        prefersTheory: 0,        // vs practical (scale -1 to 1)
        prefersDetail: 0,        // vs overview (scale -1 to 1)
        prefersExamples: 0,      // preference for personal chart examples
        sessionLengthAvg: 0,     // average session length in messages
        questionDepth: 0,        // how deep their questions go (0-1)
        totalSessions: 0,
        totalMessages: 0
      },

      // Interaction history summary (NOT full chat - just topic tracking)
      topicHistory: [],  // [{nodeId, timestamp, type: 'conversation'|'quiz'|'practice'}]

      // Strengths and weaknesses detected
      strengths: [],   // [nodeId] - nodes where user excels
      weaknesses: [],  // [nodeId] - nodes where user struggles

      // Quiz results
      quizResults: [],  // [{nodeId, score, totalQuestions, timestamp}]

      // Achievements / milestones
      achievements: [], // [{id, title, timestamp}]

      // Stats
      stats: {
        totalStudyTimeMinutes: 0,
        longestStreak: 0,
        currentStreak: 0,
        lastStudyDate: null,
        quizzesTaken: 0,
        quizzesPassed: 0,
        nodesExplored: 0,
        nodesMastered: 0
      }
    };
  }

  // Load profile from localStorage
  function load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        _profile = JSON.parse(saved);
      } else {
        _profile = _createDefaultProfile();
        save();
      }
    } catch (e) {
      console.error('[LearnerProfile] Error loading:', e);
      _profile = _createDefaultProfile();
    }
    return _profile;
  }

  // Save profile to localStorage
  function save() {
    if (!_profile) return;
    _profile.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(_profile));
    } catch (e) {
      console.error('[LearnerProfile] Error saving:', e);
    }
  }

  // Get current profile
  function getProfile() {
    if (!_profile) load();
    return _profile;
  }

  // Get mastery level for a node
  function getNodeMastery(nodeId) {
    if (!_profile) load();
    return _profile.mastery[nodeId] || {
      level: MASTERY.NOT_EXPOSED,
      score: 0,
      lastInteraction: null,
      attempts: 0,
      conversationCount: 0
    };
  }

  // Record that user explored a topic in conversation
  function recordExploration(nodeId) {
    if (!_profile) load();

    if (!_profile.mastery[nodeId]) {
      _profile.mastery[nodeId] = {
        level: MASTERY.EXPLORED,
        score: 0,
        lastInteraction: new Date().toISOString(),
        attempts: 0,
        conversationCount: 1
      };
      _profile.stats.nodesExplored++;
    } else {
      const node = _profile.mastery[nodeId];
      node.conversationCount++;
      node.lastInteraction = new Date().toISOString();
      if (node.level === MASTERY.NOT_EXPOSED) {
        node.level = MASTERY.EXPLORED;
        _profile.stats.nodesExplored++;
      }
    }

    _profile.topicHistory.push({
      nodeId,
      timestamp: new Date().toISOString(),
      type: 'conversation'
    });

    // Keep topic history manageable (last 500 entries)
    if (_profile.topicHistory.length > 500) {
      _profile.topicHistory = _profile.topicHistory.slice(-500);
    }

    save();
  }

  // Record quiz result
  function recordQuizResult(nodeId, score, totalQuestions) {
    if (!_profile) load();

    const pct = score / totalQuestions;

    if (!_profile.mastery[nodeId]) {
      _profile.mastery[nodeId] = {
        level: MASTERY.NOT_EXPOSED,
        score: 0,
        lastInteraction: null,
        attempts: 0,
        conversationCount: 0
      };
    }

    const node = _profile.mastery[nodeId];
    node.attempts++;
    node.score = Math.max(node.score, pct); // Keep best score
    node.lastInteraction = new Date().toISOString();

    // Update mastery level based on score
    if (pct >= 0.9) {
      node.level = MASTERY.EXCELLENCE;
      if (!_profile.strengths.includes(nodeId)) _profile.strengths.push(nodeId);
    } else if (pct >= MASTERY_THRESHOLD) {
      if (node.level !== MASTERY.EXCELLENCE) node.level = MASTERY.MASTERED;
    } else if (pct >= 0.4) {
      if (node.level !== MASTERY.MASTERED && node.level !== MASTERY.EXCELLENCE) {
        node.level = MASTERY.DEVELOPING;
      }
      if (!_profile.weaknesses.includes(nodeId) && pct < 0.5) {
        _profile.weaknesses.push(nodeId);
      }
    } else {
      if (!_profile.weaknesses.includes(nodeId)) _profile.weaknesses.push(nodeId);
      if (node.level !== MASTERY.MASTERED && node.level !== MASTERY.EXCELLENCE) {
        node.level = MASTERY.DEVELOPING;
      }
    }

    // Update stats
    _profile.stats.quizzesTaken++;
    if (pct >= MASTERY_THRESHOLD) _profile.stats.quizzesPassed++;
    _profile.stats.nodesMastered = Object.values(_profile.mastery)
      .filter(m => m.level === MASTERY.MASTERED || m.level === MASTERY.EXCELLENCE).length;

    _profile.quizResults.push({ nodeId, score, totalQuestions, pct, timestamp: new Date().toISOString() });

    // Keep quiz results manageable
    if (_profile.quizResults.length > 200) {
      _profile.quizResults = _profile.quizResults.slice(-200);
    }

    _profile.topicHistory.push({
      nodeId,
      timestamp: new Date().toISOString(),
      type: 'quiz'
    });

    save();

    // Check for achievements
    _checkAchievements();

    return { passed: pct >= MASTERY_THRESHOLD, pct, level: node.level };
  }

  // Get current student level
  function getStudentLevel() {
    if (!_profile) load();
    const mastered = _profile.stats.nodesMastered;
    let level = STUDENT_LEVELS[0];
    for (const l of STUDENT_LEVELS) {
      if (mastered >= l.minNodes) level = l;
    }
    return level;
  }

  // Get overall progress percentage
  function getOverallProgress() {
    if (!_profile) load();
    const graph = window.ASTRO_KNOWLEDGE_GRAPH;
    if (!graph) return 0;
    const totalNodes = Object.keys(graph.nodes).length;
    if (totalNodes === 0) return 0;
    return Math.round((_profile.stats.nodesMastered / totalNodes) * 100);
  }

  // Get module progress
  function getModuleProgress(moduleId) {
    if (!_profile) load();
    const graph = window.ASTRO_KNOWLEDGE_GRAPH;
    if (!graph) return { explored: 0, mastered: 0, total: 0, pct: 0 };

    const module = graph.modules.find(m => m.id === moduleId);
    if (!module) return { explored: 0, mastered: 0, total: 0, pct: 0 };

    let explored = 0, mastered = 0;
    for (const nodeId of module.nodeIds) {
      const m = _profile.mastery[nodeId];
      if (m) {
        if (m.level === MASTERY.MASTERED || m.level === MASTERY.EXCELLENCE) mastered++;
        if (m.level !== MASTERY.NOT_EXPOSED) explored++;
      }
    }

    return {
      explored,
      mastered,
      total: module.nodeIds.length,
      pct: Math.round((mastered / module.nodeIds.length) * 100)
    };
  }

  // Check if prerequisites for a node are met
  function arePrerequisitesMet(nodeId) {
    if (!_profile) load();
    const graph = window.ASTRO_KNOWLEDGE_GRAPH;
    if (!graph || !graph.nodes[nodeId]) return true;

    const node = graph.nodes[nodeId];
    if (!node.prerequisites || node.prerequisites.length === 0) return true;

    return node.prerequisites.every(preReqId => {
      const m = _profile.mastery[preReqId];
      return m && (m.level === MASTERY.MASTERED || m.level === MASTERY.EXCELLENCE);
    });
  }

  // Get missing prerequisites for a node
  function getMissingPrerequisites(nodeId) {
    if (!_profile) load();
    const graph = window.ASTRO_KNOWLEDGE_GRAPH;
    if (!graph || !graph.nodes[nodeId]) return [];

    const node = graph.nodes[nodeId];
    if (!node.prerequisites || node.prerequisites.length === 0) return [];

    return node.prerequisites.filter(preReqId => {
      const m = _profile.mastery[preReqId];
      return !m || (m.level !== MASTERY.MASTERED && m.level !== MASTERY.EXCELLENCE);
    });
  }

  // Get suggested next nodes to study
  function getSuggestedNextNodes(count = 5) {
    if (!_profile) load();
    const graph = window.ASTRO_KNOWLEDGE_GRAPH;
    if (!graph) return [];

    const suggestions = [];

    for (const [nodeId, node] of Object.entries(graph.nodes)) {
      const m = _profile.mastery[nodeId];

      // Skip already mastered nodes
      if (m && (m.level === MASTERY.MASTERED || m.level === MASTERY.EXCELLENCE)) continue;

      // Check if prerequisites are met
      if (!arePrerequisitesMet(nodeId)) continue;

      // Priority: developing > explored > not exposed
      let priority = 3;
      if (m && m.level === MASTERY.DEVELOPING) priority = 1; // Highest priority: almost there
      else if (m && m.level === MASTERY.EXPLORED) priority = 2; // Medium: already started

      // Boost priority for nodes that connect to user's interests
      const recentTopics = _profile.topicHistory.slice(-20).map(t => t.nodeId);
      const relatedToRecent = node.prerequisites?.some(p => recentTopics.includes(p));
      if (relatedToRecent) priority -= 0.5;

      suggestions.push({ nodeId, node, priority, mastery: m });
    }

    // Sort by priority (lower = better)
    suggestions.sort((a, b) => a.priority - b.priority);

    return suggestions.slice(0, count).map(s => ({
      nodeId: s.nodeId,
      title: s.node.title,
      moduleId: s.node.moduleId,
      level: s.node.level,
      currentMastery: s.mastery?.level || MASTERY.NOT_EXPOSED,
      reason: s.priority <= 1 ? 'casi_dominado' : s.priority <= 2 ? 'ya_explorado' : 'siguiente_natural'
    }));
  }

  // Should the tutor suggest a quiz for this node?
  function shouldSuggestQuiz(nodeId) {
    if (!_profile) load();
    const m = _profile.mastery[nodeId];
    if (!m) return false;

    // Suggest quiz if explored with enough conversations and never tested
    if (m.level === MASTERY.EXPLORED && m.conversationCount >= 3 && m.attempts === 0) {
      return true;
    }

    // Suggest retry if developing (failed before)
    if (m.level === MASTERY.DEVELOPING && m.attempts > 0) {
      // Wait at least 2 more conversations before suggesting retry
      const lastQuiz = _profile.quizResults
        .filter(q => q.nodeId === nodeId)
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];

      if (lastQuiz) {
        const convsSinceQuiz = _profile.topicHistory
          .filter(t => t.nodeId === nodeId && t.type === 'conversation' && new Date(t.timestamp) > new Date(lastQuiz.timestamp))
          .length;
        return convsSinceQuiz >= 2;
      }
    }

    return false;
  }

  // Generate a compact context string for the AI tutor system prompt
  function generateTutorContext() {
    if (!_profile) load();
    const graph = window.ASTRO_KNOWLEDGE_GRAPH;

    const level = getStudentLevel();
    const progress = getOverallProgress();
    const suggestions = getSuggestedNextNodes(3);

    // Mastered topics
    const mastered = Object.entries(_profile.mastery)
      .filter(([_, m]) => m.level === MASTERY.MASTERED || m.level === MASTERY.EXCELLENCE)
      .map(([id, _]) => graph?.nodes[id]?.title || id);

    // In-progress topics
    const inProgress = Object.entries(_profile.mastery)
      .filter(([_, m]) => m.level === MASTERY.EXPLORED || m.level === MASTERY.DEVELOPING)
      .map(([id, _]) => graph?.nodes[id]?.title || id);

    // Recent topics (last 5)
    const recent = _profile.topicHistory.slice(-5).map(t => graph?.nodes[t.nodeId]?.title || t.nodeId);

    let ctx = `\n--- PERFIL DEL ESTUDIANTE ---\n`;
    ctx += `Nivel: ${level.icon} ${level.label} (${progress}% progreso general)\n`;
    ctx += `Nodos dominados: ${_profile.stats.nodesMastered} de ${graph ? Object.keys(graph.nodes).length : '?'}\n`;
    ctx += `Quizzes: ${_profile.stats.quizzesPassed}/${_profile.stats.quizzesTaken} aprobados\n`;

    if (mastered.length > 0) {
      ctx += `\nTemas dominados: ${mastered.slice(-15).join(', ')}${mastered.length > 15 ? ` (y ${mastered.length - 15} más)` : ''}\n`;
    }

    if (inProgress.length > 0) {
      ctx += `Temas en progreso: ${inProgress.slice(-10).join(', ')}\n`;
    }

    if (recent.length > 0) {
      ctx += `Temas recientes: ${recent.join(', ')}\n`;
    }

    if (_profile.weaknesses.length > 0) {
      const weakNames = _profile.weaknesses.slice(-5).map(id => graph?.nodes[id]?.title || id);
      ctx += `Áreas a reforzar: ${weakNames.join(', ')}\n`;
    }

    if (suggestions.length > 0) {
      ctx += `Sugerencias de siguiente tema: ${suggestions.map(s => s.title).join(', ')}\n`;
    }

    // Learning style hints
    const ls = _profile.learningStyle;
    if (ls.totalMessages > 10) {
      const styleHints = [];
      if (ls.prefersTheory > 0.3) styleHints.push('prefiere teoría abstracta');
      if (ls.prefersTheory < -0.3) styleHints.push('prefiere ejemplos prácticos');
      if (ls.prefersDetail > 0.3) styleHints.push('le gusta profundizar en detalles');
      if (ls.prefersDetail < -0.3) styleHints.push('prefiere visiones generales');
      if (ls.prefersExamples > 0.5) styleHints.push('le gusta usar su propia carta natal');
      if (styleHints.length > 0) {
        ctx += `Estilo de aprendizaje: ${styleHints.join(', ')}\n`;
      }
    }

    ctx += `--- FIN PERFIL ---\n`;

    return ctx;
  }

  // Update learning style based on interaction
  function updateLearningStyle(opts = {}) {
    if (!_profile) load();
    const ls = _profile.learningStyle;
    const n = ls.totalMessages + 1;

    // Exponential moving average with decay
    const alpha = Math.min(0.1, 1 / n);

    if (opts.theory !== undefined) {
      ls.prefersTheory = ls.prefersTheory * (1 - alpha) + opts.theory * alpha;
    }
    if (opts.detail !== undefined) {
      ls.prefersDetail = ls.prefersDetail * (1 - alpha) + opts.detail * alpha;
    }
    if (opts.examples !== undefined) {
      ls.prefersExamples = ls.prefersExamples * (1 - alpha) + opts.examples * alpha;
    }

    ls.totalMessages = n;
    if (opts.newSession) ls.totalSessions++;

    save();
  }

  // Update study streak
  function updateStreak() {
    if (!_profile) load();
    const today = new Date().toISOString().split('T')[0];
    const last = _profile.stats.lastStudyDate;

    if (last === today) return; // Already studied today

    if (last) {
      const lastDate = new Date(last);
      const todayDate = new Date(today);
      const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        _profile.stats.currentStreak++;
      } else {
        _profile.stats.currentStreak = 1;
      }
    } else {
      _profile.stats.currentStreak = 1;
    }

    _profile.stats.longestStreak = Math.max(_profile.stats.longestStreak, _profile.stats.currentStreak);
    _profile.stats.lastStudyDate = today;
    save();
  }

  // Check and award achievements
  function _checkAchievements() {
    const checks = [
      { id: 'first_quiz', title: 'Primer Test', condition: () => _profile.stats.quizzesTaken >= 1 },
      { id: 'five_mastered', title: '5 Temas Dominados', condition: () => _profile.stats.nodesMastered >= 5 },
      { id: 'ten_mastered', title: '10 Temas Dominados', condition: () => _profile.stats.nodesMastered >= 10 },
      { id: 'twenty_mastered', title: '20 Temas Dominados', condition: () => _profile.stats.nodesMastered >= 20 },
      { id: 'fifty_mastered', title: '50 Temas Dominados', condition: () => _profile.stats.nodesMastered >= 50 },
      { id: 'hundred_mastered', title: '100 Temas Dominados', condition: () => _profile.stats.nodesMastered >= 100 },
      { id: 'perfect_quiz', title: 'Quiz Perfecto', condition: () => _profile.quizResults.some(q => q.pct === 1) },
      { id: 'week_streak', title: '7 Días Seguidos', condition: () => _profile.stats.currentStreak >= 7 },
      { id: 'month_streak', title: '30 Días Seguidos', condition: () => _profile.stats.currentStreak >= 30 },
      { id: 'module_complete', title: 'Primer Módulo Completo', condition: () => {
        const graph = window.ASTRO_KNOWLEDGE_GRAPH;
        if (!graph) return false;
        return graph.modules.some(mod => {
          return mod.nodeIds.every(nid => {
            const m = _profile.mastery[nid];
            return m && (m.level === MASTERY.MASTERED || m.level === MASTERY.EXCELLENCE);
          });
        });
      }},
      { id: 'student_level', title: 'Nivel Estudiante', condition: () => getStudentLevel().id === 'estudiante' },
      { id: 'intermediate_level', title: 'Nivel Intermedio', condition: () => getStudentLevel().id === 'intermedio' },
      { id: 'advanced_level', title: 'Nivel Avanzado', condition: () => getStudentLevel().id === 'avanzado' },
      { id: 'professional_level', title: 'Astrólogo Profesional', condition: () => getStudentLevel().id === 'profesional' },
    ];

    const existingIds = new Set(_profile.achievements.map(a => a.id));

    for (const check of checks) {
      if (!existingIds.has(check.id) && check.condition()) {
        _profile.achievements.push({
          id: check.id,
          title: check.title,
          timestamp: new Date().toISOString()
        });
      }
    }

    save();
  }

  // Reset profile (for testing)
  function reset() {
    _profile = _createDefaultProfile();
    save();
    return _profile;
  }

  // Migrate from old course progress (astroCurrents_astroCourse)
  function migrateFromOldCourse() {
    if (!_profile) load();

    try {
      const oldProgress = localStorage.getItem('astroCurrents_astroCourse');
      if (!oldProgress) return false;

      const old = JSON.parse(oldProgress);

      // Map old lesson IDs to new node IDs (approximate mapping)
      const lessonToNode = {
        'L1': ['M1_historia', 'M1_sincronicidad'],
        'L2': ['M1_astronomia', 'M2_zodiaco'],
        'L3': ['M2_elementos', 'M2_modalidades'],
        'L4': ['M3_luminarias'],
        'L5': ['M3_personales'],
        'L6': ['M3_sociales', 'M3_transpersonales'],
        'L7': ['M4_casas_1_6'],
        'L8': ['M4_casas_7_12'],
        'L9': ['M5_teoria', 'M5_conjuncion', 'M5_oposicion', 'M5_trigono_sextil'],
        'L10': ['M5_aplicativos'],
        'L11': ['M8_transitos_intro'],
        'L12': ['M8_retorno_solar'],
        'L13': ['M8_transitos_lentos'],
        'L14': ['M14_retrogrados_natal']
      };

      for (const [lessonId, nodeIds] of Object.entries(lessonToNode)) {
        if (old[lessonId]?.done) {
          for (const nodeId of nodeIds) {
            if (!_profile.mastery[nodeId] || _profile.mastery[nodeId].level === MASTERY.NOT_EXPOSED) {
              _profile.mastery[nodeId] = {
                level: MASTERY.EXPLORED,
                score: old[lessonId].score ? old[lessonId].score / 100 : 0,
                lastInteraction: old[lessonId].date || new Date().toISOString(),
                attempts: old[lessonId].score ? 1 : 0,
                conversationCount: 1
              };

              if (old[lessonId].score >= 70) {
                _profile.mastery[nodeId].level = MASTERY.MASTERED;
              } else if (old[lessonId].score >= 40) {
                _profile.mastery[nodeId].level = MASTERY.DEVELOPING;
              }
            }
          }
        }
      }

      // Update stats
      _profile.stats.nodesMastered = Object.values(_profile.mastery)
        .filter(m => m.level === MASTERY.MASTERED || m.level === MASTERY.EXCELLENCE).length;
      _profile.stats.nodesExplored = Object.values(_profile.mastery)
        .filter(m => m.level !== MASTERY.NOT_EXPOSED).length;

      save();
      return true;
    } catch (e) {
      console.error('[LearnerProfile] Migration error:', e);
      return false;
    }
  }

  // Public API
  return {
    load,
    save,
    getProfile,
    getNodeMastery,
    recordExploration,
    recordQuizResult,
    getStudentLevel,
    getOverallProgress,
    getModuleProgress,
    arePrerequisitesMet,
    getMissingPrerequisites,
    getSuggestedNextNodes,
    shouldSuggestQuiz,
    generateTutorContext,
    updateLearningStyle,
    updateStreak,
    reset,
    migrateFromOldCourse,
    MASTERY,
    STUDENT_LEVELS,
    MASTERY_THRESHOLD
  };
})();
