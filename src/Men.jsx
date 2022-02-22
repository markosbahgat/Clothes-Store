import React, { Component } from 'react';
import "./App.css";
import "animate.css";


class Menproducts extends Component {
    state = {}



    render() { 
        return ( 
            <div className="d-flex col-10 m-auto justify-content-around flex-wrap">
            {this.props.products.map(product =>(
                <div class="container m-5 col-3" style={{height:"500px"}}>
                    <div  style={{height:"400px"}}>
                        <div className="hover-zoom bg-image col-12" style={{height:"400px"}}>
                            <img src={product.imgUrl} class="w-100 h-100" alt="" />
                        </div>
                    <button className="btn-light">Quick View</button>
                    </div>
                    
                    <span className="Title">{product.name}</span>
                    <i className="far fa-heart float-end me-3 mt-3 fs-4" onClick={(event) => this.props.onadd(event)}></i>
                    <br/>
                    <span className="Title">{product.price}</span>
                    
                </div>
            ))}
                    </div>
         );
    }
}
 
export default Menproducts;