import axios from 'axios'

class ListServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/list`
        })
    }

    createList(id, show) {
        return this.api.post(`/${id}/createList`, show)
    }

    editGet(id) {
        return this.api.get(`/${id}/edit`)
    }

    editPost(userData, id) {
        return this.api.post(`/${id}/edit`, userData)
    }

    saveManga(id, listData) {
        return this.api.post(`/${id}/saveManga`, listData)
    }

    delete(id) {
        return this.api.post(`/${id}/delete`)
    }
}

const listServices = new ListServices()

export default listServices