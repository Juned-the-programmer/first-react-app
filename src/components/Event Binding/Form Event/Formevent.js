import React, { Component } from 'react';

class FormEventBind extends Component {
    constructor(props){
        super (props);
        this.state = {
            user : {
                username : '',
                email : '',
                password : '',
                designation : ''
            }
        };
    }

    updateInput = (event) => {
        if(event.target.type === 'checkbox'){
            this.setState({
                user : {
                    ...this.state.user,
                    [event.target.name] : event.target.checked
                }
            })
        }
        else{
            this.setState({
                user : {
                    ...this.state.user,
                    [event.target.name] : event.target.value
                }
            })
        }
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.setState({
            user : {
                username: '',
                email : '',
                password: '',
                designation: ''
            }
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <pre>{JSON.stringify(this.state.user)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <p className="h4">Registration Form</p>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.formSubmit}>
                                        <div className="form-group">
                                            <input type="text" 
                                            onChange={this.updateInput}
                                            value={this.state.user.username}
                                            className="form-control" name="username" placeholder="Username"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" 
                                            onChange={this.updateInput}
                                            value={this.state.user.email}
                                            className="form-control" name="email" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" 
                                            onChange={this.updateInput}
                                            value={this.state.user.password}
                                            className="form-control" name="password" placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                            <select name="designation" id="" 
                                            onChange={this.updateInput}
                                            value={this.state.user.designation}
                                            className="form-control">
                                                <option value="">Select Designation</option>
                                                <option value="Software Engineer">Software Engineer</option>
                                                <option value="Jr. Software Engineer">Jr. Software Engineer</option>
                                                <option value="Team Lead">Team Lead</option>
                                                <option value="Director">Director</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="terms" id="" 
                                            onChange={this.updateInput}
                                            className="form-check-input"/>
                                            <label htmlFor="" className="for-check-lable">Accept Terms & Condition</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" name="submit" value="Register" id="register" className="btn btn-success"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5"></div>
            </React.Fragment>
         );
    }
}
 
export default FormEventBind;