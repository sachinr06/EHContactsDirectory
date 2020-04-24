import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Router} from '@angular/router'

import { AppComponent } from './app.component';
import {ContactListComponent} from './components/ContactList/ContactList.component';
import {AddContactComponent} from './components/AddContact/AddContact.component';
import {EditContactComponent} from './components/EditContact/EditContact.Component';
import {HomeComponent} from './components/home/home.component'
import { ContactService } from './services/ContactService';

@NgModule({
  declarations: [
    AppComponent,ContactListComponent,AddContactComponent,EditContactComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'add', component:AddContactComponent},
      {path:'contacts', component:ContactListComponent},
      {path:'edit/:id',component:EditContactComponent},
      {path:'', component:HomeComponent}])
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
