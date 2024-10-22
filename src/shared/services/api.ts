import axios from 'axios'


const instance = axios.create(
    {
        baseURL: 'http://localhost:3000/v1/',
        timeout: 40000,
        headers: {
            Accept: 'application/json'
        }
    }
)

export const fetcher = (url: string) => {
    return instance.get(url).then((res) => {
        if (!res.data) {
            throw Error(res.data.message)
        }
        return res.data;
    })
}

export default instance;