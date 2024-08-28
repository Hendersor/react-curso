import {useState, useEffect} from 'react'

function useLocalStorage(itemName, initialValue) {


  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageTodos);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {saveItem, item, loading, error}
}

export {useLocalStorage}