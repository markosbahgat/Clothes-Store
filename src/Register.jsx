import React, { Component } from 'react';


class Register extends Component {
    state = {  }
    render() { 
        return (

            <div>
                <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a
                        class="nav-link"
                        id="tab-login"
                        data-mdb-toggle="pill"
                        href="/Auth"
                        role="tab"
                        aria-controls="pills-login"
                        aria-selected="true"
                        >Login</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a
                        class="nav-link active"
                        id="tab-register"
                        data-mdb-toggle="pill"
                        href="/Mauth"
                        role="tab"
                        aria-controls="pills-register"
                        aria-selected="false"
                        >Register</a>
                    </li>
                    </ul>
                    
            <div
            class="tab-pane"
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
        >
            <form>
            <div class="text-center mb-3">
                <p>Sign up with:</p>
                <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
                </button>
        
                <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-google"></i>
                </button>
        
                <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-twitter"></i>
                </button>
        
                <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-github"></i>
                </button>
            </div>
        
            <p class="text-center">or:</p>
        
            <div class="form-outline mb-4">
                <input type="text" id="registerName" class="form-control" />
                <label class="form-label" for="registerName">Name</label>
            </div>
        
            <div class="form-outline mb-4">
                <input type="text" id="registerUsername" class="form-control" />
                <label class="form-label" for="registerUsername">Username</label>
            </div>
        
            <div class="form-outline mb-4">
                <input type="email" id="registerEmail" class="form-control" />
                <label class="form-label" for="registerEmail">Email</label>
            </div>
        
            
            <div class="form-outline mb-4">
                <input type="password" id="registerPassword" class="form-control" />
                <label class="form-label" for="registerPassword">Password</label>
            </div>
        
            
            <div class="form-outline mb-4">
                <input type="password" id="registerRepeatPassword" class="form-control" />
                <label class="form-label" for="registerRepeatPassword">Repeat password</label>
            </div>
        
            
            <div class="form-check d-flex justify-content-center mb-4">
                <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                checked
                aria-describedby="registerCheckHelpText"
                />
                <label class="form-check-label" for="registerCheck">
                I have read and agree to the terms
                </label>
            </div>
        
            
            <button type="submit" class="btn btn-primary btn-block mb-3"><a class="text-white text-decoration-none" href="/home">Sign Up</a></button>
            </form>
        </div>
        </div>
         );
    }
}
 
export default Register;