# Schedule Page Brief — Light / Warm Storybook Theme

---

## Page Purpose

Same as dark theme: scannable, filterable list of show dates. Parents on this page are high-intent. Remove friction; make it easy to find a show and click through to tickets.

---

## How This Differs from the Dark Theme Version

The dark theme schedule page uses a parchment table on a dark frame — utility in a dramatic container. This version is lighter and friendlier throughout. The whole page feels like a well-organized storybook calendar, warm and approachable, with show cards that feel like little invitations rather than database rows.

---

## Visual Brightness

**Predominantly light throughout.** No full dark sections except the footer. The hero header uses the deep warm brown (`#2C1A08`) for contrast, but transitions quickly to cream.

Section rhythm: Warm dark hero → Cream filter area → Parchment show cards → Sage green callout → Warm dark footer

---

## Section Inventory

### 1. PAGE HERO
- **Background:** Rich warm dark (`#2C1A08`) — compact header, not full-viewport
- **Content:** Page title "Show Dates" in Playfair Display, `--color-gold-bright`. Subhead: "Find a show near you." in Nunito, cream muted.
- **Decorative:** Small paw print motif or star cluster beside the title
- **Height:** 220px desktop, 160px mobile

### 2. FILTER TABS
- **Background:** Cream (`#FDF5E6`)
- **Tabs:** `All Shows` · `Northeast` · `South` · `Midwest` · `West` · `International`
- **Style:** Pill-shaped tabs (not rectangular). Active: `--color-gold-bright` fill, dark text. Inactive: `--color-bg-sand` fill, `--color-text-muted` text, 1px `--color-gold-accent` border.
- **Spacing:** 12px gap between pills, 32px padding above and below the row

### 3. SHOW CARD GRID
- **Background:** Warm parchment (`#F5EDD8`)
- **Layout:** Cards in a 2-column grid (desktop), single column (mobile). Cards feel like little event invitations rather than table rows.
- **Each card:**
  - Top: Date in Playfair Display, amber, large (24px). Month+Day prominent, year small below.
  - Middle: City + State in Nunito bold, `#2C1A08`, 18px. Venue name below in Nunito regular, `--color-text-muted`, 14px.
  - Bottom: Two buttons side by side — "Buy Tickets" (gold fill) and "More Info" (amber outlined).
  - Left accent: A thin 4px left border in `--color-gold-accent` — provides warmth and rhythm without being heavy
  - Card fill: `#FDF5E6` cream. Border: 1px `--color-bg-sand`. Radius: 8px. Shadow: `rgba(44,26,8,0.08)`.
  - Sold-out: "Sold Out" label replaces buttons. Muted warm red `#9B3A2A`. Card text all muted.
  - Card hover: shadow lifts, left border shifts to `--color-gold-bright`
- **Month dividers:** When listing many dates, group by month. Month label: Playfair Display, 13px, `--color-text-muted`, all-caps, centered. Thin `--color-bg-sand` rule above.

### 4. "DON'T SEE YOUR CITY?" CALLOUT
- **Background:** Sage green (`#5E7A52`)
- **Layout:** Centered. Small illustrated map pin icon or compass in cream.
- **Headline:** "More cities coming soon." — Playfair Display, cream.
- **Subhead:** "Sign up and we'll let you know the moment tickets go on sale near you." — Nunito, cream muted.
- **Input + button:** Cream input field, dark button with cream text ("Notify Me").
- **Tone:** Hopeful, not apologetic.

### 5. FOOTER
- Standard warm dark footer (same as homepage).

---

## Mobile Behavior

- Filter pills: horizontally scrollable single row, no wrapping
- Show cards: single column, full-width
- Both buttons stack vertically within the card on narrow screens
- Month divider labels remain centered and readable

---

## Forbidden (same as dark theme)

- No map embeds
- No star ratings or reviews per show
- No price display on this page
- No social share buttons per show

---

## Sample Copy

**Page title:** Show Dates
**Subhead:** Find a show near you.
**Callout headline:** More cities coming soon.
**Callout subhead:** Sign up and we'll let you know the moment tickets go on sale near you.
**Notify button:** Notify Me
**Sold-out label:** Sold Out
