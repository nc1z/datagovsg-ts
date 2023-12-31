export interface IApiError<T = unknown> {
    error: {
        status?: number
        name?: string
        details?: T
        message?: string
    }
    message?: string
}
