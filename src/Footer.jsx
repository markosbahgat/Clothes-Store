import React, { Component } from 'react';
import './App.css';


class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer class="bg-dark text-center text-white">
              <div class="container p-4">
                <section class="mb-4">
                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-google"></i
                  ></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-instagram"></i
                  ></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-github"></i
                  ></a>
                </section>
                <section class="">
                  <form action="">
                    <div class="row d-flex justify-content-center">
               
                      <div class="col-auto">
                        <p class="pt-2">
                          <strong>Sign up for our newsletter</strong>
                        </p>
                      </div>
                    
                      <div class="col-md-5 col-12">
                       
                        <div class="form-outline form-white mb-4">
                          <input type="email" id="form5Example2" class="form-control" />
                          <label class="form-label" for="form5Example2">Email address</label>
                        </div>
                      </div>
                     
                      <div class="col-auto">
                       
                        <button type="submit" class="btn btn-outline-light mb-4">
                          Subscribe
                        </button>
                      </div>
                      
                    </div>
                  
                  </form>
                </section>
              
                <section class="mb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                    repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                    eum harum corrupti dicta, aliquam sequi voluptate quas.
                  </p>
                </section>
              
            
                
                <section class="">
                 
                  <div class="row">
                    
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                      <h5 class="text-uppercase">Categories </h5>
            
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#!" class="text-white">Woman</a>
                        </li>
                        <li>
                          <a href="#!" class="text-white">Men</a>
                        </li>
                        <li>
                          <a href="#!" class="text-white">Shoes</a>
                        </li>
                        <li>
                          <a href="#!" class="text-white">Watches</a>
                        </li>
                      </ul>
                    </div>
                 
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                      <h5 class="text-uppercase">Help </h5>
            
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#!" class="text-white">Track Order</a>
                        </li>
                        <li>
                          <a href="#!" class="text-white">Returns</a>
                        </li>
                        <li>
                          <a href="#!" class="text-white">Shipping</a>
                        </li>
                        <li>
                          <a href="#!" class="text-white">FAQs</a>
                        </li>
                      </ul>
                    </div>
                   
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                      <h5 class="text-uppercase">GET IN TOUCH </h5>
            
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#!" class="text-white">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879 </a>
                        </li>
                        <li>
                          <a href="#!" class="text-white"><i class="fab fa-facebook"></i></a>
                        </li>
                        <li>
                          <a href="#!" class="text-white"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li>
                          <a href="#!" class="text-white"><i class="fab fa-pinterest-p"></i></a>
                        </li>
                      </ul>
                    </div>
                  
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                      <h5 class="text-uppercase">Newsletter </h5>
            
                      <ul class="list-unstyled mb-0">
                        <li>
                          <input placeholder="Email@Example.com" type="email" name="email" className="input"/>
                        </li>
                        <li>
                          <a href="#!" class="text-white"><button className="btn-primary rounded">Subscribe</button></a>
                        </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </section>
                
              </div>
              <section class="mb-4">
                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-cc-visa"></i></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-cc-paypal"></i></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-cc-mastercard"></i></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-bitcoin"></i></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fas fa-money-check-alt"></i></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-cc-discover"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-cc-amex"></i></a>
                </section>
            
             
              <div class="text-center p-3">
                © 2020 Copyright:
                <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
              </div>
              
            </footer>
            
         );
    }
}
 
export default Footer;