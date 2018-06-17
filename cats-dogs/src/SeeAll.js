import React, { Component } from 'react';
// import axios from 'axios';

import EditNames from './EditNames.js'

class SeeAll extends Component {
    constructor() {
        super();

        this.state = {
            seeTitles: "",
            seeNames: ""
        }
    }

    render() {
        return(
            <div>
                <button>See Names</button>
                <button>Save Dog</button>

                <div>
                    <li></li>
                </div>
                <div>
                    <li></li>
                </div>

                <div>
                    <EditNames />
                </div>
            </div>
        )
    }
}

export default SeeAll;