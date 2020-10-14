import React from 'react';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi, faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons'

const AdminSlideBar = (props) => {
    return (
        <div className="ml-2 mt-5">
            <img className="logo" src={logo} alt=""/>
            <button onClick={props.handleServiceList} className="mt-3 btn-brand"><FontAwesomeIcon icon={faTaxi}/> Service List</button>
            <button onClick={props.handleAddService} className="mt-3 btn-brand"><FontAwesomeIcon icon={faPlus}/> Add Service</button>
            <button onClick={props.handleAddAdmin} className="mt-3 btn-brand"><FontAwesomeIcon icon={faUserPlus}/> Make Admin</button>    
        </div>
    );
};

export default AdminSlideBar;