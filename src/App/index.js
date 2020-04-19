import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AppContent from './AppContent';


class App extends Component {
    render() {
        return (
            <>
                <AppHeader />
                <AppContent />
            </>);
    }
}

export default App;

