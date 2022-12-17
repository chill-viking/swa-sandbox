import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BasicLayoutModule } from "@swa-sandbox/basic-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BasicLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
