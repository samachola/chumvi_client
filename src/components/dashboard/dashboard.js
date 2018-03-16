import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../category/category';
import Recipe from '../recipes/recipes';

class Dashboard extends Component {


  render() {
    return (
      <div className="ch-home">
        <div className="ch-categories">
          <div className="intro">
            <h2> my Categories</h2>
            <div className="add">
              <Link to="/login">ADD</Link>
            </div>
          </div>
          <Category />
        </div>
        <Recipe />
      </div>
    );
  }
}

export default Dashboard;
