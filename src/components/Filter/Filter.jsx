import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { filter } from 'redux/contacts/contactsActions';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilteredContacts);

  const inputChange = event => {
    const changeValue = event.target.value;
    dispatch(filter(changeValue));
  };

  return (
    <div>
      <label>
        <p>Find contacts by name</p>
        <input type="text" name="number" value={value} onChange={inputChange} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  inputChange: PropTypes.func,
};

export default Filter;
