import React, { useState } from 'react';
import axios from 'axios';
import { Plus } from 'lucide-react';

const TodoForm = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await axios.post('http://localhost:5028/api/todo', { title });
    setTitle('');
    alert('Task added!');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6 shadow-md">
      <input
        type="text"
        placeholder="What do you need to do?"
        className="flex-grow p-3 rounded-l-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="bg-purple-600 text-white px-6 rounded-r-lg hover:bg-purple-700 transition-all">
        <Plus size={20} />
      </button>
    </form>
  );
};

export default TodoForm;