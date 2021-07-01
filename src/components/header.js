import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import AnimatedLetter from "./animated-letter";

const Header = ({ siteTitle, description }) => {
  const [ amount, updateAmount ] = useState(0);
  
  const buildTextAnimations = (text, className, timing) => {
    return text.split('').map((char, index) => {
        let style = {'animationDelay': (0.5 + (index + timing) / 10) + 's'};
        if (char === ' ')
          style.marginLeft = '10px';
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
  const FlippingText = buildTextAnimations(Im, 'flipping', Hi.length * 2.5);
  const Name = "David";
  const Comma = ',';
  const SpinningText = buildTextAnimations(Comma, 'spinning', (Hi.length + Im.length + Name.length) * 2)
  const Developer = 'web developer';
  const PoppingText = buildTextAnimations(Developer, 'popping', (Hi.length + Im.length + Name.length + Comma.length) * 2.6);

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
    <header
      style={{
        height: '100vh',
        background: `black`,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          color: `white`,
        }}
      >
        <h1 
          style={{ 
            fontSize: '4rem',  
          }}
          className= {'header-text'}
        >
            <p>
              {FallingText}
            </p>
            <p>
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
            <p>
              {PoppingText}
            </p>
        </h1>
        <h2>
          {description}
        </h2>
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
