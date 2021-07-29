import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import UserService from '../../../services/user.service'
import Marcador from './Marcador'

class MapUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: undefined,
            lat: undefined,
            lng: undefined
        }
        this.userService = new UserService()
    }

    componentDidMount = () => {
        this.userService
            .getAll()
            .then(response => this.setState({ users: response.data }))
            .catch(err => console.log(err))
    }

    static defaultProps = {
        center: {
            lat: 28.092381,
            lng: -15.464042
        },
        zoom: 12
    };

    handleClick(event) {
        this.setState({
            lat: event.lat,
            lng: event.lng
        })

        this.props.handleMarkerPosition({
            lat: event.lat,
            lng: event.lng
        })
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAiWoZMeyUtielp3mdwvhIbbcddZkfUMtU" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onClick={(e) => this.handleClick(e)}
                >
                    <Marcador
                        onClick={this.onClick}
                        lat={this.state.lat}
                        lng={this.state.lng}
                        text='mi marcador'
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapUser;
