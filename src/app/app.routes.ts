import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './crud/add/add.component';
import { UpdateComponent } from './crud/update/update.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { ListComponent } from './crud/list/list.component';

export const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'list', component: ListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);