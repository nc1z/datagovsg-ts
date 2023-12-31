import { handleClientError, handleClientRequest, handleClientResponse } from '../lib/axios/interceptors'
import { AuthenticationError, AuthorizationError, BadRequestError, NotFoundError, UnexpectedError } from '../lib/errors'
import {
    mockConfig,
    mockResponse200,
    mockResponse400,
    mockResponse401,
    mockResponse402,
    mockResponse403,
    mockResponse404,
} from './mocks'

describe('Axios Interceptors', () => {
    describe('handleAxiosRequest', () => {
        test('should return the provided configuration', () => {
            expect(handleClientRequest(mockConfig)).toEqual(mockConfig)
        })
    })

    describe('handleClientResponse', () => {
        test('should return the provided response', () => {
            expect(handleClientResponse(mockResponse200)).toEqual(mockResponse200)
        })
    })

    describe('handleClientError', () => {
        test('should throw BadRequestError for status 400', () => {
            expect(() => {
                handleClientError(mockResponse400)
            }).toThrow(BadRequestError)
        })
        test('should throw AuthenticationError for status 401', () => {
            expect(() => {
                handleClientError(mockResponse401)
            }).toThrow(AuthenticationError)
        })
        test('should throw AuthorizationError for status 403', () => {
            expect(() => {
                handleClientError(mockResponse403)
            }).toThrow(AuthorizationError)
        })
        test('should throw NotFoundError for status 404', () => {
            expect(() => {
                handleClientError(mockResponse404)
            }).toThrow(NotFoundError)
        })
        test('should throw UnexpectedError for any other status codes', () => {
            expect(() => {
                handleClientError(mockResponse402)
            }).toThrow(UnexpectedError)
        })
    })
})
