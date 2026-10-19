import { Component } from '@angular/core';
import { Shopitem } from '../shopitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  shopitem: Shopitem = new Shopitem()
  shopitems: Shopitem[] = []

  constructor(private router: Router){
    this.read()
  }
  read(): void {
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    this.shopitems = Object.values(jsonArray).map(x => Object.assign(new Shopitem(), x))
    
  }

  save(){
    localStorage.setItem("dev_DB", JSON.stringify(this.shopitems))
  }
  edit(){
    let shopx = this.shopitems.findIndex(x => x.name === this.shopitem.name)
    this.shopitems[shopx] = this.shopitem
    this.save()
    this.router.navigateByUrl("shoplist")
  }

}
