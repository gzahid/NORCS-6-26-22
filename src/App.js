import './App.css';
import ButtonContainer from "./components/buttonContainer";
//import Card from "./components/card";
import CardContainer from "./components/cardContainer";


function App() {
  const randomNum = Math.floor(Math.random() * 10); 
  return (
    <div className="App">
      <CardContainer randomNum={randomNum} />
      <ButtonContainer />
     
    </div>
  );
}

export default App;
