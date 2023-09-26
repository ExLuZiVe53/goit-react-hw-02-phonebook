import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className="ul">
    console.log(contacts)
    {contacts.map(contact => (
      <li className="li" key={contact.id}>
        <span>{contact.name}</span>
        <span>{contact.number}</span>

        <button
          className="delete"
          type="button"
          name="delete"
          onClick={() => onRemoveContact(contact.id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
