# Typescript wrapper for public SG transport APIs

A simple unofficial ts wrapper for easy integration with real-time transport-related data.gov.sg public APIs

> ! Work in progress, the below instructions do not work for now

> An API key is required, and is currently not obtainable via https://developers.data.gov.sg/

## Getting started

In your project, run:

```bash
npm i node-sg-transport
```

To get started, create a new instance of the wrapper, using your `API KEY`

```ts
import { GovDataSource } from 'node-sg-transport'

const client = new GovDataSource('your-api-key')
```

## Usage

```ts
// Get taxi availability
const taxiAvailability = await client.getTaxiAvailability()

// Get carpark availability
const carparkAvailability = await client.getCarparkAvailability()

// Get traffic images
const images = await client.getTrafficImages()
```

## Contributing

Feel free to open a pull request and update tests accordingly.
