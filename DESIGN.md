---
name: Denslab
description: A small studio's landing page built as a framed music-app console, with services you switch like channels.
colors:
  ground: "#e3e3e6"
  frame: "#f4f4f5"
  panel: "#ffffff"
  ink: "#17171a"
  ink-muted: "#63636b"
  muted-fill: "#ededf0"
  secondary-fill: "#ebebee"
  hairline: "#e4e4e8"
  input-line: "#d6d6dc"
  sun: "#ffdd33"
  sun-deep: "#f5c400"
  flame: "#f2541b"
  flame-ink: "#2a0b00"
  sky: "#8fb3f5"
  sky-ink: "#0d1b3d"
  leaf: "#8c9a2c"
  chart-blue: "#6f96e8"
typography:
  display:
    fontFamily: "Figtree Variable, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(42px, 3.6vw, 58px)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.035em"
  display-strong:
    fontFamily: "Figtree Variable, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(42px, 3.6vw, 58px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Figtree Variable, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(30px, 3vw, 44px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Figtree Variable, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Figtree Variable, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Figtree Variable, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Figtree Variable, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.25
rounded:
  chip: "16px"
  tile: "22px"
  panel: "28px"
  stage: "32px"
  frame: "36px"
  pill: "9999px"
spacing:
  gutter-mobile: "12px"
  panel-pad: "20px"
  grid-gap: "24px"
  frame-pad-desktop: "32px"
  section-gap: "64px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.panel}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-ink-lg:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.panel}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  icon-button-round:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "48px"
  service-chip:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "48px"
  rail-tab-active:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "40px"
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "20px"
  panel-flame:
    backgroundColor: "{colors.flame}"
    textColor: "{colors.panel}"
    rounded: "{rounded.panel}"
    padding: "20px"
  panel-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.panel}"
    rounded: "{rounded.panel}"
    padding: "20px"
  stage:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stage}"
  nav-pill-active:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  lang-toggle-active:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "36px"
---

# Design System: Denslab

## Overview

**Creative North Star: "The Studio Console"**

The page is one large console in the style of a music app. A pale frame sits on a light gray ground, and inside it white panels with big rounded corners hold the content. A few saturated fields own whole regions: a sun-yellow stage, an orange promo panel, an ink "now playing" bar and a periwinkle tile. The four services act as channels. A vertical icon rail, round chips and arrow steppers switch the stage between them, and the booking action follows whichever channel is active. The composition was pinned by the owner to a pair of "Frogsound" music-app reference images, and this build follows them.

Density is medium and bento-like. Panels sit close together with even 20 to 24px gaps, and each one contains a single idea. Colour is the loud part of the system. Type and form stay plain: one geometric sans (Figtree) with a strong contrast between light and extra-bold weights, and fully round pills, chips and play circles. The page draws no lines, grids or rules of its own. Panels are separated by fill and a soft ambient shadow.

All example work is an authored mockup labelled as an example ("contoh"). The client brands inside those mockups (coffee shop, chili sauce, kraft packaging) carry their own fictional palettes, and those palettes are not part of Denslab's UI.

**Key Characteristics:**
- Framed console: ground, then frame, then white panels, each step lighter and rounder.
- Four saturated fields (sun, flame, ink, sky), each owning a whole region rather than appearing as small accents.
- Light/extra-bold weight contrast within a single display line.
- Everything clickable is round: pill buttons, circular chips, circular play and step controls.
- Ink carries every action; flame orange is the one hot accent and the focus colour.
- A music-player vocabulary (equalizer, now-playing bar, play/skip controls, "01 / 04" stepper) used to show how a project progresses.

## Colors

Neutral grays and white, broken up by four saturated fields borrowed from the reference: a warm yellow, an orange-red, a near-black and a soft periwinkle.

### Primary
- **Studio Ink** (ink): carries every action, including the booking pills, the play circle and the active booking chip. It also fills the now-playing bar, the booking ticket and the closing CTA tile. Doubles as the text colour.
- **Flame Orange** (flame): the one hot accent. Used for the data-automation promo panel, the dot in the logo, section-divider dots, check marks, the focus outline, the text caret and the first chart series.

### Secondary
- **Sun Yellow** (sun): the hero stage field, the booking section field, the active rail tab, the active language toggle, text selection and the step counter tile.
- **Deep Sun** (sun-deep): the progress fill on the ink bar and the second chart series. Also tints the active rail tab's coloured shadow.

### Tertiary
- **Periwinkle** (sky): a soft field for the data-service chip and for work tiles. Text on it uses **Night Navy** (sky-ink).
- **Olive Leaf** (leaf): fifth chart series only.
- **Chart Blue** (chart-blue): a deeper periwinkle used as the third chart series, because the sky field is too pale for a line.
- **Flame Ink** (flame-ink): dark body text on the flame panel, where white body copy would be too weak.

### Neutral
- **Gallery Gray** (ground): the page ground behind the frame.
- **Frame White** (frame): the large console frame that holds every panel.
- **Panel White** (panel): cards, the rail, the nav pill, round icon buttons.
- **Muted Fill** (muted-fill) and **Secondary Fill** (secondary-fill): quiet fills for "you get" notes, small stepper buttons and their hover state.
- **Ink Muted** (ink-muted): secondary text and inactive nav items.
- **Hairline** (hairline): the only rule in use, inside a panel between a chip row and its description, plus the process timeline.
- **Input Line** (input-line): nav separators and form outlines.

Example-work mockups also use fictional client colours: kopi #5b3a29, krem #f3e6d3, karamel #c8894b, chili #c8281e, daun #3f7d3a, kraft #b98a5a and kraft-ink #2f4f3a. They are declared in `src/index.css` for convenience only. They belong to the imaginary clients, never to Denslab surfaces, and are left out of the token set on purpose.

### Named Rules
**The Field Ownership Rule.** A saturated colour fills a whole region (a stage, a panel, a tile or a chip), not a thin border or a small badge. When a field is saturated, everything inside it is ink or white.

**The Ink Acts Rule.** Every primary action is an ink pill. Flame is never used for a button fill; it marks focus and emphasis.

**The Client Palette Quarantine Rule.** Colours of the fictional client brands appear only inside mockup frames labelled as examples.

## Typography

**Display Font:** Figtree Variable (with ui-sans-serif, system-ui)
**Body Font:** Figtree Variable
**Label/Mono Font:** JetBrains Mono is declared by Dens-UI but not used on this page.

**Character:** A single friendly geometric sans. Hierarchy comes from weight and size rather than from a second family. Display lines put a light (300) phrase next to an extra-bold (800) one, the way the reference sets its titles.

### Hierarchy
- **Display** (300 and 800 mixed, clamp(42px, 3.6vw, 58px), line-height 1, -0.035em): the hero only. The first two lines are light and the last is extra-bold.
- **Headline** (800, clamp(30px, 3vw, 44px), 1.05, -0.03em, balanced): section titles for Process, Work and FAQ. The booking title grows to clamp(34px, 4vw, 60px) and the dashboard title shrinks to clamp(28px, 2.6vw, 38px).
- **Title** (700, 17px, tight tracking): panel headers ("Services", "Now playing", "Recommended work") and step names.
- **Body** (400, 15.5px, 1.625, 36 to 52ch): hero and section intros, in ink-muted.
- **Body Small** (400, 13.5px, 1.625): panel descriptions and promo copy.
- **Label** (600, 11 to 12.5px, sentence case): chip captions, stepper counts, "see all" links. Counters use tabular numbers.

### Named Rules
**The Weight Contrast Rule.** Display emphasis comes from swapping between weight 300 and weight 800 inside one line, never from colour, italics or gradient text.

**The Sentence Case Rule.** Interface labels are sentence case. The language toggle (EN/ID) is the only uppercase-tracked UI text. Uppercase type inside mockups belongs to the fictional client brands.

## Layout

The page is a single framed console: a centred frame up to 1560px wide with a 36px radius, sitting 12, 20 or 24px in from the viewport edge (mobile, tablet, desktop). Frame padding grows from 16px to 24px, then 32px, then 40px. At lg the first viewport uses a four-column grid: a 56px icon rail, the hero copy (0.95fr), the yellow stage (1.05fr) and a side column (minimum 300px, 0.85fr) holding the services panel above the flame promo. Below that, a two-column row puts the now-playing bar (1.15fr) next to the recommended-work strip (1fr). Panel gaps are 20px on mobile and 24px from lg.

Content sections below the fold (Process, Dashboard, Work, FAQ, Booking) are separated by a divider with a single flame dot, with 48px of space above and below on mobile and 64px from lg. Section heads pair a headline with an intro, in a sticky left column or a two-column header row. The Work section is a three-column bento grid in which some tiles span two columns.

Under lg everything stacks in reading order, the rail and nav pill are hidden, and a fixed booking bar shaped as a white pill rides 12px above the bottom edge, carrying the active service and an ink "Book" button. The page leaves 112px of bottom padding so the bar never covers the footer.

## Elevation & Depth

Depth is mostly tonal: gray ground, then a lighter frame, then white panels. Saturated fields carry no shadow. A soft two-layer ambient shadow lifts white panels and controls off the frame, and a stronger one marks things that float (the mobile booking bar, the booking ticket, the receipt in the promo panel). The frame itself casts one long, low shadow onto the ground.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 1px 2px rgb(23 23 26 / 0.04), 0 12px 30px -16px rgb(23 23 26 / 0.16)`): every white panel, the rail, the nav pill, the language toggle and round white buttons.
- **Raised** (`box-shadow: 0 2px 6px rgb(23 23 26 / 0.06), 0 22px 44px -18px rgb(23 23 26 / 0.3)`): floating elements such as the mobile booking bar, the booking ticket and paper props inside mockups.
- **Frame** (`box-shadow: 0 30px 80px -40px rgb(23 23 26 / 0.35)`): the console frame only.
- **Sun Glow** (`box-shadow: 0 6px 14px -6px rgb(245 196 0 / 0.9)`): under the active rail tab.

### Named Rules
**The Soft Lift Rule.** Shadows are diffuse and offset downward with negative spread. Hard offset shadows have no place in this world.

## Shapes

Large and soft everywhere, with the radius growing as the container grows: chips and small tiles use 16px, process rows 22px, panels 28px, stages and the booking field 32px, and the frame 36px. Every interactive control is fully round: pill buttons, circular icon chips (40 to 56px), circular play and step buttons. The one deliberate break from smooth curves is the torn-paper zigzag at the bottom of the receipt prop. Selection on a chip or tile is shown by a 2px ink ring with a 2px white offset, not by a change of fill.

## Components

### Buttons
- **Shape:** full pill (9999px).
- **Ink (primary):** ink fill, white text, 600 weight. Sizes are 44px in the top bar, 48px for hero and section CTAs (lg, 15px text), and 40px in the mobile bar. A faint inner top highlight sits on the fill. An icon may lead (a filled play triangle on the hero CTA) or trail (a calendar check in the top bar).
- **Hover / Focus / Active:** hover drops the fill to 85% ink. Focus shows a 2px flame ring with a 2px offset. Pressing nudges the button down 1px.
- **Round icon button:** a white 48px circle with the panel shadow and an arrow glyph from the line-icon set, lifting 2px on hover. On saturated fields the same circle is used at 40px (flame promo) or 56px in sun (closing CTA tile), sliding right on hover.
- **Player controls:** on ink, a white 44px play/pause circle with transparent 36px skip buttons that pick up a 10% white hover.

### Chips
- **Service chip:** a 48px circle filled with the service's own colour (website sun, graphics flame, product ink, data sky) with a 20px line icon, captioned below in 12px semibold. Selected shows the 2px ink ring with offset, and hover lifts it 2px.
- **Booking radio chip:** a 44px pill holding a 32px coloured icon circle plus the service name. Selected becomes ink with a sun icon circle; unselected is 70% white on the sun field.
- **Example tag:** a 70% white pill with backdrop blur and 11px semibold text reading "Example · Service", pinned to the stage corner.

### Cards / Containers
- **Corner Style:** 28px panels, 32px stages.
- **Background:** white for information panels, saturated fields for promotional and stage regions, ink for the now-playing bar and the ticket.
- **Shadow Strategy:** Panel shadow on white and ink panels; saturated fields stay flat (see Elevation & Depth).
- **Border:** none. A hairline appears only inside a panel to separate a description from the controls above it.
- **Internal Padding:** 20px, growing to 24 to 40px on large section fields.

### Navigation
- **Top bar:** the wordmark DENSLAB in extra-bold with a flame full stop, a row of 13px nav links separated by short vertical hairlines, an EN/ID toggle in a white pill (the active side fills sun), then the ink booking pill. The active link becomes a white pill with the panel shadow, a 2px underline and semibold ink text. Inactive links are ink-muted and turn ink on hover. The link row is hidden under lg.
- **Service rail:** a vertical white pill of 40px round tabs (a tablist). The active tab fills sun with the sun glow, the others show ink at 70% with a muted hover, and tooltips name each service on the right.

### Stage (signature)
The hero stage is a sun-yellow 32px field (360 to 440px tall). It holds an animated white equalizer on the left, the active service's mockup, the example tag and a "01 / 04" stepper pill. Choosing a service from the rail, a chip, the stepper or the work strip swaps the mockup: it rises 18px and comes into focus over 520ms on cubic-bezier(0.16, 1, 0.3, 1), and the panel copy follows with an 8px rise over 380ms. The booking link carries the chosen service. Every animation stops under reduced motion.

### Now Playing bar (signature)
An ink panel that presents a sample project as a playing track. It shows a sun step tile ("3 of 6"), the project name, the current stage note, a progress track at 15% white filled in sun-deep, and skip/play controls. Play advances one stage every 2.4s. The panel is labelled as an example.

## Do's and Don'ts

### Do:
- **Do** keep the order ground, then frame, then white panel, with the radius growing at each step (28px, 32px, 36px).
- **Do** give each saturated colour a whole region and keep the content inside it ink or white. Use flame-ink rather than white for body copy on flame.
- **Do** make every primary action an ink pill, and let the booking link carry the active service.
- **Do** set display lines with the 300/800 weight swap and -0.035em tracking.
- **Do** label every mockup, sample project and demo number as an example.
- **Do** show selection with a 2px ink ring and 2px offset, and focus with a 2px flame outline and 3px offset.

### Don't:
- **Don't** use the fictional client colours (kopi, krem, karamel, chili, daun, kraft, kraft-ink) on any Denslab surface.
- **Don't** fill a button with flame or sun. Flame is the hot accent and sun is a field, and actions belong to ink.
- **Don't** add hard offset shadows, borders around panels, or square corners on controls.
- **Don't** add a second typeface or gradient text. Hierarchy comes from Figtree's weights.
- **Don't** put small uppercase tracked labels above headings; section heads are a headline and an intro.
