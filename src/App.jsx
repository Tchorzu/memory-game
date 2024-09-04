import { useState } from "react";
import { Cards } from "./components/Cards/Cards.jsx";
import { CARD_ITEMS } from "./utils/CardItems.js";
import "./App.css";

function shuffleCard(array) {
  return array.sort(() => Math.random() - 0.5);
}

function App() {
  const [cards, setCards] = useState(shuffleCard([...CARD_ITEMS]));
  const [checkCard, setCheckCard] = useState(null);
  const [canClick, setCanClick] = useState(true);

  function handleCardClick(id) {
    if (!canClick) {
      return;
    }

    if (checkCard === null) {
      setCheckCard(id);
      setCards(
        cards.map((card) => {
          if (card.id === id) {
            return { ...card, isShown: true };
          } else {
            return { ...card };
          }
        }),
      );
    } else {
      setCanClick(false);
      const prevCheckCard = cards.filter((card) => card.id === checkCard);
      let nowCheckCard = null;
      setCards(
        cards.map((card) => {
          if (card.id === id) {
            nowCheckCard = card;
            return { ...card, isShown: true };
          } else {
            return { ...card };
          }
        }),
      );

      if (prevCheckCard[0].item !== nowCheckCard.item) {
        setTimeout(() => {
          setCards(
            cards.map((card) => {
              if (card.id === prevCheckCard[0].id) {
                return { ...card, isShown: false };
              } else if (card.id === nowCheckCard.id) {
                return { ...card, isShown: false };
              } else {
                return { ...card };
              }
            }),
          );
        }, 800);
      }

      setCheckCard(null);
      setTimeout(() => setCanClick(true), 800);
    }
  }

  function handleResetClick() {
    setCards(shuffleCard(cards.map((card) => ({ ...card, isShown: false }))));
  }

  return (
    <div className="container">
      <Cards cards={cards} onCardClick={handleCardClick} />
      {cards.every((card) => card.isShown) && (
        <div className="winInfo">Wygrałeś!</div>
      )}
      <button className="reset" onClick={handleResetClick}>
        Zresetuj
      </button>
    </div>
  );
}
export default App;
