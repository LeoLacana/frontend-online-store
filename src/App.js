import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ShoppingCartButton from './components/ShoppingCartButton';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppingcart" component={ ShoppingCartButton } />
        <Route
          exact
          path="/product/:query/:category/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
