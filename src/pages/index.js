import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import UnderConstruction from "../components/under-construction"
import Tictactoe from "../components/tictactoe"
// import WebsitesDisplay from "../components/websites-display"

const IndexPage = () => {
  const tictactoeRef = React.useRef()

  return (
    <Layout tictactoeRef={tictactoeRef}>
      <Seo title="Home" />
      <Tictactoe ref={tictactoeRef} />
      {/* <UnderConstruction /> */}

      {/* <WebsitesDisplay /> */}
    </Layout>
  )
}

export default IndexPage
