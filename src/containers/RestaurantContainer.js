import React from "react";
import Restaurants from "../components/Restaurants";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class RestaurantContainer extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* <Route path="/accounts/new" component={AccountInput} /> */}
                    {/* <Route
                        path="/accounts/:id"
                        render={(routerProps) => (
                            <Account {...routerProps} accounts={this.props.accounts} />
                        )}
                    /> */}
                    {/* <Route
                        path="/restaurants"
                        render={(routerProps) => (
                            <Accounts {...routerProps} accounts={this.props.restaurants} />
                        )}
                    /> */}
                               <Route path='/restaurants' component={Restaurants}/> 

                </Switch>
            </div>
        );
    }
}

export default RestaurantContainer;
