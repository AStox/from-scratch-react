import React, { useState } from "react";
import RosterInput from "./rosterInput";
import MatchupDisplay from "./matchupDisplay";


import { stox, steve } from "./lists";

import "./Main.css";

const Main = () => {
  const [roster1, setRoster1] = useState(stox);
  const [roster2, setRoster2] = useState(steve);

  const formatList = (list: string) => list.split(",");
  return (
    <div className="Main" data-testid="Main">

      <div>hello world!</div>
      Server? Bulma?
      <RosterInput value={roster1} onChange={setRoster1} />
      <RosterInput value={roster2} onChange={setRoster2} />
      <MatchupDisplay roster1={formatList(roster1)} roster2={formatList(roster2)} />
    </div>
  );
};

export default Main;
