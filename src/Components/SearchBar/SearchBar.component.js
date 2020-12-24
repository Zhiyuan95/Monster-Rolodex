import React from 'react'
import '../SearchBar/SearchBar.style.css'

const SearchBar = ({ placeholder, handleChange }) =>
  <input
    className='searchbar'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />

  export default SearchBar