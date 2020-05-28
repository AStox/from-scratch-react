import React from "react";

import "./VersusBar.sass";

const VersusBar = ({ children }: { children: React.ReactNode }) => (
  <div className="VersusBar">
    <div className="top bar" />
    <div className="middle bar">{children}</div>
    <div className="bottom bar" />
  </div>
);

export default VersusBar;
