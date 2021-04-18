import React from 'react';
import Sidebar from './Sidebar';


const DashBoard = () => {
    return (
        <div className="row">
            <div className="col-md-10">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-2 text-primary" >
              <h2>DashBoard</h2>
            </div>
        </div>
    );
};

export default DashBoard;