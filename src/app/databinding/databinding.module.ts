import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewToModelComponent } from './view-to-model/view-to-model.component';
import { ModelToViewComponent } from './model-to-view/model-to-view.component';
import { DatabindingRoutingModule } from './databinding-routing.module';
import { TwoWayComponent } from './two-way/two-way.component';
import { DatabindingHomeComponent } from './databinding-home/databinding-home.component';

@NgModule({
  declarations: [
    DatabindingHomeComponent,
    ViewToModelComponent,
    ModelToViewComponent,
    TwoWayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DatabindingRoutingModule
  ]
})
export class DatabindingModule { }
