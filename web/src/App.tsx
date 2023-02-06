import { useEffect, useRef, useState } from 'react'

import './styles/styles.css'

function App() {

  const calcArea = useRef(null)


  const [result, setResult] = useState<string>("2")
  const [calc, setCalc] = useState<string>("1+1")

  useEffect(() => {    
    if(calcArea.current){
      //@ts-ignore
      calcArea.current.scrollLeft += 1000
    }
  }, [calc])


  function calculate(newCalc: string) {
    const result = eval(newCalc.replace("%", "/100*"))
    return result
  }

  function handleClick(buttonOperator: string) {

    let newCalc = ""
    switch (buttonOperator) {
      case "CE":
        setResult("")
        setCalc("")
        break;

      case "C":
        newCalc = calc.slice(0, -1)
        setCalc(newCalc)
        setResult(calculate(newCalc))
        break

      case "=":
        setCalc(result)
        setResult("")
        break;

      default:
        newCalc = `${calc}${buttonOperator}`
        setCalc(newCalc)
        setResult(calculate(newCalc))
        break;
    }
  }

  return (
    <div className="App">
      <div id="container">
        <div id="results">

          <p id="calc">{result}</p>

          <div className='dragscroll' id="result">
            <i className="ph-equals" />
            <p  ref={calcArea} >{calc}</p>
          </div>

        </div>
        <div id="buttons">

          <button onClick={() => { handleClick('CE') }}>CE</button>
          <button onClick={() => { handleClick('C') }}>C</button>
          <button onClick={() => { handleClick('%') }} ><i className="ph-percent" /></button>
          <button onClick={() => { handleClick('/') }} className="lastLine"><i className="ph-divide" /></button>
          <button onClick={() => { handleClick('7') }}>7</button>
          <button onClick={() => { handleClick('8') }}>8</button>
          <button onClick={() => { handleClick('9') }}>9</button>
          <button onClick={() => { handleClick('*') }} className="lastLine"><i className="ph-x" /></button>
          <button onClick={() => { handleClick('4') }}>4</button>
          <button onClick={() => { handleClick('5') }}>5</button>
          <button onClick={() => { handleClick('6') }}>6</button>
          <button onClick={() => { handleClick('-') }} className="lastLine"><i className="ph-minus" /></button>
          <button onClick={() => { handleClick('1') }}>1</button>
          <button onClick={() => { handleClick('2') }}>2</button>
          <button onClick={() => { handleClick('3') }}>3</button>
          <button onClick={() => { handleClick('+') }} className="lastLine"><i className="ph-plus" /></button>
          <button><i className="ph-plus-minus" /></button>
          <button onClick={() => { handleClick('0') }}>0</button>
          <button onClick={() => { handleClick('.') }} style={{ fontSize: '3.2rem' }}>,</button>
          <button onClick={() => { handleClick('=') }} id="equals"><i className="ph-equals" /></button>

        </div>
      </div>
    </div>
  )
}

export default App
