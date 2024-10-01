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
    Description,
} from './assets/styles/app.styles';

function App() {
    const [tasks, setTasks] = useState<{ id: string; content: string; checked: boolean; isEditing: boolean; currentEditValue: string }[]>([]);
    const [value, setValue] = useState<string>('');
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    function recording(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    function addTask() {
        if (value) {
            setTasks([...tasks, { id: nanoid(), content: value, checked: false, isEditing: false, currentEditValue: value }]);
            setValue('');
        }
    }

    function toggleCheckbox(id: string) {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, checked: !task.checked } : task
        ));
    }

    function deleteTask(id: string) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function startEditing(id: string) {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, isEditing: true, currentEditValue: task.content } : task
        ));
    }

    function saveEdit(id: string) {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, content: task.currentEditValue, isEditing: false } : task
        ));
    }

    function cancelEdit(id: string) {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, isEditing: false } : task
        ));
    }

    function handleEditChange(id: string, value: string) {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, currentEditValue: value } : task
        ));
    }

    function changeFilter(newFilter: 'all' | 'active' | 'completed') {
        setFilter(newFilter);
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.checked;
        if (filter === 'completed') return task.checked;
        return true; 
    });

    return (
        <>
            <GlobalStyle />
            <Container>
                <h1>Список задач:</h1>
                <InputField>
                    <TodoInput value={value} onChange={recording} type='text' placeholder='New todo...' />
                    <SubmitButton onClick={addTask}>Add</SubmitButton>
                </InputField>
                <FilterField>
                    <SubmitButton onClick={() => changeFilter('all')}>Show All tasks</SubmitButton>
                    <SubmitButton onClick={() => changeFilter('active')}>Show Active tasks</SubmitButton>
                    <SubmitButton onClick={() => changeFilter('completed')}>Show Completed tasks</SubmitButton>
                </FilterField>
                <ListHeading>{filteredTasks.length} Осталось задач</ListHeading>
                <TaskList>
                    {filteredTasks.map((task) => (
                        <Description key={task.id}>
                            <Checkbox 
                                type="checkbox" 
                                checked={task.checked} 
                                onChange={() => toggleCheckbox(task.id)} 
                            />
                            {task.isEditing ? (
                                <Description>
                                    <TodoInput 
                                        type="text" 
                                        value={task.currentEditValue} 
                                        onChange={(e) => handleEditChange(task.id, e.target.value)} 
                                    />
                                    <SubmitButton onClick={() => saveEdit(task.id)}>Save</SubmitButton>
                                    <SubmitButton onClick={() => cancelEdit(task.id)}>Cancel</SubmitButton>
                                </Description>
                            ) : (
                                <Description>
                                    <label>{task.content}</label>
                                    <SubmitButton onClick={() => startEditing(task.id)}>Edit</SubmitButton>
                                    <SubmitButton onClick={() => deleteTask(task.id)} disabled={!task.checked}>Delete</SubmitButton>
                                </Description>
                            )}
                        </Description>
                    ))}
                </TaskList>
            </Container>
        </>
    );
}

export default App;