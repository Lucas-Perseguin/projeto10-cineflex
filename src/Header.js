import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const HeaderStyle = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 67px;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  color: #E8833A;
  background: #C3CFD9;
  h1{
    position: absolute;
    top: calc((67px / 2) - (34px / 2));
    left: calc((100% / 2) - (120px / 2));
  }
  ion-icon{
    position: absolute;
    top: calc((67px / 2) - (36px / 2));
    left: 20px;
    height: 36px;
    width: 36px;
  }
`

function Header() {
    const navigate = useNavigate()
    return(
        <HeaderStyle>
            <ion-icon name="arrow-back-circle-outline" onClick={() => navigate(-1)}></ion-icon>
            <h1>CINEFLEX</h1>
        </HeaderStyle>
    );
}

export default Header;