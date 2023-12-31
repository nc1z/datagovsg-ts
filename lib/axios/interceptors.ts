import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { IApiError } from '../types/api'
import { AuthenticationError, AuthorizationError, BadRequestError, NotFoundError, UnexpectedError } from '../errors'

export function handleClientRequest(config: InternalAxiosRequestConfig) {
    return config
}

export function handleClientResponse(config: AxiosResponse<unknown, unknown>) {
    return config
}

export function handleClientError(error: AxiosError<IApiError<IApiError<unknown>>>): void {
    switch (error.response?.status) {
        case 400:
            throw new BadRequestError(error.message, error.response?.data)
        case 401:
            throw new AuthenticationError(error.message, error.response?.data)
        case 403:
            throw new AuthorizationError(error.message, error.response?.data)
        case 404:
            throw new NotFoundError(error.message)
        default:
            throw new UnexpectedError(error.message)
    }
}
