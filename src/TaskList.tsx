import React from 'react';
import { TaskList as StyledTaskList, Description, Checkbox, SubmitButton } from './assets/styles/app.styles';

interface Task {
    id: string;
    content: string;
    checked: boolean;
    isEditing: boolean;
    currentEditValue: string;
}

interface TaskListProps {
    tasks: Task[];
    toggleCheckbox: (id: string) => void;
    deleteTask: (id: string) => void;
    startEditing: (id: string) => void;
    saveEdit: (id: string) => void;
    cancelEdit: (id: string) => void;
    handleEditChange: (id: string, value: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleCheckbox, deleteTask, startEditing, saveEdit, cancelEdit, handleEditChange }) => {
    return (
        <StyledTaskList>
            {tasks.map(task => (
                <Description key={task.id}>
                    <Checkbox 
                        type="checkbox" 
                        checked={task.checked} 
                        onChange={() => toggleCheckbox(task.id)} 
                    />
                    {task.isEditing ? (
                        <Description>
                            <input 
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
        </StyledTaskList>
    );
}

export default TaskList;