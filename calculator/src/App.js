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
          <CalculatorButton shape="circle" color="light-gray" />
          <CalculatorButton shape="circle" color="light-gray"/>
          <CalculatorButton shape="circle" color="light-gray"/>
          <CalculatorButton shape="circle" color="orange"/>
        </div>
        <div className="button-row"> 
          <CalculatorButton shape="circle" color="gray"/>
          <CalculatorButton shape="circle" color="gray"/>
          <CalculatorButton shape="circle" color="gray"/>
          <CalculatorButton shape="circle" color="orange"/>
        </div>
        <div className="button-row"> 
          <CalculatorButton shape="circle" color="gray"/>
          <CalculatorButton shape="circle" color="gray"/>
          <CalculatorButton shape="circle" color="gray"/>
          <CalculatorButton shape="circle" color="orange"/>
        </div>
        <div className="button-row"> 
          <CalculatorButton shape="circle" color="gray"/>
          <CalculatorButton shape="circle" color="gray"/>
          <CalculatorButton shape="circle" color="gray"/>
          <CalculatorButton shape="circle" color="orange"/>
        </div>
        <div className="button-row"> 
          <CalculatorButton shape="rectangle" color="gray"/>
          <CalculatorButton shape="circle" color="gray"/>
          <CalculatorButton shape="circle" color="orange"/>
        </div>
      </div>

    </div>
  )

}

const CalculatorButton = ({color, shape}) => {
  return(
    <div className={`calculator-button ${color} ${shape}`}>

    </div>
  )
}


export default App;
