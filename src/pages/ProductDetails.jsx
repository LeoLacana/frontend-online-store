import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      product: {},
    };
  }

  componentDidMount() {
    this.searchProducts();
  }

  async searchProducts() {
    const { match: { params } } = this.props;
    const { category, id, query } = params;
    const fetchProducts = await getProductsFromCategoryAndQuery(category, query);
    const product = fetchProducts.results.find((value) => value.id === id);
    this.setState({
      product,
      loading: false,
    }, () => console.log(this.state));
  }

  render() {
    const { loading, product } = this.state;
    const { thumbnail, price, title, tags } = product;
    return loading ? (<h3>loading...</h3>) : (
      <div>
        <h1 data-testid="product-detail-name">{ `${title} - R$ ${price}` }</h1>
        <img src={ thumbnail } alt="product" />
        <label htmlFor="details">
          O que você precisa saber sobre este produto
          <ul>
            {tags.map((element) => (<li key={ element }>{ element }</li>))}
          </ul>
        </label>
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
};

ProductDetails.defaultProps = {
  match: {
    params: {
      query: '',
    },
  },
};
