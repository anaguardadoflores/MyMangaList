const axios = require('axios')

class MangaService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.jikan.moe/v4/manga'
        })
    }

    getAllMangas() {
        return this.api.get('/')
    }

    findById(manga_id) {
        return this.api.get(`/${manga_id}`)
    }

    getOneManga(manga_id) {
        return new Promise((resolve, reject) => {
            axios
                .get(`/api/manga/${manga_id}`)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
        });
    }
}

const mangaService = new MangaService()

module.exports = mangaService