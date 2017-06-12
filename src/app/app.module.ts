import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import { ListComponent } from './list.component';

import { ListService } from './list.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
