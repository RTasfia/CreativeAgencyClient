import React, { useState } from 'react';

const AddService = () => {
    const [serviceInfo, setServiceInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', serviceInfo.title);
        formData.append('description', serviceInfo.description);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

    }
    const handleBlur = (e) => {
        const newService = { ...serviceInfo };
        newService[e.target.name] = e.target.value;
        setServiceInfo(newService);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    return (
        <section className="p-4 pr-5" style={{ width: "60%"}}>
            <form>
                    <h3 className="text-brand">Add Services</h3>
                    <div className="form-group">
                    <input onBlur={handleBlur} type="text" className="form-control"  name="title" placeholder="Service title" />
                    </div>
                    <div className="form-group">
                        <textarea  onBlur={handleBlur} name="description" className="form-control" id="" cols="30" rows="5" placeholder="Description"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Icon" />
                    </div>
                    
                    <button onClick={handleSubmit} type="submit" className="btn-brand">Submit</button>
                </form>
        </section>
    );
};

export default AddService;