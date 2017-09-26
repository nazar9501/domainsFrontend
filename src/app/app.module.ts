import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { DomainComponent } from './crud/domain.component';
import { AddComponent } from './crud/add/add.component';
import { UpdateComponent } from './crud/update/update.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { ListComponent } from './crud/list/list.component';
import { DomainService } from './crud/domain.service';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DomainComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DomainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
