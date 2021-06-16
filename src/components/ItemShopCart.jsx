import React, { Component } from 'react';

export default class ItemShopCart extends Component {
  constructor() {
    super();
    this.state = {
      itemQuant: 1,
    };
  }

  addQuantity({ target }) {
  }

  subQuantity({ target }) {
  }

  render() {
    const { thumbnail, title, price } = this.props;
    return (
      <div>
        <button>X</button>
        <img src={ thumbnail } alt={ title } />
        <span>{ title }</span>
        <button onClick={this.subQuantity}>-</button>
        <span>{QUANTITY}</span>
        <button onClick={this.addQuantity}>+</button>
        <span>{ `R$ ${price * QUANTITY}` }</span>
      </div>
    );
  }
}
