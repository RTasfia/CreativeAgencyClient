import React from 'react';

const AllUser = () => {
    const FakeDataForService = [
        {
            title: "Web & Mobile Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatibus ea veritatis doloremque deleniti officia.",
            icon: "service1.png"
        },
        {
            title: "Graphics Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatibus ea veritatis doloremque deleniti officia.",
            icon: "service2.png"
        },
        {
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatibus ea veritatis doloremque deleniti officia.",
            icon: "service3.png"
        }
    ]
    
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
                  FakeDataForService.map((x, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td></td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, placeat!</td>
                        <td></td>
                        <td></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default AllUser;