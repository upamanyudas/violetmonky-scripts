// ==UserScript==
// @name         TWB VDO.Ninja Chat Notifier
// @icon         data:image/png;base64,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
// @namespace    https://github.com/upamanyudas/violetmonky-scripts
// @version      0.3
// @description  Plays a notification bell on new messages and reads them aloud (with toggle setting)
// @author       Upamanyu Das
// @match        https://vdo.ninja/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    // Initialize read aloud setting (default: true)
    let readAloudEnabled = GM_getValue('readAloudEnabled', true);
    let menuCommandId = null;

    // Function to update menu command
    function updateMenu() {
        // Unregister previous menu command if it exists
        if (menuCommandId) {
            try {
                GM_unregisterMenuCommand(menuCommandId);
            } catch (e) {
                console.log('Error unregistering menu command:', e);
            }
        }
        // Register new menu command with updated text
        menuCommandId = GM_registerMenuCommand(
            readAloudEnabled ? 'Disable Read Aloud' : 'Enable Read Aloud',
            toggleReadAloud
        );
    }

    // Toggle function
    function toggleReadAloud() {
        readAloudEnabled = !readAloudEnabled;
        GM_setValue('readAloudEnabled', readAloudEnabled);
        updateMenu(); // Update menu text immediately
    }

    // Initial menu setup
    updateMenu();

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
                        }, 2000);
                    }
                });
            }
        });
    });

    // Observe changes to child nodes
    observer.observe(overlayDiv, { childList: true });
})();
