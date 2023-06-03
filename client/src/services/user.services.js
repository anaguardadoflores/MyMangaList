import axios from 'axios'

class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
        })
    }

    editGet(id) {
        return this.api.get(`/${id}/edit`)
    }

    editPost(userData, id) {
        return this.api.post(`/${id}/edit`, userData)
    }

    delete(id) {
        return this.api.post(`/${id}/delete`)
    }
}

const userService = new UserService()

export default userService