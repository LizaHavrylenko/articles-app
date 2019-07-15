import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { addArticle } from '../store/actions';
import ArticleForm from '../components/ArticleForm';
import ArticlesList from '../components/ArticlesList';
import { selectLastArticles } from '../store/selectors';

class AddArticle extends Component {
  state = {
    title: '',
    text: '',
    id: uuidv4(),
  };

  handleChangeInput = (event, type) => {
    this.setState({
      [type]: event.target.value,
    });
  };

  handleSubmit = () => {
    const { addArticle } = this.props;

    addArticle(this.state);
    this.setState({
      title: '',
      text: '',
    });
  };

  render() {
    const { title, text, id } = this.state;
    const { lastArticles: articles } = this.props;

    return (
      <Fragment>
        <h1 className="font-weight-bold">New Article</h1>
        <ArticleForm
          handleChangeInput={this.handleChangeInput}
          handleFormSubmit={this.handleSubmit}
          title={title}
          id={id}
          text={text}
        />
        {articles && articles.length > 0 && (
          <ArticlesList articles={articles} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  lastArticles: selectLastArticles(state),
});

export default connect(
  mapStateToProps,
  { addArticle },
)(AddArticle);
