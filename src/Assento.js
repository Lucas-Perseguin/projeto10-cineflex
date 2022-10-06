import { useState } from "react";
import styled from "styled-components";

const AssentoStyled = styled.div`
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${(props) => props.color};
        border: 1px solid #0E7D71;
        border-radius: 17px;
        width: 25px;
        height: 25px;
    }
`

function Assento({ assento }) {
    const [selected, setSelected] = useState(false);
    let color = '#FBE192';
    if (assento.isAvailable && selected) color = '#1AAE9E';
    else if (assento.isAvailable && !selected) color = '#C3CFD9';
    return (
        <AssentoStyled key={assento.id} onClick={assento.isAvailable ? setSelected(!selected) : null} color={color}>
            <div>{assento.name}</div>
        </AssentoStyled>
    );
}

export default Assento;