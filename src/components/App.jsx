import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';

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
  nameInputId = nanoid();

  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <label htmlFor={this.nameInputId}>Name</label>
          <input type="text" name="name" id={this.nameInputId} required />
          <br />
          <button type="submit">Add contact</button>
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
