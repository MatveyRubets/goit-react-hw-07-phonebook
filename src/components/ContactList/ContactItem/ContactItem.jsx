import PropTypes from 'prop-types';
import { removeContact } from 'redux/slice';
import { useDispatch } from 'react-redux';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </button>
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
