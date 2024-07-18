import React from 'react';
import './Rodape.css';

export function Rodape() {
    return (
        <footer id="rodape">
            <div className="contato">
                <h1 className="h1Colorido" id="h1Rodape">Entre em <span>contato</span></h1>
                <div className="social-icons">
                    <div className="social-icon">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="textinho">
                            <h2 className="h2Rodape">Endereço</h2>
                            <a className="aRodape" href="https://www.google.com/maps/place/Inox+Conceito+-+Corrim%C3%A3o+e+Guarda+Corpo/@-22.9435394,-47.0669727,17z/data=!3m1!4b1!4m6!3m5!1s0xa5ecfbc490b48fbd:0xb209763aa8ce1ea5!8m2!3d-22.9435395!4d-47.0620964!16s%2Fg%2F11vx5jlnn9?entry=ttu">
                            <p>R. José Ferreira da Silva, 434 - Quadra LE - Parque da Figueira Campinas - SP, 13040-220</p> </a>
                        </div>
                    </div>
                    <div className="social-icon">
                        <i className="fa-brands fa-whatsapp"></i>
                        <div className="textinho">
                            <h2 className="h2Rodape">WhatsApp</h2>
                            <a className="aRodape" href="https://api.whatsapp.com/send/?phone=5519994735471&text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento%21&type=phone_number&app_absent=0"><p>(19) 99473-5471</p></a>
                        </div>
                    </div>
                    <div className="social-icon">
                        <i className="fa-brands fa-instagram"></i>
                        <div className="textinho">
                            <h2 className="h2Rodape">Instagram</h2>
                            <a className="aRodape" href="https://www.instagram.com/inox.concept/?igsh=dWE3YWxlM2xwdmww"><p>@inox.concept</p></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mapBox">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.1815647225135!2d-47.064676687998414!3d-22.94353947914261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5ecfbc490b48fbd%3A0xb209763aa8ce1ea5!2sInox%20Conceito%20-%20Corrim%C3%A3o%20e%20Guarda%20Corpo!5e0!3m2!1spt-BR!2sbr!4v1721238536419!5m2!1spt-BR!2sbr" allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </footer>
    );
}

export default Rodape;
