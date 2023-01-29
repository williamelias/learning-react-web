import React from "react";


export default (props)=>{
    const choice = props.choice === 1 ?'Válid' : 'Inválido'

    return (
        <>    
            <h3>{props.title}</h3>
            <p>{choice}</p>
        </>
    )
}