import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";


const tasks = [
    { id: 1, content: "Przejść na Reacta", done: false },
    { id: 2, content: "Zrobić obiad", done: true },
];

const hideDoneTasks = true;

function App() {

        return (
            <main className="main">
                <h1>Lista zadań</h1>
                <Section
                    title="Dodaj nowe zadanie"
                    body={<Form />}
                />
                <Section
                    title="Lista zadań"
                    body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                    extraDivContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                />
            </main>
        );

}

export default App;
