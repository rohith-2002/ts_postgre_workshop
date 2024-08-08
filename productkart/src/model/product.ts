
export class Product{
    id:number;
    name:string;
    price:number;
    rating:number;

    constructor(id:number,name:string,price:number,rating:number){
        this.id=id;
        this.name=name;
        this.price=price;
        this.rating=rating;
    }

    getid():number{
        return this.id;
    }
    getname():string{
        return this.name;
    }
    getprice():number{
        return this.price;
    }
    getrating():number{
        return this.rating;
    }
    setid(id:number){
        this.id=id;
    }
    setname(name:string){
        this.name=name;
    }
    setprice(price:number){
        this.price=price;
    }
    setrating(rating:number){
        this.rating=rating;
    }


}