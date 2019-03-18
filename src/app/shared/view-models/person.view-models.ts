export class PersonViewModels {
    id: number;
    nome: string;
    cpf: string;
    nascimento: Date;
    profissao: string;
    mae: string;
    sexo: boolean;
    descricao: string;

    constructor(data) {
        this.id = data.id ? data.id : null;
        this.nome = data.nome;
        this.cpf = data.cpf;
        this.nascimento = data.nascimento;
        this.profissao = data.profissao;
        this.mae = data.mae;
        this.sexo = data.sexo;
        this.descricao = data.descricao;
    }
}