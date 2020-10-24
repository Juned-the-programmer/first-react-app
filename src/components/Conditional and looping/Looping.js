import React, { Component } from 'react';

class Looping extends Component {
    constructor(props){
        super (props);
        this.state = {
            employee : [
                {
                    sno : 'A123',
                    name : 'juned',
                    age : 20,
                    designation : 'django',
                    College : 'HNGU'
                },
                {
                    sno : 'A234',
                    name : 'Ajaz',
                    age : 22,
                    designation : 'Jquery',
                    College : 'HNGU'
                },
                {
                    sno : 'A345',
                    name : 'Asad',
                    age : 23,
                    designation : 'Competative Programming',
                    College : 'HNGU'
                },
                {
                    sno : 'A456',
                    name : 'Arshad',
                    age : 21,
                    designation : 'HTML and Css',
                    College : 'HNGU'
                },
                {
                    sno : 'A567',
                    name : 'Dipak',
                    age : 21,
                    designation : 'Programming',
                    College : 'HNGU'
                }
            ]
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-dark text-white text-center">
                                    <p className="h4">Looping Display</p>
                                </div>  
                                {   
                                    this.state.employee.map(employe => {
                                        return(
                                            <div key={employe.sno} className="card-body bg-light m-3">
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        Sno : {employe.sno}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Name : {employe.name}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Age : {employe.age}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Designation : {employe.designation}
                                                    </li>
                                                    <li className="list-group-item">
                                                        College : {employe.College}
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    })  
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Looping;