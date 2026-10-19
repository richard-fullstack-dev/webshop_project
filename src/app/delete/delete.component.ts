import { Component } from '@angular/core';
import { Shopitem } from '../shopitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  shopitem: Shopitem = new Shopitem()
  shopitems: Shopitem[] = []

  constructor(private router: Router) {
    this.read()
  }

  delete() {
   this.shopitems = this.shopitems.filter(x => x.name !== this.shopitem.name)
    this.save()
    this.router.navigateByUrl("shoplist")
  }
  read(): void {
    let jsonArray = JSON.parse(localStorage.getItem("dev_DB") ?? "[]")
    this.shopitems = Object.values(jsonArray).map(x => Object.assign(new Shopitem(), x))

  }
  save() {
    localStorage.setItem("dev_DB", JSON.stringify(this.shopitems))
  }
}
