"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

const TodoItem = ({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) => {
  return (
    <li className="flex items-center justify-between mt-2">
      <div className="flex gap-2">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
          {title}
        </label>
      </div>
      <button
        className="border border-slate-300 bg-transparent rounded px-1 outline-none focus-within:border-slate-100 hover:bg-slate-700 cursor-pointer"
        onClick={() => deleteTodo(id)}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
