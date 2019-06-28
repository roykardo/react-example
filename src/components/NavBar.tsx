import React from 'react'
import {Link} from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">React Example</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/dashboard">Dashboard</Link>
                            <Link className="nav-item nav-link active" to="/userlist">User Management</Link>
                            {/*<Link className="nav-item nav-link active" to="/usercreate">User Management</Link>*/}
                            <Link className="nav-item nav-link" to="#">logout</Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar