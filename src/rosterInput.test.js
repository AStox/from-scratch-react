import React from "react";
import { render, screen } from "@testing-library/react";

import RosterInput from "./rosterInput";

it("renders an input", () => {
  const { getByRole } = render(<RosterInput />);
  getByRole('textbox');
});

it("renders the value prop", () => {
  render(<RosterInput value="hello" />);
  screen.getByDisplayValue('hello');
});
