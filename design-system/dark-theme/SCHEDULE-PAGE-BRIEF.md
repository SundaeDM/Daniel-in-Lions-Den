# Schedule Page Brief — Daniel in the Lions' Den

---

## Page Purpose

Show every upcoming performance date in a scannable, filterable list so a parent can quickly find their city, confirm the details, and click through to buy tickets. The schedule page is a high-intent page — visitors who land here already want to go. Remove friction; do not distract them.

**Primary CTA:** Buy Tickets (per show row)
**Secondary CTA:** Sign up for alerts if their city isn't listed

---

## Emotional Register

From awe (homepage) → **action** (schedule page). This page is transactional. The drama can step back slightly, but warmth and production quality must remain. The parent should feel: "I found my show. Buying now is easy."

---

## Visual Brightness

This page uses more light than the homepage. The show listing table lives on a **warm parchment background** (`#FDF5E6`) for maximum readability of dates, venues, and city names. Dark sections frame it top and bottom (hero header, footer). Gold accents thread through the table.

---

## Section Inventory

### 1. PAGE HERO
- **Background:** Dark (`#0D0600`) with subtle key art imagery (lions silhouette or curtain/stage motif at low opacity as texture — not a full bleed photo)
- **Content:** Page title "SCHEDULE" in Cinzel display font, gold. Subhead: "Find a show near you."
- **Filter tabs below title:** `All Shows` · `Northeast` · `South` · `Midwest` · `West` · `International` (tabs style: gold active state, stone inactive, cream text)
- **Height:** Not full-viewport. Roughly 280px desktop, 200px mobile — this is a utility page, not a showcase page

### 2. SHOW LISTING TABLE
- **Background:** Warm parchment (`#FDF5E6`)
- **Layout:** Each show is one row. Columns: Date | City & State | Venue Name | [BUY TICKETS] [MORE INFO]
- **Row styling:**
  - Date: Cinzel, `#1A0900` (dark text), bold. Format: "SAT, JUL 12" on one line, year below in smaller muted text
  - City & State: Large, `#1A0900`, bold. Venue name below in smaller muted text (`#6B4C2A`)
  - Ticket buttons: "BUY TICKETS" — filled gold (`#F0B429`), dark text, pill shape. "MORE INFO" — outlined in gold, transparent fill, dark text
  - Row divider: 1px `#D4B896` (warm tan — not stark grey)
  - Row hover: very subtle warm tint (`#FFF0D8`) background shift
  - Sold-out row: buttons replaced with "SOLD OUT" tag in muted warm red (`#9B3A2A`), row text all muted
- **Left accent:** Thin 3px left border on each row in `#C8860A` gold — provides visual rhythm and warmth
- **Row height:** Minimum 72px for comfortable tap targets on mobile
- **Grouping (optional):** If many dates, group by month with a sticky month label divider (gold text on parchment, thin rule below)

### 3. "DON'T SEE YOUR CITY?" CALLOUT
- **Background:** Dark (`#2B1506`) — contrast break after the light table
- **Content:** Centered. Icon: map pin or compass in gold. Headline: "More cities coming soon." Subhead: "Sign up and we'll notify you the moment tickets go on sale in your area." Email input + "NOTIFY ME" button (gold fill).
- **Tone:** Warm, not dismissive. Parents who don't see their city should feel hopeful, not left out.

### 4. PHOTO EXPERIENCE UPSELL (optional, mirroring Blippi)
- **Background:** Warm parchment (`#FDF5E6`) or light cream
- **Content:** Short section. Headline: "Add a Photo Experience." 2-column: left = photo experience image placeholder, right = description + "LEARN MORE" or "BUY PHOTO TICKETS" button.
- **Note:** Only include if a photo/meet experience is actually offered. Remove this section entirely if not applicable.

### 5. FOOTER
- Standard dark footer. Same across all pages.

---

## Mobile Behavior

- Filter tabs: horizontally scrollable on mobile, no wrapping
- Table rows: collapse to stacked cards. Each card shows: Date (bold, gold) / City+Venue / Full-width BUY TICKETS button / Smaller "More Info" link below
- "Sold Out" rows still appear but buttons are disabled/muted
- Sticky "BUY TICKETS" bar does NOT appear on this page (every row already has a CTA)

---

## Forbidden

- No map view or Google Maps embed (slow, visual clutter on a utility page)
- No star ratings or reviews per show
- No price display (prices vary by venue and seat tier — link to venue ticketing page)
- No social share buttons per show row
- No "featured show" or hero show callout that gives one city preferential treatment

---

## Sample Copy

**Page title:** SCHEDULE
**Subhead:** Find a show near you.
**Callout headline:** More cities coming soon.
**Callout subhead:** Sign up and we'll notify you the moment tickets go on sale in your area.
**Button:** NOTIFY ME
**Sold-out label:** SOLD OUT

---

## Prompt Addendum (for Claude Design)

When building the Schedule page, carry forward:
- Same global nav and ticker banner from homepage
- Same footer
- Color system from the main brief (parchment for table, dark for header/footer)
- Cinzel for all headings; Lato for table body text
- Do NOT carry forward the full hero treatment — this page uses a compact dark header, not a full-viewport hero
