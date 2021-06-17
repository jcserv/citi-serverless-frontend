import { getRequest, postRequest } from "./index";

export async function createUser({ id, email, name, portfolio, tolerance }) {
    const body = {
        id,
        email,
        name,
        portfolio,
        tolerance
    };
    try {
        const res = await postRequest("stocks/new", body);
        return res.data;
    } catch (e) {
        return {
            status: e.response && e.response.status,
            message: e.response && e.response.data,
        };
    }
}

export async function getStocks({ userId }) {
    try {
        const res = await getRequest(`stocks/${userId}`);
        return res.data;
    } catch (e) {
        return {
            status: e.response && e.response.status,
            message: e.response && e.response.data,
        };
    }
}

export async function getList() {
    try {
        const res = await getRequest("stocks/list");
        return res.data;
    } catch (e) {
        return {
            status: e.response && e.response.status,
            message: e.response && e.response.data,
        };
    }
}