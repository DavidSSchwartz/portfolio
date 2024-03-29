/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ tictactoeRef, children }) => {
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description
        }
      }
    }
  `)

  return (
    <>
      <Header tictactoeRef={tictactoeRef} />
      <div
        style={{
          margin: `0 auto`,
          //padding: `6rem 1.0875rem 1.45rem`,
          //backgroundColor: '#fff9f9',

          //for under construction
          backgroundColor: '#fff',
        }}
      >
        <main
          style={{
            //paddingBottom: '4rem',
            display: 'flex',
            justifyContent: 'center',
          }}  
        >
          {children}
        </main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` and `}
          <a href="https://sass-lang.com/">Sass</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
