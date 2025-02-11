import axios from "axios";
import {STIRUP_API} from "@env"
const api = axios.create({
    baseURL:STIRUP_API
})
export default api