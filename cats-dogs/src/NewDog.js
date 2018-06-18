import React, { Component } from 'react';
//import axios from 'axios';

class NewDog extends Component {
    constructor() {
        super();

        this.state = {
            resetName: "",
            newdog: ""
        }
    }

    render() {
        return(
            <div>
                <button>Reset Names</button>
                <button>Get New Dogs</button>
            </div>
        )
    }
}

export default NewDog;