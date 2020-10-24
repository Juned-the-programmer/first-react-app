import React from 'react';
import card1 from '../assets/img/card_1.jpg'

class Landingpage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="landingpage">
                    <div className="wrapper">
                        <div className="d-flex flex-column align-items-center justify-content-center h-100">
                            <h3 className="display-3">
                                Welcome To Davda Hotel
                            </h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam illo magnam, dicta aliquam eum aspernatur nam deserunt, placeat possimus omnis delectus provident eos. Voluptate, distinctio voluptatum a nihil consectetur nam.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default Landingpage;