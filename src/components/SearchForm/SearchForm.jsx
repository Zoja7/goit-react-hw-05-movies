import { useState } from 'react';
import css from './SearchForm.module.css';

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
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <label>
        <input
          className={css.searchInput}
          type="text"
          onChange={handleChange}
          value={query}
        />
      </label>
      <button className={css.searchFormButton} type="submit">
        {' '}
        <span className={css.searchFormButtonIcon}>&#128269;</span>
        <span className={css.searchFormButtonLabel}>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
