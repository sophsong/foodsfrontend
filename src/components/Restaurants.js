import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Restaurants extends Component {

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
            <div className="restaurants">
                <h1> Restaurants </h1>
                {this.state.allRestaurants && this.state.allRestaurants.map((restaurant) => {
          return <div key={restaurant.id}>
            <h5>
              <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
              {/* <Restaurant /> */}
            </h5>
          </div>
        })}
            </div>
        )
    }
}


export default Restaurants