type TaskItemProps = {
  title: string;
  done: boolean;
  id: string;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

function TaskItem({ title, done, id, onDelete, onToggle }: TaskItemProps) {
  return (
    <li
      onClick={() => onToggle(id)}
      className={"todo-item" + (done ? " done" : "")}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
      >
        X
      </button>
      <h3>{title}</h3>
      <p>{done + ""}</p>
    </li>
  );
}

export default TaskItem;
