import { cart } from "./cart";
import { Product } from "./product";

// export interface userOrder{
//     user:UserData;
//     product:cartProduct
// }
export class Userdata {
    firstname: string;
    address: string;
    creditCard: string;
    total: number;
    
   

    constructor() {
        this.firstname = '';
        this.address = '';
        this.creditCard ='';
        this.total= 0;
        
                
        

    }
}

