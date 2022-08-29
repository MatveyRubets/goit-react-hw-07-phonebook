import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContacts } from 'redux/slice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const addedContacts = { name, number, id: nanoid() };
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);

      return;
    } else {
      dispatch(addContacts(addedContacts));
    }

    setName('');
    setNumber('');
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <strong>Name</strong>
      <br />
      <input
        onChange={handleInputChange}
        type="text"
        name="name"
        value={name}
        placeholder="Homer Simpson"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <br />
      <strong>Number</strong>
      <br />
      <input
        onChange={handleInputChange}
        type="tel"
        name="number"
        value={number}
        placeholder="044-444-00-44"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <br />
      <button>Add contact</button>
    </form>
  );
};

export default ContactForm;
