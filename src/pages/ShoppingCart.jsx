import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;
    return cart.length > 0 ? (
      <div>
        <h4 data-testid="shopping-cart-product-quantity">{cart.length}</h4>
        {cart.map((item) => (
          <div key={ item.id }>
            <h2 data-testid="shopping-cart-product-name">{ item.title }</h2>
          </div>
        ))}
      </div>
    ) : (
      <h2 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h2>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
