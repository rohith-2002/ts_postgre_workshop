import { Product } from "./model/product";
import productservices from "./services/productservices";

const product1=new Product(1,"pixel",40000,4.5);
const product2=new Product(2,"iphone",80000,4.8);
const product3=new Product(3,"samsung",30000,4.0);
const product4=new Product(4,"oneplus",35000,3.3);
const product5=new Product(5,"realme",20000,2.2);
const product6=new Product(6,"redmi",15000,3.8);

const productservice=new productservices();
productservice.addProduct(product1);
productservice.addProduct(product2);
productservice.addProduct(product3);
productservice.addProduct(product4);
productservice.addProduct(product5);
productservice.addProduct(product6);

console.log("All products");
console.log(productservice.getProducts());

console.log("Product by id");
console.log(productservice.getProductbyID(3));

function updateProduct(){
    const product=new Product(3,"samsung",35000,4.0);
    productservice.updateProduct(3,product);
    console.log("Product updated");
    console.log(productservice.getProducts());
}

updateProduct();
// write comments
function displayProduct(name:string){
    console.log("Product by name");
    const prod=productservice.getproductbyName(name);
    if(prod==undefined){
        console.log("Product not found");
        return;
    }
    console.log("displayProduct:");
    console.log("Product Name:"+prod.getname());
    console.log("Product Price:"+prod.getprice());
    console.log("Product Rating:"+prod.getrating());

    productservice.deleteProduct(prod.getid());
    console.log("Product deleted");
    console.log("updated products");
    console.log(productservice.getProducts());
}

displayProduct("realme");