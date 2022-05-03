# Components

The site is broken down into files, one file for each page, and one for each component.

Page files `src/pages/` usually contain

- The pages content
  - Components relevant only to that page
  - A custom hero section for an important page - A button that needs to vary from the rest of the site styles

And component files `src/components/` usually contain

- A component that's reused in multiple pages of the site
- [Styling](styling.md) specific to that individual component
- logic and behavior specific to that component
