import React, {Component} from 'react';
import _ from 'lodash';

const API_KEY = `b8b4cec7e0ef27313f5c3aa7808c6c73`;

export const AppContext = React.createContext();

export class AppProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cities: [],
            IDs: [],
            pickedCityParams: {
                lat: 60.99,
                lon: 30.9,
                name: 'Moscow'
            },
            highchartData: 'daily',
            toggleHighchartData: this.toggleHighchartData.bind(this),
            pickedCity: {},
            addCity: this.addCity.bind(this),
            deleteCity: this.deleteCity.bind(this),
            isInCities: this.isInCities.bind(this),
            handleSubmit: this.handleSubmit.bind(this),
            setPickedCity: this.setPickedCity.bind(this),
            fetchPickedCity: this.fetchPickedCity.bind(this),
            addPickedCity: this.addPickedCity.bind(this),
            fetchCity: this.fetchCity.bind(this),
            fetchIDsGroup: this.fetchIDsGroup.bind(this),
        };
    }

    addCity(city){
        let cities = this.state.cities;
        let IDs = this.state.IDs;
        cities.push(city);
        IDs.push(city.id);
        this.setState({cities, IDs}, () => this.setInLocalStorage());
    }

    setPickedCity({lat, lon, updatedAt, name}){
        console.log(`setPickedCity called lat:${lat}, lon:${lon}, name:${name}, updatedAt:${updatedAt}`);
        let pickedCityParams = {lat, lon, name};
        this.setState({pickedCityParams});
        this.fetchPickedCity({lat, lon});
    }

    toggleHighchartData(){
        const data = this.state.highchartData === 'daily' ? 'hourly' : 'daily';
        this.setState({highchartData: data}, () => {console.log('Toggle button clicked')});
    }

    addPickedCity(pickedCity){
        this.setState({pickedCity}, console.log(`addPickedCity called`));
    }

    async fetchPickedCity({lat, lon}){
        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`)
            .then((response) => response.json())
            .then((json) => this.addPickedCity(json))
            .catch((err) => console.log(err))
    }

    deleteCity(id){
        let cities = this.state.cities.filter((el) => el.id !== id);
        let IDs = cities.map(el => el.id);
        this.setState({cities, IDs}, () => this.setInLocalStorage());
    }

    getFromLocalStorage(){
        let localStorageObject = localStorage.getItem('weatherApp');
        let {cities, IDs} = localStorageObject ? JSON.parse(localStorageObject) : {cities: [], IDs: []};
        this.setState({cities, IDs}, console.log('getFromLocalStorage setState called'));
    }

    setInLocalStorage(){
        let cities = this.state.cities;
        let IDs = this.state.IDs;
        localStorage.setItem('weatherApp', JSON.stringify({cities, IDs}));
    }


    fetchIDsGroup = async (IDs) => {
        if (IDs) {
            let queryString = `http://api.openweathermap.org/data/2.5/group?id=`;
            let cities = [];
            IDs.forEach(function(item){
                queryString += `${item},`
            });
            queryString.slice(0, -1);
            queryString += `&units=metric&APPID=${API_KEY}`;
            console.log(queryString);
            await fetch(queryString)
                .then((response) => response.json())
                .then((json) => {
                    json.list.forEach(function(item){
                        cities.push(item)
                    })
                })
                .then(() => {
                    this.setState({cities, IDs}, () => this.setInLocalStorage())
                })
                .catch(err => console.log(err))
        }
    };




    fetchCity = async ({name, id}) => {

        let queryString = `http://api.openweathermap.org/data/2.5/weather?`;
        if (name && !id) {queryString += `q=${name}`;}
        if (id && !name) {queryString += `id=${id}`;}
        queryString += `&units=metric&APPID=${API_KEY}`;
        console.log(queryString);
        await fetch(queryString)
            .then((response) => response.json())
            .then((json) => this.addCity(json))
            .catch(err => console.log(err))
    };

    handleSubmit({name, id}){
        this.fetchCity({name, id});
    }

    isInCities = id => _.includes(this.state.cities, id);


    async componentDidMount(){
        await this.getFromLocalStorage();
        await this.fetchIDsGroup(this.state.IDs);
        console.log(this.state.IDs);
    }

    render(){
        return (<AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>)
    }
}

