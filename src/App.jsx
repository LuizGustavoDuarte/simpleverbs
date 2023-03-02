import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { render } from 'react-dom'

function App() {
  const [lista, setLista] = useState([{verbo: 'fall', simplePast: 'fell', traducao: 'cair'}, {verbo: 'play', simplePast: 'played', traducao: "jogar"}, {verbo: 'write', simplePast: 'wrote', traducao: 'escrever'}])

  return (
    <div className="App">
     
      
        
        <div className='container'>
          <div className="row">
            <div className='col-3 text-center'>#</div>
            <div className='col-3 text-center'>Verbo</div>
            <div className='col-3 text-center'>Simple Past</div>
            <div className='col-3 text-center'>Tradução</div>
          </div>
        
        
       

        {lista.map((verbo, key) => {
          
          let inputStyle = {border: "none", backgroundColor: '#95baf5', textAlign: 'center', width: '10vw', marginInline: 10, marginTop: '5px', marginBottom: '5px', color: 'white'}

          return(

           
              <div className="row" key={key}>
                <div className='col-3'>#{key+1}</div>
                {Math.floor(Math.random() * 10) > 5 ? <div className='col-3 text-center'>{verbo.verbo}</div> : <div className='col-3 text-center'><input type="text" name="" id="" style={inputStyle}/></div>}
                {Math.floor(Math.random() * 10) > 5 ? <div className='col-3 text-center'>{verbo.simplePast}</div> : <div className='col-3 text-center'><input type="text" name="" id="" style={inputStyle}/></div>}
                {Math.floor(Math.random() * 10) > 5 ? <div className='col-3 text-center'>{verbo.traducao}</div> : <div className='col-3 text-center'><input type="text" name="" id="" style={inputStyle}/></div>}
              
              </div>
            


            
          )
        })}
      </div>
      
     
    </div>
  )
}

export default App
