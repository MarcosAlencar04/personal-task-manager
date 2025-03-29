import React, { useState } from 'react';
import useTarefasAPI from '../js/useTarefasAPI';
import TarefaCard from './TarefaCard';
import '../css/ConsultarTarefas.css';

const ConsultarTarefas = () => {
  const { tarefas } = useTarefasAPI();

  const [doneStates, setDoneStates] = useState({});

  const toggleDone = (index) => {
    setDoneStates((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="consultar-container">
      <h2>Consultar Tarefas</h2>
      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul className="tarefa-list">
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              <TarefaCard
                tarefa={tarefa}                    
                done={!!doneStates[index]}         
                onToggleDone={() => toggleDone(index)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConsultarTarefas;
