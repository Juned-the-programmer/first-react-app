import React, { Component } from 'react';

class ConditionalCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coding: false,
            eating: false,
            sleeping: false
        }
    }

    updatechange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name] : event.target.checked
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-warning text-white text-center">
                                    Hobby Selector
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <form action="">
                                                <div class="form-check">
                                                    <input 
                                                    name="eating"
                                                    onChange={this.updatechange}
                                                    class="form-check-input" type="checkbox" value="eating" id="defaultCheck1"/>
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Eating
                                                        </label>
                                                </div>
                                                <div class="form-check">
                                                    <input 
                                                    name = "coding"
                                                    onChange={this.updatechange}
                                                    class="form-check-input" type="checkbox" value="coding" id="defaultCheck2"/>
                                                        <label class="form-check-label" for="defaultCheck2">
                                                            Coding
                                                        </label>
                                                </div>
                                                <div class="form-check">
                                                    <input 
                                                    name = "sleeping"
                                                    onChange={this.updatechange}
                                                    class="form-check-input" type="checkbox" value="sleeping" id="defaultCheck2"/>
                                                        <label class="form-check-label" for="defaultCheck2">
                                                            Sleeping
                                                        </label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-9">
                                            {
                                                this.state.coding ?
                                                <React.Fragment>
                                                    <div className="card mt-3">
                                                        <div className="card-body bg-dark text-white text-center">
                                                            <h1>Eating</h1>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                                :null
                                            }
                                             {
                                                this.state.coding ? 
                                                <React.Fragment>
                                                    <div className="card mt-3">
                                                        <div className="card-body bg-dark text-white text-center">
                                                            <h1>Coding</h1>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                                :null
                                            }
                                             {
                                                this.state.sleeping ? 
                                                <React.Fragment>
                                                    <div className="card mt-3">
                                                        <div className="card-body bg-dark text-white text-center">
                                                            <h1>Sleeping</h1>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                                :null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ConditionalCheck;