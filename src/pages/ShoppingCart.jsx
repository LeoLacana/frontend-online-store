import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ItemShopCart from '../components/ItemShopCart';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.filterCart = this.filterCart.bind(this);
    this.state = {
      filteredCart: [],
    };
  }

  componentDidMount() {
    this.filterCart();
  }

  filterCart() {
    const { cart } = this.props;
    const filteredCart = cart.reduce((acum, curr) => (acum
      .includes(curr) ? acum : acum.concat(curr)), []);
    this.setState({ filteredCart });
  }

  render() {
    const { filteredCart } = this.state;
    const { cart, addQuantity, subQuantity } = this.props;
    return filteredCart.length > 0 ? (
      <div>
        <h4>{filteredCart.length}</h4>
        {filteredCart.map((item) => (
          <ItemShopCart
            item={ item }
            cart={ cart }
            addQuantity={ addQuantity }
            subQuantity={ subQuantity }
            key={ item.id }
          />
          // <div key={ item.id }>
          //   <h2 data-testid="shopping-cart-product-name">{ item.title }</h2>
          // </div>
        ))}
        <Link data-testid="checkout-products" to="/checkout"><button type="button">Finalizar Compra</button></Link>
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
  addQuantity: PropTypes.func.isRequired,
  subQuantity: PropTypes.func.isRequired,
};
