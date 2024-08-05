import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularI18nComponent } from './angular-i18n/angular-i18n.component';
import { NgxTranslateComponent } from './ngx-translate/ngx-translate.component';

const routes: Routes = [
  {
    path: '',
    component: AngularI18nComponent
  },
  {
    path: 'ngx-translate',
    component: NgxTranslateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
