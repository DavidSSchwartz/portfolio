import React, { useState, useEffect } from "react"
import ParticlesComp from "./particles"
import SecondaryHeader from "./secondary-header"
import useIsOnscreen from "../hooks/useIsOnScreen"
import ScrollDown from "./scrolldown"
import PrimaryHeader from "./primary-header";

const Header = ({ tictactoeRef }) => {
  const [enableParticleMovement, setEnableParticleMovement] = useState(false)

  const [isOnscreen, elementRef] = useIsOnscreen()

  useEffect(() => {
    setTimeout(() => {
      setEnableParticleMovement(true)
    }, 4000)
  }, [])

  return (
    <header className={"main-header"} ref={elementRef}>
      <div className={"header-container"}>
        <PrimaryHeader setEnableParticleMovement={setEnableParticleMovement}/>
        <SecondaryHeader />
      </div>
      <ParticlesComp
        enableParticlesMovement={isOnscreen && enableParticleMovement}
      />
      <ScrollDown tictactoeRef={tictactoeRef} />
    </header>
  )
}

export default Header
