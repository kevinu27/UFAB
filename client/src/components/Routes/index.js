import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from './../pages/IndexPage/IndexPage';
import JobsPage from './../pages/JobsPage/JobsPage'
import JobDetails from '../pages/JobsPage/JobDetails';
import JobForm from '../pages/JobsPage/JobForm'
import Profile from '../pages/Profile/Profile'
import Signup from '../pages/Signup/Signup'
import Login from './../pages/Login/Login'


const Routes = ({ storeUser, loggedUser }) => {

    return (

        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/jobs" exact render={() => <JobsPage loggedUser={loggedUser} />} />
            <Route path='/detail/:job_id' render={props => <JobDetails {...props} />} />
            <Route path='/jobs/crear' render={props => <JobForm {...props} />} />
            <Route path='/user/signup' render={props => <Signup {...props} />} />
            <Route path='/user/login' render={props => <Login {...props} storeUser={storeUser} />} />
            <Route path='/mi-perfil/:id' render={props => loggedUser ? <Profile loggedUser={loggedUser} {...props} /> : <Redirect to="/" />} />
            {/* <Route path='/mi-perfil' render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/" />} /> */}
        </Switch>

    )

}

export default Routes