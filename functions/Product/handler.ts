import { APIGatewayEvent } from "aws-lambda";
import ProductService from '../Product/service'

const productService = ProductService

export const listAllProduct = async () => {

  const response = await productService.getAll()

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

export const createProduct = async (event: APIGatewayEvent) => {
  const data = event.body
  
  const response = await productService.createProduct(data)

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

export const updateProduct = async (event: APIGatewayEvent) => {
  const data = event.body
  const response = await productService.updateProduct(data)

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

export const deleteProduct = async (event: APIGatewayEvent) => {
  const data = event.pathParameters
  const productId = data?.params
  const response = await productService.deleteProduct(Number(productId))

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