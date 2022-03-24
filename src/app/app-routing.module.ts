import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageHomeComponent } from './shared/components/page-home/page-home.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'home', component: PageHomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SharedModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HeaderComponent, PageHomeComponent];