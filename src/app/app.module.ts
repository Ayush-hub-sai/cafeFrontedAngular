import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MaterialComponentModule } from './material-component/material-component.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, PB_DIRECTION } from "ngx-ui-loader"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorInterceptor } from './services/token-interceptor.interceptor';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: "Loading...",
  textColor: "white",
  textPosition: "center-center",
  // pbColor: "white",
  // bgsColor: "white",
  fgsColor: "white",
  fgsType: SPINNER.doubleBounce,
  fgsSize: 250,
  // pbDirection: PB_DIRECTION.leftToRight,
  // pbThickness: 5
}

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialComponentModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],

  providers: [
    HttpClientModule, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
