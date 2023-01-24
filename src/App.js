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

const hideDoneTasks = true;

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
                body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                extraDivContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
            />
        </Main>
    );

}

export default App;
