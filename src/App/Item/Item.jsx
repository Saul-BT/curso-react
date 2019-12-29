import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './Item.css';

const Item = ({ id, text, defChk }) => {
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

Item.defaultProps = {
  id: 'no-id',
  text: 'Empty wish',
  defChk: false,
};

Item.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  defChk: PropTypes.bool,
};

export default Item;
