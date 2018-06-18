import React, { Component } from 'react';
import axios from 'axios';

import GetDog from './GetDog';
import NameDog from './NameDog';

class CreateDog extends Component {
    constructor() {
        super();
        
        this.state = {
            dogimg: "",
            dogname: ""
        }

    }

    updatedog(changes) {
        this.setState(changes)
    }

    savedog = () => {
        let newdog = {dogimg: this.state.dogimg, dogname:this.state.dogname};
        axios.post('/api/dogs', newdog)
    }

    


render() {
    return(
        <div>
            <GetDog handleChange={(changes) => this.updatedog(changes)} dogimg={this.state.dogimg} />
            <NameDog handleChange={(changes) => this.updatedog(changes)} dogname={this.state.dogname} />
            <button onClick={this.savedog}>Save Dog</button>
        </div>
    )
}
}

export default CreateDog;