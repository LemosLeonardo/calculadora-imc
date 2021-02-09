import React from 'react';
import "./Inicio.css"
function Inicio() {
    return (
        <div className="Inicio">
            <h1>Cálculo de IMC</h1>
            <div>
                <label htmlFor="peso">Peso (kg)</label>
                <input type="number" id="peso" />
            </div>
            <div>
                <label htmlFor="altura">Altura (m)</label>
                <input type="number" id="altura" />
            </div>
            <div>
                <button type="button">CALCULAR</button>
            </div>
        </div>
    )
}
export default Inicio