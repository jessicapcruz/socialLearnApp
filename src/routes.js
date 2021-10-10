import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';

const Login = lazy(() => import('./pages/Login/login.controller'));
const ContentList = lazy(() => import('./pages/Register/Content/contentList.controller'));
const ContentEdit = lazy(() => import('./pages/Register/Content/contentAdd.controller'));
const Home = lazy(() => import('./pages/Home/home.controller'));
const Busca = lazy(() => import('./view/busca/Busca'));

const Routes = () =>  (
    <Suspense fallback={<div className='mt-5 pt-5'><ProgressBar/></div>}>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/content-list" component={ContentList}/>
            <Route exact path="/content-edit" component={ContentEdit}/>
            <Route path="/busca" component={Busca}/>
            <Route path="/inicio" component={Home}/>
            <Route path="/" component={Home}/>
        </Switch>
    </Suspense>
)

export default Routes;
