import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../gurads/auth.guard';
import { ErrorComponent } from './error.component';
import { EthereumNotFoundComponent } from './ethereum-not-found/ethereum-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
        {
            path: 'ethereum-not-found',
            component: EthereumNotFoundComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
