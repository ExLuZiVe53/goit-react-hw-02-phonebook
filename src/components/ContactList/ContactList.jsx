import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.ListStyle}>
    {contacts.map(contact => (
      <li className="li" key={contact.id}>
        <span className={styles.NameSpan}>{contact.name}</span>
        <span className={styles.TelSpan}>{contact.number}</span>

        <button
          className={styles.delete}
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
