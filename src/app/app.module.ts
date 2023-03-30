import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculationsComponent } from './components/calculations/calculations.component';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { LoadingIndicatorInterceptor } from './shared/inteceptors/LoadingIndicatorInterceptor.service';
import { MatCardModule } from '@angular/material/card'
import { UserCardComponent } from './components/user-card/user-card.component';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from './shared/guards/auth.guards'
import { UseService } from './shared/services/use.service';
import { InfoComponent } from './components/info/info.component'

export function tokenGetter() {
  return sessionStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectsComponent,
    CalculationsComponent,
    LoadingIndicatorComponent,
    UserCardComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    }),


  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoadingIndicatorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
