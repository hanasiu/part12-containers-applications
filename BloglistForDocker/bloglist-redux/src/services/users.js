import axios from 'axios'
import { BACKEND_URL } from '../utils/config'
const baseUrl = `${BACKEND_URL}/users`

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default { getAll }
