import axios from "axios";

export const createAPI = () => {
    const api = axios.create({
        baseURL: `https://front-test.beta.aviasales.ru`,
        timeout: 1000 * 5,
    });

    const onSuccess = (response) => {
        return response;
    };

    const onFail = (err) => {
        throw err;
    };

    api.interceptors.response.use(onSuccess, onFail);

    return api;
};
