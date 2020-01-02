import React, { useState } from 'react';
import WishInput from './WishInput';
import WishList from './WishList';
import './App.css';

// Importing css color variables
import '../../assets/colors.css';

const defaultWishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false },
];

const App = () => {
  const [wishes, setWishes] = useState(defaultWishes);
  return (
    <div className="wish-container">
      <h3>My Wishlist</h3>
      <WishInput onNewWish={wish => setWishes([wish, ...wishes])} />
      <WishList wishes={wishes} />
    </div>
  );
};

export default App;
