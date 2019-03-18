import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root"
})
export class GuardService implements CanActivate {
  estaLogado: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(): Observable<boolean> | boolean {
    return new Observable<boolean>(observer => {
      this.loginService.menuEmitter.subscribe(resposta => {
        return false;
      });
    });
  }
}
