import { IApiError } from '../types/api'

abstract class ErrorBase<T = unknown> implements Error {
    constructor(
        public name: string,
        public message: string,
        public error?: IApiError<T>,
    ) {}
}

export class AuthenticationError<T> extends ErrorBase {
    constructor(message: string, error?: IApiError<T>) {
        super('AuthenticationError', message, error)
    }
}

export class AuthorizationError<T> extends ErrorBase {
    constructor(message: string, error?: IApiError<T>) {
        super('AuthorizationError', message, error)
    }
}

export class BadRequestError<T> extends ErrorBase {
    constructor(message: string, error?: IApiError<T>) {
        super('BadRequestError', message, error)
    }
}

export class NotFoundError<T> extends ErrorBase {
    constructor(message: string, error?: IApiError<T>) {
        super('NotFoundError', message, error)
    }
}

export class UnexpectedError<T> extends ErrorBase {
    constructor(message: string, error?: IApiError<T>) {
        super('UnexpectedError', message, error)
    }
}
