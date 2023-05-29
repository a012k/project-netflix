import axios from "axios";

//used for create intance(in object type and give key as base url)

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default instance