import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';

const Login = lazy(() => import('./pages/Login/login.controller'));
const ContentList = lazy(() => import('./pages/Register/Content/contentList.controller'));
const ContentEdit = lazy(() => import('./pages/Register/Content/contentAdd.controller'));
const UserRegister = lazy(() => import('./pages/Register/RegisterController'));
const Home = lazy(() => import('./pages/Home/home.controller'))
const Busca = lazy(() => import('./pages/Busca/BuscaController'))
const Recover = lazy(() => import('./pages/RecoverPassword/recoverPass.controller'));

const Routes = () =>  (
    <Suspense fallback={<div className='mt-5 pt-5'><ProgressBar/></div>}>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/user-add" component={UserRegister}/>
            <Route path="/content-list" component={ContentList}/>
            <Route exact path="/content-edit" component={ContentEdit}/>
            <Route path="/recover-pass" component={Recover}/>
            <Route path="/busca" component={Busca}/>
            <Route path="/inicio" component={Home}/>
            <Route path="/" component={Home}/>
        </Switch>
    </Suspense>
)

export default Routes;
