import React from 'react';
import styled from 'styled-components';
import { SubmitButton } from './InputComponent';

const CurrentInfoStyled = styled.div`
    
`;

function CurrentInfoComponent({name, current, toggleData}){
    return( current ?
        <CurrentInfoStyled>
            <p>{name}</p>
            <p>Temperature: {current.temp} C</p>
            <p>Feels like: {current.feels_like} C</p>
            <p>Pressure: {Math.round(current.pressure / 1013.25 * 760)} mm Hg</p>
            <p>Humidity: {current.humidity} %</p>
            <p>Wind: {current.wind_speed} m/s</p>
            <p><SubmitButton onClick={() => toggleData()}> Toggle </SubmitButton></p>
        </CurrentInfoStyled> : <div>Pick a city to get more info</div>
    )
}

export default CurrentInfoComponent;