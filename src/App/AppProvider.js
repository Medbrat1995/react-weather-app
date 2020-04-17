/*import React, {Component} from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lightMode: true,
            switchMode: this.switchMode.bind(this)
        };
    }

    switchMode(){
        this.setState({lightMode: !this.state.lightMode},
            () => {console.log(this.state.lightMode)})
    }

    componentDidMount(){

    }

    render(){
        return (<AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>)
    }
}
*/
