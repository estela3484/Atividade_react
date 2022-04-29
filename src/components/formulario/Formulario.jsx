import React from 'react'
import './formulario.css'
const Formulario = () => {
  return (
    <div className="fundo_form">
<div className="title2">Cadastre-se em nossa plataforma</div>
        <div className="form">
          <form>
            <input type="text" placeholder="entre com o seu nome"/>
            <input type="text" placeholder="entre com o seu endereço"/>
            <input type="text" placeholder="entre com o seu telefone"/>
            <input type="text" placeholder="entre com o seu CEP"/>
            
            <input className="bordando" type="submit" value="enviar"/>
          </form>
        </div>

    </div>
  )
}

export default Formulario