
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import UserService from '../../../services/user.service'
import Marcador from './Marcador'
import InfoWindow2 from './InfoWindow2';



class SimpleMap extends Component {


    constructor() {
        super()
        this.state = {
            users: undefined,
            show: false,
            infoWindowPosition: {
                lat: null,
                lng: null,
            }
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

    _onChildClick = (key, childProps) => {
        this.setState({
            ...this.state,
            show: !this.state.show,
            infoWindowPosition: {
                lat: childProps.lat,
                lng: childProps.lng

            },
            infoWindowData: this.state.users[key]
        })
    }

    handleClick(event) {
        this.setState({
            ...this.state,
            show: false,
            infoWindowPosition: {
                lat: null,
                lng: null
            }
        })
    }

    render() {
        return (
            !this.state.users
                ?
                <h1>Cargando...</h1>
                :
                <div style={{ height: '100vh', width: '100%' }} >
                    <GoogleMapReact

                        bootstrapURLKeys={{ key: "AIzaSyAiWoZMeyUtielp3mdwvhIbbcddZkfUMtU" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        onChildClick={this._onChildClick}
                        onClick={(e) => this.handleClick(e)}

                    >


                        {this.state.users && this.state.users.map(elm => elm.location && <Marcador
                            onLoad={this.onLoad}
                            lat={elm.location.coordinates[0]}
                            lng={elm.location.coordinates[1]}
                            text={elm.email}
                        />
                        )}

                        <InfoWindow2 user={this.state.infoWindowData} show={this.state.show} lat={this.state.infoWindowPosition?.lat} lng={this.state.infoWindowPosition?.lng} />


                    </GoogleMapReact>
                </div>
        );
    }
}

export default SimpleMap;
