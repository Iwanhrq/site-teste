// src/App.jsx

import './App.css';
import { Cabecalho } from './assets/componentes/Cabeçalho/Cabecalho';
import { Produtos } from './assets/componentes/Produtos/Produtos';
import { Projetos } from './assets/componentes/Projetos/Projetos';
import { Servicos } from './assets/componentes/Servicos/Servicos';
import { Rodape } from './assets/componentes/Rodape/Rodape';
import { BotaoFixo } from './assets/componentes/Botao/BotaoFixo'; // Importe sem {}

function App() {
  return (
    <>
      <Cabecalho />
      <Produtos />
      <Projetos />
      <Servicos />
    </>
  );
}

export default App;
