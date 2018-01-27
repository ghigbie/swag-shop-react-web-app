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
    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => {
      console.log(products);
    }, err => {

    });
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
            <Product price="123.23"
              title="Cool Floating Cat"
              imgUrl="http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg" />
            <Product price="123.23"
              title="Cool Floating Cat"
              imgUrl="http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg" />
            <Product price="123.23"
              title="Cool Floating Cat"
              imgUrl="http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
