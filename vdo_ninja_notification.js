// ==UserScript==
// @name         TWB VDO.Ninja Chat Notifier
// @icon         data:image/png;base64,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
// @namespace    https://github.com/upamanyudas/violetmonky-scripts
// @version      0.8
// @description  Plays a notification bell on new messages in overlayMsgs and chatBody, with read-aloud for both (separately toggleable)
// @author       Upamanyu Das
// @match        https://vdo.ninja/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    // Initialize read aloud settings
    let readAloudOverlayEnabled = GM_getValue('readAloudOverlayEnabled', true);
    let readAloudChatBodyEnabled = GM_getValue('readAloudChatBodyEnabled', false);
    let overlayMenuCommandId = null;
    let chatBodyMenuCommandId = null;

    // Function to update menu command
    function updateMenu(id, enabled, labelPrefix, toggleFn) {
        if (id) GM_unregisterMenuCommand(id);
        return GM_registerMenuCommand(`${enabled ? 'Disable' : 'Enable'} Read Aloud ${labelPrefix}`, toggleFn);
    }

    // Toggle function for overlay
    function toggleOverlayReadAloud() {
        readAloudOverlayEnabled = !readAloudOverlayEnabled;
        GM_setValue('readAloudOverlayEnabled', readAloudOverlayEnabled);
        overlayMenuCommandId = updateMenu(overlayMenuCommandId, readAloudOverlayEnabled, 'Chat overlay', toggleOverlayReadAloud);
    }

    // Toggle function for chatBody
    function toggleChatBodyReadAloud() {
        readAloudChatBodyEnabled = !readAloudChatBodyEnabled;
        GM_setValue('readAloudChatBodyEnabled', readAloudChatBodyEnabled);
        chatBodyMenuCommandId = updateMenu(chatBodyMenuCommandId, readAloudChatBodyEnabled, 'Chat box', toggleChatBodyReadAloud);
    }

    // Initial menu setups
    overlayMenuCommandId = updateMenu(null, readAloudOverlayEnabled, 'Chat overlay', toggleOverlayReadAloud);
    chatBodyMenuCommandId = updateMenu(null, readAloudChatBodyEnabled, 'Chat box', toggleChatBodyReadAloud);

    // Find the overlay div
    const overlayDiv = document.getElementById('overlayMsgs');
    if (!overlayDiv) return console.log('Overlay div not found');

    // Find the chat body div
    const chatBodyDiv = document.getElementById('chatBody');
    if (!chatBodyDiv) console.log('Chat body div not found');

    // Preload notification bell sound
    const bellSound = new Audio('https://www.myinstants.com/media/sounds/fears-to-fathom-notification-sound.mp3');

    // Function to extract sender and message
    function extractSenderMessage(node) {
        const nameSpan = node.querySelector('.chat_name');
        const sender = nameSpan ? nameSpan.textContent.trim() : 'Unknown';
        const fullText = node.innerText || node.textContent;
        const colonIndex = fullText.indexOf(':');
        let message = colonIndex !== -1 ? fullText.substring(colonIndex + 1).trim() : fullText.trim();
        message = message.replace(/\s*-\s*.+$/, '').trim(); // Remove timestamp
        return { sender, message, key: sender + ': ' + message };
    }

    // Function to read aloud message
    function readAloudMessage(sender, message) {
        setTimeout(() => {
            speechSynthesis.speak(new SpeechSynthesisUtterance(`${sender} says: ${message}`));
        }, 1500);
    }

    // Set up MutationObserver for overlayMsgs
    new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node => {
                    if (node.tagName === 'SPAN') {
                        bellSound.play().catch(error => console.log('Error playing sound:', error));
                        if (readAloudOverlayEnabled) {
                            const { sender, message } = extractSenderMessage(node);
                            readAloudMessage(sender, message);
                        }
                    }
                });
            }
        });
    }).observe(overlayDiv, { childList: true });

    // Set up MutationObserver for chatBody
    if (chatBodyDiv) {
        let inMessageCount = document.querySelectorAll('#chatBody .inMessage').length;
        let lastRemoveTime = 0;
        let lastRemovedCount = 0;

        new MutationObserver(mutations => {
            const currentCount = document.querySelectorAll('#chatBody .inMessage').length;
            const now = Date.now();
            let isNewMessage = false;

            if (currentCount > inMessageCount) {
                const timeSinceRemove = now - lastRemoveTime;
                if (!(timeSinceRemove < 5000 && currentCount === inMessageCount + lastRemovedCount)) {
                    isNewMessage = true;
                }
            }

            if (currentCount < inMessageCount) {
                lastRemoveTime = now;
                lastRemovedCount = inMessageCount - currentCount;
            }

            if (isNewMessage) {
                bellSound.play().catch(error => console.log('Error playing sound:', error));
                if (readAloudChatBodyEnabled) {
                    mutations.forEach(mutation => {
                        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                            mutation.addedNodes.forEach(node => {
                                if (node.classList?.contains('inMessage')) {
                                    const { sender, message } = extractSenderMessage(node);
                                    readAloudMessage(sender, message);
                                }
                            });
                        }
                    });
                }
            }

            inMessageCount = currentCount;
        }).observe(chatBodyDiv, { childList: true });
    }
})();
