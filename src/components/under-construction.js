import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const UnderConstruction = () => {
    return (
            <StaticImage
                src="../images/More-to-come.jpeg"
                width={500}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Website under construction'"
                style={{ marginTop: `6rem`, marginBottom: `1.45rem` }}
            />
    )
}

export default UnderConstruction;