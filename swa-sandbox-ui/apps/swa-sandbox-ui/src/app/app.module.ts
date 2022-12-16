import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BasicLayoutComponent } from "@swa-sandbox/basic-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BasicLayoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
