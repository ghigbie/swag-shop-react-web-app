import React, {Component} from 'react';
import './product.css';

class Product extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="card">
                <img className="card-img-top" alt="Product"></img>
                <div classNAme="card-block">
                    <h4 classNAme="card-title"></h4>
                    <p className="card-text">Price: $</p>
                    <a href="#" className="btn btn-primary">Ad dto Wishlist</a>
                </div>
            </div>
        );
    }
}