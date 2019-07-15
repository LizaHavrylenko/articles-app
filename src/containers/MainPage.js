import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ArticlesList from '../components/ArticlesList';
import { selectArticles } from '../store/selectors';

const MainPage = ({ articles }) => (
  <Fragment>
    <div
      className="d-flex align-items-center mt-3 pb-5 headerContainer 
    border-bottom"
    >
      <h1 className="d-inline-block font-weight-bold">Articles</h1>
      <Link
        to="/articles/new"
        className="btn btn-pink rounded-pill
        px-3 py-3 ml-4 d-inline-block border-0"
        role="button"
      >
        Add New
      </Link>
    </div>
    {articles && articles.length > 0 && <ArticlesList articles={articles} />}
  </Fragment>
);

const mapStateToProps = state => ({
  articles: selectArticles(state),
});

MainPage.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default connect(mapStateToProps)(MainPage);
