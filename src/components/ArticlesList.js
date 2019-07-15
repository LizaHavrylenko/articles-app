import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(article => {
      const { id, title } = article;

      return (
        <Link to={`/articles/${id}`} key={id} className="d-block">
          <li
            className="list-group-item py-4 px-4 d-inline-block 
          border-bottom border-top-0"
          >
            {title}
          </li>
        </Link>
      );
    })}
  </ul>
);

ArticlesList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export default ArticlesList;
