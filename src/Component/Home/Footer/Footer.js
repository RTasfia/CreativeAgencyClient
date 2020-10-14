import React from 'react';

const Footer = () => {
    return (
        <section style={{ backgroundColor: "#FBD062"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-5 ">
                        <h3>Let us handle your <br />project, professionally</h3>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general</p>
                    </div>
                    <div className="col-md-7 mt-5">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name/ company name" />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn-brand"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
            <div className="copyRight text-center mt-5">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>

        </section>
    );
};

export default Footer;