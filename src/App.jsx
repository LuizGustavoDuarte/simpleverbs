import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [lista, setLista] = useState([{verbo: 'fall', simplePast: 'fell'}, {verbo: 'play', simplePast: 'played'}, {verbo: 'write', simplePast: 'wrote'}])

  return (
    <div className="App">
      <table style={{padding: "20px"}}>
        <th style={{padding: "20px"}}>Verbo</th>
        <th>Simple Past</th>
        <tr>
          <td>Run</td>
          <td><input type="text" name="" id="" style={{border: "none", backgroundColor: '#002', textAlign: 'center'}}/></td>
        </tr>
        <tr>
          <td><input type="text" name="" id="" style={{border: "none", backgroundColor: '#002', textAlign: 'center'}}/></td>
          <td>Ran</td>
        </tr>
        <tr>
          <td><input type="text" name="" id="" style={{border: "none", backgroundColor: '#002', textAlign: 'center'}}/></td>
          <td><input type="text" name="" id="" style={{border: "none", backgroundColor: '#002', textAlign: 'center'}}/></td>
        </tr>
        <tr>
          <td>Run</td>
          <td>Ran</td>
        </tr>
        <tr>
          <td>Run</td>
          <td>Ran</td>
        </tr>
        <tr>
          <td>Run</td>
          <td>Ran</td>
        </tr>
      </table>

      <button style={{background: 'green'}}>Aleatorizar</button>
    </div>
  )
}

export default App
