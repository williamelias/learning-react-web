import React from "react";

export default (props)=>{
    console.log(props)
    const status = props.nota >= 7 ?'Aprovado':'Reprovado'
    return (
        <div>
            <h3>{props.titulo}</h3>
            <p>{props.aluno} tem a nota {props.nota}</p>
            <p>situação: {status}</p>
        </div>
    )
}