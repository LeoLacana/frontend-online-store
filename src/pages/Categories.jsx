import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };

    this.fetchCategory = this.fetchCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    const categoriesList = await getCategories();
    this.setState({
      loading: false,
      categoriesList,
    });
  }

  render() {
    const { loading, categoriesList } = this.state;
    const { handleChange } = this.props;
    return loading ? (
      <p>loading...</p>
    ) : (
      <div>
        {categoriesList.map((category) => (
          <label htmlFor="category" key={ category.id }>
            {category.name}
            <input
              type="radio"
              name="category"
              id="category"
              data-testid="category"
              value={ category.id }
              onClick={ handleChange }
            />
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
