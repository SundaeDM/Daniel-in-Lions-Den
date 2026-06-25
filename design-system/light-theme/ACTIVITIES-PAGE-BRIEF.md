# Activities Page Brief — Light / Warm Storybook Theme

---

## Page Purpose

Give families fun, faith-enriching things to do before or after the show. Grow the email list through optional light-gate downloads. This page should feel like a gift — abundant, generous, and delightful to browse.

---

## How This Differs from the Dark Theme Version

The dark theme activities page is still predominantly light. In this theme, the activities page gets the full storybook treatment — it's the most illustrated, most textured, most playful page on the site. Think of it as the show's companion craft room: welcoming, colorful (within the warm palette), and clearly made with children in mind.

---

## Visual Brightness

**The brightest page on the site.** Every section is cream or parchment. The only contrast is the sage green email section and the warm dark footer. This page should feel like stepping into morning light.

Section rhythm: Warm dark hero → Cream intro → Parchment activity grid → Sage green signup → Warm dark footer

---

## Section Inventory

### 1. PAGE HERO
- **Background:** Warm parchment (`#F5EDD8`) — NOT the dark brown used on other page heroes. This page opens light immediately.
- **Content:**
  - Page title: "Activities & Downloads" — Playfair Display, `--color-amber-head`
  - Subhead: "Fun for families before and after the show." — Nunito, `--color-text-muted`
  - Decorative: A cheerful cluster of illustrated elements — a lion, a scroll, a star, a crown — arranged as a banner or scatter above/around the title. Small, SVG-style, warm tones. Playful but not cluttered.
- **Height:** 260px desktop, 200px mobile — compact but warmer than other pages' heroes because of the illustration cluster

### 2. INTRO + FILTER
- **Background:** Cream (`#FDF5E6`)
- **Intro text:** "Download these free activities and bring the story of Daniel and Esther to life at home. Print them out, grab some crayons, and let the adventure continue." — centered, Nunito, max-width 580px.
- **Filter pills:** `All` · `Coloring Pages` · `Games & Puzzles` · `Bible Learning` · `Crafts`
  - Pill style: Active = gold fill, dark text. Inactive = sand fill, muted text, gold border.
  - Same pill style as Schedule page for consistency

### 3. ACTIVITY DOWNLOAD GRID
- **Background:** Cream (`#FDF5E6`)
- **Layout:** 3-column desktop, 2-column tablet, 2-column mobile
- **Each activity card:**
  - Thumbnail: portrait image preview of the printable. Warm-toned border: 2px `--color-gold-accent`. Radius: 10px on thumbnail. Slight warm shadow.
  - Category tag: small pill above the title — e.g., "Coloring Page" in `--color-sage-soft` background, `#2C1A08` text, 11px Nunito all-caps
  - Title: Playfair Display, 16px, `--color-amber-head`
  - Description: Nunito, 14px, `--color-text-muted`, 1–2 lines
  - Button: "Free Download" — gold fill, dark text, Nunito bold, full-width within card
  - Card fill: `#FDF5E6`. Border: 1px `--color-bg-sand`. Radius: 12px. Shadow: warm ambient.
  - Hover: card lifts slightly (translateY -3px), shadow deepens, border shifts to `--color-gold-accent`
- **Tone of card descriptions:** Warm and encouraging. "Help Daniel find his way through the maze and into the morning light." Not "Printable maze activity."

**Activity list:**

| Name | Type | Description |
|---|---|---|
| Daniel Coloring Page | Coloring | Full-page illustration of Daniel with the lions |
| The Lions' Den Maze | Puzzle | Help Daniel find his way through to safety |
| Esther's Brave Choice | Activity Sheet | What would you do? Scenario-based activity |
| Design Your Own Lion | Drawing Prompt | Your lion, your name, your adventure |
| Bible Verse Memory Card | Bible Learning | Daniel 6:22 — a beautiful verse to remember |
| Match the Characters | Matching Game | Connect characters to their story |
| Daniel's Courage Crown | Craft | Cut-and-fold paper crown for brave kids |
| Esther's Royal Bookmark | Craft | A beautiful bookmark featuring Esther's story |

### 4. DOWNLOAD MODAL (light gate)
- **Behavior:** Clicking "Free Download" opens a small centered modal asking for email
- **Modal style:** Cream background (`#FDF5E6`), warm brown text, gold accents. Small close button (×) top-right in amber. NO dark overlay — use a soft warm semi-transparent backdrop (`rgba(44,26,8,0.2)`)
- **Content:** Small lion illustration at top (charming, not intimidating). Headline: "Your free activity is ready!" (Playfair Display, amber). Subhead: "Where should we send it?" (Nunito, muted). Email input (sand fill) + "Send My Download" button (gold fill).
- **After submit:** Modal closes, download begins, a small toast confirmation appears: "On its way! Check your inbox." (warm green `--color-sage`, cream text, appears for 3 seconds)

### 5. EMAIL SIGNUP
- **Background:** Sage green (`#5E7A52`)
- **Content:** Headline: "Get More Free Activities." (Playfair Display, cream). Subhead: "We add new content regularly. Join our list and we'll send them straight to you." (Nunito, cream muted). Email input (cream fill) + "Join the List" button (dark fill, cream text).
- **Decorative:** A small illustrated lion face or paw print watermark at low opacity in background

### 6. FOOTER
- Standard warm dark footer.

---

## Mobile Behavior

- Hero illustration cluster: scales down gracefully, stays playful at 390px
- Filter pills: horizontally scrollable
- Activity grid: 2 columns, cards readable and tappable at reduced size
- Download modal: full-screen slide-up sheet on mobile (not floating modal)
- Toast confirmation: bottom of screen, full-width

---

## Forbidden

- No paid activities or premium tiers
- No external links to third-party activity sites
- No auto-download without user action
- No "coming soon" placeholder cards — omit if not ready
- No dark backgrounds on activity cards — this is the bright page

---

## Sample Copy

**Page title:** Activities & Downloads
**Subhead:** Fun for families before and after the show.
**Intro:** Download these free activities and bring the story of Daniel and Esther to life at home. Print them out, grab some crayons, and let the adventure continue.
**Download button:** Free Download
**Modal headline:** Your free activity is ready!
**Modal subhead:** Where should we send it?
**Modal button:** Send My Download
**Toast:** On its way! Check your inbox.
**Email headline:** Get More Free Activities.
**Email subhead:** We add new content regularly. Join our list and we'll send them straight to you.
**Email button:** Join the List
