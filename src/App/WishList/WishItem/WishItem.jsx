import PropTypes from 'prop-types';
import React from 'react';
import './WishItem.css';

const WishItem = ({ id, text, done, onDoneChange }) => (
  <li className="wish-item">
    <input
      onChange={(e) => onDoneChange(e.target.checked)}
      id={id}
      type="checkbox"
      checked={done}
    />
    <label htmlFor={id}>{text}</label>
  </li>
);

WishItem.defaultProps = {
  id: 'no-id',
  text: 'Empty wish',
  done: false,
  onDoneChange: () => {},
};

WishItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  done: PropTypes.bool,
  onDoneChange: PropTypes.func,
};

export default WishItem;
