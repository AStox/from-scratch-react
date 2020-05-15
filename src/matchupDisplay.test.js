import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import MatchupDisplay from "./matchupDisplay";

it("renders with two arrays", () => {
  const { getByText } = render(<MatchupDisplay roster1={["one"]} roster2={["two"]} />);
  getByText('one VS two');
});
it("renders with another two arrays", () => {
  const { getByText } = render(<MatchupDisplay roster1={["pig"]} roster2={["cat"]} />);
  getByText("pig VS cat");
});
