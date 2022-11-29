import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import { RegisterComponent } from './form-login/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './form-login/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ParenInputComponent } from './input/paren-input/paren-input.component';
import { ChildInputComponent } from './input/child-input/child-input.component';
import { OutputParenComponent } from './output/output-paren/output-paren.component';
import { OutputChildComponent } from './output/output-child/output-child.component';


import {AngularFireStorageModule} from '@angular/fire/storage';
// @ts-ignore
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import { SingerAvatarComponent } from './upload/singer-avatar/singer-avatar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MiltipleAvatarComponent } from './upload/miltiple-avatar/miltiple-avatar.component';
import {AuthInterceptor} from './service/auth.interceptor';
import { UpdateAvatarComponent } from './profile/update-avatar/update-avatar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog/dialog.component';
import {AuthGuard} from './security/auth.guard';
import { AdminManagerComponent } from './profile/admin-manager/admin-manager.component';
import {AdminGuard} from './security/admin.guard';
import { CategoryManagerComponent } from './category/category-manager/category-manager.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent, data: { title: 'Home' } },
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  },
  {
    path:"home" , component:HomeComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'profile',component:ProfileComponent,canActivate: [AuthGuard],
  children: [
    {path:"update/avatar",component:UpdateAvatarComponent},
    {path:"admin",component:AdminManagerComponent, canActivate:[AdminGuard]}
  ]},
  {
    path:"categories",component:CategoryManagerComponent,
    children: [
      {path:"create-category",component:CreateCategoryComponent}
    ]
  },
  {
    path:"create-category",component:CreateCategoryComponent
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, ProfileComponent, ParenInputComponent, ChildInputComponent, OutputParenComponent, OutputChildComponent, SingerAvatarComponent, MiltipleAvatarComponent, UpdateAvatarComponent, DialogComponent, AdminManagerComponent, CategoryManagerComponent, CreateCategoryComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatInputModule,
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatProgressBarModule, MatPaginatorModule, MatTableModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
