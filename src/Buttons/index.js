import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    
        <div className="section__hiddenButtons">
            {tasks.length > 0 && (
            <>
                <button className="buttons__hidden">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} Zrobione
            </button>
            <button
                className="buttons__hidden"
                disabled={tasks.every(({ done }) => done)}
            >
                Zaznacz wszystkie ukończone
            </button>
            </>
            )}
        </div>

);

export default Buttons;