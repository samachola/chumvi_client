import React, { Component } from 'react';
import { connect } from 'react-redux';
import getRecipeRequest from '../../actions/action_recipe';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    this.props.getRecipeRequest()
      .then()
      .catch();
  }
  render() {
    return (
      <div className="ch-recipes">
        <div className="recipes">
          { this.props.recipes && this.props.recipes.map((recipe) => {
            return (
              <div key={recipe.id} className="recipe">
                <div className="meta">
                  <p>Breakfast</p>
                </div>

                <h2>{ recipe.title }</h2>
                <div className="actions">
                  <i className="fas fa-exclamation-circle"></i>
                  <i className="fas fa-edit"></i>
                  <i className="fas fa-trash-alt"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipeReducer.recipes,
  };
}

export default connect(mapStateToProps, { getRecipeRequest })(Recipe);
