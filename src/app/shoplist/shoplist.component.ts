import { Component } from '@angular/core';
import { Shopitem } from '../shopitem';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrl: './shoplist.component.css'
})
export class ShoplistComponent {
    shopitem: Shopitem = new Shopitem()
    shopitems: Shopitem[] = []

    constructor(){
      this.read()
    }
    read(): void {
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    this.shopitems = Object.values(jsonArray).map(x => Object.assign(new Shopitem(), x))
  }


    seed(){
      let s = new Shopitem()
      s.name = "TV"
      s.category = "Elektronika"
      s.prise = 80000
      this.shopitems.push(s)
    }
}
