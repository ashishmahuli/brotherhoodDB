import React from 'react';

class Help extends React.Component {
    // This will render the content of the help button
    // Write your own HTML, and the only requirement is that a message saying "If you need help, text Rebecca or Atharva!" appears
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>Help Under Construction!</h1>
                    <button onClick={this.props.closeHelpPopup}>Close</button>
                </div>
            </div>
        )
    }
}
    
export default Help;
