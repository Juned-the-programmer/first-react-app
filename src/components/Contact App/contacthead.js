import React, { Component } from 'react';
import ContactCard from './contactcard';
import ContactList from './contactlist';

class ContactHead extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            UserData : {}    
        }
    }

    receivedata = (data) => {
        this.setState({
            UserData : data
        })
    }

    render() { 
        return (  
            <React.Fragment>
                <pre>{JSON.stringify(this.state.UserData)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <p className="h4">Contact App</p>
                        <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis nihil possimus temporibus minus consequatur iste repellat, autem aliquid vitae excepturi aspernatur magnam exercitationem, corrupti dolores asperiores? Unde animi iusto amet.</p>
                        <div className="col-md-8">
                            <ContactList senddata={this.receivedata}></ContactList>
                        </div>
                        <div className="col-md-4">
                            <ContactCard userdata={this.state.UserData}></ContactCard>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ContactHead;