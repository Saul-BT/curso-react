import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

import './WishList.css';

const WishList = ({ wishes, onWishesChange }) => (
  <ul className="wish-list">
    {wishes.map(({ text, done }, i) => (
      <WishItem
        key={text}
        id={`wish${i}`}
        text={text}
        done={done}
        onDoneChange={(value) => {
          const updatedWises = [...wishes];
          updatedWises[i].done = value;
          onWishesChange(updatedWises);
        }}
      />
    ))}
  </ul>
);

WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      text: PropTypes.string,
    }),
  ),
  onWishesChange: PropTypes.func,
};

export default WishList;
