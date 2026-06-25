# Daniel in the Lions' Den — Website Design Brief
*For use with Claude Design / v0 / Lovable / Cursor*

---

## 1. Project Overview

**Show name:** Daniel in the Lions' Den  
**Subtitle:** A Live Musical Experience  
**Secondary story featured:** Esther — The Bravest Queen  
**Show type:** Live-action children's stage play with musical elements  
**Target market:** Christian families, churches, homeschool groups  

---

## 2. Site Purpose (One Sentence)

Drive parents and families to buy tickets to live performances of *Daniel in the Lions' Den* by creating an immersive, awe-inspiring online experience that establishes spectacle, builds trust as faith-based family entertainment, and creates urgency around tour dates.

---

## 3. Primary Role

**Conversion engine** — ticket sales above everything else. Every page, section, and CTA exists to move a parent from "curious" to "tickets purchased." Secondary role: credibility anchor (parents need to trust this is a high-quality, faith-aligned experience before they'll buy).

---

## 4. Target Audience — Behaviors, Not Demographics

- **What they misunderstand:** They may expect a low-budget church skit, not a professional live musical production. The site must immediately signal production quality and spectacle.
- **Where they hesitate:** "Is this appropriate for my 3-year-old? My 10-year-old? Will my kids actually sit through it?" The site must address age suitability, show length, and interactivity directly.
- **What slows down purchase:** Parents are comparison shopping against Disney on Ice, VBS, and Sight & Sound Theatre. They need to feel this is in that league.
- **The unasked question:** "Is this actually Christian or just 'inspirational'?" Faith-forward positioning must be clear but not preachy — the content should speak for itself.
- **What they ask every call that the site should answer:** "How long is the show? Are there special effects? Can toddlers come? Are strollers allowed?"

---

## 5. Emotional Arc (12-Second Homepage Experience)

In order:
1. **Awe** — "This looks like a real, spectacular live show. I have to take my kids." (Hero section — immediate visual impact)
2. **Trust** — "This is wholesome, faith-based entertainment I can trust for my family." (Show description + character framing)
3. **Urgency** — "This is coming near me soon. I need to get tickets before it sells out." (Upcoming dates + ticket CTA)

---

## 6. Visual Style

**Named style: Epic Adventure / Dark Premium**

This is *not* the Blippi bright-blue palette. The Daniel brand lives in dramatic darkness with warmth from light and gold — like a scene where a single beam of light fills a cave. The aesthetic references:
- Disney's live stage productions (The Lion King on Broadway)
- Sight & Sound Theatre production visuals
- Epic biblical film posters (Prince of Egypt, The Nativity Story)

**Key visual principles:**
- Deep, rich dark backgrounds (cave stone, midnight blue-black) — never flat black; use textured/layered darks
- Gold metallic accents for headlines, borders, dividers, and decorative elements
- Warm amber/cream for body text — never pure white on pure black
- Dramatic spotlight/vignette effects on imagery — subjects emerge from darkness into light
- Stone texture and natural materials as design motifs
- The lions are the secondary visual hero — they should appear throughout as recurring motifs
- Esther's section uses a warm rose/deep crimson accent palette to distinguish her story

---

## 7. Brand Assets

### What exists (to be used as literal ground truth):

**Poster / Key Art (available in multiple sizes):**
- CGI-style illustration: Daniel (young man in off-white robes, praying hands, looking upward) surrounded by three lions — one lioness seated left, one male lion center-left, one male lion seated right
- Cave setting with dramatic light shaft from above
- Esther cameo: smaller gold-framed circular portrait with deep red/burgundy tones
- The word "DANIEL" in large metallic gold serif display font (appears to be a custom/decorative serif with stone-carved texture)
- "IN THE LIONS' DEN" in matching gold, slightly smaller
- Tagline above: "A LIVE MUSICAL EXPERIENCE" in smaller condensed all-caps
- Bottom: "ALSO FEATURING THE STORY OF / ESTHER / THE BRAVEST QUEEN" in an ornate gold badge/seal

**Color samples taken directly from the poster:**
| Role | Hex (approximate) | Usage |
|---|---|---|
| Background deep | `#0D0600` | Page background, hero bg |
| Cave dark brown | `#2B1506` | Section backgrounds |
| Gold headline | `#C8860A` | Display headlines, borders |
| Gold bright | `#F0B429` | Hover states, accents, CTA |
| Warm cream text | `#F2E0C0` | Body text on dark |
| Spotlight warm | `#F5C44A` | Glow effects, highlights |
| Esther rose | `#7A1F3D` | Esther's story sections |
| Esther gold | `#C4923A` | Esther accents |
| Stone mid | `#4A2E1A` | Cards, borders, dividers |

### What needs to be generated (no source provided):
- Navigation bar (style direction: dark stone texture with gold logo, links in cream, gold "Buy Tickets" pill button)
- Footer layout (dark, minimal, gold logo, social links, nav links, legal)
- Card hover states
- Mobile menu behavior
- Loading/transition states

---

## 8. Typography

**Display / Hero Headlines:** Decorative serif with a stone-carved or metal-stamped quality. Options to try: *Cinzel*, *Trajan Pro*, *Cormorant Garamond* (heavy weight). All-caps or title-case. Gold color `#C8860A`.

**Section Headlines (H2):** Same family, slightly lighter weight. Can include a thin gold underline rule.

**Body text:** Clean humanist sans-serif for readability. *Nunito*, *Lato*, or *Open Sans* at 16–18px. Color: `#F2E0C0`.

**CTA labels:** Bold condensed sans-serif, all-caps. Color: deep dark `#0D0600` on gold button, or gold on transparent.

**Avoid:** Any font that reads as modern/tech. No geometric sans (Inter, DM Sans). No Comic Sans or anything that reads "clip art children's."

---

## 9. Site Architecture

Five pages, mirroring the Blippi reference site structure:

| Page | URL slug | Primary CTA |
|---|---|---|
| Home | `/` | Buy Tickets |
| Schedule | `/schedule` | Ticket links per show date |
| About the Show | `/about` | Buy Tickets |
| Activities | `/activities` | Download (free) |
| FAQ | `/faq` | Buy Tickets (sticky) |

**Global nav (every page):**
- Left: Show logo
- Center: Home · Schedule · About the Show · Activities · FAQ
- Right: "BUY TICKETS" pill button (gold `#F0B429`, dark text)
- Mobile: hamburger menu, full-screen overlay with same links

---

## 10. Section Inventory — Page by Page

### HOME PAGE

**Required sections (in order):**

1. **Hero** — Full-viewport. Key art image (Daniel + lions) as background with overlay. Show title lockup in gold. Tagline: "A Live Musical Experience." Two CTAs: primary "BUY TICKETS" (gold), secondary "SEE TOUR DATES" (outlined). Ticker/scrolling banner above nav: "TICKETS ON SALE NOW · [CITY] · [DATE] · TICKETS ON SALE NOW ·" (gold on dark, looping).

2. **Show intro** — Short paragraph (2–3 sentences) describing the show in warm, parent-friendly language. Stat bar with 3 icons: Show Length, Audience Participation, Age Range. (Same structure as Blippi's "Length · Interaction · Age" row.)

3. **Upcoming shows in your area** — Section headline. List of 4–6 upcoming dates with: City, Venue, Date, two buttons (Tickets / More Info). Gold on dark card rows. "SEE FULL SCHEDULE" link below.

4. **About the story** — Split layout: left side show imagery or character art, right side copy about Daniel's courage and the featured Esther story. Short, emotionally resonant. Not a Bible lesson.

5. **Gallery** — 4–6 image grid of production photos or key art variants. Dark background, images edge-to-edge.

6. **Email signup** — "Get ticket alerts, exclusive content & surprises straight to your inbox." Simple email field + button. Gold accent. Optional: mention of a free downloadable activity for signing up.

7. **Footer** — Logo, nav links, social icons (Instagram, Facebook, TikTok, YouTube), legal links, copyright.

**Forbidden from Home:**
- No pricing tables on the homepage (ticket prices vary by venue — link to venue pages)
- No testimonial quote carousels (adds clutter, feels corporate)
- No "Our Team" or "About Us" corporate sections
- No partner logo grids
- No auto-playing video with audio

---

### SCHEDULE PAGE

**Required:**
1. **Page hero** — Show imagery header, page title "SCHEDULE" in gold. Optional filter tabs: All / Region filters.
2. **Show listing table** — Each row: Date | City, State | Venue Name | [BUY TICKETS button] [MORE INFO button]. Alternating dark rows. Gold accent on CTA buttons.
3. **"More cities coming" callout** — "Don't see your city? Sign up for alerts." Email capture inline.
4. **Footer** — Standard.

**Forbidden:**
- No Google Maps embeds on this page (slow, distraction)
- No reviews or star ratings per show

---

### ABOUT THE SHOW PAGE

**Required (in order):**
1. **Hero** — Full-width show imagery, page title "ABOUT THE SHOW"
2. **Show description** — 3–4 paragraphs. The story of Daniel, why it matters, what the live experience is like. Mention Esther's story as the second act or feature.
3. **Character section** — "Meet the Characters": Daniel card + Esther card. Simple, illustrated style, short descriptions.
4. **Production specs bar** — Show Length · Audience Participation · Recommended Age · Sensory Note (for families with sensory-sensitive children).
5. **Gallery** — 6–8 images in masonry or grid. Dramatic production photography.
6. **CTA block** — Large gold "BUY TICKETS" button, full-width dark section.
7. **Footer** — Standard.

**Forbidden:**
- No cast bios or staff headshots (this is a children's show site, not a theatre company portfolio)
- No "director's note" style essay copy

---

### ACTIVITIES PAGE

**Required:**
1. **Page hero** — Energetic header. "ACTIVITIES" in gold. Subtitle: "Keep the adventure going after the show."
2. **Activity grid** — Cards for each downloadable activity. Each card: thumbnail preview, activity name, short description, "DOWNLOAD" button. Activities to include:
   - Daniel Coloring Page
   - Lions' Den Maze
   - Esther's Brave Choices activity sheet
   - Verse Memory card (Daniel 6:22 or similar)
   - "Design Your Lion" drawing prompt
   - Match the Bible character quiz
3. **Email gate (optional)** — Before download, ask for email: "Get this free download + be the first to hear about new shows."
4. **Footer** — Standard.

**Forbidden:**
- No paid activities or premium content wall
- No app store links or external redirects on this page

---

### FAQ PAGE

**Required:**
1. **Page hero** — Dark background, "FREQUENTLY ASKED QUESTIONS" in gold.
2. **Tabbed categories** — General | Ticket Info | Accessibility | Photography | Age & Content
3. **Accordion Q&A** — Questions expand on click. Cream text on dark background. Gold chevron icon.

**Required FAQ questions to include:**
- What is Daniel in the Lions' Den?
- How long is the show?
- What ages is the show appropriate for?
- Is the show suitable for toddlers or babies?
- Are strollers permitted inside the venue?
- Will there be special effects (lights, sounds, fog)?
- Is there audience participation?
- Is the show overtly religious / is it church-appropriate?
- Are there accessible seating options?
- Will there be a meet-and-greet or photo experience?
- What time should I arrive?
- Why isn't the show coming to my city?

4. **Sticky "BUY TICKETS" CTA** — Fixed bottom bar on mobile.
5. **Footer** — Standard.

**Forbidden:**
- No chatbot widget
- No contact form on this page (direct to email/social instead)

---

## 11. Sample Content & Copy Direction

### Show tagline options (pick one or A/B test):
- "Courage Has a Name."
- "Where Faith Meets the Spectacular."
- "The Greatest Story. Live on Stage."
- "Into the Den. Into the Light."

### Homepage hero headline:
**"DANIEL**
*in the Lions' Den*"
*(Show title IS the headline — don't add a separate marketing headline above the logo lockup)*

### Homepage show intro copy (draft):
> Get ready to step into the greatest story ever told — live. Daniel in the Lions' Den brings the Bible to life with high-energy music, spectacular live action, and unforgettable moments of courage and faith. Featuring the story of Esther the Bravest Queen, this is an adventure the whole family will treasure long after the curtain falls.

### Homepage CTA button label: `BUY TICKETS`
### Secondary CTA: `SEE SHOW DATES`
### Email signup CTA: `GET TICKET ALERTS`
### Download CTA: `FREE DOWNLOAD`

---

## 12. Reference Sites (Structural Inspiration)

| Site | What to borrow |
|---|---|
| Blippi Live Tour site | Page structure, section order, schedule table layout, activities page concept, email signup placement |
| Sight & Sound Theatre | Dark premium aesthetic, production quality signals, biblical story framing |
| Disney Live (on Tour) | Hero treatment, gallery section, "upcoming in your area" format |

**Key structural difference from Blippi:** Blippi uses bright blue as its dominant color. Daniel uses near-black with gold — same page structure, completely different emotional register. The architecture is the same; the atmosphere is entirely different.

---

## 13. Things to Avoid (Global)

- No gradient mesh backgrounds that look like vaporwave
- No light mode / white backgrounds on any section (the whole site lives in the dark)
- No stock photography of families — use show art and production imagery only
- No generic rounded-corner SaaS cards (the card style should feel hand-crafted, stone, or parchment-textured)
- No confetti, emoji, or characters waving at the user (that's the Blippi register, not Daniel's)
- No auto-playing audio or video
- No cookie consent popups that cover the hero on first load (handle in footer)
- No "modern minimalist" whitespace — the design should feel *full*, *epic*, and *immersive*, not airy

---

## 14. Mobile-First Notes

- Hero: Show title and CTA visible above fold on iPhone 14 (390px wide)
- Ticker banner: must scroll smoothly on mobile, no layout break
- Schedule table: collapses to stacked cards on mobile (Date / City / Venue / Button each on own line)
- FAQ: Accordion works touch-first — large tap targets (min 48px)
- Sticky "BUY TICKETS" bar on mobile: appears after user scrolls past hero
- Activities grid: 2 columns on mobile, 3–4 on desktop

---

---

## 15. Visual Brightness Amendment (v1.1)

The site should **not** feel like an unbroken dark cave. The poster itself is the model: a dramatic light beam breaks through darkness from above — that beam of warm gold light IS the brand. Brightness is welcome; it just must be warm, never clinical.

**The rhythm:** Deep dark → warm illuminated → deep dark → warm illuminated. Neither end of the spectrum should persist for more than two sections in a row.

**Expanded color palette with light values:**

| Role | Hex | Usage |
|---|---|---|
| Warm parchment (light bg) | `#FDF5E6` | Light sections — About copy, FAQ answers, Activity cards |
| Warm cream (light bg alt) | `#F5EDD8` | Alternating light sections |
| Deep cave (dark bg) | `#0D0600` | Hero, dramatic sections, footer |
| Cave mid (dark bg alt) | `#2B1506` | Dark alternating sections |
| Gold headline | `#C8860A` | Headlines on both light AND dark backgrounds |
| Gold bright | `#F0B429` | CTAs, accents |
| Dark text on light | `#1A0900` | Body text on parchment backgrounds |
| Warm body on dark | `#F2E0C0` | Body text on dark backgrounds |

**What "bright" means here:**
- Warm parchment backgrounds (`#FDF5E6`) feel like candlelight or aged manuscript — not modern white
- Spotlight effects: a soft warm radial glow (`rgba(245,196,74,0.08)`) behind section heroes
- Gold accents pop even brighter on dark backgrounds because of the contrast rhythm
- Never use: cool grey, ice blue, flat white, or any background that reads as "tech/SaaS"

**Section brightness map (homepage as model):**
| Section | Background |
|---|---|
| Ticker banner | Dark |
| Nav | Dark (semi-transparent) |
| Hero | Dark (key art + overlay) |
| Show intro / stat bar | **Light (warm parchment)** |
| Upcoming shows | Dark |
| About the story | **Light (warm parchment)** |
| Gallery | Dark |
| Email signup | **Light (warm cream)** |
| Footer | Deepest dark |

---

*Brief version 1.1 — June 2026 (brightness amendment added)*
*Working directory: C:\Users\daeld\Desktop\Daniel in the Lions Den*
