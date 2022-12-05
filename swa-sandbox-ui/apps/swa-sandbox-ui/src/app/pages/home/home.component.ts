import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from '@swa-sandbox/basic-components';

@Component({
  standalone: true,
  imports: [CommonModule, BasicTableComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
