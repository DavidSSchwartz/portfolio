import React, { useState } from "react"
import PropTypes from "prop-types"
import AnimatedLetter from "./animated-letter"
import SecondaryHeader from "./secondary-header"

const Header = ({ siteTitle, description }) => {
  const [ amount, updateAmount ] = useState(0);

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

  const Hi = 'Hi,'
  const FallingText = buildTextAnimations(Hi, 'falling', 0);
  const Im = `I'm`;
  const FlippingText = buildTextAnimations(Im, 'flipping', Hi.length * 1.7);
  const Name = "David";
  const Comma = ',';
  const SpinningText = buildTextAnimations(Comma, 'spinning', (Hi.length + Im.length + Name.length) * 1.7)
  const Developer = 'web developer';
  const PoppingText = buildTextAnimations(Developer, 'popping', (Hi.length + Im.length + Name.length + Comma.length) * 1.8);

  const AnimatedName = [...Name].map(
                                  letter => <AnimatedLetter 
                                              key={letter} 
                                              letter={letter} 
                                              trackClick={updateAmount} 
                                              amount={amount}
                                              name={Name}
                                            />
                                  );
                          
  return (
    <header className={'main-header'}>
      <div className={'header-container'}>
        <h1 className={'header-text'}>
            <p className={'mobile-margin-half'}>
              {FallingText}
            </p>
            <p className={'h_min-width-max-cont mobile-margin-half'}>
              {FlippingText}
              <span 
                style={{
                  marginLeft:'10px',
                }}
              >
                {AnimatedName}
              </span>
              {SpinningText}
            </p>
            <p className={'h_min-width-max-cont'}>
              {PoppingText}
            </p>
        </h1>
        <SecondaryHeader />
      </div>
    </header>
)
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
