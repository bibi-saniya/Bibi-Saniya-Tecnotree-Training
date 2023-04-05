import React from 'react';
import MemoryGame from './component/MemoryGame';

const App = () => {
  const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  return <MemoryGame cards={cards} />;
};

export default App;
