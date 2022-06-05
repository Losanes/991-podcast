import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PlayComponent } from './play/play.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PlayComponent,
    InfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
