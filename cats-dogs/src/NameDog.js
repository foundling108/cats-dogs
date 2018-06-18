import React, { Component } from 'react';
import axios from 'axios';
import DisplayName from './DisplayName.js';

class NameDog extends Component {
    constructor() {
        super();


        // this.state = {

        //     nameListed: ""
        // }

        this.nameButton = this.nameButton.bind(this);
    }

    nameButton(text)
    {
        axios.get(`/api/getname`).then(res =>
        {
        this.props.handleChange({
            dogname: res.data[Math.floor(Math.random() * 10)].name
            
        });
    });
    }

    render() {
        return(
            <div>
                
                <h3>Name:</h3>
                <DisplayName q = {this.props.dogname}/>
                <button onClick = {this.nameButton}>Name This Dog</button>

                
            </div>
        )
    }
}

export default NameDog;