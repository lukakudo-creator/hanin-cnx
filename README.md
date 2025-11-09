# hanin-cnx

## Previewing the site

This repository runs inside a development container that does not bundle a
browser preview pane. When you use other GPT experiences that are not based on
Codex, they may offer an integrated webview, but within this environment you
need to open the project files in your own browser. There are two quick ways to
do that:

1. Start a simple web server from the project root:

   ```bash
   python -m http.server 8000
   ```

   Then visit <http://localhost:8000/index.html> in your browser.

2. Download `index.html`, `style.css`, and `script.js` to your machine and open
   `index.html` directly.

Both options will load the Korean/English toggle and other interactive pieces
exactly as they appear in production.
