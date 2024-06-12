import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SvgComponent } from './svg/svg.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { FormsModule } from '@angular/forms';
import { LogCardComponent } from './log-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    SubjectListComponent,
    LogCardComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,    
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
