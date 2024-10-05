import React from 'react';
import { FilterField, SubmitButton } from './assets/styles/app.styles';

interface FilterButtonsProps {
    changeFilter: (filter: 'all' | 'active' | 'completed') => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ changeFilter }) => {
    return (
        <FilterField>
            <SubmitButton onClick={() => changeFilter('all')}>Show All tasks</SubmitButton>
            <SubmitButton onClick={() => changeFilter('active')}>Show Active tasks</SubmitButton>
            <SubmitButton onClick={() => changeFilter('completed')}>Show Completed tasks</SubmitButton>
        </FilterField>
    );
}

export default FilterButtons;