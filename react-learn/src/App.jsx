import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  let init = 0;
  const add = () => {
    init++;
    document.getElementById('show').value = init;
  }
  return (
    <div className="App">
      <input id="show" type="text" value={init} readOnly={true} />
      <input type="button" value='click me' onClick={add} />
    </div>
  )
}
function App2() {
  let init = 0;
  const add = () => {
      if(init === 0){
        init += 1;
      }else{
          init += init;
      }
    document.querySelector('.trues').value = init;
  }
  return (
      <div className="App">
        <input className='trues' type="text" value={init} readOnly={true}/>
        <input type="button" value='click me' onClick={add} />
      </div>
  )
}

export {App2, App}
