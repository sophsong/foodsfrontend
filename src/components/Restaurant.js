// import React, { Component } from 'react'


// class Restaurant extends Component {

//     // state = {
//     //     indRestaurant: []
//     // }
//     constructor(props){
//         super(props)
//     }


//     componentDidMount() {
//         fetch(`http://localhost:3000/api/v1/restaurants/${restaurant.id}`
//         )
//         .then(res => res.json())
//         .then(restaurant =>
//             this.setState({ indRestaurant: restaurant})
        
//     )}

// render() {
//     return (
//         <div className="restaurant">
//             <h1>Restaurant</h1>
//         </div>
//     )
// }
// }

// export default Restaurant;


// import React from 'react'
// import {Redirect} from 'react-router-dom'
// // import AccountEdit from './AccountEdit'

// import RestaurantsContainer from '../containers/RestaurantsContainer'

// const Restaurant = (props) => {

//   console.log(props)
//   // let account = props.accounts[props.match.params.id - 1]
//   let restaurant = props.restaurants.filter(restaurant => restaurant.id == props.match.params.id)[0]

//   console.log(restaurant)
//   return (

//     <div>
//       <h2>
//         {restaurant ? restaurant.name : null} 
//       </h2>
//       {/* <TransactionsContainer restaurant={restaurant}/><br/> */}
//       {/* <h4>Edit restaurant</h4> */}
//       {/* <estaurantEdit restaurant={restaurant}/> */}
//     </div>
//   )


// }

// export default Restaurant


import React from 'react'
import RestaurantContainer from '../containers/RestaurantContainer'

class Restaurant extends React.Component {
    
    // constructor(props){
    //     super(props)
    //     console.log(this.props)
    // }
    
    // render(){
    //     console.log(this.props)
    // let restaurant = props.restaurants.filter(restaurant => restaurant.id == props.match.params.id)[0]


// console.log(Restaurant)
render(){
return(
    <div> 
        {/* // <RestaurantContainer restaurant={restaurant} /> */}
        <h1> Restaurant Coming Soon
        </h1>
    </div>
)
}
} //end of const

export default Restaurant
