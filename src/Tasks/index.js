import "./style.css";

const Tasks = ({tasks, hiddenDoneTasks}) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                className={`form__li ${task.done && hiddenDoneTasks ? "form__li--hidden" : ""}`}
            >
                <button className="list__button--green">
                    {task.done ? "✔" : ""}
                </button>

                <span className={task.done && "form__li--done"}>
                    {task.content}
                </span>

                <button className="list__button--red">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;