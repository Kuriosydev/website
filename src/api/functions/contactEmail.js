import { post } from "../lib/apiMethods";
import { emailAxiosInstance } from "../lib/axiosInstance";



export const contactEmail = async (data) => {
    try {
        const response = await post("", data, {}, emailAxiosInstance);
        return response;
    } catch (error) {
        console.error(`POST ${url} failed:`, error)
        throw error
    }
}