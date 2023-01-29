import React from 'react' // necessário para rodar o JSX
import ReactDOM from  'react-dom'

const el = document.getElementById('root')
const texto = <strong>Esse é um exemplo de negrito</strong>

ReactDOM.render(
    <div>
        {texto}
    </div>,
    el
)