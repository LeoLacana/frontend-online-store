import React, { Component } from 'react';
import Categories from './Categories';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <label htmlFor="searchInput">
          <input type="text" id="searchInput" />
        </label>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <button type="button">Carrinho</button>
        </Link>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Categories />
      </div>
    );
  }
}
