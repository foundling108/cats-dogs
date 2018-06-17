import React, { Component } from 'react';
// import axios from 'axios';

class EditNames extends Component {
    constructor() {
        super();

        this.state = {
            newTitles: "",
            newNames: ""
        }
    }



    render() {
        return(
            <div>
                <button>Edit Names</button>
            </div>
        )
    }
}

export default EditNames;