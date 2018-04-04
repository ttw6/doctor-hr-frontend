import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
//import TextFieldExample from './TextFieldExample.js'
import TextField from 'material-ui/TextField';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';

var styles = {
    "dataStyle": {
        "marginTop": "20px",
        "marginBottom": "20px",
        "color": "blue",
    }
}

class FetchData extends React.Component {
    constructor() {
        super();
        this.state = {
            "nameTextField": "",  //contents in text box
            "HRdata": ["Nothing Yet"],
            "HRtime": []
        };
    }

    onNameTextFieldChange = (event) => {
        // Update the nameTextField state whenever the text field is changed or perturbed in any way:
        this.setState({"nameTextField": event.target.value});
    }

    onButtonClick = (event) => {
        console.log(this.state.nameTextField); // log the current nameTextField content
    }

    getData = () => {
        var user_email = this.state.nameTextField
        axios.get("http://vcm-3574.vm.duke.edu:5000/api/heart_rate/"+user_email).then( (response) => {

            console.log(response);
            //console.log(response.status);
            this.setState({"HRdata": response.data.heart_rate, "HRtime":response.data.heart_rate_times});
        })
    }

    render() {
        return (
            <div>
                <TextField onChange={this.onNameTextFieldChange}/>
                <Button variant="raised" onClick={this.getData}>
                    Get Data
                </Button>

              <div style={styles.dataStyle}>
                {JSON.stringify(this.state.HRdata)}
              </div>

              <div style={styles.dataStyle}>
                {JSON.stringify(this.state.HRtime)}
              </div>

            </div>
        )
    }
}

export default FetchData;