import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
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

  showMenu(event) {
    const { showMenu } = this.state;
    event.preventDefault();
    if (!showMenu) {
      this.setState({
        showMenu: true,
      });
    } else {
      this.setState({
        showMenu: false,
      });
    }
  }

  render() {
    const { loading, categoriesList, showMenu } = this.state;
    const { handleChange } = this.props;
    return loading ? (
      <p>loading...</p>
    ) : (
      <div>
        <button className="material-icons" type="button" onClick={ this.showMenu }>
          reorder
        </button>
        {
          showMenu ? (
            <div className="menu">
              <div>
                {categoriesList.map((category) => (
                  <label htmlFor={ category.id } key={ category.id }>
                    <input
                      type="radio"
                      name="category"
                      id={ category.id }
                      data-testid="category"
                      value={ category.id }
                      onClick={ handleChange }
                    />
                    {category.name}
                    <br />
                  </label>
                ))}
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
