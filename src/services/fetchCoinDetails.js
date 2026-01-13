import axiosInstance from "../helpers/axiosIntance";

export async function fecthCoinDetails(id) {

    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        return response.data;

    } catch (error) {
        console.error('Error');
        return null;
    }
};