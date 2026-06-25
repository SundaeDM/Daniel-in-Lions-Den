# FAQ Page Brief — Light / Warm Storybook Theme

---

## Page Purpose

Remove every remaining hesitation preventing a parent from buying a ticket. Same functional goal as the dark theme FAQ — different emotional delivery.

---

## How This Differs from the Dark Theme Version

The dark theme FAQ is calm and professional — a knowledgeable box office manager. This version is **warm and conversational** — a kind friend who saw the show last weekend and can't wait to tell you how great it was. Questions are answered not just accurately but enthusiastically. The parent should feel: "These people genuinely love this show and want my family to love it too."

---

## Visual Brightness

**Fully light — the most uniformly cream page on the site.** The warm dark hero is kept brief. The entire accordion lives on cream/parchment. The only color breaks are the sage green section and warm dark footer.

Section rhythm: Warm dark hero → Cream tabs + accordion → Sage green contact → Gold CTA block → Warm dark footer

---

## Section Inventory

### 1. PAGE HERO
- **Background:** Rich warm dark (`#2C1A08`)
- **Content:** Page title "Questions?" in Playfair Display, `--color-gold-bright`. Note the informal, inviting single word vs. "FREQUENTLY ASKED QUESTIONS" — this signals the warmth of the page to come.
- **Subhead:** "We're happy to help. Here's everything you need to know." — Nunito, cream muted.
- **Decorative:** A small illustrated speech bubble or question mark motif in `--color-gold-accent`
- **Height:** 200px desktop, 150px mobile — very compact, get to the answers fast

### 2. TABBED NAVIGATION
- **Background:** Cream (`#FDF5E6`) — sticky on scroll (pins below global nav)
- **Tabs:** `General` · `Tickets & Pricing` · `Accessibility` · `Photo Experience` · `Age & Content`
- **Style:** Same pill-shaped tabs as other pages. Active: gold fill, dark text. Inactive: sand, muted, gold border.
- **Padding:** 24px above and below the tab row

### 3. FAQ ACCORDION
- **Background:** Cream (`#FDF5E6`)
- **Each accordion item:**
  - Question: Playfair Display, 17px, `--color-text-dark`. The slightly serif quality of Playfair here makes each question feel like a friendly letter, not a database entry.
  - Expand chevron: `--color-gold-accent`, right-aligned. Rotates 180° when open, 0.25s ease.
  - Divider: 1px `--color-bg-sand` warm tan between items
  - Answer: Nunito, 16px, `--color-text-dark`, line-height 1.75. Padding: 0 24px 24px 24px. Smooth expand 0.25s ease.
  - Warm highlight on open item: very subtle `--color-bg-sand` tint on the open item's background — marks it as active without being loud
  - First item per category: open by default
- **Max-width:** 780px centered

### 4. COMPLETE QUESTION LIST BY CATEGORY

*(Identical set to the dark theme — same questions, different answer tone)*

**GENERAL**
- What is Daniel in the Lions' Den?
- Is this a religious show? / Is it church-appropriate?
- Who produces the show?
- How is this different from other children's theatre?
- What is the story of Esther, and why is it featured alongside Daniel?

**TICKETS & PRICING**
- How do I buy tickets?
- Are there group discounts for churches, schools, or homeschool groups?
- Can I get a refund or exchange my tickets?
- Are there VIP or premium seating options?
- Why isn't my city on the schedule yet?
- How do I find out when the show is coming to my city?

**ACCESSIBILITY**
- Is there accessible/wheelchair seating available?
- Are strollers permitted inside the venue?
- Is the show suitable for children with sensory sensitivities?
- Will there be loud sounds or strobe/flashing lights?
- Is there a sensory-friendly performance option?
- Are hearing loops or assistive listening devices available?

**PHOTO EXPERIENCE**
- What is the Photo Experience?
- How do I add a Photo Experience to my order?
- When does the Photo Experience take place?
- What should my child wear?
- Will there be printed photos or digital?
- How quickly will I receive my photos?

**AGE & CONTENT**
- How long is the show?
- Is the show suitable for toddlers or babies?
- Is the content scary for young children?
- Does my baby/lap child need a ticket?
- Are there any mature themes?
- What is the recommended age range?
- Will there be audience participation?

### 5. ANSWER TONE — WARM STORYBOOK VARIATION

Where the dark theme answers are calm and clear, these answers are warm and enthusiastic. Guidelines:

1. **Lead with warmth, then the answer.** A one-word answer is fine — but it can arrive with a smile. "Absolutely — children 3 and up tend to love this show."
2. **Speak from experience.** Write as if you've seen hundreds of families come through. "We've had kids as young as 2 in the audience who were mesmerized."
3. **Sensory questions get extra gentleness.** Parents of sensory-sensitive children are often anxious. Meet them there. "We want every child to feel comfortable and welcome..."
4. **Avoid corporate hedging.** Not "seating arrangements may vary." Instead: "Every venue is different — check your venue's page when booking, or email us and we'll get you sorted."
5. **Never start with the restriction.** If strollers are allowed with conditions: lead with "Yes, strollers are welcome" — then explain the details.

**Example answer (warm storybook version):**
> **Is the content scary for young children?**
> It's exciting — which is different from scary! The lions' den scene builds suspense, but it resolves in the most joyful, triumphant way. We've had children as young as 3 sit completely rapt. That said, there are moments of dramatic lighting and music, so if your little one is sensitive to loud sounds, we'd recommend ear protection just in case — and maybe a seat near the aisle so you can slip out for a quick hug if needed. Most kids leave buzzing with excitement, not fright.

### 6. STILL HAVE QUESTIONS?
- **Background:** Sage green (`#5E7A52`)
- **Content:** Headline: "Still have a question?" (Playfair Display, cream). Subhead: "We'd love to hear from you. Reach us at hello@danielinthelionsden.com or find us on social." (Nunito, cream muted). Gold social icons.
- **Tone:** Genuinely inviting, not a customer service formality.

### 7. BUY TICKETS CTA BLOCK
- **Background:** Gold amber (`#C8860A`) — same celebratory gold used on the About page
- **Content:** Headline: "Ready for the adventure?" (Playfair Display, cream). "BUY TICKETS" button (dark fill, cream text, large). Subhead: "Choose your city and find show dates near you." (Nunito, cream muted).
- **Height:** 280px minimum.

### 8. MOBILE STICKY CTA BAR
- Warm dark background (`#2C1A08`), full-width gold "BUY TICKETS" button
- Appears after hero exits viewport, disappears when at bottom CTA block

### 9. FOOTER
- Standard warm dark footer.

---

## Mobile Behavior

- Tabs: horizontally scrollable pill row, pinned below nav on scroll
- Accordion questions: 48px minimum tap target
- Open accordion items: full answer text wraps comfortably at 390px
- Sticky CTA: as described above
- Contact social icons: 44px tap target minimum

---

## Forbidden

- No chatbot widget
- No contact form
- No "Submit a question" feature
- No star ratings on FAQ items ("Was this helpful?")
- No answer that starts with "Please note" or "Please be advised"
- No cold or clinical language anywhere on this page

---

## Sample Copy

**Page title:** Questions?
**Subhead:** We're happy to help. Here's everything you need to know.
**Contact headline:** Still have a question?
**Contact subhead:** We'd love to hear from you. Reach us at hello@danielinthelionsden.com or find us on social.
**CTA headline:** Ready for the adventure?
**CTA subhead:** Choose your city and find show dates near you.
**CTA button:** BUY TICKETS
