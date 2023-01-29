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
    };

    const toggleTaskDone = (id) => {
        setTasks(task => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            };

            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task, done: true
        })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                content: newTaskContent,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ])
    };

    return (
        <Main>
            <Header title="Lista Zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form
                    addNewTask={addNewTask} />}
            />
            <Section
                title="Lista zadań"
                body={
                    <Tasks
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone}
                        tasks={tasks}
                        hideDone={hideDone} />}
                extraDivContent={
                    <Buttons
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone}
                        setAllDone={setAllDone} />}
            />
        </Main>
    );

}

export default App;
