export interface IProvider {
    id?: number;
    name: string;
    name_company: string;
    contact: string;
    cnpj: string;
}

export interface IProductProviderRelationship {
    id?: number;
    product_id: number;
    provider_id: number;
}