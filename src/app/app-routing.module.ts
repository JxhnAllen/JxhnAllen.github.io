import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageAboutComponent } from './shared/components/page-about/page-about.component';
import { PageHomeComponent } from './shared/components/page-home/page-home.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'home', component: PageHomeComponent },
    { path: 'about', component: PageAboutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SharedModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HeaderComponent, PageHomeComponent, PageAboutComponent];