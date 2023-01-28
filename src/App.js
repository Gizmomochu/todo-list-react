import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";


const tasks = [
    { id: 1, content: "Przejść na Reacta", done: false },
    { id: 2, content: "Zrobić kolację", done: true },
];



function App() {
    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
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
                body={<Tasks tasks={tasks} hideDone={hideDone} />}
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
