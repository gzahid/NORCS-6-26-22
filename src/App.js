import './App.css';
import ButtonContainer from "./components/buttonContainer";
//import Card from "./components/card";
import CardContainer from "./components/cardContainer";
import {useState} from "react";

function App() {
  const [cards, setcards] = useState([]);
  console.log(cards);
  function cardHandle (){
    const randomNum = Math.floor(Math.random() * 10);
    setcards([...cards, randomNum]);
  }
  return (
    <div className="App">
      <CardContainer cards={cards} />
      <ButtonContainer cardHandle = {cardHandle} />
     
    </div>
  );
}

export default App;
