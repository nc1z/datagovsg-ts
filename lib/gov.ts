import { client, getRequest } from './axios'
import { route } from './routes'

export class GovDataSource {
    constructor(apiKey: string) {
        client.defaults.headers.common.Authorization = `Bearer ${apiKey}`
    }

    async getTaxiAvailability(dateTime?: string) {
        return await getRequest(route.TAXI_AVAILABILITY, {
            dateTime,
        })
    }

    async getCarparkAvailability(dateTime?: string) {
        return await getRequest(route.CARPARK_AVAILABILITY, {
            dateTime,
        })
    }

    async getTrafficImages(dateTime?: string) {
        return await getRequest(route.TRAFFIC_IMAGES, {
            dateTime,
        })
    }
}
