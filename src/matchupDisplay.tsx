import React, { useState } from "react";

import './MatchupDislay.css';

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
      <button className="full-button" type="button" onClick={randomize}>
        <div>
          <h1>{choice1}</h1>
          <h1>{" VS "}</h1>
          <h1>{choice2}</h1>
        </div>
      </button>
    </div>
  );
};

export default MatchupDisplay;
