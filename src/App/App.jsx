import React from 'react';
import WishInput from './WishInput';
import WishList from './WishList';
import './App.css';

// Importing css color variables
import '../../assets/colors.css';

const wishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false },
];

const App = () => (
  <div className="wish-container">
    <h3>My Wishlist</h3>
    <WishInput />
    <WishList wishes={wishes} />
  </div>
);

export default App;
