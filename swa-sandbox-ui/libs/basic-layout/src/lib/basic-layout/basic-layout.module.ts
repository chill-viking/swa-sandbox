import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout.component';
import { LayoutBodyDirective } from './directives';

@NgModule({
  declarations: [
    BasicLayoutComponent,
    LayoutBodyDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BasicLayoutComponent,
    LayoutBodyDirective,
  ]
})
export class BasicLayoutModule { }
