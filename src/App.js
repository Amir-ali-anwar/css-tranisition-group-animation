import React from 'react'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import PrivateComponent from './components/PrivateComponent'
import ProtectedRoutes from './ProtectedRoutes'
import useAuth from './useAuth'    
const App = () => {
    const [isAuth,login,logout]=useAuth(true);
    return (
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/dashboard">DashBoard</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={ComponentA}></Route>
                    <Route path="/about" component={ComponentB}></Route>
                    <ProtectedRoutes auth={isAuth} path="/dashboard" component={PrivateComponent}></ProtectedRoutes>
                </Switch>
            </Router>
           )
}

export default App
