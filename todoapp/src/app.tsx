import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import {
    GlobalStyle,
    InputField,
    FilterField,
    Container,
    SubmitButton,
    TodoInput,
    ListHeading,
} from './assets/styles/app.styles';

function App() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [value, setValue] = useState<string>(''); 

    function recording(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    function addTask() {
        if (value) {
            setTasks([...tasks, value]); // Добавляем новое значение в массив задач
            setValue(''); // Очищаем поле ввода
        }
    }

    let res = tasks.map((elem) => {
        return (
            <div key={nanoid()}>
                <input type="checkbox" />
                <label>{elem}</label>
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
                    <SubmitButton onClick={addTask}>Add</SubmitButton> {/* При нажатии добавляем задачу */}
                </InputField>
                <FilterField>
                    <SubmitButton>Show All tasks</SubmitButton>
                    <SubmitButton>Show Active tasks</SubmitButton>
                    <SubmitButton>Show Completed tasks</SubmitButton>
                </FilterField>
                <ListHeading>{tasks.length} Tasks remaining</ListHeading>
                <div>
                    {res} {/* Отображаем список задач */}
                </div>
            </Container>
        </>
    );
}

export default App;