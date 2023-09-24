import React from 'react';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <label>Name</label>
          <input type="text" name="name" required />
          <button type="text">Add contact</button>
        </form>
        <ul>
          <li>Rosie Simpson</li>
          <li>Hermonie Cline</li>
          <li>Eden Clements</li>
        </ul>
      </div>
    );
  }
}
