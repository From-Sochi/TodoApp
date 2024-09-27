import React from 'react';
// import SHeader from './assets/styles/app.styles';
// import { SHeader } from './assets/styles/app.styles';
import { InputField, FilterField, Container } from './assets/styles/app.styles';

function App() {
    return (
        <Container>
            <h1>ToDos</h1>
            <InputField>
                <input type='text' placeholder='New todo...' />
                <button>Add</button>
            </InputField>
            <FilterField>

                <button>Show All tasts</button>
                <button>Show Active tasks</button>
                <button>Show Completed tasks</button>
            </FilterField>
        </Container>
    );
}

export default App;
