import React, { useState } from "react";

import VersusBar from "./VersusBar";

import "./MatchupDisplay.sass";

const randomChoose = (charList: string[]) => {
  return charList[Math.floor(Math.random() * charList.length)];
};

const MatchupDisplay = ({ roster1, roster2 }: { roster1: string[]; roster2: string[] }) => {
  const [choice1, setChoice1] = useState(randomChoose(roster1));
  const [choice2, setChoice2] = useState(randomChoose(roster2));

  const randomize = () => {
    setChoice1(randomChoose(roster1));
    setChoice2(randomChoose(roster2));
  };

  return (
    <div className="MatchupDisplay">
      <div className="full-button" role="button" onClick={randomize}>
        <div className="top-left name-container">
          <h1 className="name">{choice1}</h1>
        </div>
        <VersusBar>
          <h1 className="name">{" VS "}</h1>
        </VersusBar>
        <div className="bottom-right name-container">
          <h1 className="name">{choice2}</h1>
        </div>
      </div>
    </div>
  );
};

export default MatchupDisplay;
