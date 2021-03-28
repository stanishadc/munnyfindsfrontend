import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProtected } from './CommonFiles/UserProtected';
import { BusinessProtected } from './CommonFiles/BusinessProtected';
import SalonSearch from './PublicModule/SalonSearch'
import BusinessDashboard from './BusinessModule/BusinessDashboard'
import GymSearch from './PublicModule/GymSearch';
import YogaSearch from './PublicModule/YogaSearch';
import BusinessList from './PublicModule/BusinessList';
import Contactus from './StaticPages/Contactus';
import Support from './StaticPages/Support';
import Terms from './StaticPages/Terms';
import Aboutus from './StaticPages/Aboutus';
import Privacy from './StaticPages/PrivacyPolicy';
import FAQ from './StaticPages/FAQ';
import BusinessRegister from './PublicModule/BusinessRegister';
import BusinessDetails from './PublicModule/BusinessDetails';
import NotFound from './StaticPages/NotFound';
import ChooseAppointment from './PublicModule/ChooseAppointment';
import AppointmentSummary from './PublicModule/AppointmentSummary';
import MakePayment from './PublicModule/MakePayment';
import AppointmentConfirmation from './PublicModule/AppointmentConfirmation';
import UserProfile from './UserModule/UserProfile';
import UserAppointments from './UserModule/UserAppointments';
import UserChangePasword from './UserModule/UserChangePassword';

function App() {
  return (
    <Router>
      <Switch>        
        <Route exact path='/' component={SalonSearch} />
        <Route path='/salonsearch' component={SalonSearch} />
        <Route path='/gymsearch' component={GymSearch} />
        <Route path='/yogasearch' component={YogaSearch} />
        <Route path='/business' component={BusinessList} />
        <Route path='/registerbusiness' component={BusinessRegister} />
        <Route path='/business/:businesslist' component={BusinessList} />
        <Route path='/salons/:businessdetails' component={BusinessDetails} />
        <Route path='/chooseappointment' component={ChooseAppointment} />
        <Route path='/appointmentsummary' component={AppointmentSummary} />
        <Route path='/makepayment' component={MakePayment} />
        <Route path='/appointmentconfirmation' component={AppointmentConfirmation} />

        <Route path='/contactus' component={Contactus} />
        <Route path='/support' component={Support} />
        <Route path='/termsandconditions' component={Terms} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/privacypolicy' component={Privacy} />        
        <Route path='/faq' component={FAQ} />
        <Route path='/notfound' component={NotFound} />

        <BusinessProtected path='/businessdashboard' component={BusinessDashboard} />

        <UserProtected path='/user/profile' component={UserProfile} />
        <UserProtected path='/user/appointments' component={UserAppointments} />
        <UserProtected path='/user/changepassword' component={UserChangePasword} />
      </Switch>
    </Router>
  );
}
export default App;
