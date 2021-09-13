import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Cadastro = lazy(() => import('./view/cadastro/Cadastro'))
const Home = lazy(() => import('./view/home/Home'))
const Routes = () =>  (
    <Router>
        <Suspense fallback={<div></div>}>
            <Switch>
                <Route patch="cadastro" component={Cadastro}/>
                <Route patch="/" component={Home}/>
                <Route patch="inicio" component={Home}/>
            </Switch>
        </Suspense>
    </Router>
)

export default Routes;
