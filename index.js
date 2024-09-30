let saldoVitorias = calculoVitorias(200, 11)
nivelHeroi()

function calculoVitorias(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

function nivelHeroi(){
    if (saldoVitorias < 10){
        nivelHeroi = "Ferro"
    }
    else if (saldoVitorias >= 11 && saldoVitorias <= 20){
        nivelHeroi = "Bronze"
    }
    else if (saldoVitorias >= 21 && saldoVitorias <= 50){
       nivelHeroi = "Prata"
    }
    else if (saldoVitorias >= 51 && saldoVitorias <= 80){
        nivelHeroi = "Ouro"
    }
    else if (saldoVitorias >= 81 && saldoVitorias <= 90){
        nivelHeroi = "Diamante"
    }
    else if (saldoVitorias > 91 && saldoVitorias <= 100){
        nivelHeroi = "Lendário"
    }
    else{
        nivelHeroi = "Imortal"
    }
}

console.log("O Herói tem o saldo de " + saldoVitorias + " está no nível de " + nivelHeroi)