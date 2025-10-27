import React from 'react';
const SearchBar =({onSearchChange , searchTerm})=>{
    return(
    <div className=" container-fluid mb-4 bg-gray-800 p-3">
        <input
        type="text"
        className="form-control form-control-lg bg-white text-primary border-primary "
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={onSearchChange}
        />
    </div>
    )
}
export default SearchBar ;