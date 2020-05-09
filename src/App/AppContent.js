import React from 'react';
import styled from 'styled-components';
import InputComponent from './InputComponent';
import CityGrid from './CityGrid';
import PickedCity from './PickedCityComponent';

const AppContentStyled = styled.div`   
    margin: 20px;
`;

const Row = styled.div`
    display: grid; 
    grid-template-columns: 2fr 5fr;
`

export default function(){

    return(<AppContentStyled>
            <Row>
                <InputComponent />
                <CityGrid />
            </Row>
            <PickedCity />
        </AppContentStyled>)
}