import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Home.module.css';
import logo from '../img/logo.png';

const Home = () => {

  const handleFetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      alert(data.slip.advice);
    } catch (error) {
      alert('Erro ao buscar conselho.');
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Gerenciador de tarefas pessoais</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.cards}>
          <Link to="/cadastrar-tarefa" className={styles.card}>
            <h2>Cadastrar Tarefa</h2>
            <p>Adicionar uma nova tarefa.</p>
          </Link>
          <Link to="/consultar-tarefas" className={styles.card}>
            <h2>Consultar Tarefas</h2>
            <p>Ver as tarefas cadastradas.</p>
          </Link>
          <div
            className={styles.card}
            onClick={handleFetchAdvice}
            style={{ cursor: 'pointer' }}
          >
            <h2>Conselho do Dia</h2>
            <p>Clique para receber um conselho.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
