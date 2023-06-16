import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ManualInputsComponent } from './manual-inputs/manual-inputs.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiInputComponent } from './api-input/api-input.component';

const routes: Routes = [
  { path: 'manual', component: ManualInputsComponent },
  { path: 'api', component: ApiInputComponent },
  { path: '**', redirectTo: '/manual' },
];
@NgModule({
  declarations: [AppComponent, NavBarComponent, ManualInputsComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
