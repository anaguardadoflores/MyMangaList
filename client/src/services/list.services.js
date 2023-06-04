import axios from 'axios'

class ListServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/list`

        })
    }

    getAllList() {
        return this.api.get('/getAllList')
    }
}

const listServices = new ListServices()

export default listServices