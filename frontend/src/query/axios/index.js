import axios from "axios";

export const linkedinURL = axios.create(
    {
        baseURL: "https://localhost:8000/"
    }
)