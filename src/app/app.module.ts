import { AddressComponent } from './ng-form-material/address.component';
import { NestedNgFormComponent } from './ng-form-material/nested-ng-form/nested-ng-form.component';
import { NgFormMaterialComponent } from './ng-form-material/ng-form-material.component';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MomentModule } from 'angular2-moment/moment.module';
import {CalendarComponent} from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { FullCalendarModule } from 'ng-fullcalendar';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule , MatButtonModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { NgFormComponent } from './ng-form/ng-form.component';
import { NgModelGroupComponent } from './ng-model-group/ng-model-group.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),
        ButtonsModule.forRoot(),
        ModalModule.forRoot(),
        FlexLayoutModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MomentModule ,
        HttpClientModule,
        MaterialModule
    ],
    declarations: [
        AppComponent,
        routedComponents,
        FormComponent,
        NgFormComponent,
        NgModelGroupComponent,
        NgFormMaterialComponent,
        NestedNgFormComponent,
        AddressComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
