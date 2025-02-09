import React, { useState } from 'react';
import './Servicos.css';



const content = [
    
    {
        images: [
            { src: '/site-teste/fallen1.png', alt: 'Imagem 1' },
        ],
        title: 'Vivo Conecta',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        ]
    },
    {
        images: [
            { src: '/site-teste/fallen1.png', alt: 'Imagem 1' },
        ],
        title: 'Sorveteria Frosty',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',

        ]
    },
    {
        images: [
            { src: '/site-teste/fallen1.png', alt: 'Imagem 1' },
        ],
        title: 'FalleN',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        ]
    },
    {
        images: [
            { src: '/site-teste/fallen1.png', alt: 'Imagem 1' },
        ],
        title: 'Glauks',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
            <h1 className="h1Colorido" id="h1Servicos">PORTFOLIO</h1>
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
