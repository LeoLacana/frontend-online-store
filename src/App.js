import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.subQuantity = this.subQuantity.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
  }

  addToCart(newItem) {
    const { cart } = this.state;
    // if (cart.includes(newItem)) return null;
    this.setState({
      cart: [...cart, newItem],
    });
  }

  addQuantity(product) {
    const { cart } = this.state;
    this.setState({
      cart: [...cart, product],
    });
  }

  subQuantity(product) {
    const { cart } = this.state;
    const index = cart.indexOf(product);
    const newCart = cart.reduce((acum, curr, i) => (
      i === index ? acum : acum.concat(curr)), []);
    console.log(newCart);
    this.setState({
      cart: newCart,
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Home addToCart={ this.addToCart } /> } />
          <Route
            exact
            path="/shoppingcart"
            render={ () => (
              <ShoppingCart
                cart={ cart }
                addQuantity={ this.addQuantity }
                subQuantity={ this.subQuantity }
              />) }
          />
          <Route
            exact
            path="/product/:query/:category/:id"
            render={ (props) => (
              <ProductDetails { ...props } addToCart={ this.addToCart } />
            ) }
          />
          <Route exact path="/checkout" render={ () => <Checkout /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
