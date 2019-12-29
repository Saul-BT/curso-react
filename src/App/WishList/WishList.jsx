import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

import './WishList.css';

const WishList = ({ wishes }) => (
  <ul className="wish-list">
    {wishes.map(({ text, done }, i) => (
      <WishItem id={`wish${i}`} text={text} defChk={done} />
    ))}
  </ul>
);

WishList.defaultProps = {
  wishes: [],
};

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      text: PropTypes.string,
    }),
  ),
};

export default WishList;
