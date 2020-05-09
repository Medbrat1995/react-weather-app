import React from 'react';
import styled from 'styled-components';

const CurrentInfoStyled = styled.div`
    
`;

function CurrentInfoComponent({name, current}){
    return( current ?
        <CurrentInfoStyled>
            <p>{name}</p>
            <p>Temperature: {current.temp} C</p>
            <p>Feels like: {current.feels_like} C</p>
            <p>Pressure: {current.pressure} hPa</p>
            <p>Humidity: {current.humidity} %</p>
            <p>Wind: {current.wind_speed} m/s</p>
        </CurrentInfoStyled> : <div>Pick a city to get more info</div>
    )
}

export default CurrentInfoComponent;