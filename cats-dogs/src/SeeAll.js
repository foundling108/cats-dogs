import React, { Component } from 'react';
import axios from 'axios';

import EditNames from './EditNames.js'

class SeeAll extends Component {
    constructor() {
        super();

        this.state = {
            seeNames: "",
            saveToList: ""
        }

        this.listnames = this.listnames.bind(this);
    }

    listnames() {
        
         
            axios.get(`/api/seeNames`).then(res =>
            {
           //console.log(res.data);
            this.setState({ seeNames: res.data });
            });
        
    }

    render() {

        // let listOfNames = this.state.seeNames.map((e,i) =>
        // {
        //     return (
        //         <div key={i+i} className = "SeeNameList">

        //             { e.id + " " + e.names}

        //         </div>

        //     );
        // });
        return(
            <div>
                               
                <button onClick = {this.listnames}>See Names</button>
                <br/>
                <div>
                 {/* {listOfNames} */}
                </div>




                <div>
                    <EditNames />
                </div>
            </div>
        )
    }
}

export default SeeAll;