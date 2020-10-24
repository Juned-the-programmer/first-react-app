import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentTime : new Date().toLocaleString()
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                currentTime : new Date().toLocaleString()
            })
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-danger">
                                    <p className="h4">Digital Watch</p>
                                </div>
                                <div className="card-body">
                                    <p className="h3">{this.state.currentTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default LifeCycle;