import { useState, useEffect } from 'react';
import { FaCheckCircle, FaRegCircle, FaTrashAlt } from 'react-icons/fa';
// import { connectDatabase, getTodoCollection, disconnectDatabase } from '../mongo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     connectDatabase().then(() => {
//       fetchTodos();
//     });

//     return () => {
//       disconnectDatabase();
//     };
//   }, []);

  const fetchTodos = async () => {
    // const collection = getTodoCollection();
    // const todos = await collection.find().toArray();
    // setTodos(todos);
  };

  const addTodo = async () => {
    // if (!inputValue) return;

    // const collection = getTodoCollection();
    // const todo = {
    //   text: inputValue,
    //   completed: false,
    // };

    // await collection.insertOne(todo);
    // setInputValue('');
    // fetchTodos();
  };

  const toggleComplete = async (todo) => {
    // const collection = getTodoCollection();
    // await collection.updateOne({ _id: todo._id }, { $set: { completed: !todo.completed } });
    // fetchTodos();
  };

  const deleteTodo = async (todo) => {
    // const collection = getTodoCollection();
    // await collection.deleteOne({ _id: todo._id });
    // fetchTodos();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <div className="flex mb-4">
        <input
          className="border border-gray-300 rounded-md py-2 px-4 mr-2 w-full"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a todo..."
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id} className="flex items-center mb-2">
            <span
              className={`flex items-center cursor-pointer ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}
              onClick={() => toggleComplete(todo)}
            >
              {todo.completed ? (
                <FaCheckCircle className="mr-2" />
              ) : (
                <FaRegCircle className="mr-2" />
              )}
              {todo.text}
            </span>
            <FaTrashAlt
              className="ml-auto cursor-pointer text-red-500"
              onClick={() => deleteTodo(todo)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
