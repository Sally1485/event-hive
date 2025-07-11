import axios from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});


// fetching data
export const apiFetcher = async (url) => {
    const response = await apiClient.get(url);
    return response.data;
}

export const imageBaseURl = import.meta.env.VITE_IMAGE_BASE_URL;