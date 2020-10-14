import React from 'react';
import logo from '../../images/logos/logo.png';
import googleLogo from '../../images/logos/googleLogo.png';

const Login = () => {
    return (
        <section>
            <div style={{textAlign:"center"}}>
                <img className="logo mt-5" src={logo} alt=""/>
            </div>
            <div className="mx-auto mt-5" style={{height: "300px", width: "400px", border: "1px solid gray",textAlign: "center"}}>
                <h3 className="pt-5">Login with</h3>
                <button style={{backgroundColor: "white", color: "black", border: "1px solid gray", borderRadius: "20px"}}> <img style={{height: "30px"}} src={googleLogo} alt=""/> Continue with Google</button>
                <br/> <br/>
                <p>Don't have an account  <a href="/">Create account</a></p>
            </div>
        </section>
    );
};

export default Login;