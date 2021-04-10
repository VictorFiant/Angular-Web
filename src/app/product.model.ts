export class Product{
    constructor (
    public id:number,
    public name:string,
    public price:number,
    public active:string,
    public bra_ite_fk:string,
    public publicdate_add:Date,
    public date_upd:Date,
    public description:string,
    public photo_url:string,
    public sales:string,
    public stock:string,
    public wholesale_price:number,
    ){}
}