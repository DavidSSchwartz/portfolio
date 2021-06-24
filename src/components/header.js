import * as React from "react"
import PropTypes from "prop-types"
import AnimatedLetter from "./animated-letter";

const Header = ({ siteTitle, description }) => {
  const Name = "David";
  const AnimatedName = [...Name].map(letter => <AnimatedLetter letter={letter}/>);
  
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
        >
            <p>
              Hi,
            </p>
            <p>
              I'm 
              {AnimatedName}
              
              ,
            </p>
            <p>
              web developer
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
