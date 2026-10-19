import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponent } from './create/create.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: "homepage", component: HomepageComponent},
  {path: "create", component: CreateComponent},
  {path: "shoplist", component: ShoplistComponent},
  {path: "delete", component: DeleteComponent},
  {path: "edit", component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
