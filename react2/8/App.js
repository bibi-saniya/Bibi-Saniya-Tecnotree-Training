import React, { useState, useEffect } from "react";

import "./index.css";

const SYMBOLS = [
  "🐶",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  
];

function generateCards() {
  const cards = [];
  for (let i = 0; i < SYMBOLS.length; i++) {
    cards.push({ id: i * 2, symbol: SYMBOLS[i] });
    cards.push({ id: i * 2 + 1, symbol: SYMBOLS[i] });
  }
  return shuffle(cards);
}

function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Card({ card, index, handleClick }) {
  return (
    <div
      className={`card ${card.flipped ? "flipped" : ""} ${
        card.matched ? "matched" : ""
      }`}
      onClick={() => handleClick(index)}
    >
      <div className="front">{card.flipped ? card.symbol : "?"}</div>
      <div className="back"></div>
    </div>
  );
}

function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    setCards(generateCards());
  }, []);

  useEffect(() => {
    if (flipped.length < 2) return;
    const [firstIndex, secondIndex] = flipped;
    const [firstCard, secondCard] = [cards[firstIndex], cards[secondIndex]];
    if (firstCard.symbol === secondCard.symbol) {
      setMatched([...matched, firstIndex, secondIndex]);
      setFlipped([]);
    } else {
      setTimeout(() => {
        setCards(
          cards.map((card, index) => {
            if (index === firstIndex || index === secondIndex) {
              return { ...card, flipped: false };
            }
            return card;
          })
        );
        setFlipped([]);
      }, 1000);
    }
  }, [flipped]);

  function handleClick(index) {
    if (matched.includes(index)) return;
    setCards(
      cards.map((card, currentIndex) => {
        if (index === currentIndex) {
          return { ...card, flipped: true };
        }
        return card;
      })
    );
    setFlipped([...flipped, index]);
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
