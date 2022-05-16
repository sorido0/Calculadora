import './App.css';
import Boton from './componentes/Boton';
import './Estilos/Boton.css';
import Pantalla from './componentes/Pantalla';
import BotonLimpiar from './componentes/Limpiar';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  //muestra el valor del input en la pantalla
  const [input, setInput] = useState('');
  //agrefa lo de mas valores dentro del input 
  const agregarInput = agregarValor => 
  {  
    const operators = ['+', '-', '*', '/']
    const endCharacter = input[input.length - 1]
    const includeValor = operators.includes(agregarValor)
    const includeOperator = operators.includes(endCharacter)
  
    if( includeValor && includeOperator){
      alert("NO PAPA");
      return
    }
    setInput(input + agregarValor);
  };
  
  // calcula lo valores dentro del input.
  const calcularResultados = () => 
  {
    if(input)
    {
      setInput(evaluate(input))
    } else {
      alert('mmg falta los valores');
    }
  };

  return (
    <div className="App">
      <div className='contedorCalculadora'>
        <Pantalla inptu={input}/> 
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>  
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={calcularResultados}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
          </div>
        <div className='fila'>
          <BotonLimpiar menejarLimiar={() => setInput('')}>
            Clear
          </BotonLimpiar>
        </div>
      </div>
    </div>
  );
}

export default App;
