import React from 'react' // necessário para rodar o JSX
import ReactDOM from  'react-dom'

import './index.css'
import First from './components/basics/First'

const el = document.getElementById('root')

ReactDOM.render(
    <div>
        <First></First>
    </div>,
    el
)