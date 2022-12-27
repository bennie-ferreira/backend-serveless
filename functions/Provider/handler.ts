import { APIGatewayEvent } from 'aws-lambda';
import ProviderService from '../Provider/service'

const providerService = ProviderService

export const listAllProvider = async () => {
    const response = await providerService.getAll()
  
    return {
      statusCode: 200,
      headers: {
        "content-type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      body: JSON.stringify({ data: response }, null, 2)
    }
};

export const createProvider = async (event: APIGatewayEvent) => {
    const data = event.body  
    const response = await providerService.createProvider(data)
  
    return {
      statusCode: 201,
      headers: {
        "content-type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      body: JSON.stringify({ data: response }, null, 2)
    }
}

export const updateProvider = async (event: APIGatewayEvent) => {
  const data = event.body
  const response = await providerService.updateProvider(data)

  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    body: JSON.stringify({ data: response }, null, 2)
  }
}

export const deleteProvider = async (event: APIGatewayEvent) => {
  const data = event.pathParameters
  const providerId = data?.params
  const response = await providerService.deleteProvider(Number(providerId))

  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    body: JSON.stringify({ data: response }, null, 2)
  }
}

export const productProviderRelationship = async (event: APIGatewayEvent) => {
  const data = event.body
  const response = await providerService.associateProduct(data)


  return {
    statusCode: 201,
    headers: {
      "content-type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    body: JSON.stringify({ data: response }, null, 2)
  }
}

export const listAllproductProviderRelationship = async () => {
  const response = await providerService.listAllAssociateProduct()


  return {
    statusCode: 201,
    headers: {
      "content-type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    body: JSON.stringify({ data: response }, null, 2)
  }
}