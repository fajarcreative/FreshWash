---
name: FreshWash / Bening Laundry
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3d4947'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#525e5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#6b7775'
  on-tertiary-container: '#f3fffc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#d8e5e2'
  tertiary-fixed-dim: '#bcc9c6'
  on-tertiary-fixed: '#121e1c'
  on-tertiary-fixed-variant: '#3d4947'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.25rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 1.75rem
---

## Brand & Style

The brand personality centers on cleanliness, effortless reliability, and refreshing clarity. It addresses busy urbanites, families, and professionals seeking frictionless laundry pickup, specialized garment care, and real-time order tracking. The emotional response must feel like crisp, fresh linen: unencumbered, pristine, and reassuring.

The visual direction employs a crisp modern aesthetic driven by soft tactile depth, ambient aqua tints, and generous whitespace. It balances utility with approachable warmth—avoiding clinical sterility through friendly curvature, vibrant cyan accents, and clear micro-interactions.

## Colors

The palette is tuned around aquatic purity and high-contrast legibility:
- **Primary (`#0D9488`)**: A grounded, crisp deep teal representing freshness, care, and hygiene. Used for key interactive triggers, primary buttons, and progress states.
- **Secondary (`#06B6D4`)**: A vibrant cyan that brings energetic pop, used for live status indicators, active tabs, and secondary accents.
- **Tertiary (`#F0FDFA`)**: A soft aqua mist container wash that tints backgrounds, badges, and card surfaces to reinforce the water and clean-fabric metaphor.
- **Neutral (`#0F172A`)**: A deep slate navy providing uncompromising typographic contrast and structure, keeping the interface solid rather than floaty.

Backgrounds default to pure white (`#FFFFFF`) layered over cool tint surfaces (`#F8FAFC`). Muted borders and divider lines leverage a cool gray (`#E2E8F0`).

## Typography

This design system uses **Plus Jakarta Sans** uniformly across headlines, body, and labels. Its friendly geometric curves, wide apertures, and contemporary letterforms evoke clean, breezy clarity while remaining impeccably legible at dense mobile scale.

Headings prioritize bold, confident cuts for instant status scanning (e.g., order stages and pricing totals). Numeric figures and pricing values should utilize `font-feature-settings: 'tnum'` to maintain aligned checkout and weight summaries.

## Layout & Spacing

The layout follows a mobile-first fluid grid optimized for vertical scrolling, thumb ergonomics, and modular card composition. 

- **Canvas Margins**: Set to `1rem` on compact mobile viewports, expanding to `1.25rem` on larger handsets and phablets.
- **Rhythm**: Uses a base 4px/8px incremental scale for inner component padding and vertical card separation.
- **Card Clustering**: Related content blocks (e.g., address selection, pickup time slots, service tiers) sit separated by `space-md` (`0.75rem`), while discrete task groups separate with `space-lg` (`1.25rem`).
- **Safe Areas**: All critical call-to-action modules anchor with bottom safe-area insets plus `space-md` clearance.

## Elevation & Depth

Visual hierarchy relies on ambient shadows with a cool teal/slate cast paired with subtle surface boundaries. Surfaces never feel flat or dry, nor excessively heavy:

- **Flat Container**: Background surfaces use `#FFFFFF` on `#F8FAFC` foundation with a `1px` border of `#E2E8F0`.
- **Card Level 1 (Default Cards, Service Modules)**: Tinted shadow: `0px 4px 16px -2px rgba(15, 23, 42, 0.04), 0px 2px 6px -1px rgba(13, 148, 136, 0.06)`. Border: `1px solid rgba(226, 232, 240, 0.8)`.
- **Card Level 2 (Selected States, Bottom Sheets, Sticky Bars)**: Elevated diffuse shadow: `0px 12px 24px -4px rgba(15, 23, 42, 0.08), 0px 4px 12px -2px rgba(13, 148, 136, 0.08)`.
- **Active Focus**: Soft outer glow using `0px 0px 0px 3px rgba(6, 182, 212, 0.25)`.

## Shapes

The shape system adopts a rounded, soft contour structure (`roundedness: 2`):
- Standard cards, sheet dialogs, and panels apply `1rem` (`16px`) corners.
- Action items, inputs, and list row containers use `0.75rem` (`12px`) or `0.5rem` (`8px`).
- Badges, status chips, and primary floating action buttons use full pill rounding (`9999px`) to emphasize a friendly, bubbly water-droplet aesthetic.

## Components

### Buttons
- **Primary**: Full background `#0D9488` with `#FFFFFF` text, subtle radial gradient highlight towards the top-right corner. Padding: `14px 20px`. Full pill or `12px` roundedness.
- **Secondary / Soft**: Background `#F0FDFA` with `#0D9488` text and a gentle border (`#CCFBF1`).
- **Ghost**: Transparent fill with `#0F172A` text, hover/active state shifts to `#F1F5F9`.

### Chips & Badges
- **Status Badges**: Pill-shaped with subtle tinted backgrounds (e.g., `#CCFBF1` for "Ready for Pickup" with `#0F766E` text; `#FEF3C7` for "Washing" with `#B45309` text).
- **Service Selection Chips**: Bordered pill chips with iconography (e.g., Wash & Fold, Dry Clean, Steam Iron). Selected state shifts background to `#0D9488` with white text.

### Step Trackers (Order Lifecycle)
- A connected vertical or horizontal progress chain showing steps: *Order Placed* → *Driver Assigned* → *Washing & Drying* → *Ironing & Packing* → *Out for Delivery*.
- Active step pulses with a cyan accent ring (`#06B6D4`). Completed steps show a solid teal check badge with an animated connecting bar.

### Cards
- **Order & Service Cards**: Contained within white backgrounds, `16px` border-radius, hairline border, and Level 1 ambient teal drop-shadow. Include clear metadata split (garment weight, ETA, and quick-action triggers).

### Inputs & Selectors
- **Fields**: Background `#FFFFFF`, border `1.5px solid #E2E8F0`, interior padding `14px 16px`. Active focus shifts border to `#0D9488` with a secondary cyan halo.
- **Weight / Bag Counter**: Stepper component with circular +/- buttons and dynamic price calculations displayed prominently in `#0F172A`.

### Checkboxes & Radio Buttons
- Custom circular indicators for wash preferences (e.g., Hypoallergenic Detergent, Delicate Cycle). Active states display a solid `#0D9488` center with smooth scale-in transitions.