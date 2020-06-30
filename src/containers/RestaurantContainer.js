import React from "react";
import Restaurants from "../components/Restaurants";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurant from '../components/Restaurant'

class RestaurantContainer extends React.Component {

    state = {
        allRestaurants: []
    }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/restaurants', {
            method: "GET"
          })
          .then(res => res.json())
          .then(restaurants =>
            this.setState({allRestaurants: restaurants})
          )

  }

  render() {
    return (
      <div>
        <Switch>
          {/* <Route path="/restaurants/:id" rendercomponent={Restaurants} />
          <Route path="/restaurants" component={Restaurants} /> */}
          <Route
            path="/restaurants/:id"
            render={(routerProps) => (
              <Restaurant {...routerProps} restaurants={this.props.restaurants} />
            )}
          />
          <Route
            path="/restaurants"
            render={(routerProps) => (
              <Restaurants {...routerProps} restaurants={this.props.restaurants} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default RestaurantContainer;
