import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";


const tasks = [
    { id: 1, content: "Przejść na Reacta", done: false },
    { id: 2, content: "Zrobić kolację", done: true },
];

const hideDone = true;

function App() {

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
                extraDivContent={<Buttons tasks={tasks} hideDone={hideDone} />}
            />
        </Main>
    );

}

export default App;
