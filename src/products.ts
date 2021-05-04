export interface Product {
    name: string;
    price: number;
}

export let products: Product[] = [
    {name: "Reese's", price: 1},
    {name: "Coke", price: 2},
    {name: "Sprite", price: 2}
]

export function calcAverageProductPrice(array: Product[]): number {
    let sum: number = 0;
    for (let product of array) {
        sum += product.price;
    }
    return array.length === 0? 0: sum/array.length;
}

console.log(calcAverageProductPrice(products));