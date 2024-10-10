import Card from "./Card";

export default function CardsDiv({ cardHandleClick, characters }) {
    return (
        <div id="all-cards">
            {
            characters.map((pokemon) => {
                return (
                <Card
                    name={pokemon.name}
                    url={pokemon.url}
                    handleClick={cardHandleClick}
                    key={pokemon.name}
                />
                )
            })
            }
        </div>
    )
}