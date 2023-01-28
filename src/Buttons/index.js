import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    
        <div className="section__hiddenButtons">
            {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="buttons__hidden">
                {hideDone ? "Pokaż" : "Ukryj"} Zrobione
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