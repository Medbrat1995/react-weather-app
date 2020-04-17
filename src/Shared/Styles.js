//import { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
    light: '#ff5454',
    dark: '#333'
})

export const textColor = theme('mode', {
    light: 'black',
    dark: '#ff8888'
})

export const buttonBackgroundColor = theme('mode', {
    light: '#ff9898',
    dark: '#777'
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