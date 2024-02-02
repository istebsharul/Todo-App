import './App.css';
import { useState, useEffect } from 'react';
import { TodoProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    axios.post('http://localhost:8080/api/todos', todo)
      .then(response => {
        console.log('Todo added successfully:', response.data);
        setTodos((prev) => [response.data, ...prev]);
      })
      .catch(error => console.error('Error adding todo:', error));
  };

  const updateTodo = (id, todo) => {
    axios.put(`http://localhost:8080/api/todos/${id}`, todo)
      .then(response => {
        console.log(id);
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.todoId === id ? todo : prevTodo)));
      })
      .catch(error => console.error('Error updating Todo:', id, error));
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8080/api/todos/${id}`)
      .then(response => {
        setTodos((prev) => prev.filter((todo) => todo.todoId !== id))
      })
      .catch(error => console.error('Error Deleting todo: ', error));
  }

  // const toggleComplete = (id) => {
  //   setTodos((prev) => prev.map((prevTodo) => (prevTodo.todoId === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)))
  // }

  const toggleComplete = (id) => {
    axios.put(`http://localhost:8080/api/todos/${id}/complete`)
      .then(response => {
        console.log(id);
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.todoId === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)));
      })
      .catch(error => console.error('Error updating Todo complete status:', id, error));
  };



  useEffect(() => {
    axios.get('http://localhost:8080/api/todos')
      .then(response => {
        console.log('Data fetched successfully:', response.data);
        setTodos(response.data);
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#202020] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todo App</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.todoId} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
