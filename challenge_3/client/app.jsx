class Checkout extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <button onClick={this.checkoutClickHandler}>Checkout</button>
    );
  }
  
  checkoutClickHandler() {
    ReactDOM.render(<Signup />, document.getElementById('app'));
  }
}

class Signup extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <form action="/signup" method="POST" className="form-signup">
        <h1>Sign Up: </h1>
        <div>
          <label htmlFor="name">Name: </label><br />
          <input id="name" type="text"></input>
        </div>
        <div>
          <label htmlFor="email">Email: </label><br />
          <input id="email" type="email"></input>
        </div>
        <div>
          <label htmlFor="password">Password: </label><br />
          <input id="password" type="password"></input>
        </div>
        <input type="submit" value="Next" onClick={this.signupClickHandler}></input>
      </form>
    );
  }

  signupClickHandler () {
    ReactDOM.render(<Shipping />, document.getElementById('app'));
  }
}

class Shipping extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <form action="/shipping" method="POST" className="form-shipping">
        <h1>Shipping Information </h1>
        <div>
          <label htmlFor="lineOne">Line 1: </label><br />
          <input id="lineOne" type="text"></input>
        </div>
        <div>
          <label htmlFor="lineTwo">Line 2: </label><br />
          <input id="lineTwo" type="text"></input>
        </div>
        <div>
          <label htmlFor="city">City: </label><br />
          <input id="city" type="text"></input>
        </div>
        <div>
          <label htmlFor="state">State: </label><br />
          <input id="state" type="text"></input>
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode: </label><br />
          <input id="zipcode" type="text"></input>
        </div>
        <input type="submit" value="Next" onClick={this.shippingClickHandler}></input>
      </form>
    );
  }

  shippingClickHandler () {
    ReactDOM.render(<Payment />, document.getElementById('app'));
  }
}

class Payment extends React.Component {
  constructor () {
    super ()
  }

  render () {
    return (
      <form action="/payment" method="POST" className="form-payment">
        <h1>Payment Information: </h1>
        <div>
          <label htmlFor="card-number">Credit Card #: </label><br />
          <input id="card-number" type="text"></input>
        </div>
        <div>
          <label htmlFor="expiry-date">Expiry Date: </label><br />
          <input id="expiry-date" type="text"></input>
        </div>
        <div>
          <label htmlFor="cvv">CVV: </label><br />
          <input id="cvv" type="text"></input>
        </div>
        <div>
          <label htmlFor="billing-zipcode">Billing Zipcode: </label><br />
          <input id="billing-zipcode" type="text"></input>
        </div>
        <input type="submit" value="Next"></input>
      </form>
    );
  }
}

ReactDOM.render(<Checkout />, document.getElementById('app'));
