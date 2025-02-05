export interface Product {
    [x: string]: any;
    products(products: any): unknown;
    _id: string;
    productName: string;
    _type: "product";
    image? : {
        asset: {
            _ref: string;
            _type:"image";
        }
    };
    price: number;
    description?: string;
    slug : {
        _type:"slug";
        current: string;
    };

    inventory: number;
   







}
