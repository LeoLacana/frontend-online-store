import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemShopCart extends Component {
  render() {
    const { item, cart, addQuantity, subQuantity } = this.props;
    const { thumbnail, title, price } = item;
    const quantity = cart.filter((product) => product === item).length;
    return (
      <div>
        <button type="button">Deletar</button>
        <img src={ thumbnail } alt={ title } />
        <span data-testid="shopping-cart-product-name">{ title }</span>
        <button
          onClick={ () => subQuantity(item) }
          data-testid="product-decrease-quantity"
          type="button"
        >
          subtrair
        </button>
        <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        <button
          onClick={ () => addQuantity(item) }
          data-testid="product-increase-quantity"
          type="button"
        >
          incrementar
        </button>
        <span>{ `R$${price * quantity}` }</span>
      </div>
    );
  }
}

ItemShopCart.propTypes = {
  item: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  addQuantity: PropTypes.func.isRequired,
  subQuantity: PropTypes.func.isRequired,
};
