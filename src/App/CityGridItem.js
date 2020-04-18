import React from 'react';
import styled from 'styled-components';
import {textColor} from '../Shared/Styles';


const CityGridItemStyled = styled.div`
    border: 1px solid ${textColor};
`;

export default function(city){
    return(
        <CityGridItemStyled>
            This is a CityGrid component {city.city.name}
        </CityGridItemStyled>)
}