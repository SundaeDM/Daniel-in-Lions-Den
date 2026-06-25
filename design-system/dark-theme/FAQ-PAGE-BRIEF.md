# FAQ Page Brief — Daniel in the Lions' Den

---

## Page Purpose

Remove every remaining objection that would stop a parent from buying a ticket. By the time someone reaches the FAQ page, they're interested but not yet committed — something is holding them back. Every question and answer exists to dissolve that hesitation and put them one click away from checkout.

**Primary CTA:** Buy Tickets (sticky on mobile, repeated at page bottom)
**Secondary goal:** Make parents feel understood — like someone anticipated exactly their concern

---

## Emotional Register

Reassurance. The tone here is warmer and more conversational than the rest of the site — less dramatic, more human. Think of a friendly, knowledgeable box office manager who's answered these questions a hundred times and genuinely wants to help you enjoy the show. Not corporate FAQ language ("Please note that..."), not nervous disclaimers — direct, warm, helpful.

---

## Visual Brightness

**Mixed — leans light for readability.** FAQ content is text-heavy, so it primarily lives on **warm parchment** (`#FDF5E6`) for comfortable reading. The hero header is dark. The sticky CTA bar is dark. Between category sections, thin gold rules provide visual rhythm without adding background switches.

Section rhythm: Dark hero → Light tab/accordion content → Dark CTA footer block → Dark footer

---

## Section Inventory

### 1. PAGE HERO
- **Background:** Dark (`#2B1506`), simpler than the homepage hero — more header than hero
- **Content:**
  - Page title: "FREQUENTLY ASKED QUESTIONS" in Cinzel, gold
  - Subhead: "Everything you need to know before the show." in Lato, cream
- **Height:** Compact — 220px desktop, 160px mobile

### 2. TABBED CATEGORY NAVIGATION
- **Background:** Warm parchment (`#FDF5E6`) — this sticks at the top of the accordion area as the user scrolls
- **Tabs:** Five categories, displayed as horizontal tabs
  - `General` · `Tickets & Pricing` · `Accessibility` · `Photo Experience` · `Age & Content`
- **Tab style:**
  - Active: gold fill (`#F0B429`) tab, dark text, Cinzel, all-caps
  - Inactive: warm parchment fill, gold border, dark muted text
  - On mobile: tabs horizontally scroll if they don't fit; do not wrap to two rows
- **Behavior:** Clicking a tab filters to show only that category's questions in the accordion below. Smooth scroll to top of accordion on tab change.

### 3. FAQ ACCORDION
- **Background:** Warm parchment (`#FDF5E6`)
- **Each accordion item:**
  - Question: Lato bold, 17px, dark (`#1A0900`), left-aligned. Full-width click target.
  - Chevron icon: right-aligned, gold (`#C8860A`). Rotates 180° when open.
  - Divider: 1px `#D4B896` warm tan between items
  - Answer: Lato regular, 16px, dark (`#1A0900`). Appears below question with smooth expand animation (0.25s ease). Padding: 0 24px 20px 24px.
  - Answer text color on parchment: `#3A2010` (warm dark brown, not black — maintains warmth)
  - First question in each category is open by default
- **Max-width:** 800px centered — do not let answers span full page width

### 4. COMPLETE QUESTION LIST BY CATEGORY

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
- When does the Photo Experience take place (before/after the show)?
- What should my child wear for the Photo Experience?
- Will there be printed photos, or are they digital?
- How quickly will I receive my photos?

**AGE & CONTENT**
- How long is the show?
- Is the show suitable for toddlers or babies?
- Is the content scary for young children?
- Does my baby/lap child need a ticket?
- Are there any mature themes parents should be aware of?
- What is the recommended age range?
- Will there be audience participation? How involved does my child need to be?

### 5. STILL HAVE QUESTIONS? CONTACT BLOCK
- **Background:** Warm parchment, or same parchment continuing — no background change needed
- **Layout:** Centered, below the accordion
- **Content:** "Still have a question?" in Cinzel, gold. Subhead: "Reach us at [email] or find us on social." Social icons in gold. Keep it simple — no contact form.
- **Note:** Do NOT add a chatbot widget or AI assistant. Direct human contact only.

### 6. BUY TICKETS CTA BLOCK
- **Background:** Dark (`#0D0600`) — hard break to close the page
- **Content:** Centered. Large Cinzel headline: "Ready to experience it for yourself?" Gold "BUY TICKETS" button. Below in muted text: "Select your city and find show dates near you."
- **Height:** 280px minimum — generous, emotional close to the page

### 7. MOBILE STICKY CTA BAR
- Fixed to bottom of viewport on mobile
- Dark background (`#0D0600`), full-width gold "BUY TICKETS" button, 60px tall
- Appears after hero scrolls out of view
- Disappears when user is at the page bottom CTA block (to avoid double CTA overlap)

### 8. FOOTER
- Standard dark footer.

---

## Answer Tone Guide

The answers to FAQ questions should follow these rules:

1. **Lead with the answer, not the setup.** Don't say "That's a great question! The show features..." — just answer: "Yes, the show features..."
2. **No legal hedge language.** Not "Please note that seating arrangements may vary by venue." Instead: "Seating varies by venue — check your venue's accessibility page when booking, or email us and we'll help."
3. **Use "you" and "your child," not "guests" or "attendees."** Keep it personal.
4. **Short answers when possible.** If the answer is yes or no, lead with that. The elaboration is secondary.
5. **Warm, not clinical.** A question about sensory sensitivity should be answered with extra care and gentleness.

**Example answer (Age & Content):**
> **Is the content scary for young children?**
> The story of Daniel in the lions' den is dramatic — that's part of what makes it powerful. There are moments of suspense and intensity, but nothing is gratuitous. The show is designed to be age-appropriate for children 3 and up, and ends with a triumphant, joyful resolution. Most children leave excited, not frightened. If your child is particularly sensitive to loud sounds or dramatic lighting, we recommend checking with your venue for sensory-friendly seating options.

---

## Mobile Behavior

- Tabs: horizontally scrollable, 44px minimum height
- Accordion items: 48px minimum tap target on question row
- Sticky CTA: as described above
- Contact block: social icons large enough to tap (44px)
- No horizontal scrolling on accordion content

---

## Forbidden

- No chatbot or AI assistant widget
- No contact form (email/social direct link only)
- No "Submit a question" feature (scope creep, maintenance burden)
- No video answers embedded in accordion items
- No affiliate links or sponsor mentions
- No answers written in third person ("The show provides...")
- No copy that begins with "Please note" or "Please be advised"

---

## Sample Copy

**Page title:** FREQUENTLY ASKED QUESTIONS
**Subhead:** Everything you need to know before the show.
**Still have questions headline:** Still have a question?
**Still have questions subhead:** Reach us at hello@danielinthelionsden.com or find us on social.
**Bottom CTA headline:** Ready to experience it for yourself?
**Bottom CTA subhead:** Select your city and find show dates near you.
**Bottom CTA button:** BUY TICKETS

---

## Prompt Addendum (for Claude Design)

When building the FAQ page:
- The accordion is the primary UI element — invest design care here. It should feel polished, not like a default HTML details/summary element.
- The tabbed navigation needs a sticky behavior: on scroll, the tab row pins to the top of the viewport (below the global nav) so the user can always switch categories without scrolling back up.
- The parchment background on the accordion area should feel like aged paper — a very subtle noise texture at 2–3% opacity adds warmth without being distracting.
- Answers should have enough line-height (1.7) and padding that long answers are comfortable to read on mobile.
- The Contact block should be minimal — a two-line text block and gold social icons, nothing more.
