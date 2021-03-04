import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CalenderHeaderComponent } from './calender-header/calender-header.component';



@NgModule({
  declarations: [NavbarComponent, ProfileComponent, BreadcrumbComponent, CalenderHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavbarComponent, ProfileComponent, BreadcrumbComponent,CalenderHeaderComponent]
})
export class ComponentsModule { }
