import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Deals from './Deals';
import Deal from './Deal';
import AddReview from './AddReview';
import Login from './auth/Login';

const RouterArea = () => {
    return(
        <Router>
            <Scene key="body" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={Login} title="Login" />
                </Scene>
                <Scene key="main" initial>
                    <Scene key="deals" component={Deals} title="List of Deals" />
                    <Scene key="deal" component={Deal} title="Your Deal" />
                    <Scene key="addReview" component={AddReview} title="AddReview" />
                </Scene>
                
                
            </Scene>
        </Router>
    )
}

export default RouterArea;