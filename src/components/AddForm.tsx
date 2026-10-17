import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

type AddFormProps = {
  onSend: (title: string) => void;
};

function AddForm({ onSend }: AddFormProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`add-form theme-${theme}`}>
      <input
        id="task-title"
        type="text"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSend(event?.currentTarget.value);
            event.currentTarget.value = "";
          }
        }}
        placeholder="Например, изучить JSX"
      />
    </div>
  );
}

export default AddForm;
