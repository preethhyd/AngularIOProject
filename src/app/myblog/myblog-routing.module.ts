import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MyblogComponent} from './myblog.component';

const routes: Routes = [
  {
    path: ':id',
    component: MyblogComponent,
  },
  {
    path: '**',
    component: MyblogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyblogRoutingModule {}

