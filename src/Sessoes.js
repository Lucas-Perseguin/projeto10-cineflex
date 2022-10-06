import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function Sessoes() {
    const {idFilme} = useParams();
    const [filme, setFilme] = useState({});
    useEffect(() => {
        
    }, []);
    return(
        <>
            <Header />
        </>
    );
}

export default Sessoes;