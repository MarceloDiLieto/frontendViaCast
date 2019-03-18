import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { DeletarComponent } from "./usuarios/deletar/deletar.component";
import { AdicionarComponent } from "./usuarios/adicionar/adicionar.component";
import { DetalhesComponent } from "./usuarios/detalhes/detalhes.component";
import {
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule
} from "@angular/material";
import { LoginService } from "./shared/service/login.service";
import { GuardService } from "./shared/service/guard.service";
import { PersonService } from "./shared/service/person.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuariosComponent,
    DeletarComponent,
    AdicionarComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [LoginService, GuardService, PersonService],
  bootstrap: [AppComponent],
  entryComponents: [DeletarComponent, AdicionarComponent, DetalhesComponent]
})
export class AppModule {}
