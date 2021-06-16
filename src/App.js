import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(newItem) {
    const { cart } = this.state;
    this.setState({
      cart: [...cart, newItem],
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
            render={ () => <ShoppingCart cart={ cart } /> }
          />
          <Route
            exact
            path="/product/:query/:category/:id"
            render={ (props) => (
              <ProductDetails { ...props } addToCart={ this.addToCart } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
