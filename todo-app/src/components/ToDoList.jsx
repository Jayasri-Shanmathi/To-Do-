import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Trash2, CheckCircle, Circle } from 'lucide-react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5028/api/todo').then(res => setTodos(res.data));
  }, []);

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5028/api/todo/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = async (id) => {
    await axios.put(`http://localhost:5028/api/todo/${id}`);
    const updated = todos.map(todo => {
      if (todo.id === id) {
        const newStatus = !todo.isComplete;
        if (newStatus) alert('🎉 Congratulations! Task completed!');
        return { ...todo, isComplete: newStatus };
      }
      return todo;
    });
    setTodos(updated);
  };

  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-4 rounded-lg bg-white/70 hover:bg-white transition-shadow shadow-sm hover:shadow-lg border border-gray-200"
        >
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.isComplete ? (
              <CheckCircle className="text-green-500" />
            ) : (
              <Circle className="text-gray-400" />
            )}
            <div>
              <p className={`text-lg ${todo.isComplete ? 'line-through text-gray-400' : 'text-gray-800'}`}>{todo.title}</p>
              <p className="text-sm text-gray-500">Added on: {new Date(todo.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700 transition">
            <Trash2 size={18} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;