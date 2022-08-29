import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilteredContacts, getContacts } from 'redux/selectors';
import ContactItem from './ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilteredContacts);

  const addFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value)
    );
  };

  let filteredContacts = value === '' ? contacts : addFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
