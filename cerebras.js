// cerebras.js

const API_URL = 'https://api.cerebras.ai/v1/chat/completions';
const MODEL = 'gigagpt';

// This function sends a message to the Cerebras API and gets a response
export async function getWeiResponse(userMessage, apiKey) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: 'user', content: userMessage }]
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || '[No response]';
    return reply;
  } catch (error) {
    console.error('Cerebras API error:', error);
    return '[Error getting response from Wei]';
  }
}
