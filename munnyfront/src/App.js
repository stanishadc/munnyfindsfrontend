import React,{Component} from 'react';
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
import BusinessServicePrices from './BusinessModule/BusinessServicePrices';
import BusinessAppointmentsView from './BusinessModule/BusinessAppointmentsView';
import CancelledAppointments from './BusinessModule/CancelledAppointments';
import CompletedAppointments from './BusinessModule/CompletedAppointments';
import UpcomingAppointments from './BusinessModule/UpcomingAppointments';
import ForgotPassword from './PublicModule/ForgotPassword';
import VerifyOTP from './PublicModule/VerifyOTP';
import BusinessImages from './BusinessModule/BusinessImages';
import auth from './CommonFiles/Auth';
import { createBrowserHistory } from "history";
import BusinessEmployee from './BusinessModule/BusinessEmployee';
import UserAppointmentsView from './UserModule/UserAppointmentsView';
import OffersList from './PublicModule/OffersList';
import Subscription from './PublicModule/BusinessSubscription';
import PaymentStatus from './PublicModule/PaymentStatus';

export const history = createBrowserHistory();
export default class App extends Component {
  render() {
    if (localStorage.getItem('MFFUserId') != null && localStorage.getItem('MFFUserId') != 'null') {
      auth.isUAuthenticated();
    }
    else if (localStorage.getItem('MFFBusinessUserId') != null && localStorage.getItem('MFFBusinessUserId') != 'null') {
      auth.isBAuthenticated();
    }
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={SalonSearch} />
          <Route path='/salonsearch' component={SalonSearch} />
          <Route path='/gymsearch' component={GymSearch} />
          <Route path='/yogasearch' component={YogaSearch} />
          <Route path='/vendors/:businesstype' component={BusinessList} />
          <Route path='/offers' component={OffersList} />

          <Route path='/registerbusiness' component={BusinessRegister} />
          <Route path='/businesslist' component={BusinessList} />
          <Route path='/businessdetails/:businessurl' component={BusinessDetails} />
          <Route path='/chooseappointment' component={ChooseAppointment} />
          <Route path='/appointmentsummary' component={AppointmentSummary} />
          <Route path='/makepayment' component={MakePayment} />
          <Route path='/appointmentconfirmation' component={AppointmentConfirmation} />
          <Route path='/forgotpassword' component={ForgotPassword} />
          <Route path='/verifyotp' component={VerifyOTP} />
          <Route path='/subscription' component={Subscription} />
          <Route path='/paymentstatus' component={PaymentStatus} />

          <Route path='/contactus' component={Contactus} />
          <Route path='/support' component={Support} />
          <Route path='/termsandconditions' component={Terms} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/privacypolicy' component={Privacy} />
          <Route path='/faq' component={FAQ} />
          <Route path='/notfound' component={NotFound} />

          <Route path='/business/dashboard' component={BusinessDashboard} />
          <Route path='/business/availability' component={BusinessAvailability} />
          <Route path='/business/calendar' component={BusinessCalendar} />
          <Route path='/business/changepassword' component={BusinessPassword} />
          <Route path='/business/payments' component={BusinessPayments} />
          <Route path='/business/businessprofile' component={BusinessProfile} />
          <Route path='/business/services' component={BusinessServices} />
          <Route path='/business/serviceprices' component={BusinessServicePrices} />
          <Route path='/business/cancelledappointments' component={CancelledAppointments} />
          <Route path='/business/completedappointments' component={CompletedAppointments} />
          <Route path='/business/upcomingappointments' component={UpcomingAppointments} />
          <Route path='/business/appointment/:appointmentId' component={BusinessAppointmentsView} />

          <Route path='/business/bimages/:businessId' component={BusinessImages} />
          <Route path='/business/businessemployee/:businessId' component={BusinessEmployee} />

          <UserProtected path='/user/profile' component={UserProfile} />
          <UserProtected path='/user/appointments' component={UserAppointments} />
          <UserProtected path='/user/changepassword' component={UserChangePasword} />
          <UserProtected path='/user/appointment/:appointmentId' component={UserAppointmentsView} />
        </Switch>
      </Router>
    );
  }
}

