import React from 'react';
import './assets/style/custom.scss'
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
            </Switch>
        </div>
    );
}

export default App;