import React from 'react';
import "./Form.css"
function Form(props) {
    return (
        <div className="Form">
            <div>
                <label htmlFor="peso">Peso (kg)</label>
                <input type="number" id="peso" name="peso" value={props.peso} onChange={props.onChange} min="0" />
            </div>
            <div>
                <label htmlFor="altura">Altura (m)</label>
                <input type="number" id="altura" name="altura" value={props.altura} onChange={props.onChange} min="0" />
            </div>
            <div>
                <button type="button" onClick={props.onClick} disabled={props.btnDisable}> <i className={props.btnDisable ? 'lock inverted icon' : 'unlock inverted icon'}></i> CALCULAR</button>  
            </div>
        </div>
    )
}
export default Form