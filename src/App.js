import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Assentos from './Assentos.js';
import Filmes from "./Filmes.js"
import Sessoes from './Sessoes.js';
import Sucesso from './Sucesso.js';



function App() {
  const [objetoSucesso, setObjetoSucesso] = useState({});
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Filmes />} />
          <Route path="/filme/:idFilme" element={<Sessoes setObjetoSucesso={setObjetoSucesso} />} />
          <Route path="/sessao/:idSessao" element={<Assentos objetoSucesso={objetoSucesso} setObjetoSucesso={setObjetoSucesso} />} />
          <Route path="/sucesso" element={<Sucesso objetoSucesso={objetoSucesso} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
