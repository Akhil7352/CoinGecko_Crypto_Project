import axiosInstance from "../helpers/axiosIntance";

export async function fetchCoinDetails() {

    try {
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
        return response.data;

    } catch (error) {
        console.error('Error');
        return null;
    }
} 