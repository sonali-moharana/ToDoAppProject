const ToDoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.completed ? 'list-group-item-success' : ''
      }`}
    >
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <span>{todo.date}</span>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
