import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calculator/>
    </div>
  );
}

const Calculator = () => {
  return(
    <div className="calculator">

      <div className="answer-section">
        <h1 className="answer">72</h1>
      </div>

      <div className="button-section">

        <div className="button-row"> 
          <CalculatorButton shape="circle" color="light-gray" text="AC"/>
          <CalculatorButton shape="circle" color="light-gray" text="+/-"/>
          <CalculatorButton shape="circle" color="light-gray" text="%"/>
          <CalculatorButton shape="circle" color="orange" text="/"/>
        </div>
        <div className="button-row"> 
          <CalculatorButton shape="circle" color="gray" text="7"/>
          <CalculatorButton shape="circle" color="gray" text="8"/>
          <CalculatorButton shape="circle" color="gray" text="9"/>
          <CalculatorButton shape="circle" color="orange" text="x"/>
        </div>
        <div className="button-row"> 
          <CalculatorButton shape="circle" color="gray" text="4"/>
          <CalculatorButton shape="circle" color="gray" text="5"/>
          <CalculatorButton shape="circle" color="gray" text="6"/>
          <CalculatorButton shape="circle" color="orange" text="-"/>
        </div>
        <div className="button-row"> 
          <CalculatorButton shape="circle" color="gray" text="1"/>
          <CalculatorButton shape="circle" color="gray" text="2"/>
          <CalculatorButton shape="circle" color="gray" text="3"/>
          <CalculatorButton shape="circle" color="orange" text="+"/>
        </div>
        <div className="button-row"> 
          <CalculatorButton shape="rectangle" color="gray" text="0"/>
          <CalculatorButton shape="circle" color="gray" text="."/>
          <CalculatorButton shape="circle" color="orange" text="="/>
        </div>
      </div>

    </div>
  )

}

const CalculatorButton = ({color, shape, text}) => {

  let text_color;
  color === "light-gray" ? text_color = "text-black" : text_color = "text-white"
  
  return(
    <div className={`calculator-button ${color} ${shape} ${text_color}`}>
      <h3 className="button-text">{text}</h3>
    </div>
  )
}


export default App;
