import React from "react";

function useLocalStorage(itemName, initialValue){

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
  
        if(localStorageItem){
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }else{
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }
  
        setLoading(false);
      }catch(error){
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item, 
    saveItem,
    loading,
    error,
  };
  
}

export { useLocalStorage };

// const defaultTasks = [
//   { text: 'This is a first test', completed: true },
//   { text: 'This is a second test', completed: false },
//   { text: 'This is a third test', completed: false },
//   { text: 'This is a fourth test', completed: false},
//   { text: 'This is a fiveth test', completed: true},
// ]

// localStorage.setItem('TASKS_V1', JSON.stringify(defaultTasks));
// localStorage.removeItem('TASKS_V1');