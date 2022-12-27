import { db } from "../../config/database";
import { Provider, ProviderProduct } from "./model";

class ProviderRepository {
    public async getAll(){
        const listProviders = await Provider.findAll({
            order: [
                ["id", "DESC"]
            ]
        })
        return listProviders
    }

    public async create(data){
        const saveData = await Provider.create(data)
        return saveData
    }

    public async update(data){
        await Provider.update({ name: data.name, name_company: data.name_company, contact: data.contact, cnpj: data.cnpj }, {
            where: {
                id: data.id
            }
        })

        const provider = await Provider.findByPk(data.id)
        return provider
    }

    public async delete(providerId: number){
        await Provider.destroy({
            where: {
                id: providerId
            }
        })
    }

    public async associateProduct(data){
        const saveData = await ProviderProduct.create(data)
        return saveData
    }

    public async listAllAssociateProduct(){
        const listAllAssociateProduct = await db.query(" call productProvider ")
        return listAllAssociateProduct
    }
}

export default new ProviderRepository()