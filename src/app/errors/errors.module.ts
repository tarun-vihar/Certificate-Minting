import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthereumNotFoundComponent } from './ethereum-not-found/ethereum-not-found.component';
import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorComponent } from './error.component';



@NgModule({
  declarations: [
    EthereumNotFoundComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
