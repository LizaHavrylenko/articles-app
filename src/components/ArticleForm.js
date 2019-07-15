import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ArticleForm extends Component {
  formRef = React.createRef();
  titleRef = React.createRef();
  textRef = React.createRef();

  toggleShowHintText = value => this.setState({ hintText: value });

  validate = () => {
    const inputs = [this.titleRef.current, this.textRef.current];

    if (!this.formRef.current.checkValidity()) {
      inputs.forEach(input => {
        const errorLabel = input.parentNode.querySelector('.invalid-feedback');

        if (!input.validity.valid) {
          switch (input.id) {
            case 'title':
              errorLabel.textContent =
                'Enter the title of your article, please.';
              break;
            case 'text':
              errorLabel.textContent = 'Add the text of your article, please.';
              break;
            default:
              errorLabel.textContent = input.validationMessage;
          }

          input.classList.add('invalid');

          input.addEventListener('input', () => {
            if (input.validity.valid) {
              input.classList.remove('invalid');
              errorLabel.textContent = '';
            }
          });
        } else {
          errorLabel.textContent = '';
        }
      });

      return false;
    } else {
      return true;
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.validate()) {
      const { handleFormSubmit } = this.props;

      handleFormSubmit();
      this.props.history.push(`/articles`);
    }
  };

  render() {
    const { title, text, handleChangeInput } = this.props;

    return (
      <form
        className="mt-4 pb-5 border-bottom"
        onSubmit={this.handleSubmit}
        ref={this.formRef}
        noValidate
      >
        <fieldset className="form-group my-4 mb-3">
          <input
            className="form-control form-control-lg pt-5 pb-4 px-4
            rounded-lg shadow-sm"
            type="text"
            id="title"
            ref={this.titleRef}
            value={title}
            placeholder="Article Title"
            onChange={event => handleChangeInput(event, 'title')}
            required
          />
          <span className="invalid-feedback px-4 py-1"></span>
          <span id="titleHelp" className="small form-text text-muted px-4 py-1">
            Give it a short name
          </span>
        </fieldset>
        <fieldset className="form-group">
          <textarea
            className="form-control rounded-lg shadow-sm p-4"
            rows="4"
            type="text"
            id="text"
            ref={this.textRef}
            value={text}
            placeholder="Article text"
            onChange={event => handleChangeInput(event, 'text')}
            required
          />
          <span className="invalid-feedback px-4 py-1"></span>
          <span id="textHelp" className="small form-text text-muted px-4 py-1">
            Type the best article you can write
          </span>
        </fieldset>
        <button
          type="submit"
          className="btn btn-pink btn-lg rounded-pill px-5 py-3
          mt-4 border-0"
        >
          Submit
        </button>
      </form>
    );
  }
}

ArticleForm.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export default withRouter(ArticleForm);
