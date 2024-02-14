import React from "react"
import ChevronDown from "./chevrondown"

const ScrollDown = ({tictactoeRef}) => {
  const scrollToGame = () => {
    tictactoeRef.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className="scroll-down" onClick={scrollToGame}>
      <span>Scroll down to play!</span>
      <ChevronDown />
    </button>
  )
}

export default ScrollDown
