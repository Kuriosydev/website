// lib/apiClient.js
import { axiosInstance } from './axiosInstance'

export const apiRequest = async (method, url, data = {}, config = {}, customAxios = axiosInstance) => {
    try {
        const { params, body } = data

        const response = await customAxios({
            method,
            url,
            data: body,
            params,
            ...config,
        })

        return response.data
    } catch (error) {
        throw error?.response?.data || error
    }
}
