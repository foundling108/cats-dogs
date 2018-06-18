import React, { Component } from 'react';

class DogList extends Component {
    constructor() {
        super();


        this.state = {
            dogimg: [],
            dogname: "",
            rename: '',
            deletedog: ''
        }
    }

    render() {
        return(
            <div className = 'DogList'>
                <div>
                    <img className = "dogimg" src="" alt=""/>
                    <p className = "SeeAllList">text</p>
                    <button>Rename</button>
                    <button>Remove</button>
                </div>
                <div>
                    <img className = "dogimg" src="" alt=""/>
                    <p className = "SeeAllList">text</p>
                    <button>Rename</button>
                    <button>Remove</button>
                </div>
                <div>
                    <img className = "dogimg" src="" alt=""/>
                    <p className = "SeeAllList">text</p>
                    <button>Rename</button>
                    <button>Remove</button>
                </div>
            </div>
        )
    }
}

export default DogList;