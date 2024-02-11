import React, { useCallback, useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

const ParticlesComp = ({ enableParticlesMovement = true }) => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = container => {
    console.log(container)
  }

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="particles"
          options={{
            detectRetina: true,
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
                outModes: "destroy",
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {},
            },
          }}
        />
      )}
    </>
  )
}

export default ParticlesComp
