import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {MyblogRoutingModule} from './myblog-routing.module';
import {MyblogComponent} from './myblog.component';

@NgModule({
  declarations: [MyblogComponent],
  imports: [CommonModule, MyblogRoutingModule, ScullyLibModule],
})
export class MyblogModule {}
