import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Header from '../components/header'
import Footer from '../components/footer'
import "typeface-source-serif-pro"
import "typeface-muli"


const Success = () => (
  <>
    <SEO title="Payment Success" />
    <Header/>
      <div style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        alignContent: `center`,
        minHeight: `calc(100vh - 350px)`,
        padding: `75px 0`,
      }}
    >
        <p>
          Your payment was successful. Thank you for your purchase.
        </p>
        <Link
          to="/"
          style={{
            color: `#2a4355`,
            textDecoration: `none`,
            fontWeight: `700`,
          }}>
            Buy another?
          </Link>
      </div>
    <Footer />
  </>
)

export default Success