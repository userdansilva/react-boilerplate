import { Card } from "../Card";

function Placeholder() {
  const cards = [];
  const cardsAmount = 7;

  for (let i = 0; i < cardsAmount; i += 1) {
    cards.push(<Card.Placeholder />);
  }

  return (
    <div
      className="grid grid-cols-3 max-w-5xl gap-3 w-full"
    >
      {cards}
    </div>
  );
}

export { Placeholder };
