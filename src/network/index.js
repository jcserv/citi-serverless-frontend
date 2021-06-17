import axios from "axios";

const enforceTrailingSlash = url => {
    return url.endsWith("/") ? url : url + "/";
};

export const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:4000/";

export const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

export function getRequest(uri, searchParams) {
    const params = searchParams ? searchParams : "";
    console.log(`${serverUrl}${uri}`);
    return axios.get(enforceTrailingSlash(`${serverUrl}${uri}`) + params, config);
}

export function deleteRequest(uri) {
    return axios.delete(enforceTrailingSlash(`${serverUrl}${uri}`), config);
}

export function patchRequest(uri, data) {
    return axios.patch(enforceTrailingSlash(`${serverUrl}${uri}`), data, config);
}

export function postRequest(uri, data) {
    return axios.post(enforceTrailingSlash(`${serverUrl}${uri}`), data, config);
}