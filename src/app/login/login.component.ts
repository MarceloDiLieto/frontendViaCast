import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserViewModels } from "../shared/view-models/user.view-models";
import { LoginService } from '../shared/service/login.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  
  private usuario: UserViewModels = new UserViewModels();

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  login(): void {
    this.loginService.fazerLogin(this.usuario);
  }
}
