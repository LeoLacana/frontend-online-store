import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api'
import CardProduct from '../components/CardProduct'

export default class Home extends Component {
  constructor() {
    super()
    this.state={
      products: '',
    }
    this.searchProducts = this.searchProducts.bind(this)
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async searchProducts() {
    const { category, query } = this.state;
    const fetchProducts = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      products: fetchProducts.results,
    })
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <label htmlFor="searchInput">
          <input type="text" id="searchInput" name="query" onChange={this.handleChange} data-testid="query-input" />
        </label>
        <button type="button" data-testid="query-button" onClick={this.searchProducts}>Pesquisar</button>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        {!products ? null : products.map((product) => <CardProduct product={product} data-testid="product"/>)}
      </div>
    );
  }
}
