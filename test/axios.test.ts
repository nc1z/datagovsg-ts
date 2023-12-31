import axios, { AxiosInstance } from 'axios'
import { getRequest } from '../lib/axios'

jest.mock('axios', () => {
    const clientMock: Partial<AxiosInstance> = {
        get: jest.fn(),
        post: jest.fn(),
        patch: jest.fn(),
        put: jest.fn(),
        delete: jest.fn(),
        interceptors: {
            request: {
                use: jest.fn(),
                eject: jest.fn(),
                clear: jest.fn(),
            },
            response: {
                use: jest.fn(),
                eject: jest.fn(),
                clear: jest.fn(),
            },
        },
    }

    return {
        create: () => clientMock,
        clientMock,
    }
})

describe('axios', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    const clientMock: Partial<AxiosInstance> = (axios as any).clientMock

    describe('GET', () => {
        test('successful request', async () => {
            const mockResponse = { some: 'test data' }

            const mockRequest = clientMock.get as jest.Mock
            mockRequest.mockResolvedValue({ status: 200, data: mockResponse })

            const data = await getRequest<Record<string, string>>('some://mock.url', { mock: 'request' })

            expect(clientMock.get).toHaveBeenCalledTimes(1)
            expect(clientMock.get).toHaveBeenCalledWith('some://mock.url', {
                params: {
                    mock: 'request',
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            expect(data).toEqual(mockResponse)
        })
    })
})
