import React, { Component } from 'react'
import './App.css';

class Loadmore extends Component {
    state = {  }
    render() { 
        return ( 
            <button type="button" class="btn btn-secondary rounded-pill m-auto d-flex ps-5 pe-5 mt-5" id="loadmorebutton" onClick={this.props.loadmorebtn}>Load More</button>
         );
    }
}
 
export default Loadmore;