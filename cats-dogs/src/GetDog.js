import React, { Component } from 'react';
import axios from 'axios';

class GetDog extends Component {
    constructor () {
        super();


        this.state = {
            fetch: []
        }

        
    }

    fetchRandomDog() {
        axios.post(`/api/getdog`).then(res =>
            {
                this.setState({ fetch: res.data });
            });
    }

    render() {
        return(
            <div>
                <div>
                    <img src="" alt=""/>
                </div>
                <button>Get Dog</button>
            </div>
        )
    }
}

export default GetDog;