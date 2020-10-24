import React, { Component } from 'react';

class ProfileCard extends Component {    
    constructor(props){
        super (props);
        this.state = {
            first : {
                image : 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/vijay_deverakonda_13416_27-07-2016_11-17-19.jpg',
                name : 'Juned',
                age : '20',
                college : 'HNGU',
                address: 'Basu'
            },
            second : {
                image : 'data:image/jpeg;base64,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',
                name : 'Vasim',
                age : '21',
                college : 'Aadarsh Vishyalay',
                address : 'Basu'
            }
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header bg-primary text-center">
                                    <h1>Student Detail</h1>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <img src={this.state.first.image} className="img-fluid img-thumbnail"></img>
                                        </div>
                                        <div className="col-md-8">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                NAME : <span className="font-weight-bold">{this.state.first.name}</span>
                                            </li>
                                            <li className="list-group-item">
                                                AGE : {this.state.first.age}
                                            </li>
                                            <li className="list-group-item">
                                                COLLEGE : {this.state.first.college}
                                            </li>
                                            <li className="list-group-item">
                                                ADDRESS : {this.state.first.address}
                                            </li>
                                        </ul>
                                       </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header bg-primary text-center">
                                    <h1>Student Detail</h1>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <img src={this.state.second.image} className="img-fluid img-thumbnail"></img>
                                        </div>
                                        <div className="col-md-8">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                NAME : <span className="font-weight-bold">{this.state.second.name}</span>
                                            </li>
                                            <li className="list-group-item">
                                                AGE : {this.state.second.age}
                                            </li>
                                            <li className="list-group-item">
                                                COLLEGE : {this.state.second.college}
                                            </li>
                                            <li className="list-group-item">
                                                ADDRESS : {this.state.second.address}
                                            </li>
                                        </ul>
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
 
export default ProfileCard;