import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Assentos from './Assentos.js';
import Filmes from "./Filmes.js"
import Sessoes from './Sessoes.js';
import Sucesso from './Sucesso.js';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Filmes />} />
          <Route path="/filme/:idFilme" element={<Sessoes />} />
          <Route path="/sessao/:idSessao" element={<Assentos />} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
