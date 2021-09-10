import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Cadastro = lazy(() => import('./view/cadastro/Cadastro'))
const Routes = () =>  (
    <Router>
        <Suspense fallback={<div></div>}>
            <Switch>
                <Route patch="cadastro" component={Cadastro}/>
                <Route patch="/" component={Cadastro}/>
            </Switch>
        </Suspense>
    </Router>
)

export default Routes;
