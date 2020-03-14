import React from 'react'
import stripeLogo from '../images/powered-by-stripe.svg'

const Footer = () => (
  <footer
        style={{
          display: `flex`,
          flexDirection: `column`,
          alignContent: `center`,
          alignItems: `center`,
          height: `175px`,
          backgroundColor: `rgba(42, 67, 85, .6)`,
          padding: `50px 0`,
          color: `white`,
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
)

export default Footer