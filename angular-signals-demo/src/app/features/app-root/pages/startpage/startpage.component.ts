import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss'],
})
export class StartpageComponent {}
