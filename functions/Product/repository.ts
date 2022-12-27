import { Product } from '../Product/model'

class ProductRepository {
    public async getAll(){
        const listProducts = await Product.findAll({
            order: [
                ["id", "DESC"]
            ]
        })
        return listProducts
    }

    public async create(data){
        const saveData = await Product.create(data)
        return saveData
    }

    public async update(data){
        await Product.update({ name: data.name, description: data.description, price: data.price, um: data.um, quantity: data.quantity }, {
            where: {
                id: data.id
            }
        })

        const provider = await Product.findByPk(data.id)
        return provider
    }

    public async delete(productId: number){
        await Product.destroy({
            where: {
                id: productId
            }
        })
    }
}

export default new ProductRepository()