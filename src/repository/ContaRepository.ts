import { Conta } from "../model/Conta";

//Métodos CRUD (Create, Read, Update, Delete)
export interface ContaRepository {
  procurarPorNumero(numero: number): void;
  listarTodas(): void;
  cadastrar(conta: Conta): void;
  atualizar(conta: Conta): void;
  deletar(numero: number): void;

  //Metodos bancarios
  sacar(numero: number, valor: number): void;
  depositar(numero: number, valor: number): void;
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}
