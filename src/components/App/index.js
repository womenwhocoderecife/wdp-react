import React from 'react';
import Repositories from '../Repositories';

import './app.css';
import Header from '../Header';

const App = () => (
  <main className="container">
    <Header />
    <Repositories />
  </main>
);

export default App;
