import React from 'react'
import imagem from './personageem.png'
import './header.css'
const Header = () => {
  return (
    <div className="container_pai"><p></p>
      <div className="container_filho">

            <div className="title">
<p> Seja Bem vindo!!! Conheça nossos cursos  e se torne um profissional </p>
            </div>
            <div className="personagem">
                 <img src={imagem} className="imageem"/>
            </div>
          </div>
    </div>
  )
}

export default Header