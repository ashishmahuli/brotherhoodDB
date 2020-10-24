import React from 'react';
import Contact from './get_contact';
import './styles/popup.css';

class Popup extends React.Component {
    // set states, bind all functions
    // Help: react documentation on the constructor
    constructor(props) {
        super(props);
        this.state = {
            showingContact: false,
        }; 
    }

    // This function is called on start up and makes a call to brother_api.py and returns a jsonified list of data for that specific bro 
    // (api will access the db and gather the data, this func just calls the api and jsonifies it)
    // The api request will need to include the uniqname of the brother whose information is being requested, and the uniqname will be passed 
    // in as a prop called 'url'
    // Help: react documentation!!
    componentDidMount() {
        fetch(window.apiHost + '/api/brother/scores').then(response => this.setState({brother : response}))
        console.log(this.state.brother)
    }

    // https://codepen.io/bastianalbers/pen/PWBYvz?editors=1010 this should help you understand how this function should be used
    showContact() {
        this.setState({
            showingContact: !this.state.showingContact,
        });
    }

    // Renders HTML filled with a brother's info. You are responsible for writing the HTML code and filling 
    // in the brother's info in appropriate spots using 'data'
    // There should be a button that, when pressed, shows a popup and calls Contact from get_contact.jsx 
    // Make sure to pass the uniqname of the brother whose info is being displayed as a prop to Contact; call the pop "url"
    // Help: The HTML should be based off of the visual example we gave you, and should be styled similarly
    //       https://codepen.io/bastianalbers/pen/PWBYvz?editors=1010 top of the JS code gives you an idea of the structure
    render() {
        return (
            //<Contact />
           <>
            <div id="popup-container">
                <div id="bro-image">
                    <img id="prof-pic" src="https://media.licdn.com/dms/image/C4E03AQEiWjag2sL1xg/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=MUUMovikpPHWPM9z5LuSnewXuZvWrtr6Cd58t5jibeY"></img>
                </div>
                <div id="profile-info">
                    <p id="name-title"> {this.props.data.name} </p>
                    <p>Class of {this.props.data.graduation}</p>
                    <p>Majors: {this.props.data.majors}</p>
                    <p>Minors: {this.props.data.minors}</p>
                    <p>PC: {this.props.data.PC}</p>
                    <p>Uniqename: {this.props.data.uniqname}</p>
                    <i id="x" class="fa fa-times" onClick={this.props.onClose}></i>
                </div>
                <div style={{'margin-left': "175px"}}>
                    <button id="get-contact-button" onClick={this.showContact.bind(this)}>
                        Get Contact Info&ensp;
                        {this.state.showingContact ? <i class="fa fa-angle-up" aria-hidden="true"></i>
                                                   : <i class="fa fa-angle-down" aria-hidden="true"></i>}
                    </button>

                </div>
                {this.state.showingContact ? 
                    <Contact data={this.props.data}/> : null}
            </div>
           </>
        )
    }
}
// 

export default Popup;
