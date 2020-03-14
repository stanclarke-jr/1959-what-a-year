/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "./layout.css"
import "typeface-muli"
import "typeface-source-serif-pro"

import stripeLogo from '../images/powered-by-stripe.svg'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header/>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          gridTemplateRows: `1fr`,
          alignItems: `center`,
          justifyContent: `center`,
          minHeight: `calc(100vh - 150px)`,
          width: `90%`,
          paddingBottom: `100px`,
        }}
      >{children}
      </div>
      <footer
        style={{
          height: `175px`,
          backgroundColor: `rgba(42, 67, 85, .6)`,
          textAlign: `center`,
          padding: `50px 0`,
          color: `white`
        }}
      >

          Copyright © {new Date().getFullYear()}. Famous Author. All rights reserved.
          <br />
          <br />
          <br />
          <a href="https://stripe.com">
            <img style={{
              marginBottom: `0`,
              height: `35px`,
            }}
            src={stripeLogo}
            alt="Payments powered by Stripe" />
          </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
