import React from 'react';
import Image from './images/dog_party.jpg'
function Header(props)
{
    return (
        <div>
            <section className="Title_parent">
                <img src={Image} alt="DogParty"/>

                <h1 className="Title">Get Dogs</h1>
                <div className="fixTitle"></div>
        </section>
        </div>
    );
}

export default Header;