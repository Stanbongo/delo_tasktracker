import { useContext } from "react"
import TaskItem from "./TaskItem"
import { ThemeContext } from "../context/themeContext"

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskListProps = {
    tasks: Task[],
    deleteTask: (id: number) => void,
    changeTask: (id: number) => void,
}

function TaskList({ tasks, deleteTask, changeTask }: TaskListProps) {

    // Пример получение данных из контекста, вместо props
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`todo-list todo-list-${theme}`}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    completed={task.completed}
                    deleteTask={deleteTask}
                    changeTask={changeTask}
                />
            ))}
        </div>
    )
}

export default TaskList
