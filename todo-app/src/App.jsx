import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import styles from './App.module.css';

function App() {
  const [view, setView] = useState('add'); // 'add' or 'view'

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>📝 My To-Do List</h1>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.toggleButton} ${view === 'add' ? styles.active : ''}`}
            onClick={() => setView('add')}
          >
            Add Task
          </button>
          <button
            className={`${styles.toggleButton} ${view === 'view' ? styles.active : ''}`}
            onClick={() => setView('view')}
          >
            View Tasks
          </button>
        </div>
        {view === 'add' && <TodoForm />}
        {view === 'view' && <TodoList />}
      </div>
    </div>
  );
}

export default App;