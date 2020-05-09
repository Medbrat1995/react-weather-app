import React, {Component} from 'react';
import { AppContext } from './AppProvider';
import styled from 'styled-components';
import CurrentInfoComponent from './CurrentInfoComponent';
import HighChartComponent from './HighChartComponent';
import {textColor} from '../Shared/Styles';

export const PickedCityStyled = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr;
    align: center;
    border: 1px solid ${textColor};
`;

class PickedCity extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {
        return (<AppContext.Consumer>
            {({pickedCityParams, pickedCity}) => (<PickedCityStyled>
                <CurrentInfoComponent name={pickedCityParams.name} current={pickedCity.current} />
                <HighChartComponent daily={pickedCity.daily} hourly={pickedCity.hourly} />
            </PickedCityStyled>)}
        </AppContext.Consumer>)
    }
}

export default PickedCity;