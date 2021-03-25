import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProtected } from './CommonFiles/UserProtected';
import { BusinessProtected } from './CommonFiles/BusinessProtected';
import SalonSearch from './PublicModule/SalonSearch'
import BusinessDashboard from './BusinessModule/BusinessDashboard'
import UserDashboard from './UserModule/UserDashboard'
import GymSearch from './PublicModule/GymSearch';
import YogaSearch from './PublicModule/YogaSearch';

function App() {
  return (
    <Router>
      <Switch>        
        <Route exact path='/' component={SalonSearch} />
        <Route path='/salonsearch' component={SalonSearch} />
        <Route path='/gymsearch' component={GymSearch} />
        <Route path='/yogasearch' component={YogaSearch} />
        <UserProtected path='/userdashboard' component={UserDashboard} />
        <BusinessProtected path='/businessdashboard' component={BusinessDashboard} />
      </Switch>
    </Router>
  );
}
export default App;
