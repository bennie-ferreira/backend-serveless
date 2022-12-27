import ProviderRepository from '../Provider/repository'
import { ProviderDto, ProductProviderRelationshipDto } from './dto'
import { IProductProviderRelationship, IProvider } from './interface'

class ProviderService {
    private providerRepository = ProviderRepository

    public async getAll(){
        return this.providerRepository.getAll()
    }

    public async createProvider(data){
        const _data = JSON.parse(data)
        const providerDto: IProvider = new ProviderDto(_data.name, _data.name_company, _data.contact, _data.cnpj)

        return this.providerRepository.create(providerDto)
    }

    public async updateProvider(data){
        const _data = JSON.parse(data)
        let _provider = new Object({ id: _data.id, name: _data.name, name_company: _data.name_company, contact: _data.contact, cnpj: _data.cnpj })
        return this.providerRepository.update(_provider)
    }

    public async deleteProvider(productId: number){
        return this.providerRepository.delete(productId)
    }

    public async associateProduct(data){
        const _data = JSON.parse(data)
        const productProviderRelationshipDto: IProductProviderRelationship = new ProductProviderRelationshipDto(_data.product_id, _data.provider_id)

        return this.providerRepository.associateProduct(productProviderRelationshipDto) 
    }

    public async listAllAssociateProduct(){
        return this.providerRepository.listAllAssociateProduct() 
    }
}

export default new ProviderService()