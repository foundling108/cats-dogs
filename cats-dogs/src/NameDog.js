import React, { Component } from 'react';
import axios from 'axios';
import DisplayName from './DisplayName.js';

class NameDog extends Component {
    constructor() {
        super();


        this.state = {
            dogName: "",
            nameListed: ""
        }

        this.nameButton = this.nameButton.bind(this);
    }

    nameButton(text)
    {
        axios.get(`/api/getname`).then(res =>
        {
        this.setState({
            nameListed: res.data[Math.floor(Math.random() * 9)].name
            
        });
    });
    }

    render() {
        return(
            <div>
                <button onClick = {this.nameButton}>Name This Dog</button>
                <h3>Name:</h3>
                <DisplayName q = {this.state.nameListed}/>
                
            </div>
        )
    }
}

export default NameDog;