import React from 'react';
import styled from 'styled-components';
import {textColor, backgroundColor} from '../Shared/Styles';
import { AppContext } from './AppProvider';


const CityGridItemStyled = styled.div`
    border: 1px solid ${textColor};
`;

const DeleteButtonStyled = styled.div`
    margin: 15px;
    cursor: pointer;
    background-color: ${textColor};
    color: ${backgroundColor}; 
`;

export default function({city}){
    return(
        <AppContext.Consumer>
            {({deleteCity}) =>
                (<CityGridItemStyled>
                    <p>{city.id}</p>
                    <p>{city.name}</p>
                    <p>{city.weather[0].main}</p>
                    <p>{city.main.temp}</p>
                    <DeleteButtonStyled onClick={() => deleteCity(city.id)}> Delete </DeleteButtonStyled>
                </CityGridItemStyled>)
            }
        </AppContext.Consumer>)
}