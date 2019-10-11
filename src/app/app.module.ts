import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';
import { TestformComponent } from './testform/testform.component';
import { MiodialogComponent } from './miodialog/miodialog.component';
import { SchematainizialeComponent } from './schematainiziale/schematainiziale.component';
import { FormprofComponent } from './formprof/formprof.component';
import { FormaulaComponent } from './formaula/formaula.component';
import { DialogaulaComponent } from './dialogaula/dialogaula.component';
import { DialogprofComponent } from './dialogprof/dialogprof.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TestformComponent,
    MiodialogComponent,
    SchematainizialeComponent,
    FormprofComponent,
    FormaulaComponent,
    DialogaulaComponent,
    DialogprofComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  entryComponents:[
    MiodialogComponent,
    DialogaulaComponent,
    DialogprofComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }