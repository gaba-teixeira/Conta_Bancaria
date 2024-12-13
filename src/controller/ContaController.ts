import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  //Colecao Array que vai armazenar os Objetos Contas
  private listaContas = new Array<Conta>();

  //Controlar os numeros da conta
  public numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscarConta = this.buscarNoArray(numero);
    if (buscarConta !== null) {
      buscarConta.visualizar();
    } else console.log(`Conta numero: ${numero} não foi encontrado!`);
  }

  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log("A Conta foi cadastrada com sucesso!");
  }

  atualizar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }

  deletar(numero: number): void {
    throw new Error("Method not implemented.");
  }

  sacar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  //Metodos Auxiliares:
  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) return conta;
    }

    return null;
  }
}
