# HTML Escape Tool

**A simple yet powerful tool for escaping and unescaping HTML code**

When you want to display HTML code on a website without the browser interpreting it, you need to "escape" the special characters. This tool does it automatically for you - in both directions!

**[🇩🇪 Deutsche Version / German Version](README.de.md)**

## Live Demo

**[Try HTML Code Escaper](https://dontdevpanic.github.io/html-code-escaper/)**

## Features

- **Bidirectional** - Escape and unescape in both directions
- **Multi-level escaping** - Perfect for meta-tutorials (show HOW escaping works)
- **Bilingual** - Available in English and German with automatic language detection
- **One-click copy** - Copy result directly to clipboard
- **Dark mode** - Automatic system theme adaptation
- **Responsive** - Works perfectly on desktop, tablet, and mobile
- **Accessible** - Keyboard navigation and modern web standards
- **Privacy-friendly** - No tracking, no cookies, no analytics

## What Does It Do?

The tool converts HTML special characters to their entity equivalents - and back:

| Character | Becomes      |
|-----------|--------------|
| `<`       | `&lt;`       |
| `>`       | `&gt;`       |
| `&`       | `&amp;`      |
| `"`       | `&quot;`     |
| `'`       | `&#39;`      |

**Example:**
```html
Input:  Hello World
Output: <div class="container">Hello World</div>
```

**Multi-level escaping for tutorials:**
```html
                           → Original
<div>                   → 1× escaped
&lt;div&gt;           → 2× escaped (shows how escaping works!)
```

## Usage

### Use Online
Simply open the [Live Demo](https://dontdevpanic.github.io/html-code-escaper/) and get started!

### Run Locally

1. **Clone repository:**
   ```bash
   git clone https://github.com/dontdevpanic/html-code-escaper.git
   cd html-code-escaper
   ```

2. **Open in browser:**
   - Open `index.html` directly in your browser
   - Or use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server)
     npx http-server
     ```

3. **Done!** 🎉

## Customization

The tool is intentionally simple and easy to customize:

- **Change colors:** Edit CSS variables in `style.css` (`:root`)
- **Replace icons:** Swap SVGs in the `/img/` folder
- **Extend functionality:** Edit `script.js`

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern, responsive, with CSS Custom Properties
- **Vanilla JavaScript** - No dependencies, modern ES6+ features
- **Clipboard API** - Modern copy-to-clipboard (with fallback)

## Development

This project was developed with the support of AI tools. The code uses modern web standards and best practices:

- Modern Clipboard API (with fallback for older browsers)
- Bidirectional escape/unescape
- Multi-level escaping for meta-examples
- Responsive design
- Dark mode support via `prefers-color-scheme`
- WCAG-compliant contrasts

## Use Cases

- **Display code snippets** in blogs
- **Create tutorial documentation** (including meta-examples!)
- **Format Stack Overflow answers**
- **Show HTML examples** on websites
- **Prepare code reviews**

**Pro tip:** Use the Escape/Unescape buttons multiple times in a row to demonstrate how HTML entities work in tutorials!

## Feedback

Found a bug or have ideas? Feel free to open an [Issue](https://github.com/dontdevpanic/html-code-escaper/issues)!

## License

MIT License - feel free to use this in your own projects!

## Credits

Built by Bianca Schlich with ☕ and modern web technologies.

---

**Available in:** [🇬🇧 English](README.md) | [🇩🇪 Deutsch](README.de.md)