import React from 'react';
import './BotaoOrcamento.css';

export function BotaoOrcamento() {
    const url = "https://api.whatsapp.com/send/?phone=5519994735471&text=a"; 

    const handleClick = () => {
        window.location.href = url;
    };

    return (
        <button className="botao-azul" onClick={handleClick}>
            Fazer orçamento
        </button>
    );
}

export default BotaoOrcamento;
