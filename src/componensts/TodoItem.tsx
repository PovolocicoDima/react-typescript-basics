import { FC } from "react";
import { ITodo } from "../types/type";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div style={{ display: "flex" }}>
      {todo.id}
      <input type="checkbox" checked={todo.completed} />
      {todo.title}
    </div>
  );
};

export default TodoItem;
