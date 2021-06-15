import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ShoppingCartButton from './components/ShoppingCartButton';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppingcart" component={ ShoppingCartButton } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
