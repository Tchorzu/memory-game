import "./Card.css";

export function Card({ item, isShown, handleClick }) {
  return (
    <button
      className={`card ${isShown ? "shown" : ""}`}
      onClick={handleClick}
      disabled={isShown}
    >
      {isShown ? item : "❓"}
    </button>
  );
}
