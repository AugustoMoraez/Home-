import {Main} from "./style/geral/containerStyle";
import {Header} from "./components/header/header";
import {Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Pj } from "./pages/Projetos/projetos";
import {Sobre} from "./pages/Sobre/Sobre";
import {Footer} from "./components/footer/footer"




function App() {
  return (



    <Main>

      <Header/>
    
      <section>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Projetos" element={<Pj/>}/>
          <Route path="/Sobre" element={<Sobre/>}/>
        </Routes>
      
      </section>

      <Footer/>

    </Main>
  
  )
}

export default App
