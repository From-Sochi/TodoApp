import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle, Container } from './assets/styles/app.styles';
import TaskInput from './TaskInput';
import FilterButtons from './FilterButtons';
import TaskList from './TaskList';

interface Task {
    id: string;
    content: string;
    checked: boolean;
    isEditing: boolean;
    currentEditValue: string;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [value, setValue] = useState<string>('');
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    const addTask = (): void => {
        if (value) {
            setTasks([
                ...tasks,
                { id: nanoid(), content: value, checked: false, isEditing: false, currentEditValue: value },
            ]);
            setValue('');
        }
    };

    const toggleCheckbox = (id: string): void => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, checked: !task.checked } : task)));
    };

    const deleteTask = (id: string): void => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const startEditing = (id: string): void => {
        setTasks(
            tasks.map(task => (task.id === id ? { ...task, isEditing: true, currentEditValue: task.content } : task))
        );
    };

    const saveEdit = (id: string): void => {
        setTasks(
            tasks.map(task => (task.id === id ? { ...task, content: task.currentEditValue, isEditing: false } : task))
        );
    };

    const cancelEdit = (id: string): void => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, isEditing: false } : task)));
    };

    const handleEditChange = (id: string, value: string): void => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, currentEditValue: value } : task)));
    };

    const changeFilter = (newFilter: 'all' | 'active' | 'completed'): void => {
        setFilter(newFilter);
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.checked;
        if (filter === 'completed') return task.checked;
        return true;
    });

    const showTaskText = () => {
        if (filter === 'all') {
            return `Всего задач: ${tasks.length}`;
        } else if (filter === 'active') {
            return `Активных задач: ${filteredTasks.length}`;
        } else if (filter === 'completed') {
            return `Выполненных задач: ${filteredTasks.length}`;
        }
        return '';
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <h1>Список задач:</h1>
                <TaskInput value={value} setValue={setValue} addTask={addTask} />
                <FilterButtons changeFilter={changeFilter} />
                <h2>{showTaskText()}</h2>
                <TaskList
                    tasks={filteredTasks}
                    toggleCheckbox={toggleCheckbox}
                    deleteTask={deleteTask}
                    startEditing={startEditing}
                    saveEdit={saveEdit}
                    cancelEdit={cancelEdit}
                    handleEditChange={handleEditChange}
                />
            </Container>
        </>
    );
};

export default App;
