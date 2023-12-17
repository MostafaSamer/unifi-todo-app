import { Route, Switch } from 'react-router';
import { Route as RouteDom } from 'react-router-dom';
import Home from 'screens/user/home';
import Weather from 'screens/user/weather';

const Router = () => {
    return (
        <Route
            render={() => (
                <Switch>
                    <RouteDom exact path={"/"} component={Home} />
                    <RouteDom exact path={"/weather"} component={Weather} />
                </Switch>
            )}
        />

    );
};

export default Router;
