/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { cleanup } from '@testing-library/react';

<<<<<<< HEAD:client/src/lib/Message.test.js
import Message from "../Components/ProductOverview/Message.jsx";
=======
import Message from "../src/components/ProductOverview/Message";
>>>>>>> main:client/tests/Message.test.js

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
  cleanup();
});

it("renders message", () => {
  act(() => {
    render(<Message />, container);
  });
  expect(container.textContent).toBe("SITE-WIDE ANNOUNCEMENT MESSAGE!");
});
