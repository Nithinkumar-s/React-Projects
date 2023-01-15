 

import React, {useState}  from 'react';
  
function App() {

  const [calc,setCalc] =  useState('');
  const [result,setResult] =  useState('');
  const op = ['+','-','*','/','.']

  function createDigit(){
    const digits=[];  
    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i} onClick={() => buttonPressed(i.toString())} >{i}</button>);
    }
    return digits;
  };
   
  const buttonPressed = value =>{
    console.log('value');
    if((op.includes(value) && calc === '' || op.includes(value) ) && op.includes(calc.slice(-1)) ){
      return;
    } 
      setCalc(calc + value)
  }
  const clearPressed  = value => {
    if(value === 0 && calc !== ''){
    setCalc('')
    setResult('')
    }
   else if(value === 1 && calc !== ''){
    const newvalue = calc.slice(0,-1)
    setCalc(newvalue)
    }

  }
  const resultValue = ()=>{
    let character = calc.at(-1)
    if(op.includes(character)){
      let newCalc = calc.slice(0,-1);
      let result = parseFloat(eval(newCalc))
      setCalc(newCalc)
      setResult(Number(result));
    }
    else{
      let result = parseFloat(eval(calc))
    setResult(Number(result));
    }
   
  }
  const [isShown, setIsShown] = useState(false);

  // This function is called when the blue button gets clicked
  const showToast = () => {
    setIsShown(true);

    // automatically hide the toast after 5 seconds
    // your can set a shorter/longer time if you want
    setTimeout(() => {
      setIsShown(false);
    }, 3000);
  };
  
  
  return (
    <div className="calculator">
      
            <div className="data"> 
            <div>{calc || 0}</div>
            <div className='resultData'>{result|| ''}</div>
            </div>
            <div className="display">
                  <div className="numbers">
                    
                  <button onClick={showToast}>❤</button>
                  <button onClick={() => clearPressed(0)}>CLEAR</button>
                  
                  <button onClick={() => clearPressed(1)}>DEL</button>
                    {createDigit()}
                    <button onClick={() => buttonPressed('0')} >0</button>
                    <button onClick={() => buttonPressed('.')} >.</button>
                    <button className='sum' onClick={() => resultValue()}>=</button>
                  </div>
                  <div className="operators">
                    <button onClick={() => buttonPressed('+')} >+</button>
                    <button onClick={() => buttonPressed('-')} >-</button>
                    <button onClick={() => buttonPressed('*')} >*</button>
                    <button onClick={() => buttonPressed('/')} >/</button>
                  </div>

            </div>
            {isShown && (
          <div className='my-toast'>
            <span>Maverick with ❤ </span>
          </div>
        )}
      
    </div>
  );
}

export default App;
