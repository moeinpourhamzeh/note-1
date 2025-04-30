import { Routes } from '@angular/router';
import { AddComponent } from './_pages/add/add.component';
import { ListComponent } from './_pages/list/list.component';

export const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "add", component: AddComponent },
  { path: "list", component: ListComponent }
];
