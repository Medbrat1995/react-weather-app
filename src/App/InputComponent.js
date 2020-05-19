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

export const SubmitButton = styled.button`
    color: ${textColor};
    background-color: ${backgroundColor};
    border: 1px solid ${textColor};
    margin-top: 15px;
    cursor: pointer;
`;

const InputComponentStyled = styled.div`
    margin-top: 10px;
`;

export default class InputComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    handleChange(event){
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return(
            <AppContext.Consumer>
            {({handleSubmit}) => (
                <InputComponentStyled>
                    <InputField type='text' name='id' placeholder='id' onChange={(e) => this.handleChange(e)} />
                    <InputField type='text' name='name' placeholder='city' onChange={(e) => this.handleChange(e)} />
                    <p><SubmitButton onClick={() => handleSubmit(this.state)}> Submit </SubmitButton></p>
                </InputComponentStyled>
        )}

            </AppContext.Consumer>
        )
    }
}