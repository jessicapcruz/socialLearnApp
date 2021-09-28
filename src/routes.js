import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';

const RegisterContent = lazy(() => import('./pages/Register/Content/contentAdd.controller'))
const Home = lazy(() => import('./pages/Home/home.controller'))
const Busca = lazy(() => import('./view/busca/Busca'))

const Routes = () =>  (
    <Suspense fallback={<div className='mt-5 pt-5'><ProgressBar/></div>}>
        <Switch>
            <Route path="/cadastro" component={RegisterContent}/>
            <Route path="/busca" component={Busca}/>
            <Route path="/inicio" component={Home}/>
            <Route path="/" component={Home}/>
        </Switch>
    </Suspense>
)

export default Routes;
