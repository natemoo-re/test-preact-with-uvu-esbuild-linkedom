import { parseHTML } from 'linkedom';
import * as Preact from 'preact';

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
	global.window = window;
	global.document = window.document;
	global.navigator = window.navigator;
	global.getComputedStyle = window.getComputedStyle;
	global.requestAnimationFrame = null;
}

export function reset() {
	window.document.title = '';
	window.document.head.innerHTML = '';
	window.document.body.innerHTML = '<main></main>';
}

interface RenderOutput {
  container: HTMLElement;
  component: Preact.VNode;
}
