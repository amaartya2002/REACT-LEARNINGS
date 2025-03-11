# React Basics

## 1. What is Emmet?
Emmet is a plugin that helps developers write HTML and CSS faster using short abbreviations. It expands shortcuts into full HTML/CSS code automatically. For example, typing `div.container` expands to:
```html
<div class="container"></div>
```

## 2. Difference between a Library and Framework?
- **Library:** A collection of reusable functions that developers can call when needed. Example: **React** (UI library).
- **Framework:** A complete structure that dictates how an application is built and controls its flow. Example: **Angular** (full framework).

## 3. What is a CDN? Why do we use it?
- A **CDN (Content Delivery Network)** is a network of servers that store and deliver files (like images, CSS, and JS) quickly to users worldwide.
- **Why use it?** It makes websites load faster and reduces the load on the main server.

## 4. Why is React known as React?
React is called "React" because it **reacts** to data changes and updates the UI efficiently without reloading the entire page.

## 5. What is `crossorigin` in the script tag?
- The `crossorigin` attribute in `<script>` tells the browser how to handle **CORS (Cross-Origin Resource Sharing)** requests.
- Example:
```html
<script src="https://example.com/script.js" crossorigin="anonymous"></script>
```
- This is useful when loading scripts from external sources like CDNs.

## 6. Difference between React and ReactDOM?
- **React**: Handles UI component creation and logic.
- **ReactDOM**: Responsible for rendering React components into the actual webpage (DOM).
- Example:
```javascript
import React from "react";       // Creates UI components
import ReactDOM from "react-dom"; // Renders components to the web
```

## 7. Difference between `react.development.js` and `react.production.js` via CDN?
- **`react.development.js`** → Used during development. Includes error messages and debugging tools but is larger in size.
- **`react.production.js`** → Used in production. Optimized for performance, smaller in size, and removes debugging tools.

### Example Usage:
```html
<!-- Development (for debugging) -->
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>

<!-- Production (for live websites) -->
<script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
```

