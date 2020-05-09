import React from 'react';
import { AppContext } from './AppProvider';
import styled from 'styled-components';
import {textColor} from '../Shared/Styles';
import CityGridItem from './CityGridItem';

const CityGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    margin: 25px;    
`;



export default function(){
    return(
        <AppContext.Consumer>
            {({cities}) =>
                <CityGridStyled>
                    {cities ? cities.map(city => (
                        <CityGridItem city={city} key={city.id} />
                    )) : <div></div>}
                </CityGridStyled>
                }

        </AppContext.Consumer>


    )
}