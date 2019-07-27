import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Deals from './Deals';
import Deal from './Deal';
import Login from './auth/Login';
import Register from './auth/Register';

const RouterArea = () => {
    return(
        <Router>
            <Scene key="body" hideNavBar>
                <Scene key="login">
                    <Scene component={Login} title="Login" />
                </Scene>
                <Scene key="register">
                    <Scene component={Register} title="Register" />
                </Scene>
                <Scene key="main" initial>
                    <Scene key="deals" component={Deals} title="List of Deals" />
                    <Scene key="deal" component={Deal} title="Your Deal" />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterArea;