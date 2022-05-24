import { client, baseUrl } from "../../../shared/http-service";



const api = {
    characters: ( params: object ) => {
        return new Promise<any>((resolve, reject) => {
            return client()
            .get(`${baseUrl}/v1/public/characters`, { params })
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        })  
    }
}


export default api