import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelToViewComponent } from './model-to-view/model-to-view.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ViewToModelComponent } from './view-to-model/view-to-model.component';
import { DatabindingHomeComponent } from './databinding-home/databinding-home.component';


const routes: Routes = [
    {
        path: '', component: DatabindingHomeComponent, children: [
            { path: 'model-to-view', component: ModelToViewComponent },
            { path: 'two-way', component: TwoWayComponent },
            { path: 'view-to-model', component: ViewToModelComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DatabindingRoutingModule { }