import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import ArticleDetail from './ArticleDetail';
import App from './App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AdminSignIn from './AdminSignIn';
import SearchCoffee from './SearchCoffee';
import ArticleList from './ArticleList';
import CoffeeDetail from './CoffeeDetail';
import LoginNavbar from './LoginNavbar';
import AdminHome from './AdminHome';
import AdminArticles from './AdminArticles';
import AdminArticleCreate from './AdminArticleCreate';
import AdminUsers from './AdminUsers';
import AdminTrivia from './AdminTrivia';
import Verification from './Verification';
import AdminArticleEdit from './AdminArticleEdit';
import AboutUs from './AboutUs';
import UserDashboard from './UserDashboard';
import Help from './Help';
import Autocomplete from './Autocomplete';

import * as serviceWorker from './serviceWorker';
import ForgotPassword from './ForgotPassword';

//NINETYSEVEN SOFTWARE DEV BROO WADDUP
ReactDOM.render(
  <Router>
      <Switch>
        
        <Route path="/article/:id" exact={true} component={ArticleDetail} />
        <Route path="/coffee/:id" exact={true} component={CoffeeDetail} />
        <Route path="/user" exact={true} component={UserDashboard} />
        <Route path="/signin" exact={true} component={SignIn} />
        <Route path="/admin" exact={true} component={AdminSignIn} />
        <Route path="/about" exact={true} component={AboutUs} />
        <Route path="/help" exact={true} component={Help} />
        <Route path="/signup" exact={true} component={SignUp} />
        <Route path="/search" exact={true} component={SearchCoffee} />
        <Route path="/articles" exact={true} component={ArticleList} />
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/nav" exact={true} component={LoginNavbar} />
        <Route path="/admin/dashboard" exact={true} component={AdminHome} />
        <Route path="/admin/articles" exact={true} component={AdminArticles} />
        <Route path="/admin/articles/create" exact={true} component={AdminArticleCreate} />
        <Route path="/admin/articles/edit/:id" exact={true} component={AdminArticleEdit} />
        <Route path="/admin/users" exact={true} component={AdminUsers} />
        <Route path="/admin/trivias" exact={true} component={AdminTrivia} />
        <Route path="/auto" exact={true} component={Autocomplete} />
        <Route path="/verification/:id" exact={true} component={Verification} />
        <Route path="/forget/:id" exact={true} component={ForgotPassword} />
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
