import React from 'react';
import styled, {css, ThemeProvider, withTheme} from 'styled-components';
//import {AppContext} from "./AppProvider";
import theme from 'styled-theming';
//import { backgroundColor, textColor } from '../Shared/Styles';
import { useTheme } from './ThemeContext';
import { buttonBackgroundColor, buttonTextColor } from '../Shared/Styles'


const Logo = styled.div`
    font-size: 1.5em;
`;

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 100px;
`;

const SwitchButtonStyled = styled.div`
    cursor: pointer;
    &:hover  {
        background: ${buttonBackgroundColor};
        color: ${buttonTextColor};
    }
    
`;

function AppHeader(props){

    const themeToggle = useTheme();

    return (
            <Bar>
                <Logo> Weather App </Logo>
                <div />
                <SwitchButtonStyled onClick={() => themeToggle.toggle()}> Switch Mode </SwitchButtonStyled>
                <div> {props.theme.mode === 'light' ? 'Light' : 'Dark'} mode</div>
            </Bar>
        )
}

export default withTheme(AppHeader)
