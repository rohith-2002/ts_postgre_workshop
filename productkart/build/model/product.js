"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price, rating) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
    getid() {
        return this.id;
    }
    getname() {
        return this.name;
    }
    getprice() {
        return this.price;
    }
    getrating() {
        return this.rating;
    }
    setid(id) {
        this.id = id;
    }
    setname(name) {
        this.name = name;
    }
    setprice(price) {
        this.price = price;
    }
    setrating(rating) {
        this.rating = rating;
    }
}
exports.Product = Product;
