import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {BicycleTable} from "./tables/BicycleTable";
import {StationTable} from "./tables/StationTable";

const BicycleList: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route component={StationTable} path="/networks/:id" />
                    <Route component={BicycleTable} path="/networks" />
                    <Redirect to="/networks" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default BicycleList;