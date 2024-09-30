import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #282a36;
        color: #f8f8f2;
        margin: 0 1rem;
    }
`;

export const Container = styled.div`
    // background-color: #282c34;
    // min-height: 100vh;
    // margin: auto;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // font-size: calc(10px + 2vmin);
    // color: white;

    margin: auto;
    max-width: 35rem;
`;

export const InputField = styled.div`
    display: flex;
    min-width: 27rem;
`;

export const FilterField = styled.div`
    display: flex;
`;

export const SubmitButton = styled.button`
    border-radius: 0.5rem;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: #282a36;
    color: white;
    border: 2px solid #bd93f9;
    padding: 0.5rem;
    min-width: 5rem;
    flex: 1 1;

    &:hover {
        background-color: #bd93f9;
        color: #fff;
    }

    &:active {
        transform: scale(0.9);
    }
`;

export const TodoInput = styled.input`
    border-radius: 0.5rem;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: #f8f8f2;
    border: 2px solid #bd93f9;
    flex: 7 1;
`;

export const ListHeading = styled.h2`
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
`;
