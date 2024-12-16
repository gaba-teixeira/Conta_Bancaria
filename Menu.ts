import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
  let option, numero, agencia, tipo, saldo, limite, aniversario: number;
  let titular: string;
  const tipoConta = ["Conta Corrente", "Conta Poupanca"];

  //Criando objeto conta controller
  const contas = new ContaController();

  //Novas Instâncias da Classe ContaCorrente (Objetos)
  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      1234,
      1,
      "Amanda Magro",
      1000000.0,
      100000.0
    )
  );
  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      4578,
      1,
      "João da Silva",
      1000.0,
      100.0
    )
  );

  // Novas Instâncias da Classe ContaPoupança (Objetos)
  contas.cadastrar(
    new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10)
  );
  contas.cadastrar(
    new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15)
  );

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
        console.log("Digite o numero da agência: ");
        agencia = readlinesync.questionInt("");

        console.log("Digite o nome do titular: ");
        titular = readlinesync.question("");

        console.log("Escolha o tipo da conta: ");
        tipo = readlinesync.keyInSelect(tipoConta, "", { cancel: false }) + 1;

        console.log("Digite o saldo da conta: ");
        saldo = readlinesync.questionFloat("");

        switch (tipo) {
          case 1:
            console.log("Digite o limite da conta: ");
            limite = readlinesync.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );

            break;
          case 2:
            console.log("Digite o dia do aniversario da poupança: ");
            aniversario = readlinesync.questionInt("");
            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );

            break;
        }

        keyPress();

        break;
      case 2:
        console.log(
          colors.fg.whitestrong,

          "\nListar todas as contas\n",
          colors.reset
        );

        contas.listarTodas();

        keyPress();

        break;
      case 3:
        console.log(
          colors.fg.whitestrong,

          "\nBuscar conta com número\n",
          colors.reset
        );

        console.log("Digite o número da conta: ");
        numero = readlinesync.questionInt("");
        contas.procurarPorNumero(numero);
        keyPress();

        break;
      case 4:
        console.log(
          colors.fg.whitestrong,

          "\nAtualizar dados da conta\n",
          colors.reset
        );

        console.log("Digite o número da conta: ");
        numero = readlinesync.questionInt("");

        let conta = contas.buscarNoArray(numero);
        if (conta !== null) {
          console.log("Digite o novo numero da agência: ");
          agencia = readlinesync.questionInt("");

          console.log("Digite o novo nome do titular: ");
          titular = readlinesync.question("");

          console.log("Digite o novo saldo da conta: ");
          saldo = readlinesync.questionFloat("");

          tipo = conta.tipo;

          switch (tipo) {
            case 1:
              console.log("Digite o novo limite da conta: ");
              limite = readlinesync.questionFloat("");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );

              break;
            case 2:
              console.log("Digite o novo dia do aniversario da poupança: ");
              aniversario = readlinesync.questionInt("");
              contas.atualizar(
                new ContaPoupanca(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );

              break;
          }
        } else {
          console.log(`Essa conta não existe!`);
        }

        keyPress();

        break;
      case 5:
        console.log(
          colors.fg.whitestrong,

          "\nApagar Conta\n",
          colors.reset
        );
        console.log("Digite o número da conta: ");
        numero = readlinesync.questionInt("");
        contas.deletar(numero);
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
