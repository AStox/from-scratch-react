import React from "react";
import { render } from "@testing-library/react";

import MatchupDisplay from "./MatchupDisplay";

it("renders with two arrays", () => {
  const { getByText } = render(<MatchupDisplay roster1={["one"]} roster2={["two"]} />);
  getByText('one');
  getByText('VS');
  getByText('two');
});
it("renders with another two arrays", () => {
  const { getByText } = render(<MatchupDisplay roster1={["pig"]} roster2={["cat"]} />);
  getByText("pig");
  getByText("VS");
  getByText("cat");
});
