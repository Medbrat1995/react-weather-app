import React from 'react';
import styled from 'styled-components';
import {textColor, backgroundColor} from '../Shared/Styles';
import { AppContext } from './AppProvider';

//<p><img src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} /></p>

const CityGridItemStyled = styled.div`
    border: 1px solid ${textColor};
`;

const ButtonStyled = styled.div`
    margin: 15px;
    cursor: pointer;
    background-color: ${textColor};
    color: ${backgroundColor}; 
`;

export default function({city}){
    return(
        <AppContext.Consumer>
            {({deleteCity, setPickedCity}) =>
                (<CityGridItemStyled>
                    <p>{city.name}</p>
                    <p>{city.weather[0].main}</p>
                    <p>{city.weather[0].description}</p>
                    <p>{city.main.temp}</p>
                    <ButtonStyled onClick={() => setPickedCity({lat: city.coord.lat, lon: city.coord.lon, updatedAt: Date.now(), name: city.name})}> Pick </ButtonStyled>
                    <ButtonStyled onClick={() => deleteCity(city.id)}> Delete </ButtonStyled>
                </CityGridItemStyled>)
            }
        </AppContext.Consumer>)
}