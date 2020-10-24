import React from 'react';
import './styles/contact.css';
import { thisExpression } from '@babel/types';

class Contact extends React.Component {

    // set states, bind all functions
    // Help: react documentation on the constructor
    constructor(props) {
        super(props);
    }

    // This function is called on start up and calls contact_info_api.py and returns a jsonified list of contact info for that specific bro 
    // (api will access the db and gather the data, this func just calls the api and jsonifies it)
    // The route must include the uniqname name of the brother who's info is being retrieved, which will be passed to Contact as a prop called 'url'
    // Help: react documentation!!
    componentDidMount() {
    }

    // sends an email and or text to signed in brother with selected bro's contact info
    handleClick() {
    }

    // Renders HTML filled with a brother's info. You are responsible for writing the HTML code and filling 
    // in the brother's info in appropriate spots using 'data'
    // Should include a button that, when pressed, calls handleClick and sends contact info to the brother signed in 
    // Help: The HTML should be based off of the visual example we gave you, and should be styled similarly
    //       https://codepen.io/bastianalbers/pen/PWBYvz?editors=1010 top of the JS code gives you an idea of the structure
    render() {
        return (
            <div id="contact-div"> 
                <p>LinkedIn: LinkedIn.com/bloop</p>
                <p>Email: {this.props.data.uniqname}@umich.edu </p>
                <p>Phone Number: (XXX)XXX-XXXX</p>
            </div>
        )
    }
}

export default Contact;
