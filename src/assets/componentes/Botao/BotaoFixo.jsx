import React from 'react';
import './BotaoFixo.css';
import { FaWhatsapp } from 'react-icons/fa';


export function BotaoFixo() {
    const url = "https://api.whatsapp.com/send/?phone=5519994735471&text=a"; // Substitua com o URL desejado

    const handleClick = () => {
        window.location.href = url; 
    };

    return (
        <button className="botao-fixo" onClick={handleClick}>
        <FaWhatsapp size={30} color="#ffffff" />
    </button>
    );
}

export default BotaoFixo;
