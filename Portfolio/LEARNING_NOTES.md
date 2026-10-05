# Bibhas's portfolio learning notes

## Context and preferences
- Bibhas recently graduated and is returning to coding after a long break.
- Prior discussion was in a ChatGPT Front-End project; that conversation is not available here. Use these notes and actual source files, without inventing prior progress.
- Teach through this existing portfolio, starting with JavaScript and React basics. Do not assume remembered knowledge.
- Explain terms and code in plain language, one small step at a time. Give a small exercise and wait for Bibhas to practice before advancing.
- Initial authorization: inspect files without changing site code; create and maintain this notes file. Do not complete practice exercises for Bibhas unprompted.
- Goal: a modern, visually creative portfolio for recruiters, featuring design, photography, and video work, with scroll animations and parallax effects.
- Individual projects should support their own images and detailed content independently of preview cards.

## Verified source setup (2026-09-13)
- App lives in Portfolio/ within the Portfolio-Website repository.
- package.json declares React 19, Vite 7, React Router DOM 7, and GSAP 3. Version ranges are declarations, not verified installed versions.
- Startup: package.json dev script invokes Vite; index.html loads src/main.jsx; main.jsx renders App inside StrictMode and BrowserRouter into the root div and imports src/styles/global.css.
- App.jsx displays Navbar outside Routes. The / route displays HomePage.
- HomePage.jsx displays About Me, Hero_Image.png, a scroll indicator, and SelectedWorks.
- SelectedWorks.jsx reads src/data/projects.js, filters featured projects, and creates linked preview cards.
- Five projects currently exist; four are featured. Category pages filter by graphic, uiux, photography, or videography.
- Routes: /, /graphic-design, /ui-ux, /photography, /videography, /contact, /project/:id.
- ProjectDetail.jsx finds a project by its URL id. detailImage and detailDescription fall back to image and description. It also supports an optional videoFile; current project data has no videoFile values.
- Separate detail images exist for Crafternoon and Matchday Poster; separate descriptions exist for The HIVE and Crafternoon. No general multi-image/detail-section system yet.
- GSAP animates the hero entrance and float. A mouse-following magnifier is implemented. ScrollTrigger animates Selected Works title/cards; scroll-linked parallax has not been implemented in inspected code.
- src/assets holds imported images; public holds directly served assets; node_modules holds downloaded dependencies.
- src/styles/global.css is imported by main.jsx. App.css and index.css exist but are not imported by the inspected app source.
- Source inspection only: no browser run, build, dependency installation, or application edits performed.

## Observations to revisit later
- HomePage scrollToWork looks for id selected-works, but SelectedWorks section uses id work. Leave unchanged until a suitable learning step.

## Lesson 1 introduced
- Basic folder map and distinction between HTML structure, CSS appearance, JavaScript behavior, React components, and JSX markup.
- Startup overview: index.html -> main.jsx -> App.jsx -> HomePage.jsx -> SelectedWorks.jsx, with Navbar displayed by App.
- First focus: the empty root div and the script that loads main.jsx.
- Overview is introduced, not evidence of mastery. Detailed JavaScript syntax, React hooks, routing, data transformations, and animation APIs are still to be taught gradually.

## Current direction (2026-10-04)
- Bibhas paused learning to focus on portfolio updates. Do not continue lessons until requested.
- Exploring an animation concept for the photography section; design is still being considered.
- Reference: timeline.png sketch supplied in chat, with year labels and rows of photos; middle row is larger/emphasized and adjacent rows recede. Treat sketch years as illustrative, not confirmed project dates.
- Main constraint: create an engaging experience without excessive scrolling or animation making the photography difficult to view.
- Updated sketch adds a date and name beneath each cover. Bibhas explicitly confirmed that each rectangle represents a project, not an individual photograph.
- Timeline concept: group project covers by year, with each project's date and name below its cover. Proposed click behavior is to open that project's detail page with its own photo collection and content, rather than enlarge the cover.
- Proposed motion, not yet approved or implemented: normal vertical scrolling, gentle emphasis on the central year, subtle image parallax, direct year navigation, and simpler mobile/reduced-motion presentation.
- Bibhas authorized implementation directly in the project; lessons remain paused.

## Photography implementation (2026-10-04)
- Replaced Photography.jsx card list with a year-grouped timeline, newest year first, varied cover sizes, persistent date/name captions, and year links when multiple years exist.
- Desktop GSAP animations gently emphasize the centered year and add subtle cover parallax with natural scrolling, no pinning or added scroll distance. Animations clean up on unmount and are disabled on mobile/reduced-motion settings.
- Added scoped styles in src/styles/photography.css and a separate PhotographyDetail component, selected by ProjectDetail for photography projects only.
- Project covers open their existing /project/:id route; photography detail pages display uncropped gallery photos, optional captions, project description, and links back to the relevant timeline year.
- projects.js now has a gallery array for Funky Buddha. Each entry supports src, alt, and optional caption. Gallery images are independent of image (the preview cover); detailDescription remains independent of description. Optional dateLabel can provide a real display date; otherwise the known year is displayed.
- Current real photography content: one project, Funky Buddha (2025), with one image. No invented years, dates, duplicate projects, or stock photos were added. More supplied photography projects/photos are needed to populate the full multi-year sketch.
- Validation: lint and production build passed. Vite required an approved run outside the sandbox because its configuration loader hit filesystem restrictions. Browser visual/interaction checks were unavailable: browser inventory was empty.
- Local preview started at http://127.0.0.1:5173/photography. Next: Bibhas reviews the first version; collect actual additional projects, years/dates, cover choices, and gallery images.

## Dropdown fix and project entry guidance
- Fixed the Work dropdown's pointer gap in global.css: panel starts at 100% of its parent height, with a transparent hover bridge covering its entrance movement. Added focus-within support for keyboard navigation.
- Added STEP 1 import comments and STEP 2 project-entry comments in projects.js, a commented template, and three insertion slots. Existing Funky Buddha is project 1 of the intended four photography projects.
- User has added Photography/FunkyBuddha/FunkyCover.jpg and Photography/Sony_Creative_Space/SonyCover.jpg. Left these files untouched; supplied a commented Sony import matching the actual path. No new project facts or live placeholder entries added.
- Lint and diff whitespace checks passed after these changes. Browser interaction verification remains unavailable in this session; user should try moving from Work into each dropdown link.
- Next: Bibhas fills in three real projects and their imports; inspect entries and test timeline grouping and galleries when ready.

## Sony project review
- Bibhas added Sony Creative Space as the second photography project, with its cover and SideP1.jpg gallery photo.
- Fixed an undefined SideP1.jpg expression by importing the actual file as sonySidePhoto1 and using that variable in gallery.src. The original expression could prevent projects.js from loading across the site.
- Replaced placeholder Sony alt text with descriptions based on inspecting both images. Updated insertion comments to reflect two completed project entries and two remaining slots; preserved the valid sony_creative_space id.
- Kept user-entered year 2026 and dateLabel Mar 2026 pending confirmation: cover visibly says 03/25/2025. Added a TODO. Sony description/detailDescription remain placeholder text with TODO comments for Bibhas to write.
- Lint and production build pass after the fix. Build reports SideP1.jpg at approximately 15.2 MB and SonyCover.jpg at 5.9 MB; web-sized copies would improve loading before publication. Original images left unchanged.
- Next: confirm Sony date, fill its descriptions, add projects 3 and 4, and visually review the timeline in a connected browser. No browser interaction test performed in this review.

## Purna Rai project and dropdown follow-up
- Bibhas added Purna Rai Concert (Apr 2025), making three photography projects with one slot remaining.
- Fixed image: PurnaCover (undefined) to the existing imported PurnaRai variable. Corrected Photograpgher to Photographer. Removed the placeholder detailDescription so the real description is used, and added an independent gallery array using the only concert image currently supplied.
- Replaced the CSS hover/focus-within opening rule with React-controlled dropdown state. The prior focus-within fix caused the menu to remain open after selecting a route.
- Work opens on mouse entry or button activation, closes on selection (including the current page), pointer exit, outside click, focus leaving, Escape, or a route change. Button exposes aria-expanded and aria-controls; Escape/selection returns focus to Work without reopening it. The pointer-gap bridge remains.
- Lint and production build passed. Browser interaction behavior still needs visual verification in a connected browser.
- Next: review dropdown selection behavior and add photography project 4. Sony date confirmation and placeholder descriptions remain outstanding.

## Hover animation correction
- Bibhas clarified the sketch: the project under the cursor should enlarge, not a permanently larger center column. This supersedes the earlier interpretation of center emphasis.
- Removed wider middle columns, second-card offset, oversized single-card layout, and scroll-based year scaling. Covers now use equal-width columns within each row with their natural image proportions.
- Added GSAP hover/keyboard-focus animation: cover grows 8% and lifts slightly, caption moves down, arrow shifts diagonally; smoothly reverses on leave/blur. Scroll entrance animates the separate card wrapper to avoid transform conflicts.
- Added a brief heading entrance, once-only year/card fade-and-rise entrances, and retained subtle ScrollTrigger image parallax. Natural scrolling remains unchanged. Mobile/reduced-motion users get static layouts; hover runs only with a fine hover-capable pointer. Event listeners and animations are cleaned up on unmount/media changes.
- Lint and production build passed. User should visually review hover behavior; no connected-browser verification performed.

## Gold hover accent
- Added a gold edge, soft outer glow, and gold project title on photography hover/keyboard focus, using the Selected Works gold palette. No overlay tint changes the photograph's colors.
- Gold styling uses CSS transitions alongside existing GSAP enlargement and ScrollTrigger animations; reduced motion disables the new transitions.
- Bibhas accepted the animated title underline. Implemented a thin gold line that draws left-to-right over 300ms on hover/keyboard focus and retracts on leave. Space is reserved beneath the title to avoid layout shifts; reduced-motion preference makes it instant. Existing GSAP animation remains unchanged.

## Learning resume point (paused)
- Photography covers now use the same 18px rounded corners as homepage project images; the gold border inherits that radius.
- Await Bibhas's first read-only exercise: open index.html and identify (1) the id of the container React uses and (2) the file loaded by the script tag.
- Review the answer before advancing. Then explain main.jsx imports and its render call in small pieces, introducing each unfamiliar term.
- Update these notes after practice with confirmed understanding, questions, actual edits, and the next exact exercise. Do not mark exercises complete before Bibhas responds.
