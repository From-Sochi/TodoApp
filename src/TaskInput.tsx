import React from 'react';
import { InputField, SubmitButton, TodoInput } from './assets/styles/app.styles';

interface TaskInputProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    addTask: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ value, setValue, addTask }) => {
    return (
        <InputField>
            <TodoInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='New todo...'
            />
            <SubmitButton onClick={addTask}>Add</SubmitButton>
        </InputField>
    );
}

export default TaskInput;
