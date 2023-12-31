import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { IApiError } from '../lib/types/api'

export const mockConfig = { headers: {} } as InternalAxiosRequestConfig

export const mockResponse200: AxiosResponse = {
    status: 200,
    data: {},
    statusText: '',
    headers: {
        server: '',
    },
    config: mockConfig,
}

export const mockResponse400: AxiosError<IApiError<IApiError<unknown>>, any> = {
    response: {
        status: 400,
        data: {
            error: {
                status: undefined,
                name: undefined,
                details: undefined,
                message: undefined,
            },
        },
        statusText: '',
        headers: {},
        config: mockConfig,
    },
    message: 'Bad request',
    isAxiosError: false,
    toJSON: () => ({}),
    name: '',
}

export const mockResponse401: AxiosError<IApiError<IApiError<unknown>>, any> = {
    response: {
        status: 401,
        data: {
            error: {
                status: undefined,
                name: undefined,
                details: undefined,
                message: undefined,
            },
        },
        statusText: '',
        headers: {},
        config: mockConfig,
    },
    message: 'Authentication error',
    isAxiosError: false,
    toJSON: () => ({}),
    name: '',
}

export const mockResponse402: AxiosError<IApiError<IApiError<unknown>>, any> = {
    response: {
        status: 402,
        data: {
            error: {
                status: undefined,
                name: undefined,
                details: undefined,
                message: undefined,
            },
        },
        statusText: '',
        headers: {},
        config: mockConfig,
    },
    message: 'Unexpected error',
    isAxiosError: false,
    toJSON: () => ({}),
    name: '',
}

export const mockResponse403: AxiosError<IApiError<IApiError<unknown>>, any> = {
    response: {
        status: 403,
        data: {
            error: {
                status: undefined,
                name: undefined,
                details: undefined,
                message: undefined,
            },
        },
        statusText: '',
        headers: {},
        config: mockConfig,
    },
    message: 'Authorization error',
    isAxiosError: false,
    toJSON: () => ({}),
    name: '',
}

export const mockResponse404: AxiosError<IApiError<IApiError<unknown>>, any> = {
    response: {
        status: 404,
        data: {
            error: {
                status: undefined,
                name: undefined,
                details: undefined,
                message: undefined,
            },
        },
        statusText: '',
        headers: {},
        config: mockConfig,
    },
    message: 'Not found',
    isAxiosError: false,
    toJSON: () => ({}),
    name: '',
}
