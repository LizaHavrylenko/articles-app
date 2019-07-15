import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectArticle } from '../store/selectors';

const ViewArticle = ({ article: { title, text, id } }) => (
  <Fragment>
    <h1 className="mt-3 font-weight-bold">{title}</h1>
    <p className="d-block mt-4">{text}</p>
  </Fragment>
);

ViewArticle.propTypes = {
  id: PropTypes.string.isRequired,
  article: PropTypes.object.isRequired,
};

const makeMapStateToProps = state => {
  const selectArticleForThisComponent = selectArticle();

  const mapStateToProps = (state, ownProps) => ({
    article: selectArticleForThisComponent(state, ownProps.id),
  });

  return mapStateToProps;
};

export default connect(makeMapStateToProps)(ViewArticle);
