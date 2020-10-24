import React from 'react';
import User from './user_info';
import Help from './help';
import './styles/toolbar.css';


const toolbarStyle = {
    display: 'flex',
    width: '100%',
    backgroundColor: '#121964',
    padding: '6px 8px'
};

class Toolbar extends React.Component {
    // set states, bind all functions
    // Help: react documentation on the constructor
    constructor(props) {
        super(props)
        this.display = props.display
        this.width = props.width
        this.backgroundColor = props.backgroundColor
        this.padding = props.padding
        this.handleHomeClick = this.handleHomeClick.bind(this)
        this.showUserPopup = this.showUserPopup.bind(this)
        this.showInfoPopup = this.showInfoPopup.bind(this) 
        this.state = {
            showHelpPopup: false,
            showUserPopup: false
        };
    }
    toggleUserPopup() {
        this.setState({
          showUserPopup: !this.state.showUserPopup,
          showHelpPopup: false
        });
    }
    toggleHelpPopup() {
        this.setState({
          showHelpPopup: !this.state.showHelpPopup,
          showUserPopup: false
        });
    }

    // Redirects the user to the homepage upon clicking the home button
    handleHomeClick() {
        return(
            <div>
                <a href="https://akpsi-phi.com"><button style={{'border':'transparent','background-color': 'transparent'}}>
                    <i class="fa fa-home fa-4x" style={{'color':'white'}}></i> 
                    <div><font color="white">Home</font></div>
                </button></a>
            </div>
        )
    }

    // For help with this function, check out https://codepen.io/bastianalbers/pen/PWBYvz?editors=1010
    showUserPopup() {
        return(
            <div>
                <button onClick={this.toggleUserPopup.bind(this)} style={{'border':'transparent','background-color': 'transparent'}}>
                    <i class="fa fa-user fa-4x" style={{'color':'white'}}></i> 
                    <div><font color="white">Profile</font></div>
                </button>
            </div>
        )
    }

    // For help with this function, check out https://codepen.io/bastianalbers/pen/PWBYvz?editors=1010
    showInfoPopup() {
        return(
            <div>
                <button onClick={this.toggleHelpPopup.bind(this)} style={{'border':'transparent','background-color': 'transparent'}}>
                    <i class="fa fa-question-circle-o fa-4x" style={{'color':'white'}}></i> 
                    <div><font color="white">Help</font></div>
                </button>
            </div>
        )
    }

    // In the top right corner of the page, there will be a tool bar with three buttons: return home, user info, and help
    // This render template must include the HTML layout and functionality for the toolbar itself, but does not need to make 
    // sure it is placed in the top right corner (this happens in the database.html file when the 'toolbar' id-div is called)
    // Home button: When clicked, the user shpould be re-routed to the AKPsi home page (will need handleHomeClick)
    // User info button: When clicked, a popup should appear (call User from user_info.jsx) (will need showUserPopup)
    // Help button: When clicked, a popup should appear (call Help from help.jsx) (will need showInfoPopup)

    render() {
        return (
            <div>
                {this.state.showHelpPopup ? 
                    <div id="overlay-back" onClick={this.toggleHelpPopup.bind(this)}></div> 
                    : null }
                {this.state.showUserPopup ? 
                    <div id="overlay-back" onClick={this.toggleUserPopup.bind(this)}></div> 
                    : null }

                <div style={toolbarStyle}>
                    <div style={{ flex: 1 }}></div>
                    {this.showInfoPopup()}
                    {this.handleHomeClick()}
                    {this.showUserPopup()}
                </div>
                <div id = 'toolbar-popup-container'>
                    {this.state.showHelpPopup ? <Help closeHelpPopup={this.toggleHelpPopup.bind(this)}/>: null}
                    {this.state.showUserPopup ? <User closeUserPopup={this.toggleUserPopup.bind(this)}/>: null}
                </div>
                
            </div>  
            
        )
    }
}

export default Toolbar;
