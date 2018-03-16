import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCategoriesRequest from '../../actions/categoryAction';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    console.log('ich bin awesome');
    this.props.getCategoriesRequest()
      .then()
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="categories">
        {this.props.categories && this.props.categories.map((category) => {
          return (
            <div key={category.id} className="category-item">
              <h2>{ category.category_name }</h2>
              <div className="actions">
                <i className="fas fa-exclamation-circle"></i>
                <i className="fas fa-edit"></i>
                <i className="fas fa-trash-alt"></i>
              </div>
            </div>
            );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryReducer.categories,
  };
}

export default connect(mapStateToProps, { getCategoriesRequest })(Category);
