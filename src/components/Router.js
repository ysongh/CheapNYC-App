import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Deals from './Deals';
import Deal from './Deal';
import Login from './auth/Login';

const RouterArea = () => {
    return(
        <Router>
            <Scene key="body">
                <Scene key="deals" component={Deals} title="List of Deals" initial />
                <Scene key="deal" component={Deal} title="Your Deal" />
                <Scene key="login" component={Login} title="Login" />
            </Scene>
        </Router>
    )
}

export default RouterArea;