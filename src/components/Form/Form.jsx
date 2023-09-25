import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  nameInputId = nanoid();

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleAddContact = event => {
    event.preventDefault();
    console.log('this.state :>> ', this.state);
    this.props.onAddContact(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleAddContact}>
        <label htmlFor={this.nameInputId}>Name</label>
        <br />
        <input
          type="text"
          name="name"
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <br />
        <label htmlFor={this.nameInputId}>Number</label>
        <br />
        <input
          type="tel"
          name="number"
          id={this.nameInputId}
          value={this.state.number}
          onChange={this.handleChange}
          required
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
