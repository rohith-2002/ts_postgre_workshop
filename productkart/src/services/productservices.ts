import { Product } from "../model/product";
import logger from "../logger/logger";

export default class productservices{
   public products:Product[]=[];
   

   public addProduct(product:Product){
    this.products.push(product);
    logger.info("Product added");
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
        logger.error("Product not found");
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
            logger.info("Product deleted");
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
        logger.error("Product not found");
    }
}
