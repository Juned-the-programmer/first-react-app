import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props){
        super (props);
        this.state = {
            product : {
                sno : 1,
                image : 'https://images-na.ssl-images-amazon.com/images/I/61v3DQL0seL._SX342_.jpg',
                Name : 'Philips Light',
                Price : 240,
                Qty : 2
            }
        }   
    }

    incQty = () => {
        this.setState({
            product : {
            ...this.state.product,
            Qty : this.state.product.Qty + 1
            }
        });
    };

    decQty = () => {
        this.setState({
            product : {
            ...this.state.product,
            Qty : this.state.product.Qty - 1 > 0 ? this.state.product.Qty - 1 : 1
            }
        });
    };
    render() { 
        let {sno , image , Name , Price , Qty } = this.state.product;
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <h1 className="text-center bg-warning">Product Cart</h1>
                                <div className="card-body">
                                <table className="table table-hover text-center table-striped table-light">
                                    <thead className="bg-dark text-white">
                                        <tr>
                                            <th>SNo</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{sno}</td>
                                            <td><img src={image} alt="" weight="50" height="50" /></td>
                                            <td>{Name}</td>
                                            <td>{Price.toFixed(2)}</td>
                                            <td>
                                                <i class="fa fa-minus-circle" aria-hidden="true" onClick={this.decQty}></i>
                                                {Qty}
                                                <i class="fa fa-plus-circle" aria-hidden="true" onClick={this.incQty}></i>
                                            </td>
                                            <td>{(Price * Qty).toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ProductItem;