## Project

**Project:** The Corporate Brand  
**Company:** Prodesk IT  
**Sprint:** Sprint 1  
**Technologies:** HTML5, CSS3, Vanilla JavaScript

---

## Purpose

This file records the AI prompts used during the development and review of the project.

AI was used as a development assistance tool to understand concepts, review code, debug issues and implement individual features.

The generated suggestions were reviewed during development and tested in the project.

---

# HTML Development

### Prompt 1 — HTML Structure

```text
Build the HTML structure for my Prodesk IT Sprint 1 landing page.

The page must contain:

- Header
- Navbar
- Logo
- Home
- About
- Services
- Contact
- Hero section
- Hero headline
- Subtitle
- Get Started CTA
- Learn More CTA
- Hero image
- Three service cards
- Footer

Use semantic HTML5 elements.

Do not use Bootstrap, Tailwind or other frameworks.

Keep the HTML simple and beginner-friendly.
```

### Prompt 2 — HTML Review

```text
Review my current index.html against the Prodesk IT Sprint 1 requirements.

Check:

- Navbar
- Home
- About
- Services
- Contact
- Hero section
- CTA buttons
- Three service cards
- About section
- Footer
- Image alt attributes
- Correct IDs and navigation links
- Semantic HTML
- Missing closing tags
- Duplicate IDs

Do not modify the HTML until the problems are explained.
```

---

# CSS Development

### Prompt 3 — CSS Foundation

```text
Work on the CSS foundation of my Prodesk IT Sprint 1 project.

Explain:

- Universal selector
- box-sizing
- margin
- padding
- font-family
- line-height

Then implement only the basic CSS foundation.

Do not modify the navbar, hero, services, footer, responsive design or JavaScript.
```

### Prompt 4 — CSS Variables

```text
Create a simple professional CSS color system.

Explain:

- :root
- CSS variables
- var()

Create variables for:

- Primary color
- Secondary color
- Background
- Card background
- Main text
- Muted text
- Border

Do not create duplicate variables if they already exist.
```

### Prompt 5 — Main Container

```text
Create a centered main content layout.

Explain:

- max-width
- margin: 0 auto
- padding

Use a reasonable maximum width and keep the layout simple.

Do not modify individual sections yet.
```

### Prompt 6 — Navbar Flexbox

```text
Style the desktop navbar using CSS Flexbox.

Explain:

- display: flex
- justify-content
- align-items
- gap

Requirements:

- Logo on the left
- Navigation links on the right
- Clean spacing
- Professional appearance

Do not implement the mobile menu yet.
```

### Prompt 7 — Hero Section

```text
Style the Hero section using CSS Flexbox.

Requirements:

- Hero text on the left
- Hero image on the right
- Proper spacing
- Professional typography
- Responsive image width

Explain every important CSS property before implementation.
```

### Prompt 8 — Services Grid

```text
Style the three service cards using CSS Grid.

Explain:

- display: grid
- grid-template-columns
- repeat()
- 1fr
- gap

Create three equal columns on desktop.

Keep the CSS simple.
```

### Prompt 9 — Card Hover Effect

```text
Add a simple hover effect to the service cards.

Explain:

- :hover
- transition
- transform
- translateY()

The cards should move slightly upward when hovered.

Keep the animation subtle and professional.
```

### Prompt 10 — Responsive Design

```text
Make the complete website responsive.

Explain:

- media queries
- max-width
- flex-direction
- responsive Grid

On mobile:

- Navigation should become mobile-friendly
- Hero should stack vertically
- Service cards should become one column
- Images should fit the screen
- Footer should remain usable
- No horizontal scrolling
```

---

# JavaScript Development

### Prompt 11 — Mobile Navigation

```text
Implement the mobile hamburger menu using vanilla JavaScript.

My HTML already contains:

- #hamburger
- #nav-menu

Explain:

- getElementById
- addEventListener
- click
- classList.toggle

Clicking the hamburger should add/remove the active class from the navigation menu.

Keep the JavaScript simple.
```

### Prompt 12 — Dark Mode

```text
Implement a Dark/Light mode toggle using vanilla JavaScript.

My HTML already contains:

- #theme-toggle

Explain:

- document.body
- classList.toggle
- click event

Use the existing CSS variables and toggle a dark-mode class on the body.

Keep the JavaScript beginner-friendly.
```

### Prompt 13 — Glassmorphism

```text
Implement the glassmorphism effect for the sticky navigation.

Explain:

- position: sticky
- top
- z-index
- backdrop-filter

Use JavaScript only if necessary.

Keep the implementation simple.
```

---

# QA and Review

### Prompt 14 — Initial QA

```text
Review the complete Prodesk IT Sprint 1 project.

Check:

- HTML structure
- CSS
- JavaScript
- Navbar
- Hero
- Services
- About
- Footer
- Responsive design
- Hamburger menu
- Dark/Light mode
- Hover effects
- Sticky navigation
- Glassmorphism
- Image alt text
- Broken links
- Console errors
- Horizontal scrolling

Give a PASS / FAIL / NEEDS IMPROVEMENT report.

Do not automatically change anything before showing the problems.
```

### Prompt 15 — Fix QA Issues

```text
Now fix only the FAIL and WARNING issues identified in the previous QA report.

Do not introduce new features.
Do not redesign the website.
Keep all currently working functionality intact.

After making the fixes, run another QA check and report the results.
```

### Prompt 16 — GitHub Preparation

```text
Now prepare the project for GitHub submission.

Do not push anything yet.

Check:

- README.md exists
- Prompts.md exists
- No passwords
- No API keys
- No personal credentials
- No unnecessary files
- Correct project structure
- Correct image paths
- Correct CSS path
- Correct JavaScript path

Tell me what I need to fix before pushing to GitHub.

Do not execute git push.
```

### Prompt 17 — README

```text
Create or improve README.md for my Prodesk IT Sprint 1 project.

Include placeholders for:

- Project name
- Project description
- Technologies used
- Features
- Responsive design
- Dark/Light mode
- Live website URL
- GitHub repository URL
- Screenshot of the deployed website

Do not invent a Live URL or GitHub URL.

Keep the README professional and simple.
```

---

## AI Usage Notes

AI assistance was used during development for:

- Understanding HTML concepts
- Understanding CSS concepts
- Flexbox and Grid implementation
- Responsive design
- JavaScript functionality
- Dark/Light mode
- Mobile navigation
- Code review
- QA and debugging
- Documentation

The project was reviewed and tested during development.
```