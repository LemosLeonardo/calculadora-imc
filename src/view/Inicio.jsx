import React, { Component } from 'react';
import Form from '../Components/Form';
import Result from '../Components/Result';
import "./Inicio.css"
class Inicio extends Component {

    constructor() {
        super()
        this.state = {
            peso: "",
            altura: "",
            resultado: "",
            esconderResultado: true,
            mensagemResultado: "",
            icone: "",
            disable: true,
        }
        this.onChange = (e) => {
            const state = Object.assign({}, this.state)
            const campo = e.target.name
            state[campo] = e.target.value
            this.setState(state)
        }
        this.travarBtn = (e) => {
            e.preventDefault()
            if (this.state.peso && this.state.altura !== "") {
                this.setState({
                    disable: false
                })
            }
            if (this.state.peso && this.state.altura === "") {
                this.setState({
                    disable: true
                })
            }
        }
        this.onSubmit = (e) => {
            e.preventDefault()
            var peso = parseFloat(this.state.peso).toFixed(1)
            var altura = parseFloat(this.state.altura).toFixed(1)
            var resultado = (peso / (Math.pow(altura, 2).toFixed(1))).toFixed(1)
            this.setState({
                resultado,
                esconderResultado: false
            })
            const magreza = 18.5, normal = 25, sobrepeso = 30, obesidade1 = 35, obesidade2 = 40
        
            if (resultado <= magreza) {
                console.log('magreza')
                this.setState({
                    mensagemResultado: "Você está com excesso de magreza!",
                    icone: false

                })
            } else {
                if (resultado <= normal) {
                    this.setState({
                        mensagemResultado: "Parabéns! Você está no peso certo!",
                        icone: true
                    })
                } else {
                    if (resultado <= sobrepeso) {
                        this.setState({
                            mensagemResultado: "Você está levemente acima do peso!",
                            icone: true
                        })
                    } else {
                        if (resultado <= obesidade1) {
                            this.setState({
                                mensagemResultado: "Você está com obesidade (Grau I)",
                                icone: false
                            })
                        } else {
                            if (resultado <= obesidade2) {
                                this.setState({
                                    mensagemResultado: "Você está com obesidade (Grau II)",
                                    icone: false
                                })
                            } else {
                                this.setState({
                                    mensagemResultado: "Você está com obesidade (Grau III)",
                                    icone: false
                                })
                            }
                        }
                    }
                }
            }
        }

    }

    render() {

        return (
            <div className="Inicio" onKeyUp={this.travarBtn} onMouseMove={this.travarBtn}>
                <h1>Cálculo de IMC</h1>
                <Form
                    peso={this.state.peso}
                    altura={this.state.altura}
                    onChange={this.onChange}
                    onClick={this.onSubmit}
                    btnDisable={this.state.disable} />
                <Result
                    esconderResultado={this.state.esconderResultado}
                    mensagemResultado={this.state.mensagemResultado}
                    imc={this.state.resultado}
                    icone={this.state.icone} />
            </div>
        )
    }
}
export default Inicio