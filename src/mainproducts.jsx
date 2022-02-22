import React, { Component } from 'react';
import './App.css';


class Product extends Component {
    state = {  }
    render() { 
        return ( 
        <div class="container" style={{marginBottom:"150px"}}>
            <div class="row">
                <div class="col-md-4">
                    <div class="content">
                        <a href="#">
                            <div class="content-overlay"></div>
                                <img class="content-image w-30" src="https://preview.colorlib.com/theme/cozastore/images/xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp" alt=""/>
                                <h1 class="h111">Woman</h1>
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Woman</h3>
                                <p class="content-text"><i class="fa fa-map-marker"></i> spring 2021</p>
                                <button><a>Shop Now</a></button>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content"> <a href="#">
                            <div class="content-overlay"></div> <img class="content-image" src="https://preview.colorlib.com/theme/cozastore/images/xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp" alt=""/>
                            <h1 class="h111">Men</h1>
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Men</h3>
                                <p class="content-text"><i class="fa fa-map-marker"></i> spring 2021</p>
                                <button><a>Shop Now</a></button>
                            </div>
                        </a> </div>
                </div>
                <div class="col-md-4">
                    <div class="content"> <a href="#">
                            <div class="content-overlay"></div> <img class="content-image" src="https://preview.colorlib.com/theme/cozastore/images/xbanner-03.jpg.pagespeed.ic.1rqLomOaMb.webp" alt=""/>
                            <h1 class="h111">Accssesories</h1>
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Accssesories</h3>
                                <p class="content-text"><i class="fa fa-map-marker"></i> spring 2021</p>
                                <button><a>Shop Now</a></button>
                            </div>
                        </a> </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Product;