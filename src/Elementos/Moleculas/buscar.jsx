// src/components/molecules/SearchBar.js
import React from 'react';
import Input from '../Atomos/input';
import Button from '../Atomos/boton';

function SearchBar() {
  return (
    <div className="search-bar">
      <Input placeholder="Buscar..." />
      <Button text="Buscar" />
    </div>
  );
}

export default SearchBar;
