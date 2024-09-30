import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import {
    GlobalStyle,
    InputField,
    FilterField,
    Container,
    SubmitButton,
    TodoInput,
    ListHeading,
    TaskList,
    Checkbox,
} from './assets/styles/app.styles';

function App() {
    const [tasks, setTasks] = useState<{ id: string; content: string; checked: boolean }[]>([]);
    const [value, setValue] = useState<string>('');

    function recording(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    function addTask() {
        if (value) {
            setTasks([...tasks, { id: nanoid(), content: value, checked: false }]);
            setValue('');
        }
    }

    function toggleCheckbox(id: string) {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, checked: !task.checked } : task
        ));
    }

    function deleteCheckedTasks() {
        setTasks(tasks.filter(task => !task.checked)); // Оставляем только те задачи, которые не отмечены
    }

    let res = tasks.map((task) => {
        return (
            <div key={task.id}>
                <Checkbox 
                    type="checkbox" 
                    checked={task.checked} 
                    onChange={() => toggleCheckbox(task.id)} 
                />
                <label>{task.content}</label>
                <SubmitButton>Edit</SubmitButton>
                <SubmitButton onClick={deleteCheckedTasks}>Delete</SubmitButton> {/* Теперь удаляем все отмеченные задачи */}
            </div>
        );
    });

    return (
        <>
            <GlobalStyle />
            <Container>
                <h1>ToDos</h1>
                <InputField>
                    <TodoInput value={value} onChange={recording} type='text' placeholder='New todo...' />
                    <SubmitButton onClick={addTask}>Add</SubmitButton>
                </InputField>
                <FilterField>
                    <SubmitButton>Show All tasks</SubmitButton>
                    <SubmitButton>Show Active tasks</SubmitButton>
                    <SubmitButton>Show Completed tasks</SubmitButton>
                </FilterField>
                <ListHeading>{tasks.length} Tasks remaining</ListHeading>
                <TaskList>{res}</TaskList>
            </Container>
        </>
    );
}

export default App;