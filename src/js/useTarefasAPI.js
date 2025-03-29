import { useState, useEffect } from 'react';

const STORAGE_KEY = 'tarefas.json';

const useTarefasAPI = () => {
  const [tarefas, setTarefas] = useState([]);

  //GET: carrega tarefas do local storage
  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      setTarefas(JSON.parse(storedData));
    }
  }, []);

  //POST: salva tarefas no local storage
  const addTarefa = (novaTarefa) => {
    const updatedTarefas = [...tarefas, novaTarefa];
    setTarefas(updatedTarefas);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTarefas));
  };

  return { tarefas, addTarefa };
};

export default useTarefasAPI;
