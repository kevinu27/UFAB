import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import JobForm from '../../../components/pages/JobsPage/JobForm'
import JobService from './../../../services/jobs.service'
import UserService from '../../../services/user.service'

// const UserProfile = ({ id, loggedUser }) => {

class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: undefined

        }
        this.userService = new UserService()
    }

    componentDidMount = () => {
        this.userService
            .getById(this.props.match.params.id)
            .then(response => this.setState({ user: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        this.state.user && console.log("response.data", this.state.user)
        return (
            <>
                {/* {response.data} */}
                <div>
                    <p> Nombre: {this.state.user && this.state.user.name} </p>
                    <p> Máquinas: {this.state.user && this.state.user.machines} </p>
                    <p> Descripción: {this.state.user && this.state.user.description} </p>
                </div>

                {
                    this.props.loggedUser &&
                    <JobForm sender={this.props.loggedUser && this.props.loggedUser._id} receiver={this.props.match.params.id} {...this.props} />
                }
            </>

        )
    }

}





export default UserProfile