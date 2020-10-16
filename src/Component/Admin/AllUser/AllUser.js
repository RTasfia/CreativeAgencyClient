import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [status, setStatus] = useState({id: ""})
    const [customer, setCustomer] = useState([])
    useEffect(()=>{
        fetch("https://warm-shore-67382.herokuapp.com/allCustomer")
        .then(res => res.json())
        .then(data => {
            setCustomer(data)
        })
    },[])

    const handleChange = (e) => {

        const currentStatus = {...status};
        currentStatus.status = e.target.value;
        setStatus(currentStatus);
        fetch("https://warm-shore-67382.herokuapp.com/updateStatus", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(currentStatus)
        })
    }
    const handleClick = (id)=> {
        const info = {...status};
        info.id = id;
        setStatus(info);


    }
    return (
        <div className="m-5" style={{backgroundColor: "white"}}>
            <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Project Detail</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  customer.map((user) => 
                        
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.service}</td>
                        <td>{user.description}</td>
                        <td>
                        <select onClick={()=>handleClick(user._id)} onChange={handleChange} className="form-control" name="status" >
                                <option value={`${user.status}`}>{user.status}</option>
                                <option value="Pending">Pending</option>
                                <option value="On going">On going</option>
                                <option value="Done">Done</option>
                        </select>
                            
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default AllUser;