import { Route, Switch } from 'react-router';
import { Route as RouteDom } from 'react-router-dom';
import Home from 'screens/user/home';

const Router = () => {
    return (
        <Route
            render={() => (
                <Switch>
                    <RouteDom exact path={"/"} component={Home} />
                </Switch>
            )}
        />

    );
};

export default Router;
