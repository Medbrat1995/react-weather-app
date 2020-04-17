import React, { Component } from 'react';
//import AppLayout from './AppLayout';
import AppHeader from './AppHeader';
//import {AppProvider} from './AppProvider';



/*const AppLayout = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
`;*/


class App extends Component {
    render() {
        return (
            <>
                <AppHeader />
                <div>Hello, World!</div>
            </>);
    }
}

export default App;

