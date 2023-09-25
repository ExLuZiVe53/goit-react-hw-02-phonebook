import React from 'react';
import { Component } from 'react';
import Form from './Form/Form';

/*
Алгоритм роботи з формами:

1. Розмітити HTML самої форми.
2. Створити стейт, поля якого будуть збігатися з назвами атрибутів "name" у інпутів.
3. Прив`язати поля стейту до атрибуту "value" відповідних інпутів.
4. Створити обробник подій, який буде обробляти поля вводу і встановлювати значення в стейт.
5. Обробник подій, прикріпити до події onChange у кожного інпуту.
6. Додати обробник сабміту форми, де ми згрупуємо фінальні дані та надішлемо їх назовні.

*/

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

  addContactForm = oneTask => {
    const searchName = this.state.contacts
      .map(oneContact => oneContact.name)
      .includes(oneTask.name);

    if (searchName) {
      alert(`${oneTask.name} is already in contacts`);
    } else if (oneTask.name.length === 0) {
      alert('Fields must be filled!');
    } else {
      const contact = {
        ...oneTask,
        id: nanoid(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  formAddHandler = data => {
    console.log('data :>> ', data);
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Phonebook</h1>
        <Form onAddContact={this.formAddHandler} />
        <ul>
          <li>Rosie Simpson</li>
          <li>Hermonie Cline</li>
          <li>Eden Clements</li>
        </ul>
      </div>
    );
  }
}
