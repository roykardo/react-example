import React from 'react';
import './assets/style/custom.scss'
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import UserPage from "./pages/UserPage/UserPage";
import UserCreate from "./pages/UserPage/components/UserCreate";


const App: React.FC = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/userlist" component={UserPage} />
                <Route path="/usercreate" component={UserCreate} />
            </Switch>
        </div>
    );
}

export default App;