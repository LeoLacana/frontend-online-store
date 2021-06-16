import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardProduct extends Component {
  render() {
    const { product, query } = this.props;
    const { title, price, thumbnail, category_id: categoryId, id } = product;
    return (
      <Link
        data-testid="product-detail-link"
        to={ `/product/${query}/${categoryId}/${id}` }
      >
        <div data-testid="product">
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <p>
            R$
            { price }
          </p>
        </div>
      </Link>
    );
  }
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
  }).isRequired,
  query: PropTypes.string.isRequired,
};

// CardProduct.defaultProps = {
//   query: '',
// };
