import ComicsCard from "./ComicsCards.jsx";
import comics from '../../../data/comics.js';

// Cards.jsx
export default function Cards() {
    return (
        <div className="container-cards">
            {comics.map(element => <ComicsCard key={element.id} comicsCards={element} />
            )}
        </div>
    );
}