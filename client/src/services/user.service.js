import axios from 'axios'

class UserService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.production.REACT_APP_BASE_URL}/user`,
            withCredentials: true
        })
    }

    login = (email, pwd) => this.app.post('/login', { email, pwd })
    signup = (name, surname, pwd, email, description) => this.app.post('/signup', { name, surname, pwd, email, description })
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isLoggedIn')
    ////-------------------------------------------user
    editUser = (id, user) => this.app.put(`/${id}`, user)
    getById = (id) => this.app.get(`/${id}`)
    getAll = () => this.app.get('/')

}

export default UserService