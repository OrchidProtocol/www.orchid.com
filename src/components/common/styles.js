const mobileWidth = '870';
const screenLargeWidth = '1200';

export const break_mobile = `@media screen and (max-width: ${mobileWidth}px)`;

export const break_notMobile = `@media screen and (min-width: ${mobileWidth + 1}px)`;

export const break_notLargeScreen = `@media screen and (max-width: ${mobileWidth}px)`;

export const break_largeScreen = `@media screen and (min-width: ${screenLargeWidth + 1}px)`;

export const shadow = `
	box-shadow: 0px 4px 20px 0px var(--orc-beige);
	${break_mobile} {
		box-shadow: 0px 2px 10px 0px var(--orc-beige);
	}
`;