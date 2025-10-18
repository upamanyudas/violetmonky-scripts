// ==UserScript==
// @name         TWB VDO.Ninja Chat Notifier
// @icon         data:image/png;base64,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
// @namespace    https://github.com/upamanyudas/violetmonky-scripts
// @version      0.6
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
        return { sender, message };
    }

    // Function to handle new message
    function handleNewMessage(node, enabled) {
        bellSound.play().catch(error => console.log('Error playing sound:', error));
        if (enabled) {
            const { sender, message } = extractSenderMessage(node);
            setTimeout(() => {
                speechSynthesis.speak(new SpeechSynthesisUtterance(`${sender} says: ${message}`));
            }, 1500);
        }
    }

    // Set up MutationObserver for overlayMsgs
    new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node => {
                    if (node.tagName === 'SPAN') handleNewMessage(node, readAloudOverlayEnabled);
                });
            }
        });
    }).observe(overlayDiv, { childList: true });

    // Set up MutationObserver for chatBody
    if (chatBodyDiv) {
        let inMessageCount = document.querySelectorAll('#chatBody .inMessage').length;
        let lastRemoveTime = 0, lastRemovedCount = 0;

        new MutationObserver(mutations => {
            const currentCount = document.querySelectorAll('#chatBody .inMessage').length;
            const now = Date.now();
            let isNewMessage = false;

            if (currentCount > inMessageCount) {
                if (now - lastRemoveTime >= 200 || currentCount !== inMessageCount + lastRemovedCount) {
                    isNewMessage = true;
                }
            }

            if (currentCount < inMessageCount) {
                lastRemoveTime = now;
                lastRemovedCount = inMessageCount - currentCount;
            }

            if (isNewMessage) {
                mutations.forEach(mutation => {
                    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                        mutation.addedNodes.forEach(node => {
                            if (node.classList?.contains('inMessage')) handleNewMessage(node, readAloudChatBodyEnabled);
                        });
                    }
                });
            }

            inMessageCount = currentCount;
        }).observe(chatBodyDiv, { childList: true });
    }
})();
