import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bc-basic-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTableComponent {}
