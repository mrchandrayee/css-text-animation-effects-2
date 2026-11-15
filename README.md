# CSS Text Animation Effects

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-text-animation-effects-2/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 21.83-second tutorial video.

## What the video shows

The tutorial titled **CSS Text Animation** cycles through five text effects:

1. **Gradient Flow** — animated multicolor gradient text.
2. **Rotate In** — text rotates and scales into view.
3. **Blur Reveal** — blurred text sharpens into focus.
4. **Neon Flicker** — green neon sign with intermittent opacity flicker.
5. **3D Flip** — text rotates around the Y axis.

The video displays each effect in a dark preview panel and shows the corresponding CSS source below it.

## Reconstructed CSS snippets

### 1. Gradient Flow
```css
.gradient-text {
  background: linear-gradient(90deg,
    #ff6b6b, #feca57, #48dbfb,
    #a29bfe, #ff6b6b);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientMove 5s linear infinite;
}
@keyframes gradientMove {
  to { background-position: 300% 50%; }
}
```

### 2. Rotate In
```css
@keyframes rotateIn {
  from { opacity: 0; transform: rotate(-180deg) scale(.3); }
  to { opacity: 1; transform: rotate(0) scale(1); }
}
```

### 3. Blur Reveal
```css
@keyframes blurReveal {
  0% { filter: blur(12px); opacity: 0; transform: scale(1.1); }
  100% { filter: blur(0); opacity: 1; transform: scale(1); }
}
```

### 4. Neon Flicker
```css
@keyframes flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55% { opacity: .25; }
}
```

### 5. 3D Flip
```css
@keyframes flip3d {
  0% { transform: rotateY(0); }
  50% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
}
```

## Features

- Five independent CSS animation demonstrations.
- Dark navy preview cards with orange borders.
- Source-code excerpt shown beneath each animation.
- Replay Animations button.
- Responsive grid layout.
- Reduced-motion accessibility support.
- No libraries, dependencies or build tools.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
css-text-animation-effects/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Accuracy note

The recording shows the five animation names and portions of their CSS, but some code lines are too small to read reliably. The snippets and full implementation here reconstruct the visible effects and their likely CSS techniques; they are not claimed to be a verbatim copy of the creator's full source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
