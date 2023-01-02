import React, { useState, useEffect } from "react"
import AnimatedLetter from "./animated-letter"
import ParticlesComp from "./particles";
import SecondaryHeader from "./secondary-header"


const Header = () => {
  const [ amountOfPressedLetters, updateAmountOfPressedLetters ] = useState(0);
  const [ isNameGlowing, updateisNameGlowing ] = useState(false);
  const [ fallingText, updateFallingText ] = useState('');
  const [ flippingText, updateFlippingText ] = useState('');
  const [ spinningText, updateSpinningText ] = useState('');
  const [ poppingText, updatePoppingText ] = useState('');
  const [ animatedName, updateAnimatedName ] = useState('');
  const Name = "David";

  useEffect(() => {
    const Hi = 'Hi,'
    updateFallingText(buildTextAnimations(Hi, 'falling', 0));
    const Im = `I'm`;
    updateFlippingText(buildTextAnimations(Im, 'flipping', Hi.length * 1.7));
    const Comma = ',';
    updateSpinningText(buildTextAnimations(Comma, 'spinning', (Hi.length + Im.length + Name.length) * 1.7));
    const Developer = 'web developer';
    updatePoppingText(buildTextAnimations(Developer, 'popping', (Hi.length + Im.length + Name.length + Comma.length) * 1.8));
    updateAnimatedName(setAnimatedName());
  },[]);

  const setAnimatedName = (glowClass)=> {
    return [...Name].map(
      letter => <AnimatedLetter 
                  key={letter} 
                  letter={letter} 
                  trackClick={updateAmountOfPressedLetters} 
                  amount={amountOfPressedLetters}
                  glowClass={glowClass}
                />
    );
  }

  useEffect(() => {
    if (amountOfPressedLetters === Name.length) {
      updateAnimatedName(setAnimatedName('glow'));
      updateisNameGlowing(true);
    }
    else{
      updateAnimatedName(setAnimatedName(''));
      updateisNameGlowing(false);
    }
}, [amountOfPressedLetters]);
                          
  return (
    <header className={'main-header'}>
      <div className={'header-container'}>
        <h1 className={'header-text'}>
            <p className={'mobile-margin-half'}>
              {fallingText}
            </p>
            <p className={'h_min-width-max-cont mobile-margin-half'}>
              {flippingText}
              <span 
                style={{
                  marginLeft:'10px',
                }}
              >
                {animatedName}
              </span>
              {spinningText}
            </p>
            <p className={'h_min-width-max-cont'}>
              {poppingText}
            </p>
        </h1>
        <SecondaryHeader />
      </div>
      <ParticlesComp enableParticlesMovement={!isNameGlowing}/>
    </header>
)
}

export default Header

const buildTextAnimations = (text, className, timing) => {
  return text.split('').map((char, index) => {
      let style = {'animationDelay': ((index + timing) / 10) + 's'};
      if (char === ' ')
        style.marginLeft = '12px';
      return <span
              aria-hidden='true'
              key={index}
              style={style}
              className={`${className}-text`}
            >
              {char}
            </span>
  });
};