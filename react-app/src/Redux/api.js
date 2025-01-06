import axios from 'axios';

const fetchDataFromApi = async ({
    method,
    url,
    path,
    qParams,
    payload
}) => {
    const trimmedUrl = url.endsWith('/') ? url.slice(0, -1) : url;
    const trimmedPath = path.startsWith('/') ? path.slice(1) : path;
    let fullUrlString = `${trimmedUrl}/${trimmedPath}`;

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