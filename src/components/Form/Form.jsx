import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

class Form extends Component {
  nameInputId = nanoid();

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onAddContact({ ...this.state });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            // id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor={this.nameInputId}>
          Number
          <input
            type="tel"
            name="number"
            // id={this.nameInputId}
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// Form.propTypes = {
//   onAddContact: PropTypes.function.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

export default Form;
