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
        <h1>Sign Up</h1>
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
        <input type="submit" value="Next"></input>
      </form>
    );
  }
}

ReactDOM.render(<Checkout />, document.getElementById('app'));
