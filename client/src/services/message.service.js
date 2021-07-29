import axios from 'axios'

class MessageService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_UR}/message`,
            withCredentials: true
        })
    }


    createMessage = message => this.app.post('/newMessage', message)
    getMessage = message => this.app.get('/messages', message)


}

export default MessageService