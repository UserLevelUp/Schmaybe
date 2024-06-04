import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SvgComponent } from './svg/svg.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    SubjectListComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,    
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
