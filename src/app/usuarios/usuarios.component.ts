import { Component, OnInit, DoCheck } from "@angular/core";
import { DeletarComponent } from "./deletar/deletar.component";
import { AdicionarComponent } from "./adicionar/adicionar.component";
import { MatDialog } from "@angular/material";
import { DetalhesComponent } from "./detalhes/detalhes.component";
import { PersonViewModels } from "../shared/view-models/person.view-models";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"]
})
export class UsuariosComponent implements OnInit, DoCheck {
  listaPessoas = [
    {
      id: 1,
      nome: "Daniel Costa",
      cpf: "1234",
      nascimento: "11/12/1995",
      profissao: "Programador",
      mae: "Maria do Rosario",
      sexo: "Masculino",
      descricao:
        "Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider."
    },
    {
      id: 2,
      nome: "Marcelo Sousa Di Lieto",
      cpf: "1234",
      nascimento: "22/05/1990",
      profissao: "Gerente",
      mae: "Dilma",
      sexo: "Masculino",
      descricao:
        "Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider."
    },
    {
      id: 3,
      nome: "Maiara Couto Barbosa",
      cpf: "1234",
      nascimento: "11/12/1995",
      profissao: "Costureiro",
      mae: "Maria da Silva",
      sexo: "Feminino",
      descricao:
        "Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider."
    },
    {
      id: 4,
      nome: "Maraisa Christine",
      cpf: "1234",
      nascimento: "11/12/1995",
      profissao: "Medico",
      mae: "Maria da Silva",
      sexo: "Feminino",
      descricao:
        "Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider."
    },
    {
      id: 5,
      nome: "Silvio Santos",
      cpf: "345.256.645-01",
      nascimento: "11/12/1995",
      profissao: "Engenheiro",
      mae: "Maria da Silva",
      sexo: "Feminino",
      descricao:
        "Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider."
    },
    {
      id: 6,
      nome: "Luciel Pereira Da Silva",
      cpf: "123.535.123-61",
      nascimento: "11/12/1995",
      profissao: "Do lar",
      mae: "Maria da Silva",
      sexo: "Feminino",
      descricao:
        "Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider."
    },
    {
      id: 7,
      nome: "Daniel Costa",
      cpf: "1234",
      nascimento: "11/12/1995",
      profissao: "Programador",
      mae: "Maria da Silva",
      sexo: "Feminino",
      descricao:
        "Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider."
    },
    {
      id: 8,
      nome: "Marcelo Sousa Di Lieto",
      cpf: "1234",
      nascimento: "22/05/1990",
      profissao: "Gerente",
      mae: "Maria da Silva",
      sexo: "Feminino",
      descricao:
        "Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider."
    },
    {
      id: 9,
      nome: "Maiara Couto Barbosa",
      cpf: "1234",
      nascimento: "11/12/1995",
      profissao: "Costureiro",
      mae: "Maria da Silva",
      sexo: "Feminino",
      descricao:
        "Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider."
    },
    {
      id: 10,
      nome: "Maraisa Christine",
      cpf: "1234",
      nascimento: "11/12/1995",
      profissao: "Medico",
      mae: "Maria da Silva",
      sexo: "Feminino",
      descricao:
        "Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider."
    },
    {
      id: 11,
      nome: "Silvio Santos",
      cpf: "345.256.645-01",
      nascimento: "11/12/1995",
      profissao: "Engenheiro",
      mae: "Maria da Silva",
      sexo: "Feminino",
      descricao:
        "Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider."
    },
    {
      id: 12,
      nome: "Luciel Pereira Da Silva",
      cpf: "123.535.123-61",
      nascimento: "11/12/1995",
      profissao: "Do lar",
      mae: "Maria da Silva",
      sexo: "Feminino",
      descricao:
        "Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider. Left aligned text on viewports sized SM (small) or wider."
    }
  ];
  listaFiltrada: any;

  constructor(private dialog: MatDialog) {}
  busca = "";
  arrayVazio = false;

  ngOnInit() {
    this.listaFiltrada = this.listaPessoas;
  }

  ngDoCheck() {
    if (this.busca && this.busca !== "") {
      this.listaFiltrada = this.listaPessoas.filter(x =>
        x["nome"].toLowerCase().includes(this.busca.toLowerCase())
      );
      if (this.listaFiltrada.length <= 0) {
        this.arrayVazio = true;
      } else {
        this.arrayVazio = false;
      }
    } else {
      this.listaFiltrada = this.listaPessoas;
      this.arrayVazio = false;
    }
  }

  abrirModalDeletar(pessoa: any) {
    const dialogRef = this.dialog.open(DeletarComponent, {
      disableClose: true,
      width: "600px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var index = this.listaPessoas.indexOf(pessoa);
        if (index > -1) {
          this.listaPessoas.splice(index, 1);
        } else {
          alert("Elemento não encontrado na lista");
        }
      }
    });
  }

  abrirModalEditar(pessoa: any) {
    const dialogRef = this.dialog.open(AdicionarComponent, {
      disableClose: true,
      width: "600px"
    });
    dialogRef.componentInstance.dadosPessoa = pessoa;
    dialogRef.componentInstance.isEdit = false;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var index = this.listaPessoas.indexOf(pessoa);
        if (index > -1) {
          this.listaPessoas[index] = result;
        }
      }
    });
  }

  abrirModalAdicionar() {
    const dialogRef = this.dialog.open(AdicionarComponent, {
      disableClose: true,
      width: "600px"
    });
    dialogRef.componentInstance.isEdit = false;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listaPessoas.push(result);
      }
    });
  }

  abrirModalDetalhes(pessoa: PersonViewModels) {
    const dialogRef = this.dialog.open(DetalhesComponent, {
      disableClose: true,
      width: "600px"
    });
    dialogRef.componentInstance.dadosPessoa = pessoa;
  }

  getFirstLetters(nome) {
    const name = nome.split(" ", 2);

    if (name.length === 2) {
      return name[0].substring(1, 0) + name[1].substring(1, 0);
    } else {
      const name = nome.split(" ", 2);
      return nome.substr(-20, 2);
    }
  }
}
