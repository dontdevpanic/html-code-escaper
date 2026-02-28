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

    // Detect language from HTML tag
    const lang = document.documentElement.lang || 'de';

    // Button labels based on language
    const labels = {
        de: {
            escape: 'Escapen',
            unescape: 'Unescapen',
            copy: 'Kopieren',
            clear: 'Löschen',
            done: 'Fertig!',
            copied: 'Kopiert!',
            cleared: 'Gelöscht!',
            error: 'Fehler!'
        },
        en: {
            escape: 'Escape',
            unescape: 'Unescape',
            copy: 'Copy',
            clear: 'Clear',
            done: 'Done!',
            copied: 'Copied!',
            cleared: 'Cleared!',
            error: 'Error!'
        }
    };

    // Get labels for current language (fallback to 'en')
    const t = labels[lang] || labels.en;

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
        const sourceText = output.value || input.value;
        const escaped = escapeHTML(sourceText);
        output.value = escaped;
        output.focus();
        output.select();

        showButtonFeedback(escapeBtn, t.escape, t.done);
    });

    // Unescape button
    unescapeBtn.addEventListener('click', () => {
        const sourceText = output.value || input.value;
        const unescaped = unescapeHTML(sourceText);
        output.value = unescaped;
        output.focus();
        output.select();

        showButtonFeedback(unescapeBtn, t.unescape, t.done);
    });

    // Copy button
    copyBtn.addEventListener('click', async () => {
        if (!output.value) return;
        const success = await copyToClipboard(output.value);

        if (success) {
            showButtonFeedback(copyBtn, t.copy, t.copied);
        } else {
            showButtonFeedback(copyBtn, t.copy, t.error);
        }
    });

    // Clear button
    clearBtn.addEventListener('click', () => {
        input.value = '';
        output.value = '';
        input.focus();

        showButtonFeedback(clearBtn, t.clear, t.cleared);
    });
});