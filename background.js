chrome.runtime.onInstalled.addListener(() => {
    console.log("🚀 Form Payload Interceptor is running!");

    // Listen for storage updates (when content.js captures form data)
    chrome.storage.onChanged.addListener((changes, namespace) => {
        if (changes.lastPayload) {
            try {
                let formData = JSON.parse(changes.lastPayload.newValue);
                console.log("📡 Captured Form Submission:", formData);
            } catch (error) {
                console.error("❌ Failed to parse stored payload:", error);
            }
        }
    });

    // Listen for messages from content.js
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === "FORM_SUBMITTED") {
            console.log("🔍 Form submitted with payload:", message.payload);
        }
    });
});
