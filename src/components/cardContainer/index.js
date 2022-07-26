import Card from  "../card";

export default function CardContainer({randomNum, name}){
    console.log(randomNum);
    return(
        <>
            {randomNum}
            {name}
            <Card />
        </>
    );
}