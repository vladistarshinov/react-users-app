import React, { useState } from 'react';

function TableSearch({ onSearch }) {
  const [searchName, setSearchName] = useState('');

  const changeValue = e => setSearchName(e.target.value);

  const controlSearch = () => onSearch(searchName);

  const clearSearch = () => {
    setSearchName('');
    onSearch('');
  }

  return (
    <>
      <input type='text' value={searchName} onChange={changeValue} />
      <button onClick={controlSearch}>Поиск</button>
      <button onClick={clearSearch}>Очистить</button>
    </>
  );
}
export default TableSearch;