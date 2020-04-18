import React, {Component} from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cities: [
                {name: 'Moscow', id: 1},
                {name: 'London', id: 2},
            ],
            addCity: this.addCity.bind(this)
        };
    }

    addCity(city){
        this.setState({
            cities: [...this.state.cities, city]
        })
    }


    componentDidMount(){

    }

    render(){
        return (<AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>)
    }
}

