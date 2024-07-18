import './Projetos.css';
import { BotaoOrcamento } from '../Botao/BotaoOrcamento';

export function Projetos() {
    return (
        <section id="projetos">
            <div className="row">
                <div className="imgleft">
                    <img src="https://inoxconceito.com.br/assets/SobreNos-163c9a1f.webp"></img>
                </div>
                <div className="right">
                    <div className="content">
                        <h1 className="h1Colorido" id="h1Projetos">Sobre <span>Nós</span></h1>
                        <p className="pProjetos">Desde 2016, desempenho e qualidade são nossa marca registrada. Com uma equipe altamente qualificada e foco em inovação, 
                            transformamos espaços industriais, comerciais e residenciais em obras-primas de aço inoxidável e alumínio. O que nos diferencia? É o nosso 
                            comprometimento inabalável com cada serviço prestado aos nossos clientes.
                        </p>
                        <BotaoOrcamento/>
                    </div>
                </div>
            </div>
        </section>


    )
}