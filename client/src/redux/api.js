import axios from "axios"
const api = axios.create({
    // baseURL: "https://eriosbooking-production.up.railway.app/api",
    // baseURL: "https://eriosbooking-e2oinmw9f-sanketshejul76.vercel.app/?vercelToolbarCode=AdyPpi44BD5CxmB",
    baseURL: "https://defiant-baseball-cap-ox.cyclic.app/api",
    // baseURL: "http://localhost:5000/api",
    withCredentials: true
})
export default api