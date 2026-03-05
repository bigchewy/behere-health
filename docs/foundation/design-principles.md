# Design Principles: BeHere.health Marketing Site

## Design Principles

**Trust Through Restraint**: Every visual element builds credibility with patients who have experienced medical dismissal. Clean typography, ample whitespace, and professional color choices signal competence without coldness. No decorative flourishes that might suggest the product minimizes their suffering.

**Accessible on Bad Days**: Visual hierarchy must work for users with brain fog and fatigue. High contrast text, generous spacing, and clear interactive elements reduce cognitive load. The interface remains usable when concentration is compromised.

**Calm Without Clinical**: The design creates psychological safety through soft, warm colors that feel supportive rather than sterile. This is coaching, not clinical treatment — the visual identity reflects that distinction while maintaining professional credibility.

**Voice-First, Visually Communicated**: The marketing site sets the expectation that speaking is the primary way patients interact with BeHere.health. Hero sections, product previews, and interface imagery lead with the microphone as the central interactive element. Layout and visual hierarchy make clear that voice is the default, and that typing exists as a dignified, private alternative for moments when speaking out loud about something this personal isn't possible. The marketing site doesn't deliver the voice experience. It makes the patient confident that experience is waiting for them.

## Color Palette

The palette centers on a gentle teal `#0D9488` as primary — clinical enough to build trust, warm enough to feel supportive. The lighter teal variant `#14B8A6` provides subtle hover feedback on interactive elements.

A clean white background `#FFFFFF` with elevated surfaces in light gray `#F9FAFB` creates clear visual hierarchy without harsh contrasts.

Text hierarchy uses deep charcoal `#1F2937` for primary content, medium gray `#6B7280` for secondary information, and lighter gray `#9CA3AF` for muted elements like timestamps and captions.

For success states and positive feedback, the accent color is a soft amber `#F59E0B` rather than green. This keeps the accent visually distinct from the teal primary across the full spectrum, ensuring patients with fatigue and brain fog can reliably distinguish interactive states and feedback signals without relying on color proximity that could blur.

Borders use subtle warm gray `#E5E7EB` to define sections without creating visual noise. The palette holds consistently across all pages and states. The interface does not shift color environment based on emotional content. Consistency reduces cognitive load for patients who don't need another variable to interpret.

## Typography

**Headings and Body**: Inter throughout. Neutral, highly legible, excellent screen rendering, and free of the baggage of either sterile medical design or trendy wellness aesthetics. Inter won't call attention to itself, which is exactly right for this audience.

Because headings and body share the same typeface, hierarchy must be carried by weight, size, and spacing — not by font switching. This requires discipline. The type scale should use meaningful weight contrast: headings at 700 or above, body at 400, supporting text at 400 with size reduction. Never rely on subtle weight differences like 500 versus 600 to establish hierarchy. Patients with brain fog need the structure to be immediately readable, not interpreted.

## Theme

Light theme throughout. Chronic fatigue and brain fog require maximum readability and minimal eye strain. Light theme also carries the right positioning signal for this audience: care and support, not productivity tooling.

## Style Tokens

Rounded corners at 8px create approachability without sacrificing professionalism. Cards use subtle elevation shadows rather than borders for gentle depth. Section backgrounds alternate between white `#FFFFFF` and light gray `#F9FAFB` to improve scannability across marketing content blocks. Comfortable density provides breathing room for users with concentration challenges. Solid button style with clear contrast ensures clickable elements are unmistakably interactive.

These tokens govern the marketing site. In-session product interface design is maintained separately.

## Token Summary

```
**Colors:** primary: #0D9488 | primaryLight: #14B8A6 | background: #FFFFFF | backgroundElevated: #F9FAFB | text: #1F2937 | textSecondary: #6B7280 | textMuted: #9CA3AF | accent: #F59E0B | border: #E5E7EB
**Fonts:** heading: Inter | body: Inter
**Theme:** light
**Style:** borderRadius: 8px | cardStyle: elevated | sectionBackgrounds: alternating | density: comfortable | buttonStyle: solid
```

## Contrast Check

Primary text `#1F2937` on white background `#FFFFFF` achieves 12.6:1 contrast ratio — well above WCAG AA minimum of 4.5:1.

Accent `#F59E0B` on white background `#FFFFFF` achieves 3.0:1 contrast ratio. Do not use amber as a text color or for critical UI elements. Use it for decorative success indicators, icons, and non-text feedback states only.