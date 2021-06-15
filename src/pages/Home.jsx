import React, { Component } from 'react';
import Categories from './Categories';

export default class Home extends Component {
  render() {
    return (
      <div>
        <label htmlFor="searchInput">
          <input type="text" id="searchInput" />
        </label>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Categories />
      </div>
    );
  }
}
