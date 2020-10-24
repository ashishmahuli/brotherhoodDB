import React from 'react';
import ReactDOM from 'react-dom';
//import Table from './table';
import Toolbar from './toolbar'
import SignIn from './signin'

// TODO: render a Header and Home component only
// put table and toolbar inside of home along with sign in / sign up

//        see temp/Home.js

//ReactDOM.render(<Table/>, document.getElementById("table"));
ReactDOM.render(<SignIn/>, document.getElementById("signin"));
ReactDOM.render(<Toolbar/>, document.getElementById("toolbar"));
