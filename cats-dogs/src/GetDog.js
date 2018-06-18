import React, { Component } from 'react';
import axios from 'axios';

class GetDog extends Component {
    constructor () {
        super();


        // this.state = {
        //     fetch: {}
        // }

        this.fetchRandomDog = this.fetchRandomDog.bind(this);
    }

    fetchRandomDog() {
        axios.get(`/api/getdog`).then(res =>
            {
                this.props.handleChange({ dogimg: res.data.message });
            });
    }

    render() {
        return(
            <div>
                <div>
                    <img className="dogimg" src={this.props.dogimg} alt="dog"/>
                </div>
                <button onClick={this.fetchRandomDog}>Get Dog</button>
            </div>
        )
    }
}

export default GetDog;