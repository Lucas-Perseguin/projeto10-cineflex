import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Filmes from "./Filmes.js"



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Filmes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
