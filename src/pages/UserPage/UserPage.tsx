import React from 'react'
import UserList from "./components/UserList";
import NavBar from "../../components/NavBar";
import Container from "react-bootstrap/es/Container";
import UserCreate from "./components/UserCreate";

class UserPage extends React.Component{
    render(){
        return(
            <div>
                <NavBar></NavBar>
                <div className="container">
                    <UserList></UserList>
                </div>
            </div>
        )

    }
}

export default UserPage