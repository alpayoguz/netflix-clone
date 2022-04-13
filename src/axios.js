import axios  from "axios";


//It will be our base url. we created this variable because we will send request this url all the time
const instance = axios.create(
    {
        baseURL: "https://api.themoviedb.org/3"
    }
)


export default instance



