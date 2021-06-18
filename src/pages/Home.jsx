import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CardProduct from '../components/CardProduct';
import Categories from './Categories';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: '',
    };
    this.searchProducts = this.searchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      if (name === 'category') {
        this.searchProducts();
      }
    });
  }

  async searchProducts() {
    const { category, query } = this.state;
    const fetchProducts = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      products: fetchProducts.results,
    });
  }

  render() {
    const { products } = this.state;
    const { addToCart, cart } = this.props;
    return (
      <div className="main-container">
        <div className="paths">
          <div className="shopping-cart-button">
            {' '}
            { /* */ }
            <Link data-testid="shopping-cart-button" to="/shoppingcart">
              <button
                className="material-icons"
                type="button"
              >
                shopping_cart
              </button>
            </Link>
            <span data-testid="shopping-cart-size">{cart.length}</span>
          </div>
          <div className="search-bar-div">
            {' '}
            { /* */ }
            <label htmlFor="searchInput">
              <input
                type="text"
                placeholder="Digite seu produto"
                id="searchInput"
                name="query"
                onChange={ this.handleChange }
                data-testid="query-input"
              />
            </label>
          </div>
          <div className="search-button">
            {' '}
            { /* */ }
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.searchProducts }
              className="material-icons"
            >
              search
            </button>
          </div>
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div className="main">
          <Categories handleChange={ this.handleChange } />
          <div className="product-item">
            {!products
              ? null
              : products.map((product) => (
                <CardProduct
                  key={ product.id }
                  product={ product }
                  addToCart={ addToCart }
                />))}
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
