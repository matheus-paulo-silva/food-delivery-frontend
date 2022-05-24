import axios from "axios";
import md5 from "js-md5";

export const client = () => {
    const PUBLIC_KEY = "f8e0d2f09b48c6374187bce75cfca23e"
    const PRIVATE_KEY = "053c4c859e57fac25959362331e0d8d9490d6c3c"
    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

    const defaultOptions = {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        },
    }
    return {
        get: (url: string, options = {}) => axios.get((url + `?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`), { ...defaultOptions, ...options }),
        post: (url: string, data: any, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
        put: (url: string, data: any, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
        patch: (url: string, data: any, options = {}) => axios.patch(url, data, { ...defaultOptions, ...options }),
        delete: (url: string, options = {}) => axios.delete(url, { ...defaultOptions, ...options })
    }
}

export const baseUrl = 'https://gateway.marvel.com'