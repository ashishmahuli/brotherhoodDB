import React from 'react';
import MaterialTable from 'material-table';
import Popup from './popup';
import './styles/table.css';
import { logicalExpression } from '@babel/types';

class Table extends React.Component {

    // set states, bind all functions
    // Help: react documentation on the constructor
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            popUpData: {}
        };    
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }    
    // This function is called immediately upon startup
    // Makes an api call to the appropriate URL and returns a jsonified list of all the data returned by the api
    // Help: you'll need to use this.setState and always include error handling, react documentation will be helpful here
    componentDidMount() {
    }

    // https://codepen.io/bastianalbers/pen/PWBYvz?editors=1010 check out this link to better understand how this will be used
    showPopup(rowData) {
        this.setState({popUpData: rowData});
        this.togglePopup();
    }

    // This renders the HTML code that will be inserted into app/database/templates/database.html
    // The database will be a filterable table that allows general search and filterable search by column
    // The first column should have a button and when clicked, a window pops up with more info about that brother (call Popup from popup.jsx)
    // The table should only show 10 brothers at a time, and you should be able to go to a next page to see more brothers 
    // Help: https://material-table.com/#/docs/features/component-overriding scroll down to the "Action Overriding Example" and view the source code.
    //       https://material-table.com/#/docs/features/filtering scroll to "Basic Filtering Preview" -- the table should also be filterable by column
    //       https://material-table.com/#/docs/all-props this is a list of all props, which should help with the scrolling
    //       It's important that the uniqname of the brother being clicked on is passed as a prop to the call to Popup! Call the prop 'url'
    //       Other props might be needed for MaterialTable! Use what you need, this will just help get you started.
    render() {
        let dummy_data = [{
                            "name": "Atharva Talpade",
                            "graduation": "2021",
                            "majors": "Computer Science",
                            "minors": "-",
                            "PC": "Pi",
                            "uniqname": "atalpade"
                        },
                        {
                            "name": "Rebecca Andrews",
                            "graduation": "2020",
                            "majors": "International Studies, Computer Science",
                            "minors": "Spanish",
                            "PC": "Omicron",
                            "uniqname": "rband"
                        },
                        {
                            "name": "Sinan Karabocuoglu",
                            "graduation": "2022",
                            "majors": "Computer Science",
                            "minors": "Stats",
                            "PC": "Rho",
                            "uniqname": "skara"
                        },
                        {
                            "name": "Apoorv Kwatra",
                            "graduation": "2021",
                            "majors": "Computer Science",
                            "minors": "-",
                            "PC": "Rho",
                            "uniqname": "kwatra"
                        },
                        {
                            "name": "Thomas Huber",
                            "graduation": "2022",
                            "majors": "Computer Science",
                            "minors": "-",
                            "PC": "Sigma",
                            "uniqname": "tomhuber"
                        },
                        {
                            "name": "Pranav Tadikonda",
                            "graduation": "2020",
                            "majors": "Computer Science",
                            "minors": "Math",
                            "PC": "Zi",
                            "uniqname": "pranavt"
                        },
                        {
                            "name": "Jake Schwartz",
                            "graduation": "2020",
                            "majors": "Biomedical Engineering",
                            "minors": "-",
                            "PC": "Nu",
                            "uniqname": "jaschwa"
                        },
                        {
                            "name": "Ryan Wong",
                            "graduation": "2022",
                            "majors": "Computer Science",
                            "minors": "-",
                            "PC": "Sigma",
                            "uniqname": "rhcw"
                        },
                        {
                            "name": "Isha Lele",
                            "graduation": "2022",
                            "majors": "Business, SI",
                            "minors": "-",
                            "PC": "Rho",
                            "uniqname": "ishalele"
                        },
                        {
                            "name": "Simona Zhu",
                            "graduation": "2022",
                            "majors": "Business, Biology",
                            "minors": "-",
                            "PC": "Rho",
                            "uniqname": "simonaaz"
                        }];
        return (
            <div> 
                {this.state.showPopup ? 
                        <div id="overlay-back" onClick={this.togglePopup.bind(this)}></div> 
                        : null }
                
                <div class='table-main-table'>
                    <MaterialTable
                    title = "AKPsi Brotherhood Database"
                
                    // column names: name, year, major(s), minor(s), PC 
                    // uniqname is included in the json, but this will be used only to specify the brother rendered in the click 
                    columns = {Object.keys(dummy_data[0]).map(column => { return {title: column, field: column}; })}
                
                    // The table will be filled with the json data retrieved from the componentDidMount 
                    // use: {this.state.results.map(result => (TODO) )} to loop through the data retrieved and render it all
                    data = {dummy_data.sort((a,b) => {return a.name.localeCompare(b.name);})
                                        .map(bro => {return {name: bro.name, graduation: bro.graduation, majors: bro.majors, 
                                                            minors: bro.minors, PC: bro.PC, uniqname:bro.uniqname};})}
                
                    options = {{
                        
                        actionsColumnIndex: -1, // positions the popup "button" on the far right of the row
                        //header: false,
                        rowStyle: {
                            backgroundColor: '#e3e3e3',
                        },
                        paginationType: "stepped",
                        pageSize: 5,
                        pageSizeOptions: false,
                        searchFieldStyle: { 
                            border: "1px solid lightGrey",
                            backgroundColor: "white",
                            borderRadius: "5px",
                            width: "250px",
                        },
                    }}
                
                    // Make sure to include "icon" (set it uqual to 'crop_16_9')
                    // Help: Look at the first link in the render RME
                    actions = {[
                        {
                            onClick: (event, rowData) => this.showPopup(rowData)
                        }
                    ]}
                    
                    // Help: See link in RME above
                    // For an example of how to make use of showPopup, see line 32 of JS code at https://codepen.io/bastianalbers/pen/PWBYvz?editors=1010
                    components = {{
                        Action: props => (
                            <div style={{'margin-right': '30px'}}>
                                <button 
                                    tooltip= 'View Profile'
                                    id="view-profile-button" 
                                    onClick={(event) => props.action.onClick(event, props.data)}>
                                    View
                                </button>
                            </div>
                        ),
                    }}

                    />
                </div>
                <div class='table-popup-container'>
                    {this.state.showPopup ? 
                        <Popup id='5c3174e4803a700009b14ea8' data={this.state.popUpData} onClose={this.togglePopup.bind(this)}/> : null}
                </div>
            </div>
        )
    }
}

export default Table;
