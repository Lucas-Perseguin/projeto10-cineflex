import styled from "styled-components";

const FooterStyled = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 10px 0 0 10px;
    div:first-of-type{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 90px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        box-sizing: border-box;
        padding: 14px 8px;
        img {
            width: 48px;
            height: 72px;
        }
    }
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
    }
    h2{
        font-weight: 600;
        font-size: 24px;
    }
`

function Footer({ poster, title, sessaoDia, sessaoHora }) {
    let sessaoElement = <></>;
    if (sessaoDia) {
        sessaoElement = <h2>{sessaoDia} {sessaoHora}</h2>
    }
    return (
        <FooterStyled>
            <div>
                <img src={poster} alt="Poster do filme" />
            </div>
            <div>
                <h1>{title}</h1>
                {sessaoElement}
            </div>

        </FooterStyled>
    );
}

export default Footer;