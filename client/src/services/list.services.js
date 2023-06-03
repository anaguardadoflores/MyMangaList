import axios from 'axios'

class ListServices {

    constructor() {
        this.api = axios.create({
            baseURL: 'mongodb+srv://anaguflo:aVtRuXr17oNKh091@manga.r5bj12t.mongodb.net/'
        })
    }

    getAllList() {
        return this.api.get('/')
    }
}

const listServices = new ListServices()

export default listServices