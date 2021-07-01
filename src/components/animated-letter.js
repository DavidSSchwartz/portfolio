import React, { useState, useEffect } from 'react';

const AnimatedLetter = (props) => {
    const [ flickerClass, setFlickerClass ] = useState('');
    const [ neonClass, setNeonClass ] = useState('');
    const [ glowClass, setGlowClass ] = useState('');
    const [ initialAnimation, setInitialAnimation ] = useState(` initial-animation-${props.letter}`);

    useEffect(() => {
        if (props.amount === props.name.length)
            setGlowClass(' glow');
        else
            setGlowClass('')
    }, [props.amount])

    useEffect(() => {
        setTimeout(() => {
            setInitialAnimation('');
        }, 3000)
    },[])


    const handleLetterClick = () => {
        if (flickerClass === ' flicker') {
            setFlickerClass('');
            props.trackClick(props.amount - 1);
        }
        else {
            setFlickerClass(' flicker');
            props.trackClick(props.amount + 1);
        }
    }

    return (
        <button 
            className={`animated-name name-${props.letter}${neonClass}${flickerClass}${glowClass}${initialAnimation}`} 
            onMouseOver={() => setNeonClass(' neon')}
            onMouseOut={() => setNeonClass('')}
            onClick={handleLetterClick}
        >
            {props.letter}
        </button>
    )
}

export default AnimatedLetter;