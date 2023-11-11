import { useState } from 'react';

const SearchForm = ({ onHandelSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) return alert(`please, enter a word`);
    onHandelSubmit(query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" onChange={handleChange} value={query} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
