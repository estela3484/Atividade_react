import React from 'react' /*só colocar um racfc  que escreve automatico porem verificar escrita */
import Header from './components/headerp/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Expecience from './components/experience/Experience'
import Formulario from './components/formulario/Formulario'

import Footer from './components/footer/Footer'

const App = () => {
  return (
   <>
   <Nav />
    <Header />
        <About />
          <Expecience />

          <Formulario />
      
<Footer/>

    </>
  );
}
export default App