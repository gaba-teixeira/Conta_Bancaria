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
    let buscarConta = this.buscarNoArray(conta.numero);
    if (buscarConta !== null) {
      this.listaContas[this.listaContas.indexOf(buscarConta)] = conta;
      console.log(`Conta atualizada com sucesso`);
    } else console.log(`Conta não foi encontrado!`);
  }

  deletar(numero: number): void {
    let buscarConta = this.buscarNoArray(numero);
    if (buscarConta !== null) {
      this.listaContas.splice(this.listaContas.indexOf(buscarConta), 1);
      console.log(`Conta deletada com sucesso`);
    } else console.log(`Conta não foi encontrado!`);
  }

  sacar(numero: number, valor: number): void {
    let buscarConta = this.buscarNoArray(numero);
    if (buscarConta !== null) {
      if (buscarConta.sacar(valor) === true)
        console.log(`Saque realizado com sucesso`);
    } else console.log(`Conta não foi encontrado!`);
  }

  depositar(numero: number, valor: number): void {
    let buscarConta = this.buscarNoArray(numero);
    if (buscarConta !== null) {
      buscarConta.depositar(valor);
      console.log(`Deposito realizado com sucesso`);
    } else console.log(`Conta não foi encontrado!`);
  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    let contaOrigem = this.buscarNoArray(numeroOrigem);
    let contaDestino = this.buscarNoArray(numeroDestino);

    if (contaOrigem !== null && contaDestino !== null) {
      if (contaOrigem.sacar(valor) === true) {
        contaDestino.depositar(valor);
        console.log(`Transferencia realizado com sucesso`);
      }
    } else console.log(`Conta Origem e/ou Conta Destino não foi encontrado!`);
  }

  procurarPorTitular(titular: string): void {
    let buscaPorTitular = this.listaContas.filter((conta) =>
      conta.titular.toUpperCase().includes(titular.toUpperCase())
    );

    buscaPorTitular.forEach((conta) => conta.visualizar());
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
