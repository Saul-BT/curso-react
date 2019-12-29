import React from 'react';
import PropTypes from 'prop-types';

import './WishInput.css';

const WishInput = ({ title, hint }) => (
  <fieldset className="new-wish-control">
    <legend>{title}</legend>
    <input placeholder={hint} />
  </fieldset>
);

WishInput.defaultProps = {
  title: 'New wish',
  hint: 'Enter wish',
};

WishInput.propTypes = {
  title: PropTypes.string,
  hint: PropTypes.string,
};

export default WishInput;
