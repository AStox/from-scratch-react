import React, { useState } from "react";

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
    <>
      <div>
        {choice1}
        {" VS "}
        {choice2}
      </div>
      <button type='button' onClick={randomize}>Again</button>
    </>
  );
};

export default MatchupDisplay;
