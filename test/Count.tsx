import { h } from "preact";
import { test } from "uvu";
import * as assert from "uvu/assert";
import * as ENV from "./setup/env";
import { render, fireEvent } from "@testing-library/preact";

import Count from "../src/Counter";

test.before(ENV.setup);
test.before.each(ENV.reset);

test('should render with "5" by default', () => {
  const { container } = render(<Count />);

  assert.snapshot(
    container.innerHTML,
    `<button id="decr">--</button><span>5</span><button id="incr">++</button>`
  );
});

test("should accept custom `count` prop", () => {
  const { container } = render(<Count count={99} />);

  assert.snapshot(
    container.innerHTML,
    `<button id="decr">--</button><span>99</span><button id="incr">++</button>`
  );
});

test("should increment count after `button#incr` click", async () => {
  const { container } = render(<Count />);

  assert.snapshot(
    container.innerHTML,
    `<button id="decr">--</button><span>5</span><button id="incr">++</button>`
  );

  fireEvent.click(container.querySelector('#incr'));
  
  assert.snapshot(
      container.innerHTML,
      `<button id="decr">--</button><span>6</span><button id="incr">++</button>`
  );
});

test("should decrement count after `button#decr` click", async () => {
  const { container } = render(<Count />);

  assert.snapshot(
    container.innerHTML,
    `<button id="decr">--</button><span>5</span><button id="incr">++</button>`
  );

  fireEvent.click(container.querySelector('#decr'));

  assert.snapshot(
	  container.innerHTML,
	  `<button id="decr">--</button><span>4</span><button id="incr">++</button>`
  );
});

test.run();
