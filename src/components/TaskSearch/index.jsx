import React from 'react';
import '../../styles/TaskSearch.css';
import { TaskContext } from '../TaskContext';

function TaskSearch(){

    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TaskContext);

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