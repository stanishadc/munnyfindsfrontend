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
import BusinessAvailability from './BusinessModule/BusinessAvailability';
import BusinessCalendar from './BusinessModule/BusinessCalendar';
import BusinessPassword from './BusinessModule/BusinessPassword';
import BusinessPayments from './BusinessModule/BusinessPayments';
import BusinessProfile from './BusinessModule/BusinessProfile';
import BusinessServices from './BusinessModule/BusinessServices';
import CancelledAppointments from './BusinessModule/CancelledAppointments';
import CompletedAppointments from './BusinessModule/CompletedAppointments';
import UpcomingAppointments from './BusinessModule/UpcomingAppointments';
import ForgotPassword from './PublicModule/ForgotPassword';
import VerifyOTP from './PublicModule/VerifyOTP';
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>        
        <Route exact path='/' component={SalonSearch} />
        <Route path='/salonsearch' component={SalonSearch} />
        <Route path='/gymsearch' component={GymSearch} />
        <Route path='/yogasearch' component={YogaSearch} />
        <Route path='/registerbusiness' component={BusinessRegister} />
        <Route path='/businesslist' component={BusinessList} />
        <Route path='/businessdetails/:businessurl' component={BusinessDetails} />
        <Route path='/chooseappointment' component={ChooseAppointment} />
        <Route path='/appointmentsummary' component={AppointmentSummary} />
        <Route path='/makepayment' component={MakePayment} />
        <Route path='/appointmentconfirmation' component={AppointmentConfirmation} />
        <Route path='/forgotpassword' component={ForgotPassword} />
        <Route path='/verifyotp' component={VerifyOTP} />

        <Route path='/contactus' component={Contactus} />
        <Route path='/support' component={Support} />
        <Route path='/termsandconditions' component={Terms} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/privacypolicy' component={Privacy} />        
        <Route path='/faq' component={FAQ} />
        <Route path='/notfound' component={NotFound} />

        <BusinessProtected path='/business/dashboard' component={BusinessDashboard} />
        <BusinessProtected path='/business/availability' component={BusinessAvailability} />
        <BusinessProtected path='/business/calendar' component={BusinessCalendar} />
        <BusinessProtected path='/business/changepassword' component={BusinessPassword} />
        <BusinessProtected path='/business/payments' component={BusinessPayments} />
        <BusinessProtected path='/business/businessprofile' component={BusinessProfile} />
        <BusinessProtected path='/business/services' component={BusinessServices} />
        <BusinessProtected path='/business/cancelledappointments' component={CancelledAppointments} />
        <BusinessProtected path='/business/completedappointments' component={CompletedAppointments} />
        <BusinessProtected path='/business/upcomingappointments' component={UpcomingAppointments} />

        <UserProtected path='/user/profile' component={UserProfile} />
        <UserProtected path='/user/appointments' component={UserAppointments} />
        <UserProtected path='/user/changepassword' component={UserChangePasword} />
      </Switch>
    </Router>
  );
}
export default App;
