document.addEventListener("DOMContentLoaded", function() {
    const enableBtn = document.getElementById("enable-btn");
    const disableBtn = document.getElementById("disable-btn");
    const statusText = document.getElementById("extension-status");

    // Load saved state
    chrome.storage.local.get("interceptorEnabled", function(data) {
        if (data.interceptorEnabled === false) {
            statusText.textContent = "Disabled";
            statusText.style.color = "red";
        } else {
            statusText.textContent = "Enabled";
            statusText.style.color = "green";
        }
    });

    // Enable Interceptor
    enableBtn.addEventListener("click", function() {
        chrome.storage.local.set({ "interceptorEnabled": true }, function() {
            statusText.textContent = "Enabled";
            statusText.style.color = "green";
            chrome.runtime.sendMessage({ type: "ENABLE_INTERCEPTOR" });
        });
    });

    // Disable Interceptor
    disableBtn.addEventListener("click", function() {
        chrome.storage.local.set({ "interceptorEnabled": false }, function() {
            statusText.textContent = "Disabled";
            statusText.style.color = "red";
            chrome.runtime.sendMessage({ type: "DISABLE_INTERCEPTOR" });
        });
    });

    // Display last captured form payload
    chrome.storage.local.get("lastPayload", function(data) {
        let storedPayload = data.lastPayload ? JSON.parse(data.lastPayload) : {};
        document.getElementById("payload").textContent =
            JSON.stringify(storedPayload, null, 2) || "No data captured.";
    });
});
