import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProgressBar from './components/ProgressBar/ProgressBar';

//const Cadastro = lazy(() => import('./view/cadastro/Cadastro'))
const Cadastro = lazy(() => import('./pages/Register/RegisterController'))
const Home = lazy(() => import('./pages/Home/HomeController'))
const Busca = lazy(() => import('./pages/Busca/BuscaController'))

const Routes = () =>  (
    <Router>
        <Suspense fallback={<div className='mt-5 pt-5'><ProgressBar/></div>}>
            <Switch>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/busca" component={Busca}/>
                <Route path="/inicio" component={Home}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Suspense>
    </Router>
)

export default Routes;
