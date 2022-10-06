import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

const Header = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 375px;
  height: 67px;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  text-align: center;
  line-height: 67px;
  color: #E8833A;
  background: #C3CFD9;
`

function App() {
  return (
    <>
      <Header>
        CINEFLEX
      </Header>
    </>
  );
}

export default App;
