import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserService from '../../../services/user.service'
import './navigations.css'

const Navigation = ({ storeUser, loggedUser }) => {
    const userService = new UserService()
    const logout = () => {

        userService
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))
    }

    return (
        <>  <Navbar bg="light" variant="text-dark" expand="md" style={{ marginBottom: '30px' }}>
            <Navbar.Brand href="#home" className="navigations"><strong>UFAB</strong></Navbar.Brand>
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
        </Navbar>
        </>
    )
}

export default Navigation