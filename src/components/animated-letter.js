import React from 'react';

const AnimatedLetter = (props) => {
    const setNeonClass = (ev) => {
        ev.target.className += ' neon';
    }
    
    const removeNeonClass = (ev) => {
        ev.target.className = ev.target.className.replace(' neon', '');
    }
    
    const setFlickerClass = (ev) => {
        if (ev.type ===  "keypress" && ev.code !== 'Enter')
            return;
        ev.target.className.includes('flicker') ?
            ev.target.className = ev.target.className.replace(' flicker', '') 
            :
            ev.target.className += ' flicker';
    }
    
    return (
        <button 
            className={`animated-name name-${props.letter}`} 
            onMouseOver={setNeonClass}
            onMouseOut={removeNeonClass}
            onClick={setFlickerClass}
        >
            {props.letter}
        </button>
    )
}

export default AnimatedLetter;