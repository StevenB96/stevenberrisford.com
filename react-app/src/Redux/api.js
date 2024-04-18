import axios from 'axios';

const fetchDataFromApi = async ({
    method,
    url,
    path,
    qParams,
    payload
}) => {
    let fullUrlString = url + path;
    if (qParams?.length > 0) {
        fullUrlString += `?${qParams.map((param) => `${param.key}=${param.value}`).join('&')}`;
    }
    try {
        const config = {
            method: method,
            url: fullUrlString,
            data: payload,
        };
        const response = await axios(config);
        return response.data;
    } catch (error) {
    }
};

export { fetchDataFromApi };