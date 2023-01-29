import "./style.css";

const Tasks = ({ tasks, hiddenDoneTasks, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                className={`form__li ${task.done && hiddenDoneTasks ? "form__li--hidden" : ""}`}
            >
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className="list__button--green">
                    {task.done ? "✔" : ""}
                </button>

                <span className={task.done && "form__li--done"}>
                    {task.content}
                </span>

                <button
                    onClick={() => removeTask(task.id)}
                    className="list__button--red">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;