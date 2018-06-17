import React, { Component } from 'react';
// import axios from 'axios';

class NameDog extends Component {
    constructor() {
        super();


        this.state = {
            dogName: ""
        }
    }

    render() {
        return(
            <div>
                <button>Name This Dog</button>

                <div>
                    <li></li>
                </div>
            </div>
        )
    }
}

export default NameDog;