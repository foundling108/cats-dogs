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
                    <img src="" alt=""/>
                    <p>text</p>
                    <button>Rename</button>
                    <button>Dogleted</button>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>text</p>
                    <button>Rename</button>
                    <button>Dogleted</button>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>text</p>
                    <button>Rename</button>
                    <button>Dogleted</button>
                </div>
            </div>
        )
    }
}

export default DogList;