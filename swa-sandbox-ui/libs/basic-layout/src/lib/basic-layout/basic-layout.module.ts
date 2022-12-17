import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BasicLayoutComponent } from "./basic-layout.component";
import { LayoutBodyDirective, LayoutFooterDirective } from "./directives";

@NgModule({
  declarations: [
    BasicLayoutComponent,
    LayoutBodyDirective,
    LayoutFooterDirective,
  ],
  imports: [CommonModule],
  exports: [BasicLayoutComponent, LayoutBodyDirective, LayoutFooterDirective],
})
export class BasicLayoutModule {}
