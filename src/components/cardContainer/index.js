import Card from  "../card";

export default function CardContainer({cards}){
    console.log("test cards", cards);
    const cardsProcessed = cards.map((card, index) => {
        return(
            <div key={index}>
                <Card cardValue={card}/>
            </div>
        )
    })
    return(
        <div>
            {cardsProcessed}
        </div>
    );
}