import React from 'react'
import Part from './Part'
import Ejemplo1 from './Ejemplo1.js'
import Ejemplo2 from './Ejemplo2.js'
import Ejemplo3 from './Ejemplo3.js'

const Content = (props) => {

    return (
        
        <div>
            <h1>{props.parts}</h1>
            <Ejemplo1 />
            <Ejemplo2 />
            <Ejemplo3 />
            
        </div>
    )
}
export default Content