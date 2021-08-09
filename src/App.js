import {useState, useEffect} from 'react';
import './App.css';




function App() {
  const [Dolar, setDolar] = useState(0);
  const [Euro, setEuro] = useState(0);
  const [bitcoin, setBitC] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    setDolar((total / tipo)* 1);
    setEuro((total / tipo)* 0.85);
    setBitC((total / tipo) *0.000022);

  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de divisas</h1>

      <p>Dolares: {Dolar}</p>
      <p>Euros: {Euro}</p>
      <p>Bitcoins: {bitcoin}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolares</option>
        <option value={0.85}>Euros</option>
        <option value={0.000022}>Bitcoins</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
