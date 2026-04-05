/**
 * AI Adapter — Model-agnostic AI interface for Moon Tracker
 * Supports: Gemini, OpenAI (GPT), Anthropic (Claude)
 */
window.AIAdapter = (function() {

  // Default config
  const DEFAULT_CONFIG = {
    provider: 'gemini',           // 'gemini' | 'openai' | 'anthropic'
    model: 'gemini-2.5-flash',    // model string
    temperature: 0.7,
    maxTokens: 8192,
    apiKey: null,                 // user's API key
    proxyUrl: null                // optional proxy URL
  };

  let _config = { ...DEFAULT_CONFIG };

  function configure(opts) {
    _config = { ...DEFAULT_CONFIG, ...opts };
  }

  function getConfig() {
    return { ..._config };
  }

  /**
   * Send a message to the AI and get a response
   * @param {string} systemPrompt - The system instruction
   * @param {Array} messages - Array of {role: 'user'|'assistant', content: string}
   * @param {Object} opts - Optional overrides for this call only
   * @returns {Promise<string>} The AI response text
   */
  async function chat(systemPrompt, messages, opts = {}) {
    const config = { ..._config, ...opts };

    switch (config.provider) {
      case 'gemini':
        return _chatGemini(systemPrompt, messages, config);
      case 'openai':
        return _chatOpenAI(systemPrompt, messages, config);
      case 'anthropic':
        return _chatAnthropic(systemPrompt, messages, config);
      default:
        throw new Error(`Unknown AI provider: ${config.provider}`);
    }
  }

  // Gemini implementation
  async function _chatGemini(systemPrompt, messages, config) {
    const apiKey = config.apiKey;
    const proxyUrl = config.proxyUrl;

    // Convert messages to Gemini format
    const contents = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const body = {
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents: contents,
      generationConfig: {
        temperature: config.temperature,
        maxOutputTokens: config.maxTokens
      }
    };

    let url;
    if (proxyUrl) {
      url = proxyUrl;
    } else {
      url = `https://generativelanguage.googleapis.com/v1beta/models/${config.model}:generateContent?key=${apiKey}`;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Gemini API error: ${response.status} - ${err}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  }

  // OpenAI implementation
  async function _chatOpenAI(systemPrompt, messages, config) {
    const apiKey = config.apiKey;
    const proxyUrl = config.proxyUrl;

    const body = {
      model: config.model,
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages.map(m => ({ role: m.role, content: m.content }))
      ],
      temperature: config.temperature,
      max_tokens: config.maxTokens
    };

    const url = proxyUrl || 'https://api.openai.com/v1/chat/completions';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`OpenAI API error: ${response.status} - ${err}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '';
  }

  // Anthropic implementation
  async function _chatAnthropic(systemPrompt, messages, config) {
    const apiKey = config.apiKey;
    const proxyUrl = config.proxyUrl;

    const body = {
      model: config.model,
      system: systemPrompt,
      messages: messages.map(m => ({ role: m.role, content: m.content })),
      max_tokens: config.maxTokens,
      temperature: config.temperature
    };

    const url = proxyUrl || 'https://api.anthropic.com/v1/messages';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Anthropic API error: ${response.status} - ${err}`);
    }

    const data = await response.json();
    return data.content?.[0]?.text || '';
  }

  // Public API
  return {
    configure,
    getConfig,
    chat,
    PROVIDERS: {
      GEMINI: 'gemini',
      OPENAI: 'openai',
      ANTHROPIC: 'anthropic'
    },
    MODELS: {
      GEMINI_FLASH: 'gemini-2.5-flash',
      GEMINI_PRO: 'gemini-2.5-pro',
      GPT4O: 'gpt-4o',
      GPT4O_MINI: 'gpt-4o-mini',
      CLAUDE_SONNET: 'claude-sonnet-4-20250514',
      CLAUDE_HAIKU: 'claude-haiku-4-20250414'
    }
  };
})();
