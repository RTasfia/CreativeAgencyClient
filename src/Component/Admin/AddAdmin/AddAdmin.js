import React from 'react';

const AddAdmin = () => {
    const handleSubmit = () => {

    }
    return (
        <section className="p-4 pr-5" style={{ width: "60%"}}>
            <form onSubmit={handleSubmit}>
                <h3 className="text-brand">Add Services</h3>
                    
            <div className="form-group">
                        <input  type="email" className="form-control" name="email" placeholder="Email" />
                    </div>
                    
                    <button type="submit" className="btn-brand">Submit</button>
                </form>
        </section>
    );
};

export default AddAdmin;