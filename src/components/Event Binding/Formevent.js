import React, { Component } from 'react';

class FormEvent extends Component {
    constructor(props){
        super (props);
        this.state = {
            Student : {
                Name : 'Juned',
                Email : 'davdajuned7698@gmail.com',
                Password : 'Juned'
            }
        }
    }

    changedata = () => {
        this.setState({
            Student: { 
                Name : 'Vasim',
                Email : 'davdavasim@gmail.com',
                Password : 'vasim'
            }
        })
    }

    ChangeData = (Name , Email , Password) => {
        this.setState({
            Student: {
                Name : Name,
                Email: Email,
                Password: Password
            }
        })
    }

    render() { 
        let { Name  , Email , Password } = this.state.Student
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <form action="">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input type="text" name="" id="name" className="form-control" value={Name}/>
                                </div>
                                <div className="form-group">
                                    <label>Your Email</label>
                                    <input type="text" name="" id="email" className="form-control" value={Email}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Your Password</label>
                                    <input type="text" name="" id="password" className="form-control" value={Password}/>
                                </div>
                                <div className="from-group">
                                    <input type="button" className="btn btn-warning" value="Save" onClick={this.ChangeData.bind(this,'Aslam','adavda143@gmail.com','Aslam')}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}

export default FormEvent;