import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      bougthtems: [],
    };
  }

  componentDidMount() {

  }
  receiveBougthItems() {
    const { items } = this.props /*verificar nome item com o pessoal que fez a 7 e a 9 */
    this.setState( { boughtItems: items }) /*verificar nome item com o pessoal que fez a 7 e a 9 */
  }
  
  render() {
    return (
      <h2 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio

      
      </h2>
    );
  }
}
