import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
// import MainContainer from './containers/MainContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
// import MyReviews from './components/MyReviews'
import Home from './components/Home'
// import Restaurant from './components/Restaurant';
import RestaurantContainer from './containers/RestaurantContainer'
// import RestaurantForm from './components/RestaurantForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>

          <h1 className="appname"> Foods We Like</h1>
          <Navbar />
          <Route exact path='/home' component={Home} />
          {/* <Route exact path='/restaurant' component={Restaurant} /> */}
          {/* need exact path in order for the about path to not render the above too */}
          <Route path='/about' component={About} />
          {/* {/* <Route path='/restaurants' component={Restaurants}/> */}
       {/* <Route path= '/restaurants/:id' component={Restaurant}/> */} 
          
          {/* <Route path='/addrestaurant' component={RestaurantForm}/> */}
          <Route path='/signup' component={Signup} />
          <RestaurantContainer />
          <Route path='/login' component={Login} />
          {/* <Route path='/myreviews' component={MyReviews} /> */}


        </Router>
      </div>
    );
  }
}

export default App;
