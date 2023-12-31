# Typescript wrapper for real-time Data.gov.sg transport APIs

A simple unofficial ts wrapper for easy integration with transport-related data.gov.sg public APIs

> An API key is required, and is currently no longer obtainable via https://developers.data.gov.sg/

## Getting started

> NOTE: Work in progress, the below npm command currently does not work

In your project, run:

```bash
npm i datagovsg-ts
```

To get started, create a new instance of the wrapper, using your `Api Key`

```ts
import { GovDataSource } from 'datagovsg-ts'

const client = new GovDataSource('<your-api-key>')
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
