import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';

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
            "data": ["Nothing yet"],
        };
    }

    getData = () => {
        axios.get("http://http://vcm-3574.vm.duke.edu:5000/api/heart_rate/average/suyash@suyashkumar.com").then( (response) => {
            console.log(response);
            console.log(response.status);
            this.setState({"data": response.data});
        })
    }

    render() {
        return (
            <div>
                <Button variant="raised" onClick={this.getData}>
                    Get Data
                </Button>

                <div style={styles.dataStyle}>
                    {this.state.data[0]}
                </div>
            </div>
        )
    }
}

export default FetchData;