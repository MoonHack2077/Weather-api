import styled from 'styled-components';
import { primaryColor , textColor } from '../../constants.js';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;
    background-color: ${ primaryColor };
    color: ${ textColor }
`
export const StateImge = styled.img`
    width: 90px;
    height: 90px;
`
export const StyledSpan = styled.span`
    font-size: medium;
`
