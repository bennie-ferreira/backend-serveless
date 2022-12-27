export class ProviderDto {
    public id?: number;
    public name: string;
    public name_company: string;
    public contact: string;
    public cnpj: string;

    public constructor(name: string, name_company: string, contact: string, cnpj: string){
        this.name = name
        this.name_company = name_company
        this.contact = contact
        this.cnpj = cnpj
    }

}

export class ProductProviderRelationshipDto {
    public id?: number;
    public product_id: number;
    public provider_id: number;

    public constructor(product_id: number, provider_id: number){
        this.product_id = product_id
        this.provider_id = provider_id
    }
}