import ContactItem from './ContactItem/ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const value = useSelector(contactsSelectors.getFilteredContacts);
  const loading = useSelector(contactsSelectors.IsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const getFilteredNames = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value)
    );
  };

  let searchContact = value === '' ? contacts : getFilteredNames();

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {contacts.length > 0 &&
        searchContact.map(({ id, phone, name }) => {
          return <ContactItem key={id} id={id} name={name} number={phone} />;
        })}
    </div>
  );
};

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
