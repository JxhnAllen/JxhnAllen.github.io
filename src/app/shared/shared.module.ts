import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
    declarations: [
        SidenavComponent,
        HeaderComponent,
        PageHomeComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule
    ],
    exports: [
        SidenavComponent,
        HeaderComponent,
        PageHomeComponent,
    ],
})
export class SharedModule { }
