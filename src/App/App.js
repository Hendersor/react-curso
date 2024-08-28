import React from 'react';
import { useState } from 'react';
import { AppUI } from './AppUI';
import {useLocalStorage} from './useLocalStorage'

function App() {
  const {saveItem : saveTodos, item : todos, loading, error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })


  let completedTodos = todos.filter(todo => todo.completed).length
  const allTodos = todos.length

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }


  const deleteTodo = (text) => {
        const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  
  return (
    <AppUI
      loading = {loading}
      error = {error}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
      searchedTodos={searchedTodos}
      allTodos={allTodos}
      completedTodos={completedTodos}
      setSearchValue={setSearchValue}
    />
  );
}



export default App;
