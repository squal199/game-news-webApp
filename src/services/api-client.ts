import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "79a44fd4a8e94cc3ac2528f78d32e4b8"
    }
})