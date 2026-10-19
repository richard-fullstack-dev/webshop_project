import { Component } from '@angular/core';
import { Shopitem } from '../shopitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  shopitem: Shopitem = new Shopitem()
  shopitems: Shopitem[] = []

  constructor(private router : Router) {
    this.read()
  }

  read(): void {
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    this.shopitems = Object.values(jsonArray).map(x => Object.assign(new Shopitem(), x))
  }


  create() {
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    let developers: Shopitem[] = Object.values(jsonArray).map(x => Object.assign(new Shopitem(), x))

    this.shopitems.push(this.shopitem)
    this.save()
    this.router.navigateByUrl("shoplist")
  }
  save(){
    localStorage.setItem("dev_DB", JSON.stringify(this.shopitems))
  }
}
