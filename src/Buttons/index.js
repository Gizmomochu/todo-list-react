import "./style.css";

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }
    
    return (
        <div className="section__hiddenButtons">
                    <button class="buttons__hidden">
        {props.hideDoneTasks ? "Pokaż" : "Ukryj"} Zrobione
        </button>

        <button 
        className="buttons__hidden"
        disabled={props.tasks.every(({ done }) => done)}
        >
        Zaznacz wszystkie ukończone
        </button>
        </div>
        
    )
};

export default Buttons;