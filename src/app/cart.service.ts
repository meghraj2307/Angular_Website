import { Injectable } from '@angular/core';
import { Flower } from './Flower';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  arrCart : Flower[] =[new Flower('Sameer',1,220,220)];

  // Get list of flowers from cart.
  getFlowers(){
    return this.arrCart;
  }

  // Add flower to cart.
  addFlower(obj : Flower){
    this.arrCart.push(obj)
  }

  // Delete flower from cart.
  deleteFlower(obj: Flower){
    this.arrCart=this.arrCart.filter(o => o != obj)
  }
}
