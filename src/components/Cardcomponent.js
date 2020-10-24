import React from 'react';

class Cardcomponent extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="card">
                    <img src={this.props.cardImg} className="img-fluid" alt=""/>
                        <div className="card-body">
                            <h4>{this.props.country}</h4>
                            <p>Lorem isk adcno adcljhowe aldchwe lsdc0w8e adcivweh oacihh9we8 cowiehf8ew</p>
                        </div>
                </div>
            </React.Fragment>
        )
    };
}

export default Cardcomponent;