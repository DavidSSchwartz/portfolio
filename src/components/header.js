import React, { useState, useEffect } from "react"
import AnimatedLetter from "./animated-letter"
import ParticlesComp from "./particles"
import SecondaryHeader from "./secondary-header"

const Header = () => {
  const [amountOfPressedLetters, setAmountOfPressedLetters] = useState(0)
  const [isNameGlowing, setIsNameGlowing] = useState(false)
  const [fallingText, setFallingText] = useState("")
  const [flippingText, setFlippingText] = useState("")
  const [spinningText, setSpinningText] = useState("")
  const [poppingText, setPoppingText] = useState("")
  const [animatedName, setAnimatedName] = useState("")
  const [enableParticleMovement, setEnableParticleMovement] = useState(false)

  const Name = "David"

  useEffect(() => {
    const Hi = "Hi,"
    setFallingText(buildTextAnimations(Hi, "falling", 0))
    const Im = `I'm`
    setFlippingText(buildTextAnimations(Im, "flipping", Hi.length * 1.7))
    const Comma = ","
    setSpinningText(
      buildTextAnimations(
        Comma,
        "spinning",
        (Hi.length + Im.length + Name.length) * 1.7
      )
    )
    const Developer = "web developer"
    setPoppingText(
      buildTextAnimations(
        Developer,
        "popping",
        (Hi.length + Im.length + Name.length + Comma.length) * 1.8
      )
    )
    setAnimatedName(updateAnimatedName())
    setTimeout(() => {
      setEnableParticleMovement(true)
    }, 4000)
  }, [])

  const updateAnimatedName = glowClass => {
    return [...Name].map(letter => (
      <AnimatedLetter
        key={letter}
        letter={letter}
        trackClick={setAmountOfPressedLetters}
        amount={amountOfPressedLetters}
        glowClass={glowClass}
      />
    ))
  }

  useEffect(() => {
    if (amountOfPressedLetters === 0) {
      return;
    }
    if (amountOfPressedLetters === Name.length) {
      setAnimatedName(updateAnimatedName("glow"))
      setEnableParticleMovement(false)
    } else {
      setAnimatedName(updateAnimatedName(""))
      setEnableParticleMovement(true)
    }
  }, [amountOfPressedLetters])

  return (
    <header className={"main-header"}>
      <div className={"header-container"}>
        <h1 className={"header-text"}>
          <p className={"mobile-margin-half"}>{fallingText}</p>
          <p className={"h_min-width-max-cont mobile-margin-half"}>
            {flippingText}
            <span
              style={{
                marginLeft: "10px",
              }}
            >
              {animatedName}
            </span>
            {spinningText}
          </p>
          <p className={"h_min-width-max-cont"}>{poppingText}</p>
        </h1>
        <SecondaryHeader />
      </div>
      <ParticlesComp enableParticlesMovement={enableParticleMovement} />
    </header>
  )
}

export default Header

const buildTextAnimations = (text, className, timing) => {
  return text.split("").map((char, index) => {
    let style = { animationDelay: (index + timing) / 10 + "s" }
    if (char === " ") style.marginLeft = "12px"
    return (
      <span
        aria-hidden="true"
        key={index}
        style={style}
        className={`${className}-text`}
      >
        {char}
      </span>
    )
  })
}
