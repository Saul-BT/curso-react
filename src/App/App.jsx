import React from 'react';
import WishInput from './WishInput';
import WishItem from './WishItem';
import './App.css';

const wishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false },
];

const App = () => (
  <div className="wish-container">
    <h3>My Wishlist</h3>
    <WishInput />
    <ul className="wish-list">
      {wishes.map(({ text, done }, i) => (
        <WishItem id={`wish${i}`} text={text} defChk={done} />
      ))}
    </ul>
  </div>
);

export default App;
