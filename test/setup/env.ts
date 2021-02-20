import { parseHTML } from 'linkedom';

const { window } = parseHTML(`
<!doctype html>
<html lang="en">
    <head></head>
    <body>
        <main></main>
    </body>
</html>
`);

export function setup() {
	globalThis.window = window;
	globalThis.document = window.document;
	globalThis.navigator = window.navigator;
	globalThis.getComputedStyle = window.getComputedStyle;
	globalThis.requestAnimationFrame = null;
}

export function reset() {
	window.document.title = '';
	window.document.head.innerHTML = '';
	window.document.body.innerHTML = '<main></main>';
}
