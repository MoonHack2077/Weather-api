import styled from 'styled-components';
import { primaryColor , backgroundColor, textColor } from '../../constants.js';

export const Main = styled.main`
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 100vw;
    justify-content: center;
    background-color: ${ backgroundColor };
    color: ${ textColor };

    @media screen and (min-width: 1000px){
        flex-direction: row;
    }
`;

export const City = styled.aside`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 200px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    background-color: ${ primaryColor };

    @media screen and (min-width: 1000px){
        height: 100vh;
        padding: 0;
        gap: 0;
        justify-content: space-evenly;
        width: 35%;
    }
`
export const SearchCity = styled.aside`
    @keyframes appear{
        from{ transform: translateX(-100%) }
        to{ transform: translateX(0) }
    }

    padding: 0 40px;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: ${ primaryColor };
    z-index: 1000; 
    animation: appear 1.5s ease forwards;

    @media screen and (min-width: 1000px){
        position: absolute;
        padding: 0;
    }
`
export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    margin-top: 30px;
    margin-left: 30px;
`
export const SearchInput = styled.input`
    width: 250px;
    padding: 8px;
    outline: 1px solid ${ textColor };
    color: ${ textColor };
    background-color: transparent;

    &::placeholder{
        color: ${ textColor };
    }
`
export const SearchButton = styled.input`
    border: none;
    outline: none;
    z-index: 200;
    padding: 8px;
    color: ${ textColor };
    background-color: ${( { bg_color } ) => bg_color};
    
    &:hover{
        filter: opacity(.8);
    }

    &.toggleButton{
        font-size: ${ ({ fz })=> fz };
        top: ${ ({ top }) => top };
        right: ${ ({ right }) => right };
        margin-left: 20px;
    }

    &.inputForm{
        margin-left: 20px;
    }
`
export const RecentSearches = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin: 0;
`
export const Searched = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    list-style-type: none;
    height: 60px;

    &.arrow{
        display: none;
    }

    &:hover{
        cursor: pointer;
        outline: 1px solid ${ textColor };  
        &.arrow{
            display: inline;
        }
    }
`

export const WeatherImages = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    filter: grayscale(1); 

    @media screen and (min-width: 1000px){
        width: 100%;
    }
`
export const BackImg = styled.img`
    position: absolute;
    height: 100%;
    filter: opacity(0.1); 
    transform: scale(2.5);

    @media screen and (min-width: 1000px){
        width: 100%;
        transform: scale(1.1);
    }
`
export const Img = styled.img`
    width: ${ ({width}) => width }  ;
    height: ${ ({height}) => height };
`
export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    text-align: center;
`
export const Span = styled.span`
    display: inline-block;
    margin: 20px 0;
    font-size: ${ ({ fz })=> fz };

    &.indicator{
        text-align: start;
    }
    &.announce{
        font-weight: bold;
    }

`
export const RightSide = styled.section`
    margin: 0;
`
export const Stats = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    height: 100%;
    padding: 40px;
    gap: 20px;

    @media screen and (min-width: 1000px){
        min-height: 100%;
        padding: 0;
        gap: 0;
    }
`
export const Days = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    margin: auto;
    padding: 0 30px;
    width: auto;

    @media screen and (min-width: 1000px){
        justify-content: space-between;
        padding: 0 20px;
        margin-top: 20px;
    }
`
export const StatusContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 60px;
    padding: 20px;
    width: auto;
    height: auto;

    @media screen and (min-width: 1000px){
        gap: 0;
        padding: 0 20px;
    }
`
export const HighLights = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;
    height: auto;
`
export const Footer = styled.footer`
    position: relative;
    bottom: 0;
    width: 100%;
    text-align: center;
`
export const MyGitHub = styled.a`
    font-weight: bold;
    color: ${ textColor };
    font-size: ${ ({ fz }) => fz };
`

export const SwitchTemperature = styled.div`
    display: none;
    justify-content: space-between;
    position: absolute;
    top: 20px;
    right: 60px;
    width: 100px;
    padding: 10px;

    @media screen and (min-width: 1000px){
        display: flex;
    }
`
export const SearchContainer = styled.div`
    display: flex;
    align-items : center;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: 0;
    padding: 10px 20px;
`
export const Announce = styled.div`
    @keyframes jump-in{
        0%{ transform: translateY(0); filter: opacity(.5); }
        50%{ transform: translateY(-100%); filter: opacity(1); }
        100%{ transform: translateY(0); filter: opacity(0); }
    }

    display: none;
    @media screen and (min-width: 1000px){
        display: flex;
        position: absolute;
        top: -10px;
        right: 30px;
        background-color: ${ primaryColor };
        padding: 5px 10px;
        max-width: 200px;
        color: ${ textColor };
        animation: jump-in 5s cubic-bezier(.07,.93,.54,-0.05) forwards;
    }
`