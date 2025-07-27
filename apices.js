// apices.js

// Save key
function saveKey() {
  const key = document.getElementById("apiKeyInput").value.trim();
  if (key.startsWith("sk-") && key.length > 10) {
    localStorage.setItem("wei_api_key", key);
    document.getElementById("status").textContent = "✅ API key saved.";
  } else {
    document.getElementById("status").textContent = "❌ Invalid key.";
  }
}

// Clear key
function clearKey() {
  localStorage.removeItem("wei_api_key");
  document.getElementById("status").textContent = "🗑️ API key cleared.";
}

// Get key for use elsewhere
function getWeiKey() {
  return localStorage.getItem("wei_api_key") || null;
}
