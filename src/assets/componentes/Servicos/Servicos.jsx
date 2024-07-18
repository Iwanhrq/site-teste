import React, { useState } from 'react';
import './Servicos.css';
import { BotaoOrcamento } from '../Botao/BotaoOrcamento';



const content = [
    
    {
        images: [
            { src: 'https://inoxconceito.com.br/assets/2-72ae6a2e.webp', alt: 'Imagem 1' },
            { src: 'https://inoxconceito.com.br/assets/3-55898bdc.webp', alt: 'Imagem 2' },
            { src: 'https://inoxconceito.com.br/assets/1-565b648c.webp', alt: 'Imagem 3' }
        ],
        title: 'Guarda Corpo de Vidro',
        description: [
            'Imagine uma vista deslumbrante, capturada em cada detalhe do seu espaço. Nosso serviço de guarda corpo em vidro para clientes de alto padrão e construtoras oferece não apenas segurança, mas uma experiência visual incomparável.',
            'Com designs exclusivos e materiais de primeira linha, elevamos o conceito de elegância e modernidade. Deixe-nos moldar o seu ambiente com transparência e sofisticação, onde cada linha e cada brilho refletem o requinte que você merece.',
            <BotaoOrcamento/>

        ]
    },
    {
        images: [
            { src: 'https://inoxconceito.com.br/assets/1-4dbdea79.webp', alt: 'Imagem 4' },
            { src: 'https://inoxconceito.com.br/assets/2-ee87a2fa.webp', alt: 'Imagem 5' },
            { src: 'https://inoxconceito.com.br/assets/3-549e0c84.webp', alt: 'Imagem 6' }
        ],
        title: 'Guarda Corpo em Inox',
        description: [
            'Conheça o novo padrão de luxo e segurança para o seu espaço. Nosso serviço de guarda-corpo em inox para clientes exigentes e construtoras oferece mais do que uma simples proteção - é um conjunto de estilo e sofisticação.',
            'Com linhas impecáveis e um acabamento premium, elevamos o conceito de elegância. Deixe-nos moldar o seu ambiente com precisão e refinamento, onde cada detalhe reflete a excelência que você merece.',
            <BotaoOrcamento/>

        ]
    },
    {
        images: [
            { src: 'https://inoxconceito.com.br/assets/3-553224fe.webp', alt: 'Imagem 4' },
            { src: 'https://inoxconceito.com.br/assets/1-bfb0e12a.webp', alt: 'Imagem 5' },
            { src: 'https://inoxconceito.com.br/assets/2-71870d38.webp', alt: 'Imagem 6' }
        ],
        title: 'Corrimão em Inox',
        description: [
            'Descubra a essência da elegância e da praticidade com nosso corrimão em inox. Mais do que uma simples estrutura de suporte a fusão perfeita entre funcionalidade e beleza.',
            'Com acabamento impecável e durabilidade incomparável, elevamos o conceito de elegância moderna. Onde cada linha reflete o padrão que você busca para o seu espaço.',
            <BotaoOrcamento/>
        ]
    },
    {
        images: [
            { src: 'https://inoxconceito.com.br/assets/1-1526b49e.webp', alt: 'Imagem 4' },
            { src: 'https://inoxconceito.com.br/assets/3-5daadb0e.webp', alt: 'Imagem 5' },
            { src: 'https://inoxconceito.com.br/assets/2-5d23eb49.webp', alt: 'Imagem 6' }
        ],
        title: 'Box de Vidro',
        description: [
            'Descubra a essência da sofisticação e da funcionalidade com nossa Box de Banheiro de Vidro. Mais do que uma simples divisória, é a fusão perfeita entre elegância e praticidade. Com acabamento impecável e durabilidade incomparável, nossa box redefine o conceito de luxo moderno.',
            'Onde cada detalhe reflete o padrão de excelência que você deseja para o seu ambiente. Transforme seu banheiro em um espaço de beleza e requinte com nossa Box de Vidro, projetada para oferecer uma experiência visual e funcional única.',
            <BotaoOrcamento/>
        ]
    }
];

export function Servicos() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMenuClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="servicos">
            <div className="containerServicos">
            <h1 className="h1Colorido" id="h1Servicos">Nossos <span>Serviços</span></h1>
            <div className="menu">
                    {content.map((item, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleMenuClick(index)} 
                            className={currentIndex === index ? 'active' : ''}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <div className="gallery">
                    {content[currentIndex].images.map((img, index) => (
                        <figure key={index} className={`item--${index + 1}`}>
                            <img src={img.src} alt={img.alt}></img>
                        </figure>
                    ))}
                    <figure className="item--4">
                        <h1 className="h1Servicos">{content[currentIndex].title}</h1>
                        {content[currentIndex].description.map((desc, index) => (
                            <p key={index} className="pServicos">{desc}</p>
                        ))}
                    </figure>
                </div>
            </div>
        </section>
    );

}

export default Servicos;
