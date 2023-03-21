export class Flower{
    name! : string | null;
    quantity! : number | null;
    price! : number | null;
    cost! : number | null;

    constructor(name:string | null,quantity:number | null,price:number | null,cost:number | null){
        this.name= name
        this.price=price
        this.cost=cost
        this.quantity=quantity
    }
}