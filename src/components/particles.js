import React, { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

const ParticlesComp = ({ enableParticlesMovement = true }) => {
  const particlesInit = useCallback(async engine => {
    console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles"
      params={{
        fullScreen: { enable: false, zIndex: 0 },
        particles: {
          links: {
            enable: true,
            color: "#fff",
          },
          number: {
            value: 15,
          },
          size: {
            value: 1,
          },
          move: {
            enable: enableParticlesMovement,
            outMode: "destroy",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "trail",
            },
            onClick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            trail: {
              delay: 0.005,
              quantity: 1,
              pauseOnStop: true,
            },
          },
        },
      }}
    />
  )
}

export default ParticlesComp
