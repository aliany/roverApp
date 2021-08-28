import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG
import {ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    TableModule

  ],
  imports: [
    CommonModule
  ]
})
export class PrimeNgModule { }
