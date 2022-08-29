import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { changeFilter } from 'redux/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilteredContacts);

  const onInputChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p>Search by Name</p>
      <input type="text" name="filter" value={value} onChange={onInputChange} />
    </div>
  );
};

Filter.propTypes = {
  onInputChange: PropTypes.func,
};

export default Filter;
