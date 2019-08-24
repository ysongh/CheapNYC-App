import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Deals from '../deals/Deals';
import Deal from '../deals/Deal';
import Login from '../auth/Login';
import Register from '../auth/Register';
import UserProfile from '../profile/UserProfile';
import EditProfile from '../profile/EditProfile';

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
                    <Scene key="userProfile" component={UserProfile} title="Profile" />
                    <Scene key="editProfile" component={EditProfile} title="Edit Profile" />
                </Scene>
                <Scene key="yourProfile">
                    <Scene component={UserProfile} title="Your Profile" initial/>
                    <Scene key="deal" component={Deal} title="Deal" />
                    <Scene key="editProfile" component={EditProfile} title="Edit Profile" />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterArea;