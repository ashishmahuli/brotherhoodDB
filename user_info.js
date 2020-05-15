import React from 'react';
import './styles/popup.css'

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "-",
            uniqname: "-",
            grad_year: "-",
            majors: "-",
            minors: "-",
            pledge_class: "-"
        }; 
    }
    // This will render the content of the user info button
    // Write your own HTML, and the only requirement is that a message saying "Under construction!" appears
    handleSubmit() {

        //write a post call that uses the user_api.py
        this.setState({
            name: document.getElementById("user_name").value,
            uniqname: document.getElementById("user_uniqname").value,
            grad_year: document.getElementById("user_grad").value,
            majors: document.getElementById("user_majors").value,
            minors: document.getElementById("user_minors").value,
            pledge_class: document.getElementById("user_pledge").value,
        })
        // make post request ----- NOT CHECKED vvvvv
        alert('fetching from: ' + window.location.origin + '/api/user/scores');
        fetch(window.location.origin + '/api/user/scores', {
              credentials: 'include',
              method: 'post',
              body: JSON.stringify({
                n : this.state.name,
                u : this.state.uniqname,
                g : this.state.grad_year,
                ma : this.state.majors,
                mi : this.state.minors,
                p : this.state.pledge_class,
              }),
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(function (error) {
            console.log('Request failed', error);
          });
    }

    render() {
        return (
            //<Contact />
           <>
            <div id="popup-container">
                <div id="bro-image">
                    <i class="fa fa-user fa-5x"></i> insert a picture
                </div>
                <div id="profile-info">
                    <p>Enter your info:</p>
                    Full Name:          <input type="text" id="user_name"/><br/>
                    Uniqname:           <input type="text" id="user_uniqname"/><br/>
                    Graduation Year:    <input type="text" id="user_grad"/><br/>
                    Majors:             <input type="text" id="user_majors"/><br/>
                    Minors:             <input type="text" id="user_minors"/><br/>
                    Pledge Class:       <input type="text" id="user_pledge"/><br/>
                                        <input type="button" value="Submit" onClick={this.handleSubmit.bind(this)}/>
                    
                    <p>-- TESTING --</p>
                    <p>name: {this.state.name}</p>
                    <p>uniqname: {this.state.uniqname}</p>
                    <p>grad_year: {this.state.grad_year}</p>
                    <p>majors: {this.state.majors}</p>
                    <p>minors: {this.state.minors}</p>
                    <p>pledge_class: {this.state.pledge_class}</p>
                </div>
            </div>
           </>
        )
    }
    
}
export default User;

    
