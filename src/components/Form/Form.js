import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { toast } from 'react-toastify';
import * as operations from 'redux/contacts/contacts-operations';
import s from './Form.module.css';

import Loader from 'Loader/Loader';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.entities);
  const isLoading = useSelector(state => state.contacts.isLoading);

  const nameId = nanoid();
  const phoneId = nanoid();

  const handleInputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = { name, number };

    if (isContactUnique(contact) === false) {
      return;
    }

    dispatch(operations.addContact(contact));

    toast.success(`Contact '${contact.name}' successfully added`);
    reset();
  };

  const isContactUnique = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      toast.warning(`Contact '${newContact.name}' already exist`);
      return false;
    }
    return newContact;
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form
        name="signup_form"
        autoComplete="on"
        onSubmit={handleSubmit}
        className={s.form}
      >
        <div className={s.container}>
          <label htmlFor={nameId} className={s.label}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleInputChange}
              id={nameId}
              className={s.input}
            />
          </label>
          <label htmlFor={phoneId} className={s.label}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleInputChange}
              id={phoneId}
              className={s.input}
            />
          </label>

          {isLoading === true ? (
            <Loader />
          ) : (
            <button type="submit" className={s.button}>
              Add contact
            </button>
          )}
        </div>
      </form>
    </>
  );
}

