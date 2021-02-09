import React from 'react';
import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
    return (
        <div className="NavBar">
            <div className="center header">
                <Link to="/">Início</Link>
                <Link to="/informacoes">Informações</Link>
            </div>
        </div>
    )
}
export default NavBar