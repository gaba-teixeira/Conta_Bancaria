import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/contaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
  let option: number;

//   Cria novas instancias (objetos) da Classe Conta
  const c1 = new Conta(1, 123, 1, "Jonas", 10000);
  c1.visualizar();
  //Saque
  console.log(c1.sacar(readlinesync.questionFloat("Quanto vc quer sacar: ")));
  c1.visualizar();

  const c2 = new Conta(1, 123, 2, "Andressa", 10000);
  c2.visualizar();
  //Deposito
  c2.depositar(100.0);
  c2.visualizar();

//   Criar conta corrente
  const cc1 = new ContaCorrente(3, 123, 1, "Aline", 10000, 4000);
  cc1.visualizar();
//   Saque
  console.log(cc1.sacar(readlinesync.questionFloat("Quanto vc quer sacar: ")));
  console.log(`Novo saldo: ${cc1.saldo}`);
// Deposito
  cc1.depositar(5000);
  cc1.visualizar();

  //Criar Conta Poupança
  const cp1 = new ContaPoupanca(5, 123, 2, "Amanda", 5000, 18)
  cp1.visualizar()
  cp1.sacar(6000)
  console.log(`Novo saldo: ${cp1.saldo}`)
  
  cp1.depositar(readlinesync.questionFloat("Digite valor a ser depositado: "))
  cp1.visualizar()

  while (true) {
    console.log(
      colors.bg.black,
      colors.fg.yellowstrong,
      "********************************************"
    );
    console.log("              BANCO G&A                     ");
    console.log("********************************************");
    console.log("                                            ");
    console.log("           1 - Criar Conta                 ");
    console.log("           2 - Listar todas as contas      ");
    console.log("           3 - Buscar conta com número     ");
    console.log("           4 - Atualizar dados da conta    ");
    console.log("           5 - Apagar Conta                ");
    console.log("           6 - Sacar                       ");
    console.log("           7 - Depositar                   ");
    console.log("           8 - Transferir valor entre Contas");
    console.log("           9 - Sair                         ");
    console.log("\n Entre com a opção desejada: ", colors.reset);
    option = readlinesync.questionInt();

    if (option === 9) {
      console.log(
        colors.bg.black,
        colors.fg.gray,
        "Banco G&A - As melhores soluções para você"
      );
      sobre();
      console.log(colors.reset, "");
      process.exit();
    }

    switch (option) {
      case 1:
        console.log(
          colors.fg.whitestrong,

          "\nCriar Conta  \n",
          colors.reset
        );
        keyPress();

        break;
      case 2:
        console.log(
          colors.fg.whitestrong,

          "\nListar todas as contas\n",
          colors.reset
        );
        keyPress();

        break;
      case 3:
        console.log(
          colors.fg.whitestrong,

          "\nBuscar conta com número\n",
          colors.reset
        );
        keyPress();

        break;
      case 4:
        console.log(
          colors.fg.whitestrong,

          "\nAtualizar dados da conta\n",
          colors.reset
        );
        keyPress();

        break;
      case 5:
        console.log(
          colors.fg.whitestrong,

          "\nApagar Conta\n",
          colors.reset
        );
        keyPress();

        break;

      case 6:
        console.log(
          colors.fg.whitestrong,

          "\nSacar\n",
          colors.reset
        );
        keyPress();

        break;
      case 7:
        console.log(
          colors.fg.whitestrong,

          "\nDepositar\n",
          colors.reset
        );
        keyPress();

        break;
      case 8:
        console.log(
          colors.fg.whitestrong,

          "\nTransferir valor entre Contas\n",
          colors.reset
        );
        keyPress();

        break;
      default:
        console.log(
          colors.fg.whitestrong,

          "\nOpção Inválida!\n",
          colors.reset
        );
        keyPress();
    }
  }
}

function sobre() {
  console.log("\n********************************************");
  console.log("  Projeto desenvolvido por: Gabriela Teixeira ");
  console.log("  Contato: gaba.andrade@outlook.com           ");
  console.log("  github.com/gaba-teixeira                    ");
  console.log("**********************************************");
}

function keyPress() {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
