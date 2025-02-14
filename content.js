document.addEventListener("submit", function(event) {
    let form = event.target;
    let formData = new FormData(form);
    let payload = {};

    // Convert FormData to a plain object
    formData.forEach((value, key) => {
        payload[key] = value;
    });

    console.log("🚀 Captured Form Payload:", payload);

    // Store the form data safely (JSON serializable)
    chrome.storage.local.set({ "lastPayload": JSON.stringify(payload) });

    // Optional: Send a message to background script (if needed)
    chrome.runtime.sendMessage({ type: "FORM_SUBMITTED", payload });
});
