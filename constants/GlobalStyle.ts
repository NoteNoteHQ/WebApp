import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:where([hidden]:not([hidden='until-found'])) {
	display: none !important;
}

:where(html) {
	-webkit-text-size-adjust: none;
	color-scheme: dark light;
}

@supports not (min-block-size: 100dvb) {
	:where(html) {
		block-size: 100%;
	}
}

@media (prefers-reduced-motion: no-preference) {
	:where(html:focus-within) {
		scroll-behavior: smooth;
	}
}

:where(body) {
	block-size: 100%;
	block-size: 100dvb;
	line-height: 1.5;
	font-family: system-ui, sans-serif;
	-webkit-font-smoothing: antialiased;
}

:where(input, button, textarea, select) {
	font: inherit;
	color: inherit;
}

:where(textarea) {
	resize: vertical;
	resize: block;
}

:where(button, label, select, summary, [role='button'], [role='option']) {
	cursor: pointer;
}

:where(:disabled) {
	cursor: not-allowed;
}

:where(label:has(> input:disabled), label:has(+ input:disabled)) {
	cursor: not-allowed;
}

:where(button) {
	border-style: solid;
}

:where(a) {
	text-underline-offset: 0.2ex;
}

:where(ul, ol) {
	list-style: none;
}

:where(img, svg, video, canvas, audio, iframe, embed, object) {
	display: block;
}

:where(img, picture, svg) {
	max-inline-size: 100%;
	block-size: auto;
}

:where(p, h1, h2, h3, h4, h5, h6) {
	overflow-wrap: break-word;
}

:where(h1, h2, h3) {
	line-height: calc(1em + 0.5rem);
}

:where(hr) {
	border: none;
	border-block-start: 1px solid;
	color: inherit;
	block-size: 0;
	overflow: visible;
}

:where(:focus-visible) {
	outline: 2px solid var(--focus-color, Highlight);
	outline-offset: 2px;
}

:where(.visually-hidden:not(:focus, :active, :focus-within, .not-visually-hidden)) {
	clip-path: inset(50%) !important;
	height: 1px !important;
	width: 1px !important;
	overflow: hidden !important;
	position: absolute !important;
	white-space: nowrap !important;
	border: 0 !important;
}
`;
