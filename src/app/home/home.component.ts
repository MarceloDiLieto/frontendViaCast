import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, DoCheck {
  listaPessoas = [
    {
      id: 1,
      nome: "Daniel Costa",
      cpf: "1234",
      nascimento: "11/12/1995",
      profissao: "Programador",
      descricao:
        "aksdjajskdjkasjdjk asdjaskdj  askdjajskdkj jasdkjasjdkaskjd asjdksajdjkasdj kasdj"
    },
    {
      id: 2,
      nome: "Marcelo Sousa Di Lieto",
      cpf: "1234",
      nascimento: "22/05/1990",
      profissao: "Gerente",
      descricao:
        "aksdjajskdjkasjdjk asdjaskdj  askdjajskdkj jasdkjasjdkaskjd asjdksajdjkasdj kasdj"
    },
    {
      id: 3,
      nome: "Maiara Couto Barbosa",
      cpf: "1234",
      nascimento: "11/12/1995",
      profissao: "Costureiro",
      descricao:
        "aksdjajskdjkasjdjk asdjaskdj  askdjajskdkj jasdkjasjdkaskjd asjdksajdjkasdj kasdj"
    },
    {
      id: 4,
      nome: "Maraisa Christine",
      cpf: "1234",
      nascimento: "11/12/1995",
      profissao: "Medico",
      descricao:
        "aksdjajskdjkasjdjk asdjaskdj  askdjajskdkj jasdkjasjdkaskjd asjdksajdjkasdj kasdj"
    },
    {
      id: 5,
      nome: "Silvio Santos",
      cpf: "345.256.645-01",
      nascimento: "11/12/1995",
      profissao: "Engenheiro",
      descricao:
        "aksdjajskdjkasjdjk asdjaskdj  askdjajskdkj jasdkjasjdkaskjd asjdksajdjkasdj kasdj"
    },
    {
      id: 6,
      nome: "Luciel Pereira Da Silva",
      cpf: "123.535.123-61",
      nascimento: "11/12/1995",
      profissao: "Do lar",
      descricao:
        "aksdjajskdjkasjdjk asdjaskdj  askdjajskdkj jasdkjasjdkaskjd asjdksajdjkasdj kasdj"
    },
    {
      id: 7,
      nome: "Daniel Costa",
      cpf: "1234",
      nascimento: "11/12/1995",
      profissao: "Programador",
      descricao:
        "aksdjajskdjkasjdjk asdjaskdj  askdjajskdkj jasdkjasjdkaskjd asjdksajdjkasdj kasdj"
    },
    {
      id: 8,
      nome: "Marcelo Sousa Di Lieto",
      cpf: "1234",
      nascimento: "22/05/1990",
      profissao: "Gerente",
      descricao:
        "aksdjajskdjkasjdjk asdjaskdj  askdjajskdkj jasdkjasjdkaskjd asjdksajdjkasdj kasdj"
    },
    {
      id: 9,
      nome: "Maiara Couto Barbosa",
      cpf: "1234",
      nascimento: "11/12/1995",
      profissao: "Costureiro",
      descricao:
        "aksdjajskdjkasjdjk asdjaskdj  askdjajskdkj jasdkjasjdkaskjd asjdksajdjkasdj kasdj"
    },
    {
      id: 10,
      nome: "Maraisa Christine",
      cpf: "1234",
      nascimento: "11/12/1995",
      profissao: "Medico",
      descricao:
        "aksdjajskdjkasjdjk asdjaskdj  askdjajskdkj jasdkjasjdkaskjd asjdksajdjkasdj kasdj"
    },
    {
      id: 11,
      nome: "Silvio Santos",
      cpf: "345.256.645-01",
      nascimento: "11/12/1995",
      profissao: "Engenheiro",
      descricao:
        "aksdjajskdjkasjdjk asdjaskdj  askdjajskdkj jasdkjasjdkaskjd asjdksajdjkasdj kasdj"
    },
    {
      id: 12,
      nome: "Luciel Pereira Da Silva",
      cpf: "123.535.123-61",
      nascimento: "11/12/1995",
      profissao: "Do lar",
      descricao:
        "aksdjajskdjkasjdjk asdjaskdj  askdjajskdkj jasdkjasjdkaskjd asjdksajdjkasdj kasdj"
    }
  ];
  listaFiltrada: any;

  constructor() {}
  busca = "";
  arrayVazio = false;

  ngOnInit() {
    this.listaFiltrada = this.listaPessoas;
  }

  ngDoCheck() {
    if (this.busca && this.busca !== "") {
      debugger
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
}
