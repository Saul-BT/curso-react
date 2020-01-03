import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import './WishItem.css';

const WishItem = ({ id, text, done, onDoneChange }) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    let ageInterval;

    if (!done) {
      ageInterval = setInterval(() => {
        if (done) clearInterval(ageInterval);
        else setAge((prevAge) => prevAge + 1);
      }, 1000);
    } else setAge(0);

    return () => clearInterval(ageInterval);
  }, [done]);

  return (
    <li
      age={age}
      className={`wish-item ${(age >= 10 && 'danger') ||
        (age >= 5 && 'warning')}`}
    >
      <input
        onChange={(e) => onDoneChange(e.target.checked)}
        id={id}
        type="checkbox"
        checked={done}
      />
      <label htmlFor={id}>{text}</label>
    </li>
  );
};

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
