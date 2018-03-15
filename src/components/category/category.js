import React, { Component } from 'react';


class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [], 
    };
  }

  componentWillMount() {
    console.log('ich bin awesome');
    this.props.getCategoriesRequest()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="categories">
      
        <div className="category-item">
          <h2>Breakfast</h2>
          <div className="actions">
            <i className="fas fa-exclamation-circle"></i>
            <i className="fas fa-edit"></i>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
          
      </div>
    );
  }
}

export default Category;
