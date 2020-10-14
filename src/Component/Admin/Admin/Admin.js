import React, { useState } from 'react';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import AdminSlideBar from '../AdminSlideBar/AdminSlideBar';
import AllUser from '../AllUser/AllUser';

const Admin = () => {
    const [serviceListStatus, setServiceListStatus] = useState(true);
    const [addServiceStatus, setAddServiceStatus] = useState(false);
    const [addAdminStatus, setAddAdminStatus] = useState(false);
    const handleServiceList = () => {
        setServiceListStatus(true);
        setAddServiceStatus(false);
        setAddAdminStatus(false);
    }
    const handleAddService = () => {
        setServiceListStatus(false);
        setAddServiceStatus(true);
        setAddAdminStatus(false);

    }
    const handleAddAdmin = () => {
        setServiceListStatus(false);
        setAddAdminStatus(true);
        setAddServiceStatus(false);

    }
    return (
        <section className="row ">
            <div className="col-md-3 mb-4">
                <AdminSlideBar handleServiceList={handleServiceList} handleAddService={handleAddService} handleAddAdmin={handleAddAdmin}></AdminSlideBar>
            </div>
            <div className="col-md-9 mt-5" style={{backgroundColor: "#F4FDFB", height: "100vh"}}>
                {
                    serviceListStatus&& <AllUser></AllUser>
                }
                {
                    addServiceStatus && <AddService></AddService>
                }
                {
                    addAdminStatus && <AddAdmin></AddAdmin>
                }
            </div>
        </section>
    );
};

export default Admin;