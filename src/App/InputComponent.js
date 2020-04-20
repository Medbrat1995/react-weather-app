import React from 'react';
import styled from 'styled-components';
import { AppContext } from './AppProvider';
import {textColor, backgroundColor} from '../Shared/Styles'

const InputField = styled.input`
    color: ${textColor};
    background-color: ${backgroundColor};
    border: 1px solid ${textColor};
    margin-top: 15px;
`;

const SubmitButton = styled.button`
    color: ${textColor};
    background-color: ${backgroundColor};
    border: 1px solid ${textColor};
    margin-top: 15px;
    cursor: pointer;
`;

export default class InputComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

    handleChange(event){
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value},
            console.log(JSON.stringify(this.state)));
    }

    render(){
        return(
            <div>
                This is an InputComponent
                <InputField type='text' name='idInput' onChange={(e) => this.handleChange(e)} />
                <InputField type='text' name='nameInput' onChange={(e) => this.handleChange(e)} />
                <SubmitButton> Submit </SubmitButton>
            </div>
        )
    }
}