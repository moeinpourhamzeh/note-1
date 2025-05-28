import { Routes } from '@angular/router';
import { ListComponent } from './_pages/list/list.component';
import { AddComponent } from './_pages/add/add.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent }
];
