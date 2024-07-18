import { useState } from 'react';
import './Cabecalho.css'
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-scroll';




export function Cabecalho() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <h2>Ivan Henrique</h2>
                    </div>
                    <ul className={isOpen ? "nav-link active" : "nav-link"}>
                        <li><Link to="#" spy={true} smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="servicos" spy={true} smooth={true} duration={500}>Produtos</Link></li>
                        <li><Link to="#" spy={true} smooth={true} duration={500}>Serviços</Link></li>
                        <li><Link to="rodape" spy={true} smooth={true} duration={500}>Contato</Link></li>
                    </ul>
                    <div className="icon" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Cabecalho