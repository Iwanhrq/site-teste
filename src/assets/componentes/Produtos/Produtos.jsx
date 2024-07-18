import './Produtos.css';
import { BotaoOrcamento } from '../Botao/BotaoOrcamento';


export function Produtos() {
    return (
        <div className="bannerProdutos">
            <h1 className="h1Produtos">Alta qualidade</h1>
            <h2 className="h2Produtos">Guarda copo e <span>corrimão</span></h2>
            <p className="pProdutos">A inox concert é uma empresa do ramo da serralheria
                que está situada na cidade</p>
            <p className="pProdutos"> de Campinas/SP.</p>
            <BotaoOrcamento/>
            
        </div>
    )
}