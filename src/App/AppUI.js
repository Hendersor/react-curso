import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

const AppUI = ({
  deleteTodo,
  completeTodo,
  allTodos,
  completedTodos,
  searchValue,
  searchedTodos,
  setSearchValue,
  error,
  loading
}) => {
  return (
    <>
      <TodoCounter completed={completedTodos} total={allTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Hubo un error!</p>}
        {!loading && searchedTodos.length === 0 && (
          <p>No hay tareas pendientes:D!</p>
        )}
        {searchedTodos.map((task) => (
          <TodoItem
            key={task.text}
            text={task.text}
            onComplete={completeTodo}
            completed={task.completed}
            onDelete={deleteTodo}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
};

export { AppUI };
