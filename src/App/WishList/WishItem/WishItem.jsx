import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './WishItem.css';

const WishItem = ({ id, text, defChk }) => {
  const [checked, setChecked] = useState(defChk);
  return (
    <li className="wish-item">
      <input
        onClick={() => setChecked(!checked)}
        id={id}
        type="checkbox"
        checked={checked}
      />
      <label htmlFor={id}>{text}</label>
    </li>
  );
};

WishItem.defaultProps = {
  id: 'no-id',
  text: 'Empty wish',
  defChk: false,
};

WishItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  defChk: PropTypes.bool,
};

export default WishItem;
