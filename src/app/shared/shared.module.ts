import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { PageAboutComponent } from './components/page-about/page-about.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PagePortfolioComponent } from './components/page-portfolio/page-portfolio.component';
import { PageSkillsComponent } from './components/page-skills/page-skills.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
    declarations: [
        SidenavComponent,
        HeaderComponent,
        PageHomeComponent,
        PageAboutComponent,
        PageSkillsComponent,
        PagePortfolioComponent,
        PageContactComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        RouterModule
    ],
    exports: [
        SidenavComponent,
        HeaderComponent,
        PageHomeComponent,
        PageAboutComponent,
        PageSkillsComponent,
        PagePortfolioComponent,
        PageContactComponent,
    ],
})
export class SharedModule { }
