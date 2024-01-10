import React from "react";

function useLocalStorage(itemName, initialValue){

    const localStorageItem = localStorage.getItem(itemName);
  
    let parsedItem;
  
    if(localStorageItem){
  
      parsedItem = JSON.parse(localStorageItem);
  
    }else{
  
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
  
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return [item, saveItem];
  
}

export { useLocalStorage };