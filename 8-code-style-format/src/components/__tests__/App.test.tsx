import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

import App from "../App";
import { Topics } from "../Topics/Topics";

test("landing on a base page", () => {
  const history = createMemoryHistory();
  history.push("/");
  render(
    <Router history={history}>
      <Topics />
    </Router>
  );

  expect(screen.getByText(/Please select a topic/i)).toBeInTheDocument();
});

test("landing on Baz page", () => {
  const history = createMemoryHistory();
  history.push("/Baz");
  render(
    <Router history={history}>
      <Topics />
    </Router>
  );

  expect(screen.getByText(/baz/i)).toBeInTheDocument();
});

test("landing on Baz page from app", () => {
  const history = createMemoryHistory();
  history.push("/");
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  userEvent.click(screen.getByTestId("topic-nav"));
  expect(screen.getByText(/Please select a topic./i)).toBeInTheDocument();
  userEvent.click(screen.getByTestId("sub-baz-nav"));
  expect(screen.getByText(/Baz topic/i)).toBeInTheDocument();
});
