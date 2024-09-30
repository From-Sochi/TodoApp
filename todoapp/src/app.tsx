import React from 'react';
import {GlobalStyle, InputField, FilterField, Container, SubmitButton, TodoInput, ListHeading } from './assets/styles/app.styles';

function App() {
    return (

        <>
        <GlobalStyle/>
        <Container>
            <h1>ToDos</h1>
            <InputField>
                <TodoInput type='text' placeholder='New todo...'></TodoInput>
                <SubmitButton>Add</SubmitButton>
            </InputField>
            <FilterField>
                <SubmitButton>Show All tasts</SubmitButton>
                <SubmitButton>Show Active tasks</SubmitButton>
                <SubmitButton>Show Completed tasks</SubmitButton>
            </FilterField>
            <ListHeading>tasks remaining</ListHeading>
        </Container>
        </>
    );
}

export default App;
