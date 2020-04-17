import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from '../Shared/Styles';

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({children}) => {

    const [themeState, setThemeState] = React.useState({
        mode: 'light'
    })

    const Layout = styled.div`
        padding: 40px;
        background-color: ${backgroundColor};
        color: ${textColor};
    `;

    const toggle = () => {
        const mode = themeState.mode === 'light' ? 'dark' : 'light';
        setThemeState({mode: mode});
    }

    return(
        <ThemeToggleContext.Provider value={{toggle: toggle}}>
            <ThemeProvider theme={{mode: themeState.mode}}>
                <Layout id={'Layout'}>
                    {children}
                </Layout>
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    )
};

export default ThemeProvider;
