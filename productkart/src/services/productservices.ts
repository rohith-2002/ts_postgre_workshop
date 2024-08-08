import { Product } from "../model/product";

export default class productservices{
   public products:Product[]=[];

   public addProduct(product:Product){
    this.products.push(product);
   }

   public getProducts():Product[]{
    return this.products;
   }
   public getProductbyID(id:number):Product|undefined{
    try{
        for(let i=0;i<this.products.length;i++){
            if(this.products[i].getid()==id){
                return this.products[i];
            }
        }
        console.log("Product not found");
    }
    catch(e){
        console.log(e);
    }
   
   }
    public deleteProduct(id:number){
     try{
          for(let i=0;i<this.products.length;i++){
                if(this.products[i].getid()==id){
                 this.products.splice(i,1);
                }
          }
     }
     catch(e){
          console.log(e);
     }
    }
    public updateProduct(id:number,product:Product){
        try{
            for(let i=0;i<this.products.length;i++){
                if(this.products[i].getid()==id){
                    this.products[i]=product;
                }
            }
        }
        catch(e){
            console.log(e);
        }
    }

    public getproductbyName(name:string):Product|undefined{
        for(let i=0;i<this.products.length;i++){
            if(this.products[i].getname()==name){
                return this.products[i];
            } 
        }
        console.log("Product not found");
    }
}