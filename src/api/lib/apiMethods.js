// lib/apiMethods.js
import { apiRequest } from './apiClient'
import { axiosInstance } from './axiosInstance'

export const get = async (url, data = {}, config = {}, customAxios = axiosInstance) => {
    try {
        return await apiRequest('get', url, data, config, customAxios)
    } catch (error) {
        console.error(`GET ${url} failed:`, error)
        throw error
    }
}

export const post = async (url, data = {}, config = {}, customAxios = axiosInstance) => {
    try {
        return await apiRequest('post', url, data, config, customAxios)
    } catch (error) {
        console.error(`POST ${url} failed:`, error)
        throw error
    }
}

export const put = async (url, data = {}, config = {}, customAxios = axiosInstance) => {
    try {
        return await apiRequest('put', url, data, config, customAxios)
    } catch (error) {
        console.error(`PUT ${url} failed:`, error)
        throw error
    }
}

export const patch = async (url, data = {}, config = {}, customAxios = axiosInstance) => {
    try {
        return await apiRequest('patch', url, data, config, customAxios)
    } catch (error) {
        console.error(`PATCH ${url} failed:`, error)
        throw error
    }
}

export const del = async (url, data = {}, config = {}, customAxios = axiosInstance) => {
    try {
        return await apiRequest('delete', url, data, config, customAxios)
    } catch (error) {
        console.error(`DELETE ${url} failed:`, error)
        throw error
    }
}
