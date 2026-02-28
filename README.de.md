# HTML Escape Tool

**Ein simples, aber nützliches Tool zum Escapen von HTML-Code**

Wenn du HTML-Code auf einer Webseite darstellen möchtest, ohne dass der Browser ihn interpretiert, musst du die Sonderzeichen "escapen". Dieses Tool macht das automatisch für dich - in beide Richtungen.


## Live Demo

**[HTML Escaper ausprobieren](https://dontdevpanic.github.io/html-code-escaper/)**

## Features

- **Bidirektional** - Escape und Unescape in beide Richtungen
- **Mehrfach-Escapen** - Perfekt für Meta-Tutorials (zeigen WIE man escaped)
- **Zweisprachig** - Verfügbar auf Deutsch und Englisch mit automatischer Spracherkennung
- **One-Click Copy** - Kopiere das Ergebnis direkt in die Zwischenablage
- **Dark Mode** - Automatische Anpassung an dein System-Theme
- **Responsive** - Funktioniert perfekt auf Desktop, Tablet und Mobile
- **Accessible** - Tastatursteuerung und moderne Web-Standards

## Was macht es?

Das Tool konvertiert HTML-Sonderzeichen in ihre Entity-Äquivalente und zurück:

| Zeichen | Wird zu      |
|---------|--------------|
| `<`     | `&lt;`       |
| `>`     | `&gt;`       |
| `&`     | `&amp;`      |
| `"`     | `&quot;`     |
| `'`     | `&#39;`      |

**Beispiel:**
```html
Input:  <div class="container">Hello World</div>
Output: &lt;div class=&quot;container&quot;&gt;Hello World&lt;/div&gt;
```

**Mehrfach-Escapen für Tutorials:**
```html
<div>                           → Original
&lt;div&gt;                   → 1× escaped
&amp;lt;div&amp;gt;           → 2× escaped (zeigt wie Escapen funktioniert)
````

## Usage

### Online nutzen
Einfach die [Live-Demo](https://dontdevpanic.github.io/html-code-escaper/) öffnen und loslegen!

### Lokal ausführen

1. **Repository klonen:**
   ```bash
   git clone https://github.com/dontdevpanic/html-code-escaper.git
   cd html-code-escaper
   ```

2. **Im Browser öffnen:**
   - Öffne `index.html` direkt im Browser
   - Oder nutze einen lokalen Server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (mit http-server)
     npx http-server
     ```

3. **Fertig!**

## Anpassung

Das Tool ist bewusst einfach gehalten und kann leicht angepasst werden:

- **Farben ändern:** Bearbeite die CSS-Variablen in `styles.css` (`:root`)
- **Icons austauschen:** Ersetze die SVGs im `/img/` Ordner
- **Funktionalität erweitern:** Bearbeite `script.js`

## Tech Stack

- **HTML5** - Semantisches Markup
- **CSS3** - Modern, responsive, mit CSS Custom Properties
- **Vanilla JavaScript** - Keine Dependencies, moderne ES6+ Features
- **Clipboard API** - Modernes Copy-to-Clipboard (mit Fallback)

## Development

Dieses Projekt wurde mit Unterstützung von AI-Tools entwickelt. Der Code nutzt moderne Web-Standards und Best Practices:

- Moderne Clipboard API (mit Fallback für ältere Browser)
- Bidirektionales Escape/Unescape
- Mehrfach-Escapen für Meta-Beispiele
- Responsive Design
- Dark Mode Support via `prefers-color-scheme`
- WCAG-konforme Kontraste

## Use Cases

- **Code-Snippets in Blogs** darstellen
- **Tutorial-Dokumentationen** erstellen (inkl. Meta-Beispiele)
- **Stack Overflow Antworten** formatieren
- **HTML-Beispiele** auf Webseiten zeigen
- **Code-Reviews** vorbereiten

**Pro-Tipp:** Nutze die Escape/Unescape-Buttons mehrfach hintereinander, um in Tutorials zu zeigen, wie HTML-Entities funktionieren!

## Feedback

Fehler gefunden oder Ideen? Öffne gerne ein [Issue](https://github.com/dontdevpanic/html-code-escaper/issues)!

## License

MIT License - feel free to use this in your own projects!

## Credits

Entwickelt von Bianca Schlich mit ☕ und modernen Web-Technologien.

---

**Verfügbar in:** [🇬🇧 English](README.md) | [🇩🇪 Deutsch](README.de.md)