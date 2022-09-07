import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { AppCopyrightComponent } from './basic/app-copyright/app-copyright.component';
import { AppPolicyComponent } from './basic/app-policy/app-policy.component';
import { ComposeComponent } from './compositions/compose/compose.component';
import { CompositionsComponent } from './compositions/compositions/compositions.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { IntroComponent } from './profile/intro/intro.component';
import { AboutComponent } from './profile/about/about.component';
import { EducationComponent } from './profile/education/education.component';
import { WorkComponent } from './profile/work/work.component';
import { EmailComponent } from './profile/email/email.component';
import { PhoneComponent } from './profile/phone/phone.component';
import { AddressComponent } from './profile/address/address.component';
import { WebsiteComponent } from './profile/website/website.component';
import { SearchComponent } from './basic/search/search.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './account/profile/profile.component';
import { CompositionComponent } from './compositions/composition/composition.component';
import { EventComponent } from './events/event/event.component';
import { PrimaryComponent } from './home/primary/primary.component';
import { SecondaryComponent } from './home/secondary/secondary.component';
import { PrivacyOptionsComponent } from './basic/privacy-options/privacy-options.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavBarComponent,
    AppCopyrightComponent,
    AppPolicyComponent,
    ComposeComponent,
    CompositionsComponent,
    SignUpComponent,
    IntroComponent,
    AboutComponent,
    EducationComponent,
    WorkComponent,
    EmailComponent,
    PhoneComponent,
    AddressComponent,
    WebsiteComponent,
    SearchComponent,
    HomeComponent,
    ProfileComponent,
    CompositionComponent,
    EventComponent,
    PrimaryComponent,
    SecondaryComponent,
    PrivacyOptionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
