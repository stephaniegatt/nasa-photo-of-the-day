import styled from 'styled-components'


export default styled.div`
    background-color: ${props => props.color || 'white'};
    color: ${props => props.textColor || '#353535'};
    padding: 2rem 0;
    text-align: center;
    /* display: flex;
    flex-direction: column;
    align-content: center; */
`