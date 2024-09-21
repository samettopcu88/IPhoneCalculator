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
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
        </div>
        <div className="button-row"> 
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
        </div>
        <div className="button-row"> 
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
        </div>
        <div className="button-row"> 
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
        </div>
        <div className="button-row"> 
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
          <CalculatorButton shape="circle" />
        </div>
      </div>

    </div>
  )

}

const CalculatorButton = ({color, shape}) => {
  return(
    <div className={"calculator-button ${color] ${shape} "}>

    </div>
  )
}

export default App;
