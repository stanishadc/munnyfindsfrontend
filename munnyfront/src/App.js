import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProtected } from './CommonFiles/UserProtected';
import { BusinessProtected } from './CommonFiles/BusinessProtected';
import SalonSearch from './PublicModule/SalonSearch'
import BusinessDashboard from './BusinessModule/BusinessDashboard'
import UserDashboard from './UserModule/UserDashboard'
import GymSearch from './PublicModule/GymSearch';
import YogaSearch from './PublicModule/YogaSearch';
import BusinessList from './PublicModule/BusinessList';
import Contactus from './PublicModule/Contactus';
import Support from './PublicModule/Support';
import Terms from './PublicModule/Terms';
import Aboutus from './PublicModule/Aboutus';
import Privacy from './PublicModule/PrivacyPolicy';
import FAQ from './PublicModule/FAQ';
import BusinessRegister from './PublicModule/BusinessRegister';

function App() {
  return (
    <Router>
      <Switch>        
        <Route exact path='/' component={SalonSearch} />
        <Route path='/salonsearch' component={SalonSearch} />
        <Route path='/gymsearch' component={GymSearch} />
        <Route path='/yogasearch' component={YogaSearch} />
        <Route path='/business' component={BusinessList} />
        <Route path='/contactus' component={Contactus} />
        <Route path='/support' component={Support} />
        <Route path='/termsandconditions' component={Terms} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/privacypolicy' component={Privacy} />
        <Route path='/faq' component={FAQ} />
        <Route path='/registerbusiness' component={BusinessRegister} />
        <Route path='/business/:businessname' component={BusinessList} />
        <UserProtected path='/userdashboard' component={UserDashboard} />
        <BusinessProtected path='/businessdashboard' component={BusinessDashboard} />
      </Switch>
    </Router>
  );
}
export default App;
