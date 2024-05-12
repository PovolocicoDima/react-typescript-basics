import { FC, useEffect, useState } from "react";
import { ITodo } from "../types/type";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        `https://jsonplaceholder.typicode.com/todos?_limit=10`,
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;