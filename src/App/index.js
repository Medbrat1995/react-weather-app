import React, { Component } from 'react';
//import AppLayout from './AppLayout';
import AppHeader from './AppHeader';
//import {AppProvider} from './AppProvider';
import AppContent from './AppContent';






class App extends Component {
    render() {
        return (
            <>
                <AppHeader />
                <div>Hello, World!</div>
                <AppContent />
            </>);
    }
}

export default App;

