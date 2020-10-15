import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const PlaceOrder = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userInfo, setUserInfo] = useState({ status: "pending", name: `${loggedInUser.name}`, email: `${loggedInUser.email}` });

    const handleSubmit = (e) => {
        fetch('http://localhost:5000/addCustomer', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userInfo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

            })
            .catch(error => {
                console.error(error)
            })
        history.push("/order")
        e.preventDefault();

    }
    const handleBlur = (e) => {
        const newUser = { ...userInfo };
        newUser[e.target.name] = e.target.value;
        if (e.target.name === "service") {
            // const currentService = allService.find(service => service.title === e.target.value);
            // console.log(currentService);
        }
        setUserInfo(newUser);
    }

    return (
        <section className="p-4 pr-5" style={{ width: "60%" }}>
            <h5 className="text-brand">Order</h5>
            
            <form action="" >
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" value={loggedInUser.name} name="name" placeholder="Your name/ comapany name" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="email" className="form-control" value={loggedInUser.email} name="email" placeholder="Your email address" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="service" placeholder="Graphics design" />
                    </div>
                    <div className="form-group">
                        <textarea  onBlur={handleBlur} className="form-control" id="" name="description" cols="30" rows="5" placeholder="Project Detail"></textarea>
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input  type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn-brand">Submit</button>
                </form>
        </section>
    );
};

export default PlaceOrder;