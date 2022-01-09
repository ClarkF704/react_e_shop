import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import { Container } from 'react-bootstrap';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';

const App = () => {
  return (
    <Router>
    <Header/>
        <main className='py-3'>
           <Container>
              <Route path='/payment' component={PaymentScreen}/>
              <Route path='/register' component={RegisterScreen}/>
              <Route path='/shipping' component={ShippingScreen}/>
              <Route path='/profile' component={ProfileScreen}/>
              <Route path='/login' component={LoginScreen}/>
              <Route path='/product/:id' component={ProductScreen} />
              <Route path='/cart/:id?' component={CartScreen} />
              <Route path='/' component={HomeScreen} exact />
          </Container>
        </main>
     
    <Footer/>
    </Router>
   
  );
}

export default App;
