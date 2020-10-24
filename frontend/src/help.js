import React from 'react';
// TODO: Link a css file (put it in ./styles/help.css)
// Make it look better
import './styles/help.css';

class Help extends React.Component {

    // set states, bind all functions
    // Help: react documentation on the constructor
    constructor(props) {
        super(props);
        // TODO: create and initialize a state
            this.showInfo = this.showInfo.bind(this);
            this.state = {
                showingPhoneNumber: false,
            };
        //
    }

    showInfo() {
        this.setState({
            showingPhoneNumber: !this.state.showingPhoneNumber,
        });
    }

    // TODO: Create a function that the button calls that changes the state to whatever it isn't
    // (like popup.js line 26)

    // This will render the content of the help button
    // Write your own HTML, and the only requirement is that a message saying "If you need help, text Rebecca or Atharva!" appears
    render() {
        return (
            <div id='help-container'>
                <div id='help-inner'>
                    <h1>If you need help, text Rebecca or Atharva</h1>
                    <button id ="get-contact-button" onClick={this.props.closeHelpPopup}>Close</button>
                </div>
                {/* TODO: Create another div with a button that changes the current state of
                    this component and make it so that the changing state shows some text
                */}
                <div className='help-inner'>
                    <button id = "get-contact-button" onClick={this.showInfo}>Show Phone Number</button>
                </div>

                {this.state.showingPhoneNumber ?
                    <p>3025885258</p> : null}


            </div>
        )
    }
}

export default Help;
