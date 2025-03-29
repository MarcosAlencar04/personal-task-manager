import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CadastrarTarefa.css';
import useTarefasAPI from '../js/useTarefasAPI';

const CadastrarTarefa = () => {
  const { addTarefa } = useTarefasAPI();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    dataVencimento: '',
    prioridade: '',
    duracao: '',
    horario: '',
    urgente: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
  };

  const isFormValid = () => {
    return (
      formData.titulo.trim() !== '' &&
      formData.descricao.trim() !== '' &&
      formData.dataVencimento.trim() !== '' &&
      formData.prioridade.trim() !== '' &&
      formData.duracao.trim() !== '' &&
      formData.horario.trim() !== ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      addTarefa(formData);
      alert("Tarefa adicionada!");
      navigate("/");
      setFormData({
        titulo: '',
        descricao: '',
        dataVencimento: '',
        prioridade: '',
        duracao: '',
        horario: '',
        urgente: false
      });
    } else {
      alert("Preencha todos os campos.");
    }
  };

  return (
    <div className="cadastrar-container">
      <h2>Cadastrar Tarefa</h2>
      <form onSubmit={handleSubmit} className="cadastrar-form">
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Digite o título da tarefa"
          />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Digite uma descrição"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="dataVencimento">Data de Vencimento</label>
          <input
            type="date"
            id="dataVencimento"
            name="dataVencimento"
            value={formData.dataVencimento}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="prioridade">Prioridade</label>
          <select
            id="prioridade"
            name="prioridade"
            value={formData.prioridade}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
          </select>
        </div>

        {formData.prioridade === 'alta' && (
          <div className="form-group">
            <label htmlFor="urgente">Marcar como urgente?</label>
            <input
              type="checkbox"
              id="urgente"
              name="urgente"
              checked={formData.urgente}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="duracao">Duração Estimada (min)</label>
          <input
            type="number"
            id="duracao"
            name="duracao"
            value={formData.duracao}
            onChange={handleChange}
            placeholder="Ex: 30"
          />
        </div>

        <div className="form-group">
          <label htmlFor="horario">Horário</label>
          <input
            type="time"
            id="horario"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className={`btn-finalizar ${isFormValid() ? 'btn-active' : 'btn-inactive'}`}
        >
          Finalizar
        </button>
      </form>
    </div>
  );
};

export default CadastrarTarefa;
