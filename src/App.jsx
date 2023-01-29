import React from 'react' // necessário para rodar o JSX
import ReactDOM from 'react-dom'

import './index.css'

import First from './components/basics/First'
import Second from './components/basics/SecondWithParameter'
import Third from './components/basics/ThirdWithFragment'

export default _ =>
    <div id="app">
        <h1>React concepts</h1>
        <Third
            title="Condição"
            choice={1}
        />
        <Second
            titulo="Avaliação"
            aluno="Marcos"
            nota={10}
        />
        <Second
            titulo="2 - Passando valores "
            aluno="Maria"
            nota={4}
        />
        <First></First>

    </div>
