//import { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
    light: '#ff5050',
    dark: '#333'
})

export const textColor = theme('mode', {
    light: 'black',
    dark: '#ff5050'
})

export const buttonBackgroundColor = theme('mode', {
    light: '#ff3030',
    dark: '#555'
})

export const buttonTextColor = theme('mode', {
    light: 'black',
    dark: '#ff9999'
})

let chartStylingLight = {
    chart: {
        backgroundColor: '#ff5050'
    },
    colorAxis: {
        gridLineColor: '#333'
    },
    colors: ['#333']
};

let chartStylingDark = {
    chart: {
        backgroundColor: '#333'
    },
    colorAxis: {
        gridLineColor: '#ff5050'
    },
    colors: ['#ff5050']
}

export const chartStyling = theme('mode', {
    light: chartStylingLight,
    dark: chartStylingDark
})



/*export const GlobalStyles = createGlobalStyle`
    body, #root{
        background: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
        padding: 40px;
    }
`;*/