import Axios from 'axios'

export async function ProductsData(){
    const products = await Axios.get('https://fakestoreapiserver.reactbd.com/products');
    return products;
}