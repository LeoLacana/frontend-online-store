import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      product: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.searchProducts();
  }

  handleClick(product) {
    const { addToCart } = this.props;
    addToCart(product);
  }

  async searchProducts() {
    const { match: { params } } = this.props;
    const { category, id, query } = params;
    const fetchProducts = await getProductsFromCategoryAndQuery(category, query);
    const product = fetchProducts.results.find((value) => value.id === id);
    this.setState({
      product,
      loading: false,
    });
  }

  render() {
    const { loading, product } = this.state;
    const { cart } = this.props;
    const { thumbnail, price, title, attributes } = product;
    const numbersOfStars = 5;
    const stars = Array(numbersOfStars).fill(0);
    return loading ? (
      <div>
        <h3>loading...</h3>
        <h4 data-testid="shopping-cart-size">{cart.length}</h4>
      </div>
    ) : (
      <div>
        <h1 data-testid="product-detail-name">{ `${title} - R$ ${price}` }</h1>
        <img src={ thumbnail } alt="product" />
        <label htmlFor="details">
          O que você precisa saber sobre este produto
          <ul>
            {attributes.filter(({ name, value_name: value }) => name.toUpperCase()
              !== 'UNDEFINED' && value.toUpperCase() !== 'UNDEFINED')
              .map(({ name, value_name: value }, i) => (
                <li key={ i }>{ `${name} : ${value}`}</li>))}
          </ul>
        </label>
        <textarea data-testid="product-detail-evaluation" />
        <button type="button">Submit</button>
        {stars.map((_value, index) => (<span key={ index }>{index + 1}</span>))}
        { product.shipping.free_shipping
          ? <p data-testid="free-shipping">Frete grátis</p>
          : null }
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.handleClick(product) }
        >
          Adicionar ao carrinho
        </button>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <button type="button">
            Carrinho
          </button>
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      query: PropTypes.string,
      category: PropTypes.string,
    }),
  }),
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ProductDetails.defaultProps = {
  match: {
    params: {
      query: '',
    },
  },
};
