import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Product from './mainproducts';
import Menproducts from './Men';
import Nav from './Navbar';
import Slide from './Slide';
import MiddleNav from './Middlenav';
import Loadmore from './loadmoreButton';
import { Router, Route, NavLink } from 'react-router-dom';
import Signin from './login';
import Register from './Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuickView from './Quick View';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/Icons/fontawesome-free/css/all.css';


class App extends Component {
  state = { 
    formclassname : "d-none",
    cart : [],
    whitelist : [],
    menproducts : [
      { 
        id: '1',
        name : 'Esprit Ruffle Shirt ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
        price : '$18.96'
        },
        { 
        id: '2',
        name : 'Herschel supply ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-02.jpg.pagespeed.ic._mIojWDfEX.webp',
        price : '$18.96'
        },
        { 
        id: '3',
        name : 'Only Check Trouser ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-03.jpg.pagespeed.ic.eOHs429Gtb.webp',
        price : '$18.96'
        },
        { 
        id: '4',
        name : 'Classic Trench Coat ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-04.jpg.pagespeed.ic.1MaP4euDx9.webp',
        price : '$18.96'
        },
        { 
        id: '5',
        name : 'Front Pocket Jumper ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-05.jpg.pagespeed.ic.GHcB3Nc9zp.webp',
        price : '$18.96'
        },
        { 
        id: '6',
        name : 'Vintage Inspired Classic ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-06.jpg.pagespeed.ic.mU9c3gp9yp.webp',
        price : '$18.96'
        },
        { 
        id: '7',
        name : 'Inspired Classic ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-08.jpg.pagespeed.ic.zcR_ZfXlFq.webp',
        price : '$1478.96'
        },
        { 
        id: '8',
        name : 'Converse All Star Hi Plimsolls',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-09.jpg.pagespeed.ic._ex9y9IVR9.webp',
        price : '$1478.96'
        },
        { 
        id: '9',
        name : 'Femme T-Shirt In Stripe ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-14.jpg.pagespeed.ic.rUWpWgkkYK.webp',
        price : '$1478.96'
        },
        { 
        id: '10',
        name : 'Mini Silver Mesh Watch ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-13.jpg.pagespeed.ic.jIjGx2QblE.webp',
        price : '$1478.96'
        },
        { 
        id: '11',
        name : 'Square Neck Back ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-15.jpg.pagespeed.ic.LNG1pmoqOY.webp',
        price : '$1478.96'
        },
        { 
        id: '12',
        name : 'Inspired Classic ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-16.jpg.pagespeed.ic.AbLwZITYaU.webp',
        price : '$1478.96'
        },
        { 
        id: '13',
        name : 'T-Shirt with Sleeve ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-12.jpg.pagespeed.ic.Ft0-TDvq7W.webp',
        price : '$1478.96'
        },
        { 
        id: '14',
        name : 'Inspired Classic ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-11.jpg.pagespeed.ic.fJxJBqHZzv.webp',
        price : '$1478.96'
        },
        { 
        id: '15',
        name : 'Pretty Little Thing ',
        imgUrl : 'https://preview.colorlib.com/theme/cozastore/images/xproduct-10.jpg.pagespeed.ic.JKjq4oUn3E.webp',
        price : '$1478.96'
        },
    ],
    womanproducts : [],
    acsses : [],
   }
 handleaddingtowhitelist = (event) => {
  const value = event.target.offsetParent.children[0].attributes[0].nodeValue;
  console.log(value);
 this.setState({ cart: [ ...this.state.cart , value ]});
 
};
handlelodemore = () =>{
  this.setState({menproducts : [...this.state.menproducts, ...this.state.menproducts]});
}

  render() {
    console.log(this.state); 
    return ( 
      <React.Fragment>
        <Route path="/home" exact>
            <Nav newclass={this.state.formclassname}/>
            <Slide/>
            <Product/>
            <MiddleNav/>
            <Menproducts onadd={this.handleaddingtowhitelist} products={this.state.menproducts}/>
            <Loadmore loadmorebtn={this.handlelodemore}/>
            <Footer/>
        </Route>
        <Route path="/Auth" exact>
        <Signin/>
        </Route>
        <Route path="/Mauth" exact>
        <Register/>
        </Route>
        <Route path="/Quickview" exact>
        <QuickView/>
        </Route>
      </React.Fragment>
     );
  }
}

export default App;
