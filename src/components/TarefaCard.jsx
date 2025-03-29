import React from 'react';

const TarefaCard = ({ tarefa, done, onToggleDone }) => {
  //tarefa: variável comum
  //done: variável state
  //onToggleDone: função

  return (
    <div
      className={`tarefa-item ${done ? 'done' : ''}`}
      style={{
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '4px',
        marginBottom: '1rem'
      }}
    >
      <h3>{tarefa.titulo}</h3>
      <p>{tarefa.descricao}</p>
      <p>
        <strong>Data:</strong> {tarefa.dataVencimento}
      </p>
      <p>
        <strong>Prioridade:</strong> {tarefa.prioridade}
      </p>
      {tarefa.prioridade === 'alta' && (
        <p>
          <strong>Status:</strong> {tarefa.urgente ? 'Urgente' : 'Não urgente'}
        </p>
      )}
      <p>
        <strong>Duração:</strong> {tarefa.duracao} minutos
      </p>
      <p>
        <strong>Horário:</strong> {tarefa.horario}
      </p>
      <button className="btn-marcar" onClick={onToggleDone}>
        {done ? 'Desmarcar' : 'Marcar como pronta'}
      </button>
    </div>
  );
};

export default TarefaCard;
