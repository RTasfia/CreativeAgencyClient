import React from 'react';

const AddService = () => {
    const handleSubmit = () => {

    }
    const handleBlur = () => {

    }
    const handleFileChange = () => {

    }
    return (
        <section className="p-4 pr-5" style={{ width: "60%"}}>
            <form onSubmit={handleSubmit}>
                    <h3 className="text-brand">Add Services</h3>
                    <div className="form-group">
                        <input  type="email" className="form-control" name="email" placeholder="Service Title" />
                    </div>
                    <div className="form-group">
                        <textarea  onBlur={handleBlur} name="" className="form-control" id="" cols="30" rows="5" placeholder="Description"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Icon" />
                    </div>
                    
                    <button type="submit" className="btn-brand">Submit</button>
                </form>
        </section>
    );
};

export default AddService;