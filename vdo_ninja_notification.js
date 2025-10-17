// ==UserScript==
// @name         Chat Notification and Read Aloud
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Plays a notification bell on new messages and reads them aloud (with toggle setting)
// @author       Upamanyu Das
// @match        https://vdo.ninja/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    // Initialize read aloud setting (default: true)
    let readAloudEnabled = GM_getValue('readAloudEnabled', true);

    // Toggle function
    function toggleReadAloud() {
        readAloudEnabled = !readAloudEnabled;
        GM_setValue('readAloudEnabled', readAloudEnabled);
        alert(`Read Aloud is now ${readAloudEnabled ? 'enabled' : 'disabled'}.`);
    }

    // Register menu command with fixed text
    GM_registerMenuCommand('Toggle Read Aloud', toggleReadAloud);

    // Find the overlay div
    const overlayDiv = document.getElementById('overlayMsgs');
    if (!overlayDiv) {
        console.log('Overlay div not found');
        return;
    }

    // Preload notification bell sound
    const bellSound = new Audio('https://www.myinstants.com/media/sounds/fears-to-fathom-notification-sound.mp3');

    // Set up MutationObserver to detect new spans (messages)
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach((node) => {
                    if (node.tagName && node.tagName.toUpperCase() === 'SPAN') {
                        // Play bell sound
                        bellSound.play().catch(error => console.log('Error playing sound:', error));

                        // Extract sender and message
                        const nameSpan = node.querySelector('.chat_director.chat_name');
                        const sender = nameSpan ? nameSpan.textContent.trim() : 'Unknown';

                        // Extract message content (after the colon)
                        const fullText = node.innerText || node.textContent;
                        const colonIndex = fullText.indexOf(':');
                        let message = '';
                        if (colonIndex !== -1) {
                            message = fullText.substring(colonIndex + 1).trim();
                        } else {
                            message = fullText.trim();
                        }

                        // Delay read aloud by 3 seconds after starting the bell sound
                        setTimeout(() => {
                            if (readAloudEnabled) {
                                const utterance = new SpeechSynthesisUtterance(`${sender} says: ${message}`);
                                speechSynthesis.speak(utterance);
                            }
                        }, 3000);
                    }
                });
            }
        });
    });

    // Observe changes to child nodes
    observer.observe(overlayDiv, { childList: true });
})();
