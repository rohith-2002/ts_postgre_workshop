"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class productservices {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProducts() {
        return this.products;
    }
    getProductbyID(id) {
        try {
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].getid() == id) {
                    return this.products[i];
                }
            }
            console.log("Product not found");
        }
        catch (e) {
            console.log(e);
        }
    }
    deleteProduct(id) {
        try {
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].getid() == id) {
                    this.products.splice(i, 1);
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    updateProduct(id, product) {
        try {
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].getid() == id) {
                    this.products[i] = product;
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    getproductbyName(name) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].getname() == name) {
                return this.products[i];
            }
        }
        console.log("Product not found");
    }
}
exports.default = productservices;
