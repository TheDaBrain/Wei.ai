await fetch('https://api.cerebras.net/v1/chat/completions', {
  method: 'POST', // HTTP method
  headers: {
    'Authorization': `Bearer ${API_KEY}`, // Secures the request using your API key
    'Content-Type': 'application/json'     // Tells the server to expect JSON
  },
  body: JSON.stringify({
    model: 'gigagpt', // The specific model to use (like gpt-4, llama-3, etc.)
    messages: [{ role: 'user', content: 'Hello!' }] // Chat-style input (role-based)
  })
});
