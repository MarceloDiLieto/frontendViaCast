import { Component, OnInit } from "@angular/core";
import { LoginService } from "./shared/service/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "cadastroViaCast";

  mostrarMenu: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.loginService.menuEmitter.subscribe(
      resposta => (this.mostrarMenu = resposta)
    );
  }

  logout() {
    this.mostrarMenu = false;
    this.router.navigate(["/login"]);
  }
}
