const Filter = ({ filter, setFilter }) => {
  return (
    <div className="btn-group mb-3">
      <button
        className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`btn btn-outline-primary ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
      <button
        className={`btn btn-outline-primary ${filter === 'pending' ? 'active' : ''}`}
        onClick={() => setFilter('pending')}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
