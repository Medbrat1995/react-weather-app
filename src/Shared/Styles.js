//import { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
    light: '#ff3030',
    dark: '#333'
})

export const textColor = theme('mode', {
    light: 'black',
    dark: '#ff3030'
})

export const buttonBackgroundColor = theme('mode', {
    light: '#ff1010',
    dark: '#555'
})

export const buttonTextColor = theme('mode', {
    light: 'black',
    dark: '#ff9999'
})

/*export const GlobalStyles = createGlobalStyle`
    body, #root{
        background: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
        padding: 40px;
    }
`;*/