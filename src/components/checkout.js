import React from "react"

const buttonStyles = {
    fontSize: `13px`,
    textAlign: `center`,
    color: `white`,
    outline: `none`,
    padding: `12px 60px`,
    boxShadow: `2px 5px 10px rgba(0, 0, 0, .15)`,
    backgroundColor: `rgba(81, 202, 197, .8)`,
    borderRadius: `6px`,
    letterSpacing: `1.5px`,
}

const Checkout = class extends React.Component {
    // Initialize Stripe.js with your publishable key.
    // You can find your key in the Dashboard:
    // https://dashboard.stripe.com/account/apikeys
    componentDidMount() {
      this.stripe = window.Stripe(`pk_test_BM1pXw4jDueavxzK08HJVP9200dBmnht8Y
      `)
    }

    async redirectToCheckout(event) {
      event.preventDefault()
      const { error } = await this.stripe.redirectToCheckout({
        items: [{ sku: `sku_Goz0d7cnMgyTQI`, quantity: 1}],
        successUrl: `${window.location.origin}/success/`,
        cancelUrl: `${window.location.origin}/`,
      })

      if (error) {
        console.warn(`Error: `, error)
      }
    }

    render() {
      return (
        <button
          style={buttonStyles}
          onClick={event => this.redirectToCheckout(event)}
        >
          BUY NOW
        </button>
      )
    }
  }

  export default Checkout
