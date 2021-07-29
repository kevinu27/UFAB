import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from './../pages/IndexPage/IndexPage'
import JobsPage from './../pages/JobsPage/JobsPage'
import JobDetails from '../pages/JobsPage/JobDetails'
import JobForm from '../pages/JobsPage/JobForm'
import Profile from '../pages/Profile/Profile'
import Signup from '../pages/Signup/Signup'
import Login from './../pages/Login/Login'
import UserProfile from '../pages/Profile/UserProfile'

const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/jobs" exact render={() => loggedUser ? <JobsPage loggedUser={loggedUser} /> : <Redirect to="/" />} />
            <Route path='/detail/:job_id' render={props => loggedUser ? <JobDetails {...props} loggedUser={loggedUser} /> : <Redirect to="/" />} />
            <Route path='/jobs/crear' render={props => loggedUser ? <JobForm {...props} /> : <Redirect to="/" />} />
            <Route path='/user/signup' render={props => <Signup {...props} />} />
            <Route path='/user/login' render={props => <Login {...props} storeUser={storeUser} />} />
            <Route path='/mi-perfil/:id' render={props => loggedUser ? <Profile loggedUser={loggedUser} {...props} /> : <Redirect to="/" />} />
            <Route path='/perfil-de-usuario/:id' render={props => loggedUser ? <UserProfile loggedUser={loggedUser} {...props} /> : <Redirect to="/" />} />
        </Switch>
    )
}

export default Routes