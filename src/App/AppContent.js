import React from 'react';
import styled from 'styled-components';
import InputComponent from './InputComponent';
import CityGrid from './CityGrid'

const AppContentStyled = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr;
    margin: 20px;
`;

export default function(){

    return(<AppContentStyled>
            <InputComponent />
            <CityGrid />
        </AppContentStyled>)
}