import axios from 'axios'

class UserService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/user',
            withCredentials: true
        })
    }

    login = (email, pwd) => this.app.post('/login', { email, pwd })
    signup = (name, surname, pwd, email) => this.app.post('/signup', { name, surname, pwd, email })
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isLoggedIn')
    editUser = (id, user) => this.app.put(`/${id}`, user)
    getById = (id) => this.app.get(`/${id}`)
    getAll = () => this.app.get('/')

}

export default UserService