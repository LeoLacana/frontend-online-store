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

  componentDidMount() {
    if (localStorage.getItem('cartCache')) {
      this.getLocalStorage();
    }
  }

  getLocalStorage() {
    const storage = JSON.parse(localStorage.getItem('cartCache'));
    this.setState({
      cart: storage,
    });
  }

  setStorage() {
    const { cart } = this.state;
    localStorage.setItem('cartCache', JSON.stringify(cart));
    console.log(JSON.parse(localStorage.getItem('cartCache')));
  }

  addToCart(newItem) {
    const { cart } = this.state;
    const quantity = cart.filter((item) => item === newItem).length;
    if (newItem.available_quantity > quantity) {
      this.setState({
        cart: [...cart, newItem],
      }, () => {
        this.setStorage();
      });
    }
  }

  addQuantity(product) {
    const { cart } = this.state;
    const quantity = cart.filter((item) => item === product).length;
    if (product.available_quantity > quantity) {
      this.setState({
        cart: [...cart, product],
      }, () => {
        this.setStorage();
      });
    }
  }

  subQuantity(product) {
    const { cart } = this.state;
    const index = cart.indexOf(product);
    const newCart = cart.reduce((acum, curr, i) => (
      i === index ? acum : acum.concat(curr)), []);
    this.setState({
      cart: newCart,
    }, () => {
      this.setStorage();
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Home
                addToCart={ this.addToCart }
                cart={ cart }
              />) }
          />
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
              <ProductDetails { ...props } addToCart={ this.addToCart } cart={ cart } />
            ) }
          />
          <Route exact path="/checkout" render={ () => <Checkout /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

// !FINALIZADO

export default App;
