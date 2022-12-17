import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BasicLayoutComponent, LayoutBodyDirective, LayoutFooterDirective } from "@swa-sandbox/basic-layout";
import { MockComponent, MockDirectives } from "ng-mocks";
import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MockComponent(BasicLayoutComponent),
        MockDirectives(LayoutBodyDirective, LayoutFooterDirective),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'swa-sandbox-ui'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('swa-sandbox-ui');
  });

  it('should use layout component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('swa-sandbox-basic-layout')).toBeTruthy();
  });
});
