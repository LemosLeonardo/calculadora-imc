import React from 'react';
import "./Result.css"
function Result(props) {
    return (
        <div className="Result" hidden={props.esconderResultado} >
            <h4>
                Seu IMC é {props.imc}
            </h4>
            <h4>
                {props.mensagemResultado}
            </h4>
            <div>
                <i className={props.icone ? 'smile big outline green icon' : 'frown big outline red icon'}></i>
            </div>
        </div>
    )
}
export default Result