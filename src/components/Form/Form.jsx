import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

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
    // const newContact = { name: this.state.name, number: this.state.number };
    // this.props.onAddContact = {
    //   name: this.state.name,
    //   number: this.state.number,
    // };
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            // id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            // id={this.nameInputId}
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            required
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
