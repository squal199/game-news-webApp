import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5b39e47aae7d43dfa8455de813a68bc8"
    }
})