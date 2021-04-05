import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnnouncedProducts from './pages/Announced-Products';
import PrincipalPage from './pages/Principal-Page';
import NewAnnounce from './pages/New-announce';
import EditAnnounce from './pages/Edit-Announce';
import Registeruser from './pages/Register-User';
import Login from './pages/Login';

function Routes () {
    return(
        <BrowserRouter>
            <Route path = "/principal-page" component={PrincipalPage}/>
            <Route path = "/announced-products" component={AnnouncedProducts}/>
            <Route path = "/new-announce" component={NewAnnounce}/>
            <Route path = "/edit-announce" component={EditAnnounce}/>
            <Route path = "/" exact component={Registeruser}/>
            <Route path = "/login" component={Login}/>
        </BrowserRouter>
    );
}

export default Routes;