import React, {Component} from 'react';
import './product.css';

class Product extends Component{

    render(){
        return(
            <div className="card product-card">
                <img className="card-img-top third" 
                     src={this.props.imgUrl}
                     alt="Product"></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Price: ${this.props.title}</p>
                    <a href="www.google.com" className="btn btn-primary">Add to Wishlist</a>
                </div>
            </div>
        );
    }
}

export default Product;