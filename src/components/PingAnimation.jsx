import React from "react";

class PingAnimation extends React.Component {
  render() {
    return (
      <span className=" absolute flex size-3 -top-1 -right-2">
        {" "}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-400 opacity-75"></span>{" "}
        <span className="relative inline-flex size-3 rounded-full bg-slate-600"></span>
      </span>
    );
  }
}

export default PingAnimation;
