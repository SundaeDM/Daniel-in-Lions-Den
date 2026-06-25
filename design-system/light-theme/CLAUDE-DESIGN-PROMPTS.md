# Daniel in the Lions' Den — Claude Design Prompts (Light / Warm Storybook Theme)
*Three prompts to use in sequence. Paste A first, confirm structure, then B, then C.*
*Alternate to the Dark Premium prompts. Same page architecture, completely different visual register.*

---

## PROMPT A — Structure

Build a single-page HTML prototype for the **homepage** of "Daniel in the Lions' Den — A Live Musical Experience," a children's live stage musical website. This is a ticket-sales conversion site for Christian families.

**Site architecture:**
Global nav with: logo left | Home · Schedule · About the Show · Activities · FAQ center | "BUY TICKETS" pill button right. Nav background is warm cream — no ticker banner.

**Sections in this order — structure only, no styling yet:**

1. **HERO** — Full-viewport. Background: show key art (Daniel and lions, warm and inviting). Show title: "Daniel in the Lions' Den" (title case, not all-caps). Subtitle: "A Live Musical Experience." Two buttons: primary "BUY TICKETS" and secondary "SEE SHOW DATES."

2. **SHOW INTRO** — Centered paragraph (2–3 sentences describing the show). Below: horizontal stat bar with 3 icon+text items: [Show Length: 90 minutes] [Audience Participation: Yes] [Ages: 3 and up].

3. **UPCOMING SHOWS** — Section headline "Coming to a City Near You." List of 5 show dates as cards: Date | City, State | Venue Name | [BUY TICKETS] [MORE INFO] buttons. "SEE ALL DATES" link below.

4. **ABOUT THE STORY** — Two-column: left = show image placeholder, right = 2 short paragraphs about Daniel and a small callout for Esther's story.

5. **SOCIAL PROOF** — Headline "Why Families Love It." Three short parent quote blocks (1–2 sentences each + first name and city attribution). No star ratings.

6. **GALLERY PREVIEW** — Headline "From the Stage." 2×2 image grid (4 images). "See more photos →" link below.

7. **EMAIL SIGNUP** — Headline "Be the First to Know." Subhead about ticket alerts and free activities. Email input + "COUNT ME IN" button.

8. **FOOTER** — Logo | nav links | social icons (Instagram, Facebook, TikTok, YouTube) | Privacy Policy | © 2026 Daniel in the Lions' Den. All rights reserved.

Use semantic HTML5. No styling beyond basic layout structure at this stage. Label each section with an HTML comment `<!-- SECTION: Hero -->` etc. Show me the structure and section inventory first, then the code.

---

## PROMPT B — Style

Apply the following visual style system to the homepage structure from Prompt A. Do not change section order or content — only apply styling.

**Visual style: Warm Storybook (children's illustrated Bible aesthetic)**

**Color palette (use these exact values):**
```
--color-bg-cream:      #FDF5E6;   /* primary page background */
--color-bg-parchment:  #F5EDD8;   /* alternate section backgrounds */
--color-bg-sand:       #EAD9B8;   /* cards, inner content areas */
--color-bg-gold:       #C8860A;   /* email signup section background */
--color-bg-dark:       #2C1A08;   /* footer, hero overlay if needed */
--color-amber-head:    #8B4A0A;   /* all headlines on light backgrounds */
--color-gold-accent:   #C8860A;   /* borders, icons, decorative rules */
--color-gold-bright:   #F0B429;   /* CTA buttons, hover states */
--color-sage:          #5E7A52;   /* social proof section background */
--color-sage-soft:     #A8C49A;   /* dividers, tags, nature accents */
--color-text-dark:     #2C1A08;   /* body text on cream */
--color-text-muted:    #8B6A4A;   /* captions, labels, secondary text */
--color-esther-rose:   #9B3A5A;   /* Esther story accent */
--color-esther-blush:  #E8B4C4;   /* Esther light backgrounds */
```

**Typography:**
- Display headlines (H1, H2): `Playfair Display`, bold (import from Google Fonts). Color: `--color-amber-head`. Title case (not all-caps). Letter-spacing: 0 (none — natural serif spacing).
- Body text: `Nunito`, 17px, `--color-text-dark`. Line-height: 1.75.
- CTA button labels: `Nunito`, bold, title case.
- Pullquotes / testimonials: `Playfair Display`, italic, `--color-amber-head`, 24–28px.
- Stat bar labels: `Nunito`, 12px, all-caps, `--color-text-muted`.

**Component styles:**

Nav: `--color-bg-cream` background, 1px `--color-bg-sand` border bottom. Logo left, links center in `--color-text-dark`, Nunito medium. Links hover: `--color-amber-head` color + thin underline. CTA pill: `--color-gold-bright` fill, `--color-text-dark` text, 24px border-radius.

Hero: Full-viewport. Show key art as warm background (no dark overlay — warm cream/amber color-grade if needed). Title "Daniel in the Lions' Den" in Playfair Display, 80px desktop / 44px mobile, `--color-amber-head`. Subtitle: Nunito, 20px, `--color-text-muted`. Buttons: primary gold fill, secondary outlined in amber.

Show intro: `--color-bg-cream`. Centered text, 680px max-width. Stat bar: three items, thin `--color-bg-sand` dividers between. Icon: SVG, `--color-gold-accent`. Value: Nunito bold, `--color-text-dark`. Label: 12px muted all-caps.

Upcoming shows: `--color-bg-parchment`. Cards for each show: `--color-bg-sand` fill, 1px `--color-gold-accent` border, 8px border-radius, warm shadow `rgba(44,26,8,0.08)`. Date: Playfair Display, amber. City+Venue: Nunito bold, dark. Buttons: gold fill (BUY TICKETS) + amber outlined (MORE INFO). Card hover: shadow deepens `rgba(44,26,8,0.15)`, border brightens to `--color-gold-bright`.

About the story: `--color-bg-cream`. Two-column. Left: warm-toned image placeholder. Right: Playfair Display headline, Nunito body. Esther callout: small framed box, `--color-esther-blush` background, `--color-esther-rose` border 2px, rose headline, Nunito body.

Social proof: `--color-sage` background. Cream text. Three quote cards: `rgba(255,255,255,0.1)` fill, no border. Quote in Playfair italic, cream. Attribution: Nunito small, `--color-sage-soft`.

Gallery preview: `--color-bg-cream`. 2×2 grid, image placeholders: `--color-bg-sand` fill, 1px `--color-gold-accent` border, 8px radius. "See more photos →" link in amber.

Email signup: `--color-bg-gold` (`#C8860A`) background, cream text. Headline in Playfair Display, cream. Body in Nunito, cream. Input: `--color-bg-cream` fill, no border. Button: `--color-bg-dark` fill, cream text, Nunito bold.

Footer: `--color-bg-dark`. 1px `--color-gold-accent` rule above. Logo (light), links `--color-text-muted` → hover cream. Social icons muted → hover `--color-gold-bright`.

**General rules:**
- No pure white or pure black anywhere
- All shadows: warm amber tint `rgba(44,26,8,X)`, never cool grey
- All borders: warm tones only (`--color-gold-accent`, `--color-bg-sand`, `--color-sage-soft`)
- 8px border-radius on all cards and buttons (warmer and more approachable than the 0px of the dark theme)

---

## PROMPT C — Polish

Apply the following polish, animations, and responsive behavior to the Daniel in the Lions' Den warm storybook homepage from Prompts A+B.

**Decorative motifs (SVG, inline):**
- After each section headline H2: a thin decorative rule made of a small repeating diamond or star motif (`◆ ─────── ◆`), gold, centered, 200px wide
- Hero bottom edge: a gentle rope or scroll border SVG (`--color-gold-accent`) separating the hero from the show intro section
- Social proof section: small SVG star (`★`) in `--color-sage-soft` before each testimonial quote
- Upcoming shows section: a small lion paw print icon (SVG, `--color-gold-accent`, 24px) as a decorative bullet on each show card
- Email signup: small envelope icon (SVG, cream) beside the email input label

**Animations:**
- Hero title + subtitle: gentle fade-in + 12px upward drift, 0.7s ease-out, on page load
- Stat bar items: count-up animation on numbers (90 minutes → counts up), triggered by IntersectionObserver on scroll enter, 1.2s ease-out
- Show cards: fade + rise (20px) in staggered sequence, 0.12s apart, on scroll enter
- Testimonial quotes: fade in one at a time, 0.2s stagger
- Section headline decorative rule: animates width from 0 to full on scroll enter, 0.5s ease-out
- Gallery images: subtle warm brightness increase on hover (filter: brightness(1.05)), 0.2s ease
- Email input: border shifts from `--color-bg-sand` to `--color-gold-bright` on focus, 0.2s ease

**Responsive breakpoints:**
- Desktop: ≥1024px — full layout
- Tablet: 768–1023px — show cards go 2-column, testimonials stack
- Mobile: <768px
  - Hero: 44px title, single-column CTAs stacked
  - Nav: hamburger, parchment full-screen overlay, centered large links
  - Show cards: single column, full-width CTA button
  - Testimonials: one visible, dot-based carousel swipe
  - Gallery: 2×2 remains, scales down proportionally
  - Sticky "BUY TICKETS" bar: warm dark background, gold button, appears after hero exits viewport

**Accessibility and performance:**
- All images: `loading="lazy"` except hero (eager)
- Focus states: `outline: 2px solid var(--color-gold-bright)` with 2px offset on all interactive elements
- Testimonial carousel (mobile): keyboard-navigable with left/right arrow keys
- Minimum tap target: 44px on all interactive elements
- Reduced motion: all animations wrapped in `@media (prefers-reduced-motion: no-preference)`
- Color contrast: verify `--color-text-dark` (#2C1A08) on `--color-bg-cream` (#FDF5E6) passes WCAG AA

**Edge details:**
- Cream sections: very subtle paper texture via SVG noise filter at 2% opacity — makes it feel like actual parchment, not a flat color
- Card shadows use a warm amber glow: `box-shadow: 0 4px 20px rgba(44,26,8,0.10), 0 1px 4px rgba(44,26,8,0.06)`
- Social proof sage section: top and bottom edges use a gentle wave SVG divider (cream wave against sage) rather than a hard line — softens the section boundary
- Email signup gold section: same wave dividers in cream above and below
- Show card "BUY TICKETS" button: on hover, `box-shadow: 0 0 16px rgba(240,180,41,0.4)` warm glow

**Final output:** Deliver as a single `index.html` file with all CSS in a `<style>` block and all JS inline before `</body>`. No CDN dependencies except Google Fonts (Playfair Display + Nunito). Include a comment block at the top:
```html
<!--
  Daniel in the Lions' Den — Homepage Prototype (Light / Warm Storybook Theme)
  Stack: Vanilla HTML/CSS/JS
  To port to production: React + Next.js recommended
  Fonts: Google Fonts (Playfair Display, Nunito)
  Images: Replace placeholder divs with actual warm-toned show photography
  Dynamic data: Show dates should be fetched from CMS or ticketing API
  Alternate theme: See Dark Premium theme for the epic/dramatic visual direction
-->
```

---

*Prompts version 1.0 — June 2026 (Light / Warm Storybook theme)*
