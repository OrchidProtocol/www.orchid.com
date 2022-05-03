# Styling

### [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

CSS variables are used for colors throughout the site, they're defined in [`src/scss/styles.scss`](src/scss/styles.scss) and can be accessed from any stylesheet or inline styling using the usual CSS variable syntax. You can also overwrite these or flip them using a theoretical class named something like `.theme-dark`, which allows you to easily swap a page, section, or specific element to use different colors based on stylistic choices or the users dark/light mode preference.

### [REM units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

REM units are based on the font size defined in the `:root` element. It's an easy way to use a base number as sizing for the rest of your elements. For instance, instead of having a button with the padding of `padding: 12px 24px;` and needing to remember what pixel sizes you used to keep all spacing feeling relatively consistent, you can use `padding: 1rem 2rem;` instead. That way the relative size of all paddings, margins, and whatever else is maintained throughout the whole site instead of using pixel measurement which more closely resemble "magic numbers".

It is still appropriate to use pixels for something like borders widths or when you need to break out for something really specific.

# Adding styles

There are 4 main ways to add styling to the site.

## [Tailwind](https://tailwindcss.com/) (preferred)

Tailwind is a thin layer of abstraction over CSS, with easy responsive adjustments and contained entirely within element class names, it's flexible but uses base units and color variables to keep everything relatively consistent.

Check for available color variables in [tailwind.config.js](tailwind.config.js), as of writting this file the current available colors can be accessed as:

```html
<!-- text color -->
<span className="text-gray"></span>
<span className="text-decoration"></span>
<span className="text-purple-200"></span>
<span className="text-purple"></span>
<span className="text-purple-500"></span>
<span className="text-purple-600"></span>

<!-- background color -->
<div className="bg-gray"></div>
<div className="bg-decoration"></div>
<div className="bg-purple-200"></div>
<div className="bg-purple"></div>
<div className="bg-purple-500"></div>
<div className="bg-purple-600"></div>
```

## [emotion](https://emotion.sh/docs/introduction) (preferred)

If you're encountering the practical limits or running into code cleanliness issues with tailwind, emotion is similar to styled components.

```jsx
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const BoldText = styled.span`
	font-weight: bold;
`;

return (
	<div
		css={css`
			background: var(--orc-deep-purple);
			color: white;
		`}
	>
		<BoldText>Cool div content!</BoldText>
	</div>
);
```

## Global styles (use sparingly)

There are a few global stylesheets that have been imported from the old Angular codebase, they can be found in [`src/scss/styles.scss`](src/scss/styles.scss). These contain the CSS variables for colors, the root element font size for REM units to keep sizing and spacing through the site relative to factors of the same root size, and various common stylings for the site.

The newer approach we've been taking is to do as much styling as possible inside of [components](components.md) since it tends to keep everything organized more consistently.

## Page specific SCSS (try to migrate away from this)

You can import scss stylesheets direction into a page file (a .js file in `src/pages/`)

```jsx
import "./how-it-works.scss";
```

However this tends to allow specific pages to drift away from common stylings, most of these stylesheets are holdovers from the old Angular site, and when possible migrating these to [components](components.md) is usually worth it in the long run.
