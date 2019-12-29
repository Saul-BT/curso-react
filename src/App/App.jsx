import React from 'react';
import Item from './Item';
import './App.css';

const wishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false },
];

const App = () => (
  <div className="wish-container">
    <h3>My Wishlist</h3>
    <fieldset>
      <legend>New wish</legend>
      <input placeholder="Enter wish" />
    </fieldset>
    <ul className="wish-list">
      {wishes.map(({ text, done }, i) => (
        /*
        <li>
          <input id={`wish${i}`} type="checkbox" checked={done} />
          <label htmlFor={`wish${i}`}>{text}</label>
        </li>
        */
        <Item id={`wish${i}`} text={text} defChk={done} />
      ))}
    </ul>
  </div>
);

export default App;
