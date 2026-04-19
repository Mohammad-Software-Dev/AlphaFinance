# UI QA Checklist (Demo)

## Theme
- Theme toggle persists on route change and full page refresh.
- No first-paint flash to wrong theme.
- Core pages are readable in light and dark modes.

## Accessibility
- All interactive controls are keyboard reachable.
- Visible focus rings appear on buttons, links, tabs, and modal controls.
- Modals trap focus and restore focus to the previous element on close.
- Content images have meaningful `alt`; decorative images use empty `alt`.

## Layout and Responsiveness
- Sidebar toggle is usable on mobile.
- No overlapping sticky/fixed headers on mobile and desktop.
- No horizontal overflow on dashboard, blog, wallet, profile, and real-estate pages.

## Consistency
- Buttons follow unified sizing and full-width behavior.
- Form fields have consistent labels, borders, focus, and error styles.
- Tab interactions are consistent and fallback content is branded.
