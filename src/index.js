import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const App = () => {
  
    

  return (
    <div>
      <Header course="Nuevo Laboratorio" />
      <Content parts="Ejemplos"/>
      <Total parts ="Resultado"/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
