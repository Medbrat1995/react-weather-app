//import { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
    light: '#FF5E13',
    dark: '#333'
})

export const textColor = theme('mode', {
    light: 'black',
    dark: '#FF5E13'
})

export const buttonBackgroundColor = theme('mode', {
    light: '#ff3030',
    dark: '#555'
})

export const buttonTextColor = theme('mode', {
    light: 'black',
    dark: '#ff9999'
})

export const chartStylingLight = {

    yAxis: {
        gridLineWidth: 1,
        gridLineColor: `black`
    },
    colors: ['black']
};

let chartStylingDark = {

    yAxis: {
        gridLineWidth: 1,
        gridLineColor: `#FF5E13`
    },
    colors: ['#FF5E13']
}

export const chartStyling = theme('mode', {
    light: chartStylingLight,
    dark: chartStylingDark
});

/*export const chartStyling = theme('mode', {
    light: chartStylingLight.toString(),
    dark: chartStylingDark.toString()
});*/




/*export const GlobalStyles = createGlobalStyle`
    body, #root{
        background: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
        padding: 40px;
    }
`;*/