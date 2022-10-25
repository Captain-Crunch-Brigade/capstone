import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Message from "../ProductOverview/Message";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders message", () => {
  act(() => {
    render(<Message />, container);
  });
  expect(container.textContent).toBe("SITE-WIDE ANNOUNCEMENT MESSAGE!");
});
