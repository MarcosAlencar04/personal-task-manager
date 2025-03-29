import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CadastrarTarefa from './components/CadastrarTarefa';
import ConsultarTarefas from './components/ConsultarTarefas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar-tarefa" element={<CadastrarTarefa />} />
        <Route path="/consultar-tarefas" element={<ConsultarTarefas />} />
      </Routes>
    </Router>
  );
}

export default App;
