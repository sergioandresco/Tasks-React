import React from 'react';
import '../styles/TaskSearch.css';

function TaskSearch(){

    const [searchValue, setSearchValue] = React.useState('');

    console.log('The users are search ' + searchValue);

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