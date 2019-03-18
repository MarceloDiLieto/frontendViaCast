import { Injectable, EventEmitter } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { UserViewModels } from "../view-models/user.view-models";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  menuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  fazerLogin(usuario: UserViewModels) {
    if (usuario.nome == "marcelo" && usuario.senha == "admin") {
      this.menuEmitter.emit(true);
      this.router.navigate(["/home"]);
    } else {
      this.menuEmitter.emit(false);
      alert("Algum dos dados está incorreto!");
    }
  }
}
