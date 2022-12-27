import ProductRepository from '../Product/repository'
import ProductDto from '../Product/dto'
import { IProduct } from './interface'
import { deleteProduct } from './handler'

class ProductService {
    private productRepository = ProductRepository

    public async getAll(){
       return this.productRepository.getAll()
    }

    public async createProduct(data){
        let _data = JSON.parse(data)
        let productDto: IProduct = new ProductDto(_data.name, _data.description, _data.price, _data.um, _data.quantity)

        return this.productRepository.create(productDto)
    }

    public async updateProduct(data){
        const _data = JSON.parse(data)
        let _product = new Object({ id: _data.id, name: _data.name, description: _data.description, price: _data.price, um: _data.um, quantity: _data.quantity })
        return this.productRepository.update(_product)
    }

    public async deleteProduct(productId: number){
        return this.productRepository.delete(productId)
    }
}

export default new ProductService()