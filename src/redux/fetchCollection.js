import axios from "axios";

const base_url = process.env.REACT_APP_API_ENDPOINT;

export const fetchCollection = async (payload) => {
    try {
        let data = JSON.stringify(payload);
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await axios.post(base_url + "/corporate/query-data-items", data, { headers });
        return response.data.data.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const fetchCollectionSp = async (payload) => {
    try {
        let data = JSON.stringify(payload);
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await axios.post(base_url + "/corporate/query-data-items-excludeditems", data, { headers });
        return response.data.data.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const fetchBlogTags = async (payload) => {
    try {
        let data = JSON.stringify(payload);
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await axios.post(base_url + "/corporate/blog-tags", data, { headers });
        return response.data.data.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const postForm = async (name, payload) => {
    try {
        let data = JSON.stringify(payload);
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await axios.post(base_url + "/corporate/post-data/" + name, data, { headers });
        return response.data.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getInstaFeed = async () => {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await axios.get(base_url + "/corporate/instagram/feeds", { headers });
        return response.data.data;
    } catch (error) {
        throw new Error(error.message);
    }
}
