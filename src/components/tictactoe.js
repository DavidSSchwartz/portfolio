import * as React from "react"
import useIsOnscreen from "../hooks/useIsOnScreen"

const Tictactoe = (props, ref) => {
  const [isOnscreen, elementRef] = useIsOnscreen()

  return (
    <>
      <div
        ref={el => {
          elementRef.current = el;
          ref.current = el;
        }}
        className="tictactoe-container"
      >
        {isOnscreen ? (
          <iframe src="https://statuesque-basbousa-3e58f4.netlify.app/" />
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default React.forwardRef(Tictactoe)
