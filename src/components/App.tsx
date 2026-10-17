import Header from "./Header";
import TaskList from "./TaskList";
import AddForm from "./AddForm";
import "./../App.css";
import { useState } from "react";
import { ThemeContext } from "../context/themeContext";

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

const defaultTasks: Task[] = [
  { id: "1", title: "Title 1", done: true },
  { id: "2", title: "Title 2", done: true },
  { id: "3", title: "Title 3", done: true },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title,
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggle = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  return (
    <>
      {/* Provider - "облако", в которое мы помещаем состояние и сетСтейт для дочерних компонентов  */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <AddForm onSend={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={handleToggle} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
