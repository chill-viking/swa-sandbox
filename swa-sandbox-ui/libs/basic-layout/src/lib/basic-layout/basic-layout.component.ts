import { Component, ContentChild, Input, TemplateRef } from "@angular/core";
import { LayoutBodyDirective } from "./directives/layout-body.directive";
import { LayoutFooterDirective } from "./directives/layout-footer.directive";

@Component({
  selector: 'swa-sandbox-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css'],
})
export class BasicLayoutComponent {
  @ContentChild(LayoutBodyDirective, { read: TemplateRef<never> })
  body?: TemplateRef<never>;
  @ContentChild(LayoutFooterDirective, { read: TemplateRef<never> })
  footer?: TemplateRef<never>;

  @Input() debug = false;
}
