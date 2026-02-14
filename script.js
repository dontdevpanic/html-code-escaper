/**
 * HTML Escape Tool
 * Converts HTML special characters to their entity equivalents
 * Built with modern JavaScript and Clipboard API
 */

document.querySelectorAll('.html-escaper').forEach(block => {
    const input = block.querySelector('.code-input');
    const output = block.querySelector('.code-output');
    const escapeBtn = block.querySelector('.escape-btn');
    const unescapeBtn = block.querySelector('.unescape-btn');
    const copyBtn = block.querySelector('.copy-btn');
    const clearBtn = block.querySelector('.clear-btn');
    const messageElement = block.querySelector('.escape-message');

    // Escape level messages (null = no message)
    const escapeMessages = [
        null,  // Level 1: no message
        "💡 Nochmal? Na gut! 🤔",
        "😅 Okay... schon 3× escaped!",
        "🙃 Echt jetzt? Das wird langsam wild!",
        "🤯 STOPP! Mehr macht keinen Sinn! Maximum erreicht."
    ];

    /**
     * Count how many times the text has been escaped
     * by counting &amp; sequences
     */
    function getEscapeLevel(str) {
        if (!str) return 0;
        const ampCount = (str.match(/&amp;/g) || []).length;
        const ltCount = (str.match(/&lt;/g) || []).length;
        // Use the higher count as the escape level indicator
        return Math.max(ampCount, ltCount);
    }

    /**
     * Show a temporary message banner
     */
    function showMessage(text) {
        if (!text || !messageElement) return;

        messageElement.textContent = text;
        messageElement.classList.add('show');

        // Auto-hide after 3 seconds
        setTimeout(() => {
            messageElement.classList.remove('show');
        }, 3000);
    }

    /**
     * Escapes HTML special characters
     * @param {string} str - The string to escape
     * @returns {string} - The escaped string
     */
    function escapeHTML(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    /**
     * Unescapes HTML entities back to characters
     * @param {string} str - The escaped string
     * @returns {string} - The unescaped string
     */
    function unescapeHTML(str) {
        return str
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&'); // Must be last!
    }

    /**
     * Copies text to clipboard using modern Clipboard API
     * Falls back to execCommand for older browsers
     * @param {string} text - The text to copy
     * @returns {Promise<boolean>} - Success status
     */
    async function copyToClipboard(text) {
        // Try modern Clipboard API first
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(text);
                return true;
            } catch (err) {
                console.warn('Clipboard API failed, falling back to execCommand:', err);
            }
        }

        // Fallback for older browsers
        try {
            output.select();
            const success = document.execCommand('copy');
            return success;
        } catch (err) {
            console.error('Copy failed:', err);
            return false;
        }
    }

    /**
     * Shows temporary feedback on button
     * @param {HTMLElement} button - The button element
     * @param {string} originalText - Text to restore after timeout
     * @param {string} feedbackText - Text to show during feedback
     */
    function showButtonFeedback(button, originalText, feedbackText) {
        const textElement = button.querySelector('.copy-text');

        button.classList.add('copied');
        textElement.textContent = feedbackText;

        setTimeout(() => {
            button.classList.remove('copied');
            textElement.textContent = originalText;
        }, 1500);
    }

    // Escape button click handler
    escapeBtn.addEventListener('click', () => {
        // Use output if it has content, otherwise use input
        const sourceText = output.value || input.value;

        // Check escape level BEFORE escaping
        const currentLevel = getEscapeLevel(sourceText);

        // Block at level 5 (already escaped 4 times)
        if (currentLevel >= 4) {
            showMessage(escapeMessages[4]); // "STOPP! Maximum erreicht"
            showButtonFeedback(escapeBtn, 'Escapen →', 'Maximum! 🤯');
            return; // Don't escape further
        }

        // Escape the text
        const escaped = escapeHTML(sourceText);
        output.value = escaped;
        output.focus();
        output.select();

        // Show message for levels 1-3
        if (currentLevel >= 1 && currentLevel < 4) {
            showMessage(escapeMessages[currentLevel]);
        }

        showButtonFeedback(escapeBtn, 'Escapen →', 'Fertig!');
    });

    // Unescape button click handler
    unescapeBtn.addEventListener('click', () => {
        // Use output if it has content, otherwise use input
        const sourceText = output.value || input.value;
        const unescaped = unescapeHTML(sourceText);
        output.value = unescaped;
        output.focus();
        output.select();

        showButtonFeedback(unescapeBtn, '← Unescapen', 'Fertig!');
    });

    // Copy button click handler
    copyBtn.addEventListener('click', async () => {
        if (!output.value) {
            return; // Nothing to copy
        }

        const success = await copyToClipboard(output.value);

        if (success) {
            showButtonFeedback(copyBtn, 'Kopieren', 'Kopiert!');
        } else {
            showButtonFeedback(copyBtn, 'Kopieren', 'Fehler!');
        }
    });

    // Clear button click handler
    clearBtn.addEventListener('click', () => {
        input.value = '';
        output.value = '';
        input.focus();

        showButtonFeedback(clearBtn, 'Löschen', 'Gelöscht!');
    });
});