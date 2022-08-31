import { contactsOperations } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ContactItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const removeClick = () => {
    dispatch(contactsOperations.removeContacts(id));
  };

  return (
    <li key={id}>
      {name}: {number}
      <div>
        <button type="button" onClick={removeClick}>
          Delete
        </button>
      </div>
    </li>
  );
};

ContactItem.protoTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactItem;
