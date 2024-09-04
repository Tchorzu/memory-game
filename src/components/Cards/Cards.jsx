import { Card } from "../Card/Card.jsx";
import "./Cards.css";

export function Cards({ cards, onCardClick }) {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          item={card.item}
          isShown={card.isShown}
          handleClick={() => onCardClick(card.id)}
        ></Card>
      ))}
    </div>
  );
}
