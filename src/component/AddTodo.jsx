import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text, date);
    setText('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        className="form-control me-2"
        placeholder="Add a new task..."
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
