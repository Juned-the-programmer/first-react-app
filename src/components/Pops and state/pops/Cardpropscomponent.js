import React, { Component } from 'react';

class Cardpropscomponent extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="card">
                    <img src={this.props.cardimg} className="img-fluid"></img>
                    <div className="card-body">
                        <h4>{this.props.Countries}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae, tempore nisi necessitatibus reiciendis animi sapiente aspernatur neque sed sint quidem enim at sequi assumenda doloribus. Omnis modi ipsam doloremque?</p>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Cardpropscomponent;