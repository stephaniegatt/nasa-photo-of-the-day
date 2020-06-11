import styled from 'styled-components'

export default styled.button`
    background-color: ${props => props.color || '#284b63'};
    color: ${props => props.textColor || 'white'};
    text-transform: ${props => props.scream ? 'uppercase' : 'initial'};
    width: 20%;
    padding: 1rem;
    text-align: center;
    display: inline-block;
    font-size: 1rem;
    border-radius: 8px;
`