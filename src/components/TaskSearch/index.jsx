import React from 'react';
import '../../styles/TaskSearch.css';

function TaskSearch({ searchValue, setSearchValue }){

    return(

        <input placeholder="Search a task" 
        className="TaskSearch"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}
        />

    )
}

export { TaskSearch };