import React, { Component } from 'react';
import axios from 'axios';
import DisplayName from './DisplayName.js';

class DogList extends Component {
    constructor() {
        super();


        this.state = {
            dogs: []
        }
       
        this.nameButton = this.nameButton.bind(this);
    }

    nameButton(id)
    {
        axios.get(`/api/getname`).then(res =>
        {
        axios.put(`/api/dogs/${id}`, {
            dogname: res.data[Math.floor(Math.random() * 10)].name
        }).then( response => {
            this.setState({dogs: response.data})
        });
    });
    }

    componentDidMount() {
        axios.get('/api/dogs').then( res => {
            this.setState({dogs: res.data})
        })
    }

    deletedog(id)
    {
        axios.delete(`/api/dogs/${id}`).then(res =>
        {
            this.setState({ dogs: res.data });
        });
    }

    render() {
        return(
            <div className = 'DogList'>
                {/* {this.state.dogs.map(dog => {
                    return (
                        <ReName dog={dog} />
                    )
                })} */}

                {this.state.dogs.map(dog => {
                    console.log(2222222222, dog)
                    return (
                        <div>
                            <img className = "dogimg" src={dog.dogimg} alt=""/>
                            <DisplayName q = {dog.dogname} />
                            <button onClick = {() => this.nameButton(dog.id)}>Rename</button>
                            <button onClick={() => this.deletedog(dog.id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DogList;