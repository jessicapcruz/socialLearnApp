import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import { PrivateRoute } from './PrivateRoute';

const Login = lazy(() => import('./pages/Login/login.controller'));
const ContentList = lazy(() => import('./pages/Register/Content/contentList.controller'));
const ContentEdit = lazy(() => import('./pages/Register/Content/contentAdd.controller'));
const UserRegister = lazy(() => import('./pages/Register/User/RegisterController'));
const Home = lazy(() => import('./pages/Home/home.controller'))
const Busca = lazy(() => import('./pages/Busca/BuscaController'))
const Recover = lazy(() => import('./pages/RecoverPassword/recoverPass.controller'))

const Routes = () =>  (
    <Suspense fallback={<div className='mt-5 pt-5'><ProgressBar/></div>}>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/user-add" component={UserRegister}/>
            <Route exact path="/recover-pass" component={Recover}/>
            <Route exact path="/inicio" component={Home}/>
            <Route exact path="/" component={Home}/>
            <PrivateRoute exact path="/content-list" component={ContentList}/>
            <PrivateRoute exact path="/content-edit" component={ContentEdit}/>
            <PrivateRoute exact path="/busca" component={Busca}/>
        </Switch>
    </Suspense>
)

export default Routes;
