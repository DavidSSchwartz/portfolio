import * as React from "react"
import useIsOnscreen from "../hooks/useIsOnScreen"

const Tictactoe = () => {
  const [isOnscreen, elementRef] = useIsOnscreen()

  return (
    <div ref={elementRef} className="tictactoe-container">
      {isOnscreen ? (
        <iframe src="https://statuesque-basbousa-3e58f4.netlify.app/" />
      ) : (
        ""
      )}
    </div>
  )
}

export default Tictactoe
