class ProductDto {
    public name: string;
    public description: string;
    public price: number;
    public um: string;
    public quantity: number;

    public constructor(name: string, description: string, price: number, um: string, quantity: number){
        this.name = name
        this.description = description
        this.price = price
        this.um = um
        this.quantity = quantity
    }
}

export default ProductDto