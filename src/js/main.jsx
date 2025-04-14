import React from 'react'
import ReactDOM from 'react-dom/client'


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import { SecondsCounter } from './components/SecondsCounter';


function cargaronload() {
  let root = ReactDOM.createRoot(document.getElementById('root'))

  let contador = 0
  setInterval(() => {


    const digitoUno = Math.floor(contador / 1)
    const digitoDos = Math.floor(contador / 10)
    const digitoTres = Math.floor(contador / 100)
    const digitoCuatro = Math.floor(contador / 1000)
    const digitoCinco = Math.floor(contador / 10000)
    const digitoSeis = Math.floor(contador / 100000)
    contador++;

    root.render(
      <SecondsCounter
        digitoUno={digitoUno}
        digitoDos={digitoDos}
        digitoTres={digitoTres}
        digitoCuatro={digitoCuatro}
        digitoCinco={digitoCinco}
        digitoSeis={digitoSeis}
      />
    )
  }, 1000);
}
window.onload = cargaronload
