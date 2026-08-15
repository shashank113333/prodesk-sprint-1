# HTML & Performance Optimization

# Prompt 1 — Lighthouse Performance (HTML)
I have written the complete HTML structure for my landing page. I want to optimize it to achieve a 100/100 Lighthouse Performance score.
Explain and help me implement:
- Preconnecting and Preloading the main CSS file
- Deferring the JavaScript file
- Adding proper width/height attributes for images to prevent Cumulative Layout Shift (CLS)
- Using `fetchpriority="high"` for the LCP hero image

# CSS Development & Layout

# Prompt 2 — CSS Variables Foundation
I am writing the CSS for my project. Help me set up a professional color system for light and dark modes.
Explain:
- :root
- CSS variables (Custom properties)
- var()
Do not write the whole CSS, just guide me on setting up the variables.

# Prompt 3 — CSS Flexbox (Navbar & Hero)
I want to align my desktop navbar and Hero section using CSS Flexbox.
Explain:
- display: flex
- justify-content
- align-items
How can I place the logo on the left and navigation links on the right cleanly ?

# Prompt 4 — CSS Grid (Service Cards)
I want to display three service cards side-by-side on desktop. Help me style them using CSS Grid.
Explain:
- display: grid
- grid-template-columns: repeat(3, 1fr)
- gap
Keep the explanation simple so I can implement it myself.

# Prompt 5 — Responsive Design (Media Queries)
Guide me on making my Flexbox and Grid layouts responsive for mobile devices.
Explain how to use "@media (max-width: 768px)" to change the flex-direction and grid columns so the layout stacks perfectly on mobile screens without horizontal scrolling.

# JavaScript Functionality

# Prompt 6 — Mobile Hamburger Menu
Help me write vanilla JavaScript for a mobile hamburger menu. 
My HTML already has "#hamburger" and "#nav-menu". 
Explain how to use "addEventListener" and "classList.toggle" to show/hide the menu when clicked.

# Prompt 7 — Dark Mode Toggle
Help me add a Dark Mode toggle using vanilla JavaScript.
Explain how to toggle a "dark-mode" class on the "document.body" so that my CSS variables switch colors smoothly.

# Prompt 8 — Glassmorphism Effect
Explain how to add a modern glassmorphism effect to my sticky navigation bar using the CSS "backdrop-filter" property.

# Final Review & QA

# Prompt 9 — Final Lighthouse Accessibility Audit
Review my completed code for any remaining Lighthouse accessibility or best practice issues.
Check for:
- Missing image alt attributes
- Semantic HTML tags (nav, main, footer)
- Color contrast issues
Tell me exactly what to fix to hit a 100/100 score on Accessibility and SEO.


# AI Usage Notes
AI assistance was used primarily as a learning tool during this sprint. I wrote the core HTML structure myself and used AI to:
- Learn and implement modern CSS Layouts (Flexbox and Grid).
- Understand Vanilla JavaScript DOM manipulation for Dark Mode and Mobile Menu.
- Identify bottlenecks and apply advanced Lighthouse Performance optimizations (Preload, WebP, Defer).