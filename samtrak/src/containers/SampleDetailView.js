import React from 'react';
import axios from 'axios';


import { Card } from 'antd';



class SampleDetail extends React.Component {
    
    state = {
        sample: {}
    }

    componentDidMount() {
        const sampleID = this.props.match.params.sampleID;
        axios.get(`http://127.0.0.1:8000/api/${sampleID}`)
        .then(res => {
            this.setState({
                sample: res.data
            });
            console.log(res.data);
        }

        )
    }
    render() {
        return (
            <Card>
                <p>{this.state.sample.serialNo}</p>
                <p> {this.state.sample.cylinderSize} </p>

            </Card>
        )
    }

}

export default SampleDetail;