import Card from  "../card";

export default function CardContainer(props){
    console.log(props.randomNum);
    return(
        <>
            {props.randomNum}
            <Card />
        </>
    );
}