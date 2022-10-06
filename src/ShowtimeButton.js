import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    :hover{
        text-decoration: underline;
        cursor: pointer;
    }
`

function ShowTimeButton({ showtime }) {
    return (
        <Link to={`/sessao/${showtime.id}`}>
            <StyledButton>{showtime.name}</StyledButton>
        </Link>
    );
}

export default ShowTimeButton;