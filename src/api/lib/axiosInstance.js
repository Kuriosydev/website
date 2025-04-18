import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const emailAxiosInstance = axios.create({
    baseURL: "https://script.google.com/macros/s/AKfycbzBIplB3qZWI0wKdtInoRAKTvteP2mAZ2WgqbxAicz4diKYsfKg0AdfDUCb8Creag_Ueg/exec",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Optional: Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

// Optional: Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle global errors like 401, 500, etc.
        return Promise.reject(error)
    }
)

