import React, { Component } from 'react';

export default class Forms extends Component {
  render() {
    return (
      <div>
        <label htmlFor="Name">
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome Completo"
          />
        </label>
        <label htmlFor="Email">
          <input
            data-testid="checkout-email"
            type="text"
            placeholder="Email"
          />
        </label>
        <label htmlFor="CPF">
          <input
            data-testid="checkout-cpf"
            type="text"
            placeholder="CPF"
          />
        </label>
        <label htmlFor="Cellphone">
          <input
            data-testid="checkout-phone"
            type="text"
            placeholder="Cellphone"
          />
        </label>
        <label htmlFor="CEP">
          <input
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
          />
        </label>
        <label htmlFor="Address">
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Address"
          />
        </label>
        <label htmlFor="Complement">
          <input
            type="text"
            placeholder="Complement"
          />
        </label>
        <label htmlFor="HouseNumber">
          <input
            type="text"
            placeholder="HouseNumber"
          />
        </label>
        <label htmlFor="City">
          <input
            type="text"
            placeholder="City"
          />
        </label>
        <label htmlFor="Estate">
          <select
            name="Estates"
            id="Estate"
          >
            Brasil
          </select>
        </label>
      </div>
    );
  }
}
