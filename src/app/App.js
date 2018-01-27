import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product';

const http = new HttpService();

class App extends Component {
  constructor(props){
    super(props);
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.state = {
      products: []
    };

    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      console.log(data);
      self.setState({products: data});
    }, err => {

    });
  }


  productList = () => {
    const list = this.state.products.map((product) =>
      <div className="col-sm-4"
           key={product._id}>
        <Product title={product.title}
                 price={product.price}
                 imgUrl={product.imgUrl} />
      </div>);

    return list;
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-main container">
          <div className="row flex-justify">
            {this.productList()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
