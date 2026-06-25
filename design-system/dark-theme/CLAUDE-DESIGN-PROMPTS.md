# Daniel in the Lions' Den — Claude Design Prompts
*Three prompts to use in sequence. Paste A first, confirm structure, then B, then C.*

---

## PROMPT A — Structure

Build a single-page HTML prototype for the **homepage** of "Daniel in the Lions' Den — A Live Musical Experience," a children's live stage musical website. This is a ticket-sales conversion site for Christian families.

**Site architecture:**
Global nav with: logo left | Home · Schedule · About the Show · Activities · FAQ center | "BUY TICKETS" pill button right.
Scrolling ticker banner above nav: "TICKETS ON SALE NOW · COMING TO A CITY NEAR YOU · TICKETS ON SALE NOW" — looping, gold text on dark.

**Sections in this order — structure only, no styling yet:**

1. **HERO** — Full-viewport. Background: show key art (Daniel surrounded by 3 lions in cave, dramatic light beam from above). Overlay for text legibility. Show title lockup: "DANIEL / IN THE LIONS' DEN" + "A Live Musical Experience" tagline. Two buttons: primary "BUY TICKETS" and secondary "SEE SHOW DATES."

2. **SHOW INTRO** — Short 2–3 sentence paragraph describing the live show. Below it: a horizontal stat bar with 3 icon+text pairs: [🦁 Show Length: 90 minutes] [🎭 Audience Participation: Yes] [👨‍👩‍👧 Ages: 3 and up].

3. **UPCOMING SHOWS** — Section headline "UPCOMING SHOWS IN YOUR AREA." List of 5 show dates as rows: Date | City, State | Venue Name | [BUY TICKETS] [MORE INFO] buttons. "SEE FULL SCHEDULE" text link below the list.

4. **ABOUT THE STORY** — Two-column: left = show image (placeholder), right = 2 short paragraphs about Daniel's story and the featured Esther story. Each paragraph ~40 words.

5. **GALLERY** — Headline "GALLERY." 2×3 grid of image placeholders (use dark gold-bordered placeholder boxes).

6. **EMAIL SIGNUP** — Centered: Headline "SIGN UP FOR UPDATES!" Subhead: "Get ticket alerts, exclusive content & surprises straight to your inbox." Email input + "GET ALERTS" button.

7. **FOOTER** — Logo | nav links | social icons (Instagram, Facebook, TikTok, YouTube) | Privacy Policy | © 2026 Daniel in the Lions' Den. All rights reserved.

Use semantic HTML5. No styling beyond basic layout structure at this stage. Label each section with an HTML comment `<!-- SECTION: Hero -->` etc. Show me the structure and section inventory first, then the code.

---

## PROMPT B — Style

Apply the following visual style system to the homepage structure from Prompt A. Do not change the section order or content — only apply styling.

**Visual style: Epic Adventure / Dark Premium (biblical live theatre)**

**Color palette (use these exact values):**
```
--color-bg-deep:       #0D0600;   /* page background */
--color-bg-section:    #2B1506;   /* alternate section backgrounds */
--color-bg-card:       #1A0B02;   /* cards, rows */
--color-gold-primary:  #C8860A;   /* headlines, borders, dividers */
--color-gold-bright:   #F0B429;   /* CTAs, hover states, ticket buttons */
--color-gold-glow:     #F5C44A;   /* spotlight glow effects */
--color-text-body:     #F2E0C0;   /* body text — warm cream, never pure white */
--color-text-muted:    #A08060;   /* secondary labels, metadata */
--color-stone:         #4A2E1A;   /* borders, row dividers */
--color-esther-rose:   #7A1F3D;   /* Esther story accent */
--color-esther-gold:   #C4923A;   /* Esther secondary accent */
```

**Typography:**
- Display headlines (H1, H2): `Cinzel`, serif (import from Google Fonts). All-caps or title case. Color: `--color-gold-primary`. Letter-spacing: 0.08em.
- Body text: `Lato` or `Open Sans`, 16–18px. Color: `--color-text-body`.
- CTA buttons: `Lato` bold, all-caps, letter-spacing 0.1em.
- Stat bar labels: `Lato` bold, 13px, all-caps, `--color-text-muted`.

**Component styles:**

Hero: Full-viewport height. Background image of show key art with a dark overlay (`rgba(13,6,0,0.55)`). Show title "DANIEL" in Cinzel at 96px desktop / 52px mobile, gold. Subtitle in Cinzel at 22px, spaced. Primary CTA: gold fill (`--color-gold-bright`) pill button, dark text, bold. Secondary CTA: 2px gold border, transparent fill, cream text.

Ticker banner: `--color-bg-deep` background, `--color-gold-primary` text, continuous CSS marquee animation, 1px gold bottom border.

Show intro section: `--color-bg-section` background. Stat bar: three items separated by `--color-stone` vertical dividers. Icon: SVG or emoji, gold. Label: muted. Value: cream bold.

Upcoming shows rows: `--color-bg-card` background, `--color-stone` 1px border-bottom per row. Date in gold. City+Venue in cream. Two buttons per row: "BUY TICKETS" filled gold, "MORE INFO" outlined gold. Row hover: `--color-stone` background.

Gallery: `--color-bg-deep` background. Image placeholders: `--color-stone` border 1px, `--color-bg-card` fill, 4px border-radius. Gold headline above grid.

Email signup: `--color-bg-section` background. Center-aligned. Headline in gold Cinzel. Input: dark fill, `--color-stone` border, cream text. Button: gold fill. On focus: gold border glow.

Footer: `#080300` (deepest background). Horizontal rule in gold above. Logo, nav links in `--color-text-muted`, links turn cream on hover. Social icons in muted, turn gold on hover.

**General rules:**
- All sections alternate between `--color-bg-deep` and `--color-bg-section` backgrounds — never use white or light backgrounds anywhere
- Gold decorative horizontal rules (1px, `--color-gold-primary`) separate major sections
- All corners: 0px radius on structural sections, 4px on buttons and cards
- Box shadows: use warm amber glow (`rgba(200,134,10,0.15)`) not cool grey shadows

---

## PROMPT C — Polish

Apply the following polish, micro-interactions, animations, and responsive behavior to the Daniel in the Lions' Den homepage from Prompts A+B. Do not change content or layout — only add refinement.

**Animations:**

- Hero title: fade-in + slight upward drift (0.6s ease-out, delay 0.2s) on page load
- Hero subtitle: same animation, delay 0.5s
- Hero CTA buttons: same, delay 0.8s
- Ticker banner: smooth CSS `@keyframes marquee` — no JS needed, infinite loop, 30s duration, pause on hover
- Stat bar items: fade in staggered (0.3s apart) when scrolled into view, using `IntersectionObserver`
- Show date rows: slide in from left (40px) + fade, 0.15s stagger, on scroll enter. One-time animation (don't replay on scroll up)
- Gallery images: scale from 0.97 to 1.0 + fade on scroll enter, 0.1s stagger per image
- CTA buttons: on hover — `--color-gold-bright` glow (`box-shadow: 0 0 20px rgba(240,180,41,0.5)`), 0.2s ease transition
- Section headlines: thin gold underline rule animates width from 0% to 60px on scroll enter, 0.4s ease-out

**Responsive breakpoints:**
- Desktop: ≥1024px — full layout as described
- Tablet: 768–1023px — nav collapses, gallery 2×3, show rows retain layout
- Mobile: <768px — single column throughout
  - Hero: title drops to 48px, single-column CTAs stacked
  - Nav: hamburger icon, full-screen slide-down overlay menu (dark bg, gold links, large tap targets)
  - Ticker: persists, smaller text
  - Show dates: each row becomes a card with stacked info and full-width CTA button
  - Gallery: 2×2 grid (show 4 of 6)
  - Sticky "BUY TICKETS" bar: appears after hero scrolls out of view. Fixed bottom, full-width, `--color-gold-bright` background, dark bold text. 60px tall minimum.

**Performance and accessibility:**
- All images: `loading="lazy"` except hero (eager)
- Hero background: use CSS `background-image` with `will-change: opacity` for compositing
- All interactive elements: minimum 44px tap target
- Focus states: gold `outline: 2px solid var(--color-gold-bright)` with 2px offset — never remove outlines, just style them
- Reduced motion: wrap all animations in `@media (prefers-reduced-motion: no-preference)` — site is fully usable with animations disabled
- Color contrast: verify `--color-text-body` (#F2E0C0) on `--color-bg-deep` (#0D0600) passes WCAG AA (it does — ~14:1)

**Edge details:**
- Hero: subtle vignette via `radial-gradient(ellipse at center, transparent 40%, rgba(13,6,0,0.7) 100%)` layered over the image
- Gold headline rule: `::after` pseudo-element, `width: 60px`, `height: 2px`, `background: var(--color-gold-primary)`, `margin: 12px auto 0` (centered)
- Show date rows: left border `3px solid var(--color-gold-primary)` on hover state transition
- Upcoming shows section: faint stone texture suggestion via a subtle noise/grain SVG background-image at 3% opacity
- Ticker: `font-family: Cinzel`, letter-spacing 0.15em, all-caps, 13px

**Final output:** Deliver as a single `index.html` file with all CSS in a `<style>` block and all JS inline before `</body>`. No CDN dependencies except Google Fonts. Include a comment block at the top:
```html
<!--
  Daniel in the Lions' Den — Homepage Prototype
  Stack: Vanilla HTML/CSS/JS
  To port to production: React + Next.js recommended
  Fonts: Google Fonts (Cinzel, Lato)
  Images: Replace placeholder divs with actual show photography
  Dynamic data: Show dates should be fetched from CMS or ticketing API
-->
```

---

*Prompts version 1.0 — June 2026*
