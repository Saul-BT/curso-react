import React from "react";

const wishes = [
  { text: "Travel to the moon", done: false },
  { text: "Pay the gym", done: true },
  { text: "Go to the gym", done: false },
];

const App = () => (
  <div>
    <h1>My Wishlist</h1>
    <fieldset>
      <legend>New wish</legend>
      <input placeholder="Enter wish" />
    </fieldset>
    <ul>
      {wishes.map(({ text, done }, i) => (
        <li>
          <input id={`wish${i}`} type="checkbox" checked={done} />
          <label htmlFor={`wish${i}`}>{text}</label>
        </li>
      ))}
    </ul>
  </div>
);

export default App;
