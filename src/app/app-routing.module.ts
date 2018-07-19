import { NgFormMaterialComponent } from './ng-form-material/ng-form-material.component';
import { NgModelGroupComponent } from './ng-model-group/ng-model-group.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { ProductListComponent } from './products/index';
import { FormComponent } from './form/form.component';
import { NgFormComponent } from './ng-form/ng-form.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'form',
        component: FormComponent
    },
    {
        path: 'ngform',
        component: NgFormComponent
    },
    {
        path: 'ngmodelgroup',
        component: NgModelGroupComponent
    },
    {
        path: 'ngformmaterial',
        component: NgFormMaterialComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, ProductListComponent];
