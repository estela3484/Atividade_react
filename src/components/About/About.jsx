import React from 'react'
import './about.css'
import imagem from './amizade.jpg'

const About = () => {
  return (
    <div className="fundo_pai">
    
      <div className="centralizado_filho">


          <div className="esquerda">
            <div className="imagem_lado">
          

            </div>
            <div className="imagem_dentro">
            <img src={imagem} className="dentre"/>

</div>
          </div>

          <div className="direita">
            <p> <br/>É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor).  </p>
          </div>

      </div>   
    </div>
  )
}
export default About;
