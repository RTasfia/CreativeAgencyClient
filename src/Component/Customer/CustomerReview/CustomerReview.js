import React from 'react';

const CustomerReview = () => {
    const handleBlur = () => {

    }
    const handleSubmit = () => {

    }
    return (
        <section className="p-4 pr-5" style={{ width: "60%"}}>
            <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Designation, Comapany name" />
                    </div>
                    <div className="form-group">
                        <textarea  onBlur={handleBlur} name="" className="form-control" id="" cols="30" rows="5" placeholder="Project Detail"></textarea>
                    </div>
                    
                    <button type="submit" className="btn-brand">Submit</button>
                </form>
        </section>
    );
};

export default CustomerReview;