
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './layout/Navigation/Navigation'
import Footer from './layout/Foooter/Footer'
import Routes from './Routes'
import { Component } from 'react';
import UserService from '../services/user.service';

class App extends Component {

  constructor() {
    super()
    this.state = { loggedUser: false }
    this.userService = new UserService()
  }


  storeUser = loggedUser => this.setState({ loggedUser })

  fetchUser = () => {
    this.userService
      .isLoggedIn()
      .then(theLoggedUser => this.storeUser(theLoggedUser.data))
      .catch(() => this.storeUser(undefined))
  }

  componentDidMount = () => this.fetchUser()

  render() {


    return (
      <>
        <Navigation storeUser={this.storeUser} loggedUser={this.state.loggedUser} />
        <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser} />
        <Footer />
      </>
    )
  }
}

export default App;
