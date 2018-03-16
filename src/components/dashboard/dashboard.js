import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Category from '../category/category';

class Dashboard extends Component {


  render() {
    const getCategoriesRequest = this.props;
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
        <div className="ch-recipes">
            <div className="recipes">

                <div className="recipe">
                    <div className="meta">
                        <p>Breakfast</p>
                    </div>

                    <h2>Recipe Item</h2>

                    <div className="actions">
                        <i className="fas fa-exclamation-circle"></i>
                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                </div>

                <div className="recipe">
                    <div className="meta">
                        <p>Breakfast</p>
                    </div>

                    <h2>Recipe Item</h2>

                    <div className="actions">
                        <i className="fas fa-exclamation-circle"></i>
                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                </div>

                <div className="recipe">
                    <div className="meta">
                        <p>Breakfast</p>
                    </div>

                    <h2>Recipe Item</h2>

                    <div className="actions">
                        <i className="fas fa-exclamation-circle"></i>
                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Dashboard;
