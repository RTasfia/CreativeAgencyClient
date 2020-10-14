import React from 'react';
import './Header.css';
import frame from '../../../images/logos/Frame.png';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
    return (
        <main className="header-container mb-5">
            <NavMenu></NavMenu>
            <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 className="text-brand">Let's Grow Your <br /> Brand To The Next Level </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequatur reiciendis laborum ducimus quis repellat quam atque temporibus minima cumque.</p>
                    <button className="btn-brand">Hire Us</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={frame} alt="" />
                </div>
            </div>

            </div>
            
        </main>
    );
};

export default Header;