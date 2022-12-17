import { Component, ContentChild, TemplateRef } from "@angular/core";
import { LayoutBodyDirective } from "./directives/layout-body.directive";

@Component({
  selector: 'swa-sandbox-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css'],
})
export class BasicLayoutComponent {
  @ContentChild(LayoutBodyDirective, { read: TemplateRef<never> })
  body?: TemplateRef<never>;
}
