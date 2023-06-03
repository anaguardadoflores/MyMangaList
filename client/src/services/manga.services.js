import axios from 'axios'

class MangaService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/mangas`
        })
    }

    getAllMangas() {
        return this.api.get('/getAllMangas')
    }

    findById(manga_id) {
        return this.api.get(`/getManga/${manga_id}`)
    }

}

const mangaService = new MangaService()

export default mangaService