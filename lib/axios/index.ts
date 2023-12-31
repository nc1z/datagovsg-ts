import axios, { AxiosResponse } from 'axios'
import { BASE_URL } from '../constants'
import { handleClientError, handleClientRequest, handleClientResponse } from './interceptors'

const client = axios.create({
    baseURL: BASE_URL,
})

client.interceptors.request.use(handleClientRequest)
client.interceptors.response.use(handleClientResponse, handleClientError)

export async function getRequest<T>(url: string, params?: unknown, headers: Record<string, string> = {}): Promise<T> {
    const response = await client.get<T, AxiosResponse<T>>(url, {
        params,
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
    })
    return response.data
}

export async function postRequest<T = unknown, D = unknown>(
    url: string,
    headers: Record<string, string>,
    data: D,
): Promise<T> {
    const response = await client.post<T, AxiosResponse<T>, D>(url, data, {
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        formSerializer: {
            indexes: null,
            metaTokens: false,
        },
    })
    return response.data
}

export async function patchRequest<T, D>(url: string, headers: Record<string, string>, data: D): Promise<T> {
    const response = await client.patch<T, AxiosResponse<T>, D>(url, data, {
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
    })
    return response.data
}

export async function putRequest<T = unknown, D = unknown>(
    url: string,
    headers: Record<string, string>,
    data?: D,
): Promise<T> {
    const response = await client.put<T, AxiosResponse<T>, D>(url, data, {
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
    })
    return response.data
}

export async function deleteRequest<T>(url: string, params?: unknown): Promise<T> {
    const response = await client.delete<T, AxiosResponse<T>>(url, {
        params,
    })
    return response.data
}
