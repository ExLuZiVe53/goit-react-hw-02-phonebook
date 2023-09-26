import React, { Component } from 'react';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // add new contact in to state
  addContactForm = data => {
    const searchName = this.state.contacts
      .map(cont => cont.name)
      .includes(data.name);

    if (searchName) {
      alert(`${data.name} is already in contacts`);
    } else if (data.name.length === 0) {
      alert('Fields must be filled!');
    } else {
      const addContact = {
        ...data,
        id: nanoid(),
      };
      console.log('data :>> ', data);

      this.setState(prevState => ({
        contacts: [...prevState.contacts, addContact],
      }));
    }
  };

  // add filter by contact
  changeFilter = filter => {
    this.setState({ filter });
  };

  // filter includes toLowerCase()
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  // delete contact in this.state
  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  // formAddHandler = data => {
  //   console.log('data :>> ', data);
  // };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div
        style={{
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
        className="wrapper"
      >
        <h1 className="title">Phonebook</h1>
        <Form onAddContact={this.addContactForm} />
        <h2>Contacts</h2>

        {visibleContacts.length === 0 ? (
          <p>Empty</p>
        ) : (
          <div>
            <Filter value={filter} onChangeFilter={this.changeFilter} />
            <ContactList
              contacts={visibleContacts}
              onRemoveContact={this.removeContact}
            />
          </div>
        )}

        {/* {visibleContacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )} */}
      </div>
    );
  }
}
