import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Stands = React.lazy(() => {
    return import("../Pages/Stands");
});

const Baths = React.lazy(() => {
    return import("../Pages/Baths");
});

const Archives = React.lazy(() => {
    return import("../Pages/Archives");
});

const Routes = () => {
    let routes = (
        <Switch>
            <Route path="/stanowiska" exact render={props => <Stands {...props} />}/>
            <Route path="/wanny" exact render={props => <Baths {...props} />}/>
            <Route path="/archiwum" exact render={props => <Archives {...props} />}/>
        </Switch>

    )

    return <Suspense fallback={<p>Ładowanie...</p>}>{routes}</Suspense>;
};

export default Routes;
