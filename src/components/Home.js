// src/components/Home.js
import React from 'react';
import { username, city } from '../data/user'; 

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
      <p>Username: {username}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default Home;
