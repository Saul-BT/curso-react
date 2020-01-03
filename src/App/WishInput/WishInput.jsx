import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './WishInput.css';

const WishInput = ({ onNewWish, title, hint }) => {
  const [newWishText, setNewWishText] = useState('');
  return (
    <fieldset className="new-wish-control">
      <legend>{title}</legend>
      <input
        maxLength="30"
        placeholder={hint}
        value={newWishText}
        onChange={(e) => setNewWishText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && newWishText.length) {
            onNewWish({ text: newWishText, done: false });
            setNewWishText('');
          }
        }}
      />
    </fieldset>
  );
};

WishInput.defaultProps = {
  onNewWish: () => {},
  title: 'New wish',
  hint: 'Enter wish',
};

WishInput.propTypes = {
  onNewWish: PropTypes.func,
  title: PropTypes.string,
  hint: PropTypes.string,
};

export default WishInput;
