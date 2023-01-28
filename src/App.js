import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";


function App() {
    const [hideDone, setHideDone] = useState(false);
    const [tasks, setTasks] = useState([
        { id: 1, content: "Przejść na Reacta", done: false },
        { id: 2, content: "Zrobić kolację", done: true },
    ]);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    }

    return (
        <Main>
            <Header title="Lista Zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
            />
            <Section
                title="Lista zadań"
                body={
                    <Tasks
                        removeTask={removeTask}
                        tasks={tasks}
                        hideDone={hideDone} />}
                extraDivContent={
                    <Buttons
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone} />}
            />
        </Main>
    );

}

export default App;
