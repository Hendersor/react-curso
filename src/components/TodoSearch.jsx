import React from 'react';
import "../styles/TodoSearch.css";


function TodoSearch({searchValue, setSearchValue}){

    return (
        <input value = {searchValue} onChange={(e) => setSearchValue(e.target.value)} className="TodoSearch" placeholder="Cortar cebolla"/>
    )
}

export {TodoSearch}