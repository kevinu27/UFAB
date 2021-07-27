import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserService from '../../../services/user.service'

const Navigation = ({ storeUser, loggedUser }) => {

    const userService = new UserService()
    const logout = () => {

        userService
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))

    }
    console.log(loggedUser)
    return (
        <Navbar bg="dark" variant="dark" expand="md" style={{ marginBottom: '30px' }}>
            <Navbar.Brand href="#home">UFAB</Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Inicio</Link>
                    {!loggedUser ?
                        <>
                            <Link className="nav-link" to="/user/signup">Registro de usuario</Link>
                            <Link className="nav-link" to="/user/login">Inicio de sesión</Link>

                        </>

                        :
                        <>
                            <Link className="nav-link" to="/jobs">Tus peticiones</Link>
                            <Link className="nav-link" to={`/mi-perfil/${loggedUser._id}`}>Perfil</Link>
                            <span className="nav-link" onClick={() => logout()}>Cerrar sesión</span>
                        </>
                    }
                    <span className="nav-link" > {loggedUser ? 'Hola,' + loggedUser.name : ''}</span>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation