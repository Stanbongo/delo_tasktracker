import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

import TaskItem from "./TaskItem";
import type { Task } from "./App";

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

function TaskList({ tasks, onDelete, onToggle }: TaskListProps) {
  const { theme } = useContext(ThemeContext);
  const content = tasks.map((task) => (
    <TaskItem
      key={task.id}
      id={task.id}
      title={task.title}
      done={task.done}
      onDelete={onDelete}
      onToggle={onToggle}
    />
  ));

  return <ul className={`todo-list theme-${theme}`}>{content}</ul>;
}

export default TaskList;
