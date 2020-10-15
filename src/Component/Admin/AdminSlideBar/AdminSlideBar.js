import React from 'react';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi, faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons'

const AdminSlideBar = (props) => {
    const buttonStyle = {
        backgroundColor: "white",
         color: "black", 
         border: "none", 
         height: "50px",
         width: "170px",
         textAlign: "left"
    }
    return (
        <div className="ml-2 mt-5">
            <img className="logo" src={logo} alt=""/>
            <button style={buttonStyle} onClick={props.handleServiceList} className="mt-3 btn-brand"><FontAwesomeIcon icon={faTaxi}/> Service List</button>
            <button style={buttonStyle} onClick={props.handleAddService} className="mt-3 btn-brand"><FontAwesomeIcon icon={faPlus}/> Add Service</button>
            <button style={buttonStyle} onClick={props.handleAddAdmin} className="mt-3 btn-brand"><FontAwesomeIcon icon={faUserPlus}/> Make Admin</button>    
        </div>
    );
};

export default AdminSlideBar;