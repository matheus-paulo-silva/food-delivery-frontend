import { client, baseUrl } from "../../../shared/http-service";



const api = {
    getComics: (params: object) => {
        return new Promise<any>((resolve, reject) => {
            return client()
                .get(`${baseUrl}/v1/public/comics`, { params })
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    },
    getComicsById: (comicsId: number) => {
        return new Promise<any>((resolve, reject) => {
            return client()
                .get(`${baseUrl}/v1/public/comics/${comicsId}`)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    },
    getComicsStories: (comicsId: number) => {
        return new Promise<any>((resolve, reject) => {
            return client()
                .get(`${baseUrl}/v1/public/comics/${comicsId}/stories`)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    },

}


export default api