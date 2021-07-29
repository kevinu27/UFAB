import axios from 'axios'

class AuthService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/auth`,
            withCredentials: true
        })
    }

    login = (email, pwd) => this.app.post('/login', { email, pwd })
    signup = (name, surname, pwd, email, description) => this.app.post('/signup', { name, surname, pwd, email, description })
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isLoggedIn')
}

export default AuthService